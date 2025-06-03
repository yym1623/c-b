<template>
  <div class="d-flex justify-center align-center ">
    <v-card

      title="Login"
    >

      <v-card-text class="pt-4">


        <v-sheet class="mx-auto" width="300">
          <v-form fast-fail @submit.prevent="loginBtn()">


            <v-responsive
              class="mx-auto"
              max-width="344"
            >
              <v-text-field
                label="Email"
                v-model="email"
                :rules="emailRules"
                placeholder="johndoe@gmail.com"
                type="email"
                clearable
              ></v-text-field>
            </v-responsive>

            <v-responsive
              class="mx-auto"
              max-width="344"
            >
              <v-text-field
                hint="Enter your password to access this website"
                label="pw"
                v-model="pw"
                clearable
                :rules="pwRules"
                type="password"
              ></v-text-field>
            </v-responsive>

            <v-btn class="mt-2" type="submit" block>Login</v-btn>
          </v-form>
        </v-sheet>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { generateTestToken } from "@/utils/tokenUtils.ts";
import { setCookie } from "@/utils/cookieUtils";

import { useRouter } from 'vue-router'

const router = useRouter();

const email = ref('')
const emailRules = [
  value => {
    if (value?.length >= 3) return true
    return 'email can not contain digits.'
  },
]

const pw = ref('')
const pwRules = [
  value => {
    if (/[^0-9]/.test(value)) return true
    return 'pw can not contain digits.'
  },
]


const loginBtn = async() => {
  if(!email.value || !pw.value) {
    return
  }

  const token = await generateTestToken();

  setCookie("token", token);
  await router.push("/")


}

// generateTestToken().then(console.log);
</script>

<style lang="scss" scoped>
:deep(.v-card-title) {
  text-align: center;
}

</style>