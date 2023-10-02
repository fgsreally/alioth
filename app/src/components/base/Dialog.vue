<script setup lang="ts">
import { Teleport } from 'vue'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,

} from '@ark-ui/vue'
defineProps<{ title: string }>()
const { modelValue } = defineModels<{
  modelValue: boolean
}>()
</script>

<template>
  <Dialog v-slot="{ isOpen }" v-model:open="modelValue" :close-on-outside-click="false">
    <Teleport v-if="isOpen" to="body">
      <DialogBackdrop fixed top-0 left-0 w-screen h-screen flex content-center justify-center flex-wrap z-100>
        <DialogContainer>
          <DialogContent border-b-1 border-b-solid border-ol h-fit l-card l-flex flex-col p-4 relative>
            <!-- <DialogTitle>
              {{ title }}
            </DialogTitle> -->
            <DialogDescription l-flex>
              <slot />
            </DialogDescription>
            <DialogCloseTrigger>
              <button absolute top="20%" left="20%" rd="50%" bg-transparent color-font-s hover:color-p border-0 cursor-pointer>
                <div i-gg-close w-8 h-8 />
              </button>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </DialogBackdrop>
    </Teleport>
  </Dialog>
</template>
