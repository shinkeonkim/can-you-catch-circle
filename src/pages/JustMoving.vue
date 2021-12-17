<template>
  <img alt="logo" src="/logo.png" />
  <h1>
    Can you catch just moving "Circle"?
  </h1>

  <div style="display: flex; justify-content: center;">
    <Circle @click="moveTo('what-next')" class="move-left-to-right" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, inject,
} from 'vue'
import Circle from '@/components/Circle.vue'

export default defineComponent({
    name: "JustMovingPage",
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

<style>

.move-left-to-right {
  animation: just-left-to-right 20s linear infinite;
}

@keyframes just-left-to-right {
  0% {
    margin-left: 100%;
  }

  25% {
    margin-left: 0;
  }

  50% {
    margin-left: -100%;
  }

  75% {
    margin-left: -0%;
  }  

  100% {
    margin-left: 100%;
  }  
}

</style>
