<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <h2>欢迎光临红浪漫洗浴中心</h2>
      <div>请选择一位美女为你服务</div>
    </div>
    <div>
      <button 
        v-for="(item,index) in girls" 
        :key="index" 
        @click="selectGirlFun(index)"
        >
        {{index}}:{{item}}
      </button>
    </div>
    <div>您选择了【{{selectGirl}}】为你服务</div>
    <div><button @click="overAction">点餐完毕</button></div>
    <div>{{ overText }}</div>
  </div>
</template>

<script lang="ts">
import { 
  reactive, 
  toRefs,
  ref,
  watch
} from "vue";
interface DataPrps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}
export default{
  name: "App",
  setup(){
    const data: DataPrps = reactive({
      girls: ["打搅","李晓","小鸟"],
      selectGirl: "",
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })
    const refData = toRefs(data)
    const overText = ref("红浪漫");
    const overAction = () =>{
      overText.value =  overText.value+"点餐完成";
      //  document.title = overText.value;
    }
    watch([overText, () => data.selectGirl], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = newValue[0];

    });
    return{
      ...refData,
      overText,
      overAction
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
