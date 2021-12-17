<template>
  <div class="circle"></div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  setup() {
  },
})
</script>


<style scoped>
  .circle {
    width: 40px;
    height: 40px;
    background: #42b883;
    border-radius: 50% 50%;
    box-shadow: 2px 0px 10px #35495e ;
  }

</style>