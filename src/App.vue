<template>
  <div>
    <el-menu mode="horizontal">
      <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/winners">Winners</router-link></el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
import { ElMenu, ElMenuItem, ElLink } from 'element-plus'
export default {
  name: 'App',
  components: {
    ElMenu, ElMenuItem
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: grid;
  justify-items: center;
}

a {
  text-decoration: none;
}
</style>
