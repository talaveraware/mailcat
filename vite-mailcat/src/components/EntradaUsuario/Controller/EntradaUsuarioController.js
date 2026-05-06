export class EntradaUsuarioController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateCounter(); // Inicializa el contador al cargar
  }

  bindEvents() {
    const inputElement = this.view.inputElement;
    if (inputElement) {
      // El evento 'input' cubre teclas oprimidas, texto pegado, borrado y cortado
      inputElement.addEventListener('input', () => this.updateCounter());
    }

    const clearButton = this.view.clearButton;
    if (clearButton) {
      clearButton.addEventListener('click', () => this.clearInput());
    }
  }

  clearInput() {
    const inputElement = this.view.inputElement;
    if (inputElement) {
      inputElement.value = '';
      this.updateCounter();
    }
  }

  updateCounter() {
    const inputElement = this.view.inputElement;
    if (inputElement) {
      const text = inputElement.value;
      const chars = text.length;
      // Contar palabras dividiendo por espacios en blanco. Si está vacío, son 0 palabras.
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      
      this.view.updateCounterText(words, chars);
    }
  }
}
