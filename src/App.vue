<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
} from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();
    const moveTo = (stageName :string) => {
      router.replace(`/${stageName}`)
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
