<script setup lang="ts">
import axios from 'axios'
import IconDownload from '~icons/lucide/download'
import { ImportModel } from '@/models/import'
import { DocModel } from '@/models/doc'
async function download() {
  const { presets, viteUrl } = getR(ImportModel)
  const { store } = getR(DocModel)

  try {
    await axios.post(new URL('/alioth/file', viteUrl).href, {
      file: 'data.json',
      content: JSON.stringify({
        docs: store(),
        presets,
      }),
    })
  }
  catch (e) {

  }
}
</script>

<template>
  <IconDownload @click="download" />
</template>
