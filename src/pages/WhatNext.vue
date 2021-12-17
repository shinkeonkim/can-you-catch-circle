<template>
  <img alt="logo" src="/logo.png" />
  <h1>
    What's Next?
  </h1>

  <div style="display: flex; justify-content: center;">
    <Circle @click.stop="moveTo('')"/>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, inject,
} from 'vue'
import Circle from '@/components/Circle.vue'

export default defineComponent({
    name: "WhatNextPage",
    setup() {
      const moveTo = inject('moveTo') as Function;
      return {
        moveTo,
      } 
    },
    components: {
      Circle
    }
})
</script>
