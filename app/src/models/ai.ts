import { Global, Tag, emitter } from 'phecda-vue'
import OpenAI from 'openai'
import { prompt1, prompt2, prompt3, prompt4, s_prompt } from './prompt'

interface Agent {
  type: string
  prompt: string | (() => string | Promise<string>)
  example?: [string, string]
  action: (ret: any) => void
}
@Global
@Tag('ai')
export class AiModel {
  agents: Agent[] = []

  openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  })

  constructor() {
    // this.test()
  }

  async test() {
    const completion = await this.openai.chat.completions.create({
      messages: [{ role: 'system', content: s_prompt },
        { role: 'user', content: prompt1 },
        { role: 'assistant', content: prompt2 },
        { role: 'user', content: prompt3 },
        { role: 'assistant', content: prompt4 },
        {
          role: 'user', content: '创建一个表单，点击表单下方提交按钮，上传表单信息',
        },
      ],
      model: 'gpt-3.5-turbo',
    })
    // eslint-disable-next-line no-console
    console.log(completion.choices[0].message.content)
  }

  async ask(type: string) {
    try {
      const agent = this.agents.find(item => item.type === type)
      if (!agent)
        throw new Error(`不存在类型${type}对应的ai agent`)

      const messages = [
        { role: 'system', content: typeof agent.prompt === 'string' ? agent.prompt : await agent.prompt() },

      ]
      if (agent.example) {
        messages.push({
          role: 'user',
          content: agent.example[0],
        })
        messages.push({
          role: 'assistant',
          content: agent.example[1],
        })
      }
      const completion = await this.openai.chat.completions.create({
        messages: [{ role: 'system', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      })
      const ret = JSON.parse(completion.choices[0].message.content!)
      agent.action(ret)
    }
    catch (e) {
      emitter.emit('custom_error', { error: e as Error, info: 'model_ai_ask' })
    }
  }
}
