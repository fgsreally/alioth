<script setup lang="ts">
const el = shallowRef()
const gridstack = inject('gridstack')
const { node } = inject('alioth')
onMounted(() => {
  if (gridstack)
    gridstack.value.makeWidget(el.value)
})
</script>

<template>
  <div ref="el" class="grid-stack-item" v-bind="$attrs" gs-w="5">
    <div class="grid-stack-item-content">
      <slot />
    </div>
  </div>
</template>
