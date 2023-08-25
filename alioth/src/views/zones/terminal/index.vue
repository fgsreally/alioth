<script setup lang="ts">
import { useV } from 'phecda-vue'
import { Terminal, api as TerminalApi, Ask as TerminalAsk, Flash as TerminalFlash } from 'vue-web-terminal'
import { CommandModel } from '@/models/command'

const cmds = []
const { input } = useV(CommandModel)
async function onExecCmd(key) {
  const ret = await input(key)
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
    content: 'Terminal initializing...',
  },
  {
    content: 'Welcome to vue-web-terminal! If you are using for the first time, you can use the <span class=\'t-cmd-key\'>help</span> command to learn.',
  },
  {
    type: 'html',
    content: `
                <div class='demo-init-box'>
                    <p>Hello vue-web-terminal! ✋</p>
                    <p>Demo version: vue2(<span class="t-cmd-key"></span>), vue3(<span class="t-cmd-key"></span>)</p>
                    <p>⭐️Github: <a class='t-a' target='_blank' href='https://github.com/tzfun/vue-web-terminal'>https://github.com/tzfun/vue-web-terminal</a></p>
                </div>
                `,
  },
]
</script>

<template>
  <div w-80 h-80>
    <Terminal
      name="alioth"
      :init-log="initLog"

      :command-store="cmds"
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
