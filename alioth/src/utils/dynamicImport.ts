import { useV } from 'phecda-vue'
import { createConnector } from 'alioth-lib'
import { ConfigState } from '@/models/config'
export const { connect, configMap, dynamicImport, getExposed, urlMap } = createConnector()

export async function dynamicLoad(url: string) {
  try {
    const { addZone } = useV(ConfigState)
    const { project, entry } = await connect(url)
    for (const n of Object.keys(entry))
      dynamicImport(project, n)

    addZone({
      component: 'ImportList',
      label: `${project}引入`,
      name: 'importFunc',
      props: {
        project,
      },
      isActive: () => true,
      x: 0,
      y: 580,
      transition: 'bottom',
    })
  }
  catch (e) {
    console.error(e)
    ElMessage.error((e as Error).message)
  }
}
