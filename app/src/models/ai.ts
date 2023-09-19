import { Global, Tag, emitter } from 'phecda-vue'
import OpenAI from 'openai'

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
    apiKey: import.meta.env.OPENAI,
  })

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
