<script setup lang="ts">
import {
  Slider,
  SliderControl,
  SliderLabel,
  SliderOutput,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from '@ark-ui/vue'
</script>

<template>
  <Slider>
    <SliderLabel>Label</SliderLabel>
    <SliderControl w-10 h-10 bg-red>
      <SliderTrack>
        <SliderRange w-5 h-5 bg-blue />
      </SliderTrack>
      <SliderThumb />
    </SliderControl>
  </Slider>
</template>
