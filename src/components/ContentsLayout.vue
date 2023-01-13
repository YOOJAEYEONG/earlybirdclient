<style scoped></style>
<script setup>
import Header from "./CommonHeader.vue";
import Footer from "@/components/CommonFooter.vue";
</script>
<template>
  <header>
    <Header />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <Footer />
</template>
