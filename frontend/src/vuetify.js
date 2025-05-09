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
    'btn-red':'#C70039',
    'btn-green':'#097969',
    'btn-purple':'#5D3FD3',
    'active-note-color':'#5D3FD3',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#F5F5F5',
    primary: '#5D3FD3',
    'btn-red': '#C70039',
    'btn-green': '#097969',
    'btn-purple': '#5D3FD3',
    'active-note-color': '#E8EAF6',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#1976D2',
    success: '#2E7D32',
    warning: '#F9A825',
  },
}

export default createVuetify({
    directives,
    components,
    theme: {
        defaultTheme: 'myCustomDarkTheme',
        themes: {
            myCustomDarkTheme,
            myCustomLightTheme,
        },
    },
})

