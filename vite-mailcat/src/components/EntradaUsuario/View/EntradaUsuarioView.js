export class EntradaUsuarioView {
  constructor(rootElement) {
    this.$root = rootElement;
    this.$container = null;
  }

  render() {
    const template = `
      <div id="input-draft-container" class="bg-surface-container-low rounded-3xl p-4 lg:p-6 border border-outline-variant/10 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Esquema Inicial</label>
          <span class="text-[10px] text-on-surface-variant/50" id="counter">0 palabras / 0 caracteres</span>
        </div>
        <textarea id="input-draft-text" class="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/20 resize-none font-body leading-relaxed text-base lg:text-lg lg:h-[124px] h-[100px]" placeholder="Pega tus notas, un borrador rápido o puntos clave. MailCat les dará el tono perfecto..."></textarea>
        <div class="flex items-center gap-3 mt-4 pt-4 border-t border-outline-variant/10">
          <button id="btn-mic" class="text-on-surface-variant hover:text-primary transition-colors cursor-pointer" >
            <span class="material-symbols-outlined" data-icon="mic">mic</span>
          </button>
          <div class="flex-1"></div>
          <button class="text-on-surface-variant text-sm hover:text-primary transition-colors cursor-pointer" id="clear-all">Limpiar Todo</button>
        </div>
      </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    this.$container = doc.body.firstElementChild;

    this.$root.appendChild(this.$container);
  }

  get inputElement() {
    return this.$container ? this.$container.querySelector('#input-draft-text') : null;
  }

  get counterElement() {
    return this.$container ? this.$container.querySelector('#counter') : null;
  }

  get clearButton() {
    return this.$container ? this.$container.querySelector('#clear-all') : null;
  }

  updateCounterText(words, chars) {
    const counter = this.counterElement;
    if (counter) {
      counter.textContent = `${words} palabras / ${chars} caracteres`;
    }
  }
}
