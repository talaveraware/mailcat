import { DashboardModel } from '../components/Dashboard/Model/DashboardModel.js';
import { DashboardView } from '../components/Dashboard/View/DashboardView.js';
import { DashboardController } from '../components/Dashboard/Controller/DashboardController.js';
import { SidebarFactory } from './SidebarFactory.js';
import { EntradaUsuarioFactory } from './EntradaUsuarioFactory.js';
import { CardOpcionesFactory } from './CardOpcionesFactory.js';

export class DashboardFactory {
  static async dashComponent() {
    const model = new DashboardModel();
    const view = new DashboardView();
    const controller = new DashboardController(model, view);

    // Si existe el root del sidebar en la vista, inyectamos el SidebarComponent
    if (view.$sidebarRoot) {
      SidebarFactory.create(view.$sidebarRoot);
    }

    // Inyectamos el componente EntradaUsuario
    if (view.$entradaUsuarioRoot) {
      EntradaUsuarioFactory.create(view.$entradaUsuarioRoot);
    }

    // Inyectamos el componente CardOpciones
    if (view.$cardOpcionesRoot) {
      CardOpcionesFactory.create(view.$cardOpcionesRoot);
    }

    return { element: view.root };
  }
}
