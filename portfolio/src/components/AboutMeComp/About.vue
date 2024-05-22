<template>
  <div class="AboutComp">
    <NavBar />
    <h3> Hello World I am text </h3>
  </div>
</template>

<script setup>
import NavBar from '../NavBar.vue'; 
</script>

<script>
export default {
  name: 'AboutComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
