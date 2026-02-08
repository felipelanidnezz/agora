import { configure } from 'quasar/wrappers';

export default configure(() => ({
  supportTS: false,
  boot: [],
  css: ['app.scss'],
  extras: ['material-icons', 'material-icons-outlined', 'material-icons-round', 'mdi-v5', 'fontawesome-v6'],
  build: {
    target: {
      browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
      node: 'node20'
    },
    vueRouterMode: 'history',
    vueRouterBase: '/',
    analyze: false
  },
  devServer: {
    open: false,
    port: 9000
  },
  framework: {
    config: {
      brand: {
        primary: '#A8D54D',
        secondary: '#6B4E9E',
        accent: '#FF8C42',
        dark: '#1F1F1F',
        positive: '#21BA45',
        negative: '#C10015',
        info: '#31CCEC',
        warning: '#F2C037'
      }
    },
    plugins: ['Notify']
  },
  animations: [],
  ssr: {
    pwa: false
  },
  pwa: {
    workboxMode: 'generateSW',
    injectPwaMetaTags: true,
    manifest: {
      name: 'ÁGORA - Centro de Desarrollo',
      short_name: 'ÁGORA',
      description: 'Centro de Desarrollo y Estimulación Temprana',
      display: 'standalone',
      background_color: '#F5F5F5',
      theme_color: '#A8D54D',
      icons: []
    }
  }
}));
