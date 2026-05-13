export class CardOpcionesController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.view.bindFormalClick(() => this.handleFormal());
    this.view.bindFriendlyClick(() => this.handleFriendly());
    this.view.bindUrgentClick(() => this.handleUrgent());
    this.view.bindPersuasiveClick(() => this.handlePersuasive());
    this.view.bindConciseClick(() => this.handleConcise());
    this.view.bindMoreClick(() => this.handleMore());
    this.view.bindOptimizeClick(() => this.handleOptimize());
  }

  handleFormal() {
    // TODO: implementar
  }

  handleFriendly() {
    // TODO: implementar
  }

  handleUrgent() {
    // TODO: implementar
  }

  handlePersuasive() {
    // TODO: implementar
  }

  handleConcise() {
    // TODO: implementar
  }

  handleMore() {
    // TODO: implementar
  }

  handleOptimize() {
    // TODO: implementar
  }
}
