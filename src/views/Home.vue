<script setup>
// document.title = "홈";
</script>
<template>
  <div id="homevdom">
    <div class="flex flex-col border-separate">
      <ul>
        <li v-for="item in list"></li>
      </ul>
      <div class="p-3 border border-slate-300">title 1</div>
      <div class="p-3 border border-slate-300">title 1</div>
      <div class="p-3 border border-slate-300">title 1</div>
    </div>
    this is Home.vue

    <button
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    >
      Hello, Tailwind CSS!
    </button>
  </div>
</template>
