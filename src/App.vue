<template>
  <div>
123
  </div>
</template>

<script lang="ts">
// import { ref } from "vue";
import useUrlAxios from "./hooks/useUrlAxios";
const app = {
  name: "App",
  setup(){
     const { result, loading, loaded } = useUrlAxios(
       "https://dog.ceo/api/breeds/image/random"
     )
     return {
       result, 
       loading, 
       loaded
     }
  }
};
export default app
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
