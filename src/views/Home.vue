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
    <button @click="getInfo">getInfo</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="scss" module>
$moduleName: "home";
$prefix-cls: "#{$namespace}-#{moduleName}";
$mobile-prefix-cls: "#{$namespace}-m-#{moduleName}";
@media screen and (min-width: 769px) {
  .#{$prefix-cls} {
  }
}

@media screen and (max-width: 768px) {
  .#{$mobile-prefix-cls} {
  }
}
</style>
