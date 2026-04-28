import { SidebarModel } from '../components/Sidebar/Model/SidebarModel.js';
import { SidebarView } from '../components/Sidebar/View/SidebarView.js';
import { SidebarController } from '../components/Sidebar/Controller/SidebarController.js';

export class SidebarFactory {
  static create(rootElement) {
    const model = new SidebarModel();
    const view = new SidebarView(rootElement);
    view.render();
    const controller = new SidebarController(model, view);

    return { model, view, controller };
  }
}
