<template>
  <div>
    <!--  <v-btn @click="toggleTheme()">전환</v-btn>-->

  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style scoped>

</style>