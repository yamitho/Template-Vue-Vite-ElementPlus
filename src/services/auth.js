import buildServices from "./buildServices";

const SESSION_STORAGE_KEY = "userData";

export default {
  login: async function (credentials) {
    try {
      const response = await buildServices.post("/auth/login", credentials);

      // Guardar los datos de sesión
      this.saveSessionData(response);

      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Error al iniciar sesión");
    }
  },

  getSessionData: () => {
    // Obtener los datos de sesión desde el almacenamiento local
    const sessionData = sessionStorage.getItem(SESSION_STORAGE_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
  },

  saveSessionData: (data) => {
    // Guardar los datos de sesión en el almacenamiento local
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(data));
  },

  removeSessionData: () => {
    // Eliminar los datos de sesión del almacenamiento local
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  },

  // Otros métodos relacionados con la autenticación
};