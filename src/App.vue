<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Itinerary</router-link> |
      <router-link to="/truck-51C60596">Xe 51C-60596</router-link> |
      <router-link to="/truck-51D46295">Xe 51D-46295</router-link> |
      <router-link to="/truck-50H07677">Xe 50H-07677</router-link> |
      <router-link to="/truck-other">Xe ngoài</router-link> -->

        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @click="handleSelect"
          background-color="rgb(26 37 47)"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <router-link to="/" class="route">Danh sách chuyến xe</router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">Chi tiết xe</template>
            <el-menu-item index="2-1">
              <router-link to="/truck-51C60596" class="route">Xe 51C-60596</router-link>
            </el-menu-item>
            
            <el-menu-item index="2-2">
              <router-link to="/truck-51D46295" class="route">Xe 51D-46295</router-link>
            </el-menu-item>

            <el-menu-item index="2-3">
              <router-link to="/truck-50H07677" class="route">Xe 50H-07677</router-link>
            </el-menu-item>

            <el-menu-item index="2-4">
              <router-link to="/truck-other" class="route">Xe ngoài</router-link>
            </el-menu-item>

            
          </el-submenu>
         
      </el-menu>
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

.route{
  color: antiquewhite;
  text-decoration: none;
}
</style>
