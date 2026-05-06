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

    // Binding del botón de micrófono para dictado
    this.view.bindMicClick(() => this.handleMicClick());
  }

  clearInput() {
    const inputElement = this.view.inputElement;
    if (inputElement) {
      inputElement.value = '';
      this.updateCounter();
    }
  }

  /**
   * Alterna el estado de dictado por voz.
   * - Si no está grabando: activa la onda animada e inicia el dictado.
   * - Si está grabando: detiene el dictado y restaura el ícono del micrófono.
   */
  handleMicClick() {
    if (!this.model.isRecording) {
      // — INICIO DEL DICTADO —
      this.view.showWaveIcon();

      this.model.startDictation(
        // Caso de éxito: se recibió transcripción
        (transcript) => {
          this.view.appendText(transcript);
          this.updateCounter();
        },
        // Caso de falla: error en reconocimiento
        (error) => {
          console.error('[EntradaUsuario] Error en transcripción:', error);
          this.view.showMicIcon();
        },
        // Fin natural del reconocimiento (silencio prolongado o stop)
        () => {
          this.view.showMicIcon();
        }
      );
    } else {
      // — DETENCIÓN DEL DICTADO —
      // CORRECCIÓN: showMicIcon() se llama de forma SÍNCRONA e inmediata.
      // No se delega al callback onEnd (asíncrono) para evitar la ventana
      // de tiempo en que Chrome puede no disparar onend o hacerlo tarde.
      this.model.stopDictation();
      this.view.showMicIcon();
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
