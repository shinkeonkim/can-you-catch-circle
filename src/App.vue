<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
} from 'vue';
export default defineComponent({
  name: "App",
  setup() {
    const moveTo = (stageName :string) => {
        window.location.replace(`${stageName}`);
    }

    provide('moveTo', moveTo);
    return {
      
    };
  },
})
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
