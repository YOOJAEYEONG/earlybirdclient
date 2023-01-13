<style scoped></style>
<script setup>
import { useRouter } from "vue-router";

const user = useRouter();
</script>
<template>
  <div class="flex">
    <div class="flex-wrap h-14 p-1 bg-green-300 text-center">
      <div class="flex-initial bg-blue-500 mr-1 ml-1">
        <router-link to="/page1/john">go to page1</router-link>
      </div>
      <div class="flex-initial bg-blue-500 mr-1 ml-1">
        <router-link to="/">home</router-link>
      </div>
      <div class="flex-initial bg-blue-500 mr-1 ml-1">
        <router-link to="/profile">profile</router-link>
      </div>
      <div class="flex-initial bg-blue-500 mr-1 ml-1">
        <button
          onclick="$router.push({ name: 'user', params: { username: 'eduardo' } })"
        ></button>
      </div>
    </div>
  </div>
</template>
