<template>
  <div>
    <v-toolbar title="Toolbar" density="comfortable" >

      <v-switch
        v-model="isDark"
        @change="toggleTheme"
      />
    </v-toolbar>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = ref<string>("dark");

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

</style>