<template>
  <div>
    <el-row :gutter="20" class="fondo el-row--flex">
      <el-col
        :xs="24"
        :sm="16"
        :md="16"
        :lg="16"
        :xl="16"
        class="centrar-contenido"
      >
        <div class="grid-content ep-bg-purple">
          <welcome-card />
        </div>
      </el-col>

      <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="login">
        <h1>{{ $t("login") }}</h1>
        <form @submit.prevent="login" class="el-form el-form--label-top">
          <el-form-item>
            {{ $t("user") }}
            <el-input v-model="agentUser" required />
          </el-form-item>

          <el-form-item>
            {{ $t("password") }}
            <el-input v-model="password" type="password" required />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" native-type="submit">{{ $t("login") }}</el-button>
          </el-form-item>
        </form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import welcomeCard from "@/components/Welcome.vue";
import authService from "@/services/auth";

export default {
  components: {
    welcomeCard,
  },
  data() {
    return {
      agentUser: "",
      password: "",
      userData: null,
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          agentUser: this.agentUser,
          password: this.password,
        };

        this.userData = await authService.login(credentials);
        this.$router.push({ name: "home" });
        // Realizar cualquier acción necesaria después de iniciar sesión correctamente
      } catch (error) {
        console.error(error);
        // Manejar el error en caso de fallar el inicio de sesión
      }
    },
    obtenerSesion() {
      this.userData = authService.getSessionData();
    },
  },
};
</script>

<style scoped>
.fondo {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.centrar-contenido {
  align-content: center;
  vertical-align: center;
  padding: 10%;
  /* background-image: url("@/assets/login.jpg"); */
  background-image: url("https://www.dreamhost.com/blog/wp-content/uploads/2021/05/79fe3d4c-17e5-4353-ad8e-9816f3a75eab_fix-wordpress-login-opt.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.login {
  align-content: center;
  vertical-align: center;
  padding: 10%;
}

@media (max-width: 767px) {
  /* Estilos específicos para dispositivos móviles */
  .centrar-contenido,
  .login {
    padding: 5%;
  }
}
</style>
