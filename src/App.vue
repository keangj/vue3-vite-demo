<script setup lang="ts">
import HelloWorld from 'src/views/Home.vue'
import Icon from './components/icon'
</script>

<template>
  <HelloWorld></HelloWorld>
  <Icon name="download"></Icon>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<style></style>
