<template>
  <div id="app">
    <!-- Wrap both router-view and HomeComp inside a single root element -->
    <div>
      <HomeComp/>
    </div>
  </div>
</template>

<script>
import HomeComp from './components/HomeComp/Home.vue'

export default {
  name: 'App',
  components: {
    HomeComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.body {
  margin: 0;
}
</style>
