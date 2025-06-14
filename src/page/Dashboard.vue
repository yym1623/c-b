<template>
  <div>
    <v-row class="fill-height">
      <v-col cols="3" class="my-box fill-height">왼쪽</v-col>
      <v-col cols="6" class="fill-height">가운데</v-col>
      <v-col cols="3" class="fill-height">오른쪽</v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.my-box {
  background-color: var(--p-custom-darkgray);
}
</style>