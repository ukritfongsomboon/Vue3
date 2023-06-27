<template>
  <v-toolbar elevation="2" color="primary">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
    <v-btn @click="toggleTheme">toggle theme </v-btn>
  </v-toolbar>
</template>

<script>
import { useTheme } from 'vuetify'
export default {
  setup() {
    const theme = useTheme()
    return {
      theme,
      toggleTheme: () => (theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'),
    }
  },
}
</script>

<style lang="scss" scoped></style>
