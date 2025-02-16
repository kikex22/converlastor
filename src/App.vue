<template>
  <v-app>
    <!-- Barra de navegación superior con color personalizado -->
    <v-app-bar app color="red-darken-3" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer">///</v-app-bar-nav-icon>
      <v-toolbar-title>ConverLastor</v-toolbar-title>
    </v-app-bar>

    <!-- Navigation Drawer con color de fondo -->
    <v-navigation-drawer v-model="drawer" app color="blue-grey-darken-3">
      <v-list>
        <v-list-item to="/" prepend-icon="mdi-home">
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Tiempo" prepend-icon="mdi-information">
          <v-list-item-title>Unidades de Tiempo</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Mass" prepend-icon="mdi-information">
          <v-list-item-title>Unidades de Masa</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Length" prepend-icon="mdi-information">
          <v-list-item-title>Unidades de Longitud</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Presion" prepend-icon="mdi-information">
          <v-list-item-title>Unidades de Presion</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Currency" prepend-icon="mdi-information">
          <v-list-item-title>Cambio de moneda</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
/* Aplicar la fuente Poppins a toda la app */
* {
  font-family: 'Indianaip.otf';
  src:url('@/assets/fonts/Indianaip.otf') format('otf'),
}
</style>
