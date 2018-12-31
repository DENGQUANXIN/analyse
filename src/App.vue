<template>
<div id="app">
  <analy-logo />
  <analy-menu />
  <router-view />
</div>
</template>

<script>
import Menu from './components/Menu'
import Logo from './components/Logo'

export default {
  name: 'App',
  components: {
    'analy-menu': Menu,
    'analy-logo': Logo
  },
}
</script>
