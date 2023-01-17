
<script >
import { ref } from "vue";



export default {
  data(){

    const title = ref("MainPageTitle");
    const tempList = [
      {"key":"val1"},
      {"key":"val2"}
    ];
    return {
      tempList, title
    }
  },
  beforeMount() {
    document.title = this.title;

  },
  mounted() {
    console.table( this.tempList);
    console.log("age:",this.age);
    // this.age = {
    //   type: 3
    // }
  },
  props: {
    // 타입 체크 및 유효성 검사
    age: {
      type: Number,
      default: 0,
      required: false,
      validator: (value) => {
        return value >= 0
      }
    }
  },

}

</script>
<template>
  <div id="homevdom">
    <div class="flex flex-col border-separate">
      <ul v-for="item in tempList" >
        <!--        <li v-for="item in list"></li>-->
        <li class="p-3 border border-slate-300">{{item.key}}</li>
      </ul>
      <div class="p-3 border border-slate-300">
        {{ age }}
      </div>
      <div class="p-3 border border-slate-300">
        title 1
      </div>
      <div class="p-3 border border-slate-300">
        title 1
      </div>
    </div>
    this is Home.vue
    <button
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
    >
      Hello, Tailwind CSS!
    </button>
  </div>
</template>
