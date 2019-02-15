import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import pt from 'vuetify/es5/locale/pt'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    primary: colors.lightBlue, // #E53935
    secondary: colors.lightBlue.darken4, // #FFCDD2
    accent: colors.lightBlue.accent1 // #3F51B5
  }
})
