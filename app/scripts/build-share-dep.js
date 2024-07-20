import { build } from 'vite'

const pkgs = ['alioth-vue', 'vue', 'phecda-vue']

for (const pkg of pkgs) {
  await build({
    define: {
      'process.env.NODE_ENV': '\'production\'',
    },
    build: {
      lib: {
        entry: { [pkg]: `./share-deps/${pkg}.js` },
        formats: ['es'],
      },
      rollupOptions: {
        external: (source) => {
          if (source === 'phecda-core' && pkg === 'alioth-vue')
            return true

          if (pkgs.includes(source) && source !== pkg)
            return true
        },
      },
      emptyOutDir: false,
      outDir: './public',
    },
    configFile: false,
  })
}
