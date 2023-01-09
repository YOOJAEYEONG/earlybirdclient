<style scoped>

</style>
<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
 let children = [
    {
      // /user/:id/profile 과 일치 할 때
      // UserProfile은 User의 <router-view> 내에 렌더링 됩니다.
      path: 'profile',
      component: () => import('@/views/Home.vue')
    },
  ]

// export children;
  

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



