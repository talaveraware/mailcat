import { CardResultadosModel } from '../components/CardResultados/Model/CardResultadosModel.js';
import { CardResultadosView } from '../components/CardResultados/View/CardResultadosView.js';
import { CardResultadosController } from '../components/CardResultados/Controller/CardResultadosController.js';

export class CardResultadosFactory {
  static create(rootElement) {
    const model = new CardResultadosModel();
    const view = new CardResultadosView(rootElement);
    view.render();
    const controller = new CardResultadosController(model, view);

    return { model, view, controller };
  }
}
