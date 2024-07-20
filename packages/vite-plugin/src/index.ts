import { PluginOption } from 'vite'
import { External, type ExternalOpts } from './plugins/external'
import { Connector, type ConnectorOpts } from './plugins/connector'
export * from './plugins/connector'
export * from './plugins/importmap'
export * from './plugins/remoteLoader'
export * from './plugins/external'

export default function Alioth(options: ConnectorOpts & ExternalOpts): PluginOption {
  return [
    Connector(options),
    External(options),
  ]
}
