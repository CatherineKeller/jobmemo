import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// const vuetify = createVuetify({
//   components,
//   directives,
// })

// createApp(App).use(vuetify).mount('#app')

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas, far, fab)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
