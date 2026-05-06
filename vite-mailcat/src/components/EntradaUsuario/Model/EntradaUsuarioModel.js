export class EntradaUsuarioModel {
  constructor() {
    this.isRecording = false;
    this.recognition = null;
  }

  /**
   * Inicia el dictado usando la Web Speech API nativa del navegador.
   * @param {Function} onResult - Callback con el texto transcrito (string).
   * @param {Function} onError  - Callback de error (Error).
   * @param {Function} onEnd    - Callback cuando el reconocimiento finaliza.
   */
  startDictation(onResult, onError, onEnd) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      const err = new Error('[EntradaUsuario] Web Speech API no está disponible en este navegador.');
      console.error(err.message);
      onError(err);
      return;
    }

    this.recognition = new SpeechRecognition();
    //sr-RS Serbio, en-US English, es-MX Español Mexicano, af-ZA Afrikáans
    this.recognition.lang = 'af-ZA'; 
    this.recognition.interimResults = false;
    this.recognition.continuous = true;

    // Caso de éxito: se recibe transcripción final
    this.recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          transcript += event.results[i][0].transcript;
        }
      }
      if (transcript.trim()) {
        onResult(transcript.trim());
      }
    };

    // Caso de falla: error en el proceso de reconocimiento
    this.recognition.onerror = (event) => {
      console.error('[EntradaUsuario] Error en dictado (SpeechRecognition):', event.error);
      this.isRecording = false;
      onError(new Error(event.error));
    };

    // Fin natural o por stop(): restaura estado y notifica al Controller
    this.recognition.onend = () => {
      this.isRecording = false;
      if (onEnd) onEnd();
    };

    this.recognition.start();
    this.isRecording = true;
  }

  /**
   * Detiene el dictado activo de forma explícita.
   *
   * CORRECCIÓN: Se anula recognition.onend ANTES de llamar stop().
   * Esto evita que el callback asíncrono onEnd se ejecute después de
   * que el usuario decidió detener, previniendo la desincronización
   * de estado e ícono cuando Chrome tiene eventos residuales en cola.
   */
  stopDictation() {
    if (this.recognition) {
      this.recognition.onend = null;   // Corta el callback ANTES del stop()
      this.recognition.onerror = null; // Evita errores residuales en cola
      this.recognition.stop();
      this.recognition = null;
    }
    this.isRecording = false;
  }
}
