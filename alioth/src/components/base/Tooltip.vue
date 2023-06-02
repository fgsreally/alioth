<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/vue'

const { message } = defineProps<{
  message: string
}>()
</script>

<template>
  <Tooltip>
    <TooltipTrigger>
      <slot />
    </TooltipTrigger>

    <TooltipPositioner>
      <TooltipContent>{{ message }}</TooltipContent>
    </TooltipPositioner>
  </Tooltip>
</template>
