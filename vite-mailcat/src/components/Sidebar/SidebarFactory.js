import { SidebarModel } from './SidebarModel.js';
import { SidebarView } from './SidebarView.js';
import { SidebarController } from './SidebarController.js';

export class SidebarFactory {
  static create(rootElement) {
    const model = new SidebarModel();
    const view = new SidebarView(rootElement);
    view.render();
    const controller = new SidebarController(model, view);

    return { model, view, controller };
  }
}
