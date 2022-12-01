<template>
  <div>
    <OffsetHelper v-show="isActive"></OffsetHelper>
    <ActionHelper v-show="isActive"></ActionHelper>
    <div class="dragBox" @mousedown.capture.self.prevent="startMove">
      <slot></slot>

      <i class="w size-controller" v-show="isActive">{{ sizeComputed.w }}</i>
      <i class="h size-controller" v-show="isActive">{{ sizeComputed.h }}</i>

      <div
        v-show="isActive"
        v-for="(item, i) in moveBlocks"
        :class="item + ' moveblock'"
        :key="i"
        @mousedown.stop="(e) => transform(e, item)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDrag } from "@alioth/engine ";
import { instance } from "@/engine/init";
import { useContainerStore } from "@/store/container";
import { pxToBlockSize, toPx } from "@/utils/style";
import OffsetHelper from "./OffsetHelper.vue";
import ActionHelper from "./ActionHelper.vue";
import { emitEvent } from "@/utils/emitter";
const moveBlocks = ["tl", "tr", "bl", "br"];
const visible = ref(false);
const { block } = defineProps<{ block: Object }>();
const isActive = computed(
  () => (block as any).uuid === instance.clickBlock?.uuid
);
const sizeComputed = computed(() => {
  return {
    w: `${instance.clickBlock?.w.value.toFixed(0)}${
      instance.clickBlock?.w.size
    }`,
    h: `${instance.clickBlock?.h.value.toFixed(0)}${
      instance.clickBlock?.h.size
    }`,
  };
});
async function startMove(e: MouseEvent) {
  let x = e.clientX;
  let y = e.clientY;

  let initX = toPx(instance.clickBlock, "left");
  let initY = toPx(instance.clickBlock, "top");

  emitEvent("dragstart");
  useDrag({
    move: (e) => {
      pxToBlockSize(instance.clickBlock, "left", initX + e.clientX - x);
      pxToBlockSize(instance.clickBlock, "top", initY + e.clientY - y);
    },
    up: (e) => {
      if (Math.abs(e.clientX - x) > 5 || Math.abs(e.clientY - y) > 5)
        emitEvent("dragend");
    },
  });
}
function transform(evt: MouseEvent, item: string) {
  emitEvent("transform-start");
  let x = evt.clientX;
  let y = evt.clientY;
  let w = toPx(instance.clickBlock, "w");
  let h = toPx(instance.clickBlock, "h");
  let initX = toPx(instance.clickBlock, "left");
  let initY = toPx(instance.clickBlock, "top");
  useDrag({
    move: (e) => {
      let offsetY = e.clientY - y;
      let offsetX = e.clientX - x;
      if (item.includes("t")) {
        pxToBlockSize(instance.clickBlock, "top", initY + offsetY);

        pxToBlockSize(instance.clickBlock, "h", h - offsetY);
      }
      if (item.includes("l")) {
        pxToBlockSize(instance.clickBlock, "left", initX + offsetX);

        pxToBlockSize(instance.clickBlock, "w", w - offsetX);
      }
      if (item.includes("r")) {
        pxToBlockSize(instance.clickBlock, "w", w + offsetX);
      }
      if (item.includes("b")) {
        pxToBlockSize(instance.clickBlock, "h", h + offsetY);
      }
    },
    up: (e) => {
      emitEvent("transform-end");
    },
  });
}
</script>

<style scoped lang="scss">
.dragBox {
  user-select: none;
  & > .moveblock {
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    border-radius: 50%;
  }
  & > .tl {
    top: -8px;
    left: -8px;
  }
  & > .tr {
    top: -8px;
    left: calc(100% - 8px);
  }
  & > .bl {
    top: calc(100% - 10px);
    left: -8px;
  }
  & > .br {
    top: calc(100% - 8px);
    left: calc(100% - 8px);
  }
}

.size-controller {
  position: absolute;

  &.w {
    left: calc(50% - 20px);
    top: -20px;
    color: #8ec5fc;
  }
  &.h {
    top: calc(50% - 10px);
    right: -50px;
    color: #8ec5fc;
  }
}
</style>
