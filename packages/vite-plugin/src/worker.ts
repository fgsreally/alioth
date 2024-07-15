import { parentPort } from 'worker_threads'
import { build } from 'vite'
import { OUTPUT_DIR } from './common'
parentPort!.once('message', async (message) => {
  const ret = await build(
    {
      // configFile: 'vite.config.ts',
      build: {
        emptyOutDir: true,
        outDir: OUTPUT_DIR,
        lib: {
          entry: message,
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
