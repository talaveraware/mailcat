import "./style.css";
import { Router } from "./router/router.js";
import { DashboardFactory } from "./factory/dash_factory.js";

/**
 * Mapa de rutas de la aplicación que define los componentes asociados
 * a cada ruta URL.
 */
const routes = {
  "/": async () => {
    // Por ahora, redirige / a dashboard hasta que exista el componente de Login
    const { element, modalError } = await DashboardFactory.dashComponent();

    if (modalError) document.body.append(modalError);

    return element;
  },
  "/dashboard": async () => {
    const { element, modalError } = await DashboardFactory.dashComponent();
    
    if (modalError) document.body.append(modalError);

    return element;
  }
};

// Inicializar router
window.router = new Router(routes);
