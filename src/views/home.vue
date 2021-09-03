<template>
  <button @click="getInfo">getInfo</button>
</template>
<script>
import { defineComponent } from 'vue'
import { User } from 'api'
export default defineComponent({
  name: 'Home',
  setup () {
    const getInfo = () => {
      User.getInfo().then((res) => {})
    }
    return { getInfo }
  }
})
</script>
