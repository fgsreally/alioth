<script setup lang="ts">
import { useV } from 'phecda-vue'
import { Terminal, TerminalApi } from '@fgsreally/vue-web-terminal'
import { CommandModel } from '@/models/command'

const { input, commands } = useV(CommandModel)
// @ts-expect-error miss types
async function onExecCmd(_key, command, success, failed) {
  try {
    // @ts-expect-error resolve any params
    const ret = await input(...command.split(' '))
    success({
      type: typeof ret === 'object' ? 'json' : 'normal',
      content: ret,
    })
  }
  catch (error) {
    failed('Something wrong!!!')
  }
}
const codemirrorOptions = {
  tabSize: 4,
  mode: 'javascript',
  theme: 'vibrant-ink',
  lineNumbers: true,
  line: true,
  smartIndent: true,
  collapseIdentical: false,
  scrollbarStyle: 'null',
}

const initLog = [
  {
    content: 'Alioth terminal initializing...',
  },

  {
    type: 'html',
    content: `
                <div class='demo-init-box'>
                    <p>Hello Alioth! ✋</p>
                    <p>⭐️Github: <a class='t-a' target='_blank' href='https://github.com/fgsreally/alioth'>https://github.com/fgsreally/alioth</a></p>
                </div>
                `,
  },
]
</script>

<template>
  <div w-100 h-80>
    <Terminal
      name="alioth"
      :init-log="initLog"

      :command-store="commands"
      :warn-log-count-limit="200"
      :show-header="false"
      @exec-cmd="onExecCmd"
    >
      <template #textEditor="{ data }">
        <codemirror
          ref="customTextEditor" v-model="data.value" class="my-text-editor"
          :options="codemirrorOptions"
          @focus="data.onFocus"
          @blur="data.onBlur"
        />
        <div class="t-text-editor-floor" align="center">
          <button
            class="t-text-editor-floor-btn t-save-btn" @click=" TerminalApi.textEditorClose('alioth', true)
            "
          >
            Save & Close(Ctrl + S)
          </button>
          <button
            class="t-text-editor-floor-btn t-close-btn" @click=" TerminalApi.textEditorClose('alioth', true)
            "
          >
            Cancel
          </button>
        </div>
      </template>
    </Terminal>
  </div>
</template>
