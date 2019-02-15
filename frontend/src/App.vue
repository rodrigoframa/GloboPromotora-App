<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      overflow
      app
  ></v-navigation-drawer>
  <Header @drawer="drawer = !drawer"></Header>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <Footer></Footer>
</v-app>
</template>

<script>
import Header from './template/Header'
import Footer from './template/Footer'
export default {
  name: 'App',
  components: {Header, Footer},
  data () {
    return {
      drawer: false
      //
    }
  }
}
</script>
