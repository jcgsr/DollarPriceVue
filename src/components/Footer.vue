<template>
  <v-card height="150">
    <v-footer absolute padless class="font-weight-medium">
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} - Primeiro Webapp utilizando
        <v-btn small color="secondary">
          <a class="white--text" href="https://vuetifyjs.com/en/">Vuetify</a>
        </v-btn> por
        <v-btn small color="info">
          <a class="white--text" href="https://jcgsr.github.io/">Jovane</a>
        </v-btn>.
      </v-col>
    </v-footer>
  </v-card>
</template>

 <style>
a:link {
  text-decoration: none;
}

</style>
