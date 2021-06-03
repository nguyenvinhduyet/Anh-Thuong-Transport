<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Itinerary</router-link> |
      <router-link to="/truck-51C60596">Xe 51C-60596</router-link> |
      <router-link to="/truck-51D46295">Xe 51D-46295</router-link> |
      <router-link to="/truck-50H07677">Xe 50H-07677</router-link> |
      <router-link to="/truck-other">Xe ngoài</router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
