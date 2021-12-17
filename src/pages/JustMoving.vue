<template>
  <img alt="logo" src="@/assets/logo.png" />
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
  -webkit-animation-name: just-left-to-right;
  -webkit-animation-duration: 20s;
  -webkit-animation-timing-function:linear;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes just-left-to-right {
  0% {
    -webkit-transform: translateX(0);
  }

  25% {
    -webkit-transform: translateX(45vw);
  }

  50% {
    -webkit-transform: translateX(0);
  }

  75% {
    -webkit-transform: translateX(-45vw);
  }  

  100% {
    -webkit-transform: translateX(0);
  }  
}

@keyframes just-left-to-right {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(45vw);
  }

  50% {
    transform: translateX(0);
  }

  75% {
    transform: translateX(-45vw);
  }  

  100% {
    transform: translateX(0);
  }  
}

</style>
