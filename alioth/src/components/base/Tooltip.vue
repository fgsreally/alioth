<script setup lang="ts">
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '@ark-ui/vue'

const { message } = defineProps<{
  message: string
}>()
</script>

<template>
  <Tooltip :interactive="true">
    <TooltipTrigger>
      <slot />
    </TooltipTrigger>

    <TooltipPositioner>
      <TooltipArrow>
        <TooltipArrowTip />
      </TooltipArrow>
      <TooltipContent>{{ message }}</TooltipContent>
    </TooltipPositioner>
  </Tooltip>
</template>
