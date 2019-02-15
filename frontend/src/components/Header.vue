<template>
    <v-toolbar
        color="primary"
        dark
        app>
      <v-toolbar-side-icon
        @click.stop="$emit('drawer')"
      ></v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase mr-4">
            <span>Globo Promotora</span>
            <span class="font-weight-light"> App</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat>A</v-btn>
            <v-btn flat>B</v-btn>
            <v-btn flat>C</v-btn>
        </v-toolbar-items>
    </v-toolbar>  
</template>

<script>
export default {

}
</script>

<style>

</style>
