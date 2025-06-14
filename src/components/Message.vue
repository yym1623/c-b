<template>
  <div>
  <v-snackbar v-model="checkData" location="top" :color="color">
    <div class="text-center w-100">{{ msg }}</div>
  </v-snackbar>
  </div>
</template>

<script setup lang="ts">
 const checkData  = defineModel<boolean>('checkData');
 const msg = defineModel<string>('msg');
 const color = defineModel<string>('color');
</script>

<style scoped>

</style>