<script setup>
import Header from "@/components/Header.vue"
import ContentsLayout from "@/components/ContentsLayout.vue";
import Footer from "@/components/Footer.vue"
</script>

<template>
  <header>
    <Header/>
  </header>
  <main>
        <router-view></router-view>
    <ContentsLayout>
    </ContentsLayout>
    <Footer/>


    <!--     <TheWelcome />-->


  </main>

</template>

<style scoped>

</style>
