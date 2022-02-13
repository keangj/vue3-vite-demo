<script setup lang="ts">
import { ref } from 'vue'
import { User } from 'api/index'
import { useNamespace } from 'src/hooks/common'

const prefixCls = useNamespace('home')

const getInfo = () => {
  User.getUserInfo().then(() => { })
}

// defineProps<{ msg: string }>()

const msg = ref(0)
</script>

<template>
  <div :class="prefixCls.multiPrefixCls">
    <div>hi</div>
    <button @click="getInfo">x</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="scss" scoped>
$moduleName: "home";
$prefix-cls: "#{$namespace}-#{$moduleName}";

.#{$prefix-cls} {
  h1 {
    width: 200px;
    background: #eee;
  }
}
</style>
