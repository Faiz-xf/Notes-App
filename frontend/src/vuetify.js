import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#1E1E1E',
    primary: '#BB86FC',
    'btn-red':'#880808',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify({
    directives,
    components,
    theme: {
        defaultTheme: 'myCustomDarkTheme',
        themes: {
            myCustomDarkTheme,
        },
    },
})

