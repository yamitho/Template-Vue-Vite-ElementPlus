<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            {{ userData }}
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import authService from "@/services/auth.js";
export default {
  data() {
    return {
      userData: "",
    };
  },
  created(){
    this.obtenerSesion()
  },
  methods: {
    obtenerSesion() {
      this.userData = authService.getSessionData();
    },
  },
};
</script>
