<script setup lang="ts">
import { useV } from 'phecda-vue'
import { DocModel } from '@/models/doc'
const { remove, doc, add, active, activeId, pages } = $(useV(DocModel))
</script>

<template>
  <section fixed bottom="0" left="0" m-x-4 flex color-font-t h-8 class="al-zone">
    <div
      v-for="item in pages" :key="item.id"
      font="500"
      min-w-18
      h-8
      l-flex cursor-pointer
      border-1 border-solid
      border-font-t relative
      :class="{
        'border-b-none border-p color-on-p': item.id === activeId,

      }" @click="active(item.id)"
    >
      <Editable v-model="item.attrs.title" class="m-x-2" />
      <IconClose
        absolute right-1 w-3 h-3 rd-2 hover:bg-on-b color-p
        @click.stop="remove(item.id)"
      />
    </div>
    <div

      i-lucide-plus-square hover:color-p cursor-pointer
      @click="add()"
    />
  </section>
</template>
