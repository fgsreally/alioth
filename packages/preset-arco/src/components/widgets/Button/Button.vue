<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <el-button v-bind="$attrs" style="width:100%">
    {{ text }}
  </el-button>
</template>

<props lang="ts">
return {
  "events": {
    "onClick": {
      "_component": "Input",
      "_formItem": { "label": "点击" }

    }
  },
  "schema":{
    "text":"text !== '4'"
  },
  "props": {
    "text": {
      "_component": "Input",
      "_formItem": { "label": "文本" }

    },
    "type": {
      "_component": "Select",
      "_formItem": { "label": "类型" },
      "placeholder": "类型",
      "options": [
        {
          "label": "primary",
          "value": "primary"
        },
        {
          "label": "danger",
          "value": "danger"
        }
      ]
    }
  }
}
</props>
