import { CardOpcionesModel } from '../components/CardOpciones/Model/CardOpcionesModel.js';
import { CardOpcionesView } from '../components/CardOpciones/View/CardOpcionesView.js';
import { CardOpcionesController } from '../components/CardOpciones/Controller/CardOpcionesController.js';

export class CardOpcionesFactory {
  static create(rootElement) {
    const model = new CardOpcionesModel();
    const view = new CardOpcionesView(rootElement);
    view.render();
    const controller = new CardOpcionesController(model, view);

    return { model, view, controller };
  }
}
