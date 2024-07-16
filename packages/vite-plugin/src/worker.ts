import { parentPort } from 'worker_threads'
import { build } from 'vite'
parentPort!.once('message', async (message) => {
  const ret = await build(
    {
      // configFile: 'vite.config.ts',
      build: {
        emptyOutDir: true,
        lib: {
          entry: JSON.parse(message),
          fileName: 'index',
          formats: ['es'],
        },

      },
    },
  )

  const fileMap: Record<string, string> = {};
  (ret as any)[0].output.forEach((item: any) => {
    fileMap[item.fileName] = item.code
  })

  parentPort!.postMessage(JSON.stringify(fileMap))
})
