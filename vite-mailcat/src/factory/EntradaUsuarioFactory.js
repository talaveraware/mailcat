import { EntradaUsuarioModel } from '../components/EntradaUsuario/Model/EntradaUsuarioModel.js';
import { EntradaUsuarioView } from '../components/EntradaUsuario/View/EntradaUsuarioView.js';
import { EntradaUsuarioController } from '../components/EntradaUsuario/Controller/EntradaUsuarioController.js';

export class EntradaUsuarioFactory {
  static create(rootElement) {
    const model = new EntradaUsuarioModel();
    const view = new EntradaUsuarioView(rootElement);
    view.render();
    const controller = new EntradaUsuarioController(model, view);

    return { model, view, controller };
  }
}
