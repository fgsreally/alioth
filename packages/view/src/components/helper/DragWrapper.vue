<script setup lang="ts">
const { x, y, isActive, title } = defineProps<{ x: number; y: number; isActive: boolean; title: string }>()
</script>

<template>
  <DragHelper v-show="isActive" :x="x" :y="y">
    <Transition>
      <el-card

        shadow="always"
      >
        <template #header>
          <div class="card-header">
            {{ title }}
          </div>
        </template>
        <slot v-if="isActive" />
      </el-card>
    </Transition>
  </DragHelper>
</template>
