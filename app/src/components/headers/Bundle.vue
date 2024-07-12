<script setup lang="ts">
import axios from 'axios'
import { createEntryFileCode } from 'alioth-vue'
import IconBookDown from '~icons/lucide/book-down'
import { ImportModel } from '@/models/import'
import { DocModel } from '@/models/doc'
async function download() {
  const { record, viteUrl } = getR(ImportModel)

  try {
    await axios.post(new URL('/alioth/action', viteUrl).href, {
      entry: 'entry.js',
      type: 'bundle',
      content: createEntryFileCode(useR(DocModel), record, viteUrl),
    })
  }
  catch (e) {

  }
}
</script>

<template>
  <IconBookDown @click="download" />
</template>
