<script lang="ts" setup>
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'

const { name, _block } = defineProps<{ name: string; _block: object }>()
const { activeDoc } = useV(DocModel)
</script>

<template>
  <div style="z-index: 100;">
    <p class="tag">
      {{ name }}
    </p>
    <div class="block " :style="{ borderColor: activeDoc.hoverBlock && _block.contains(activeDoc.hoverBlock) ? 'yellowgreen' : 'red' }">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag{
  font-size: 10px;
  color:red;
}
.block{
  border: 3px solid ;

  width: 100%;
  height: 100%;
  position: relative;

}
</style>
