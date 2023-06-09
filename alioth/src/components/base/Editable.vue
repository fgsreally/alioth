<script setup lang="ts">
import { ref } from 'vue'
import {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
} from '@ark-ui/vue'

const editableRef = ref()
</script>

<template>
  <Editable placeholder="Placeholder">
    <EditableLabel>Label</EditableLabel>
    <EditableArea>
      <EditableInput />
      <EditablePreview />
    </EditableArea>
  </Editable>
</template>
