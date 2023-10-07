const components = {}
const requireComponent = require.context(
  '.', // bu klasördeki bileşenleri oku
  false, // alt klasörleri okuma
  /[A-Z]\w+\.(vue)$/, // Vue bileşenlerini veya JS dosyalarını al
  // EXPERIMENTAL: /[A-Z]\w+\.(vue|js)$/, // Vue bileşenlerini veya JS dosyalarını al
)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '') // Dosya adını bileşen adı olarak al

  components[componentName] = componentConfig.default || componentConfig
})

export default components
