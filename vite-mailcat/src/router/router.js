export class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    window.addEventListener('popstate', () => this.handleRoute());
    document.addEventListener('click', e => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        this.navigate(e.target.href);
      }
    });
    this.handleRoute();
  }

  async handleRoute() {
    const path = window.location.pathname;
    const routeAction = this.routes[path] || this.routes['/'];

    if (routeAction) {
      document.getElementById('app').innerHTML = ''; // Limpia el contenedor raíz
      const element = await routeAction(); // Ejecuta la acción de la ruta
      if (element) {
        document.getElementById('app').append(element); // El router inyecta el componente en la raíz
      }
    } else {
      console.error(`Route ${path} not found.`);
    }
  }

  navigate(url) {
    window.history.pushState(null, null, url);
    this.handleRoute();
  }
}
