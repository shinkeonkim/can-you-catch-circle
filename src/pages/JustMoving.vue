<template>
  <img alt="logo" src="@/assets/logo.png" />
  <h1>
    Can you catch just moving "Circle"?
  </h1>

  <div style="display: flex; justify-content: center;">
    <Circle
      @click="moveTo('what-next')"
      class="move-left-to-right"
      :style="`animation-duration: ${compuetedAnimationDuration}s;`"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, inject, onMounted, ref,
} from 'vue'
import Circle from '@/components/Circle.vue'

export default defineComponent({
    name: "JustMovingPage",
    setup() {
      const VELOCITY = 150;
      const moveTo = inject('moveTo') as Function;
      const windowWidth = ref(1);
      const compuetedAnimationDuration = computed(() => windowWidth.value / VELOCITY);

      onMounted(() => {
        windowWidth.value = window.innerWidth;
        window.onresize = () => {
          windowWidth.value = window.innerWidth;
        }
      })

      return {
        moveTo,
        windowWidth,
        compuetedAnimationDuration,
      } 
    },
    components: {
      Circle
    }
})
</script>


<style lang="scss">

.move-left-to-right {
  animation-name: just-left-to-right;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-name: just-left-to-right;
  -webkit-animation-timing-function:linear;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes just-left-to-right {
  0% {
    -webkit-transform: translateX(-45vw);
  }

  50% {
    -webkit-transform: translateX(45vw);
  }

  100% {
    -webkit-transform: translateX(-45vw);
  }
}

@keyframes just-left-to-right {
  0% {
    transform: translateX(-45vw);
  }

  50% {
    transform: translateX(45vw);
  }

  100% {
    transform: translateX(-45vw);
  }
}
</style>
