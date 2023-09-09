<script setup lang="ts">
import {
  Tag,
  TagDeleteTrigger,
  TagInput,
  TagsInput,
  TagsInputClearTrigger,
  TagsInputControl,
  TagsInputField,
  TagsInputLabel,
} from '@ark-ui/vue'

const emits = defineEmits<{
  (e: 'select', data: any): void }>()
const { modelValue } = defineModels<{
  modelValue: { key: string; value: string }[]
}>()
</script>

<template>
  <TagsInput v-model="modelValue">
    <TagsInputLabel>Label</TagsInputLabel>
    <TagsInputControl>
      <template v-for="(value, i) in modelValue">
        <Tag :index="i" :value="value">
          <span @click="emits('select', value)">{{ value }}</span>
          <TagDeleteTrigger v-if="modelValue.length !== 1" :index="i" :value="value">
            <button>x</button>
          </TagDeleteTrigger>
        </Tag>
        <TagInput :index="i" :value="value" />
      </template>
      <TagsInputField placeholder="Add tag" />
      <!-- <TagsInputClearTrigger>
        <button>Clear all</button>
      </TagsInputClearTrigger> -->
    </TagsInputControl>
  </TagsInput>
</template>
