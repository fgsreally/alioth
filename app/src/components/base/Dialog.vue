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
  <!-- @vue-expect-error vue macro types mistake -->
  <Dialog v-slot="{ isOpen }" v-model:open="modelValue" :close-on-outside-click="false">
    <Teleport v-if="isOpen" to="body">
      <DialogBackdrop fixed top-0 left-0 w-screen h-screen flex content-center justify-center flex-wrap z-100>
        <DialogContainer>
          <DialogContent border-b-1 border-b-solid border-ol h-fit l-card l-flex flex-col p-4>
            <DialogTitle>
              {{ title }}
            </DialogTitle>
            <DialogDescription l-flex>
              <slot />
            </DialogDescription>
            <DialogCloseTrigger>
              <button l-btn-p w-full>
                Close
              </button>
            </DialogCloseTrigger>
          </DialogContent>
        </DialogContainer>
      </DialogBackdrop>
    </Teleport>
  </Dialog>
</template>
