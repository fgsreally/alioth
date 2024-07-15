import { VirtualDocument, loadJSON, loadPresets } from 'alioth-lib'
import { PropType, defineComponent, h } from 'vue'
import { AliothRenderer } from './renderer'

export const AliothLoader = defineComponent({
  props: {
    presets: {
      type: Array as PropType<string[]>,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    environment: {
      type: String,
      required: true,
    },
  },
  async setup(props) {
    const vd = new VirtualDocument()
    const [{ doc }] = await Promise.all([loadJSON(props.url), loadPresets(props.presets)])
    vd.load(doc)

    return () => h(AliothRenderer)
  },
})
