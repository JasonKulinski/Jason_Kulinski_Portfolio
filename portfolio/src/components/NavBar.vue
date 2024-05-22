<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li><router-link to="/" class="nav-item">Home</router-link></li>
      <li><router-link to="/about" class="nav-item">About</router-link></li>
      <li><router-link to="/content" class="nav-item">Content</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
body {
    margin: 0px;
}

.navbar {
  display: flex;
  justify-content: right;
  background-color: #333;
  padding: 10px;
}

.nav-links {
  list-style: none;
  display: flex;
  
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 0;
  margin-right: 100px;
  font-family: Tahoma, sans-serif;
  transition: color 0.3s;
}

.navbar Button{
    padding: 20px;
    color: #ff6347;
    transition: color 0.3s;
}

.nav-item:hover {
  color: #ff6347;
}
</style>
