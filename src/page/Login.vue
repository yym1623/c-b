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

    <Message
      v-if="checkData"
      v-model:checkData="checkData"
      v-model:msg="msg"
      v-model:color="color"
    />
  </div>
</template>

<script setup lang="ts">
import { generateTestToken } from "@/utils/tokenUtils.ts";
import { setCookie } from "@/utils/cookieUtils";
import { userList } from '@/data/userList';

import { useRouter } from 'vue-router'


import Message from "@/components/Message.vue"

const router = useRouter();

const email = ref<string>('')
const pw = ref<string>('')


// msg data
const checkData = ref<boolean>(false);
const color = ref<string>("");
const msg = ref<string>("");

const emailRules: Array<(value: string) => true | string> = [
  (value: string) => {
    const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return reg.test(value) || '유효한 이메일 형식이 아닙니다.';
  }
];

const pwRules: Array<(value: string) => true | string> = [
  (value: string) => {
    const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    return reg.test(value) || '영문, 숫자, 특수문자를 포함한 8~15자여야 합니다.';
  }
];

const loginBtn = async() => {
  const user = userList.find(
    u => u.email === email.value && u.password === pw.value
  );

  // 빈값 검사
  if(!email.value || !pw.value) {
    return
  }

  // 존재하는지 검사

  if (!user) {
    checkData.value = true;
    msg.value = "존재하는 계정이 없습니다."
    color.value = "error"
    return;
  }

  // 로그인 성공할때
  const token = await generateTestToken();

  setCookie("token", token);

  await router.push("/")
}
</script>

<style lang="scss" scoped>
:deep(.v-card-title) {
  text-align: center;
}
</style>