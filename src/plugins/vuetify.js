
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primaryBg:'#f4f5f9',
          secondaryBg:'#00abb3',
          footerBg:'#1c2525'
        },
      },
    },
  },
})
