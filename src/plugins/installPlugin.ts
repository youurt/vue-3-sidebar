import { App } from '@vue/runtime-core'

import kebabCase from '@/helpers/kebabCase'
import camelCase from '@/helpers/camelCase'
import upperFirst from '@/helpers/upperFirst'

const installPlugin = (app: App) => {
  const reqireComponent = require.context(
    '../components',
    true,
    /[A-Z]\w+\.(vue)$/
  )

  reqireComponent.keys().forEach((filename) => {
    const componentConfig = reqireComponent(filename)

    const componentName = upperFirst(
      camelCase(
        filename
          .split('/')
          .pop()
          ?.replace(/\.\w+$/, '')
      )
    )

    app.component(
      kebabCase(componentName),
      componentConfig.default || componentConfig
    )
  })
}

export default installPlugin
