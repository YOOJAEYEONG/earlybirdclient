<script setup>
  import { createApp } from 'vue';
  /*
  const {createApp, ref, reactive } = Vue;
  createApp({
    setup() {
      const heroes = ref(["iron man", "hulk", "captain america","sipider man"]);
      const ironMan = reactive({
        name : "tony starq",
        canFly : true,
      });
      const range = ref(9);
      return {heroes, ironMan, range };
    }
  }).mount('#app');
  
  
  */
  createApp().mount("#homevdom");
</script>
<template>
  <div id="homevdom">

    <div class="flex flex-col border-separate">
      <ul>
        <li v-for="item in list">
          
        </li>
    </ul>
    <div class="p-3 border border-slate-300">title 1</div>
    <div class="p-3 border border-slate-300">title 1</div>
    <div class="p-3 border border-slate-300">title 1</div>
    </div>
    this is Home.vue
    
    <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
      Hello, Tailwind CSS!
    </button>
  </div>
</template>