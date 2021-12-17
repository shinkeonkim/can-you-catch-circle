<template>
  <img alt="logo" src="@/assets/logo.png" />
  <h1 class="title">
    Hello, Can you catch "Circle"?
    <br>
    &#11015;
  </h1>
  <div style="display: flex; justify-content: center;">
    <Circle @click.stop="moveTo('just-moving')"/>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, inject,
} from 'vue'
import Circle from '@/components/Circle.vue'

export default defineComponent({
    name: "HelloPage",
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
