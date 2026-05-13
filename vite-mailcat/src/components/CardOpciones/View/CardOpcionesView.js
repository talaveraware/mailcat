import { MORE_HORIZ_ICON, AUTO_FIX_HIGH_ICON } from '../Icons/svg_icons.js';

export class CardOpcionesView {
  constructor(rootElement) {
    this.$root = rootElement;
    this.$container = null;
  }

  render() {
    const template = `
      <div id="cardOptions" class="glass-panel border border-primary/10 rounded-[2rem] overflow-hidden flex flex-col shadow-sm">

        <!-- Tone Parameter -->
        <div id="toneParameterRoot" class="bg-surface-container-low rounded-3xl p-4 lg:p-6 border border-outline-variant/10 shadow-sm">
          <label class="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 lg:mb-6">Synthesis Parameter: Tone</label>
          <div class="flex flex-wrap gap-2">
            <button id="formalBtn" class="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-primary text-on-primary font-semibold text-xs lg:text-sm transition-all shadow-lg shadow-primary/10">
                Formal
            </button>
            <button id="friendlyBtn" class="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all border border-outline-variant/10 text-xs lg:text-sm">
                Amable
            </button>
            <button id="urgentBtn" class="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all border border-outline-variant/10 text-xs lg:text-sm">
                Urgente
            </button>
            <button id="persuasiveBtn" class="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all border border-outline-variant/10 text-xs lg:text-sm">
                Persuasivo
            </button>
            <button id="conciseBtn" class="px-4 lg:px-6 py-2 lg:py-2.5 rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all border border-outline-variant/10 text-xs lg:text-sm">
                Conciso
            </button>
            <button id="moreBtn" class="w-8 h-8 flex lg:w-10 lg:h-10 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all border border-outline-variant/10">
              ${MORE_HORIZ_ICON}
            </button>
          </div>
        </div>

        <!-- Primary CTA — centered at bottom of card -->
        <div class="flex justify-center py-4 lg:py-6">
          <button id="optimizeBtn" class="gradient-primary text-on-primary font-extrabold text-sm lg:text-base rounded-full flex items-center justify-center gap-2.5 px-8 lg:px-10 py-3 shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98] group">
            ${AUTO_FIX_HIGH_ICON}
            Optimizar con IA
          </button>
        </div>

      </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    this.$container = doc.body.firstElementChild;

    this.$root.appendChild(this.$container);
  }

  // — Getters de elementos del DOM —

  get formalBtn() {
    return this.$container ? this.$container.querySelector('#formalBtn') : null;
  }

  get friendlyBtn() {
    return this.$container ? this.$container.querySelector('#friendlyBtn') : null;
  }

  get urgentBtn() {
    return this.$container ? this.$container.querySelector('#urgentBtn') : null;
  }

  get persuasiveBtn() {
    return this.$container ? this.$container.querySelector('#persuasiveBtn') : null;
  }

  get conciseBtn() {
    return this.$container ? this.$container.querySelector('#conciseBtn') : null;
  }

  get moreBtn() {
    return this.$container ? this.$container.querySelector('#moreBtn') : null;
  }

  get optimizeBtn() {
    return this.$container ? this.$container.querySelector('#optimizeBtn') : null;
  }

  // — Métodos de binding de eventos —

  /**
   * Registra el handler del click en el botón Formal.
   * @param {Function} handler
   */
  bindFormalClick(handler) {
    const btn = this.formalBtn;
    if (btn) btn.addEventListener('click', handler);
  }

  /**
   * Registra el handler del click en el botón Amable.
   * @param {Function} handler
   */
  bindFriendlyClick(handler) {
    const btn = this.friendlyBtn;
    if (btn) btn.addEventListener('click', handler);
  }

  /**
   * Registra el handler del click en el botón Urgente.
   * @param {Function} handler
   */
  bindUrgentClick(handler) {
    const btn = this.urgentBtn;
    if (btn) btn.addEventListener('click', handler);
  }

  /**
   * Registra el handler del click en el botón Persuasivo.
   * @param {Function} handler
   */
  bindPersuasiveClick(handler) {
    const btn = this.persuasiveBtn;
    if (btn) btn.addEventListener('click', handler);
  }

  /**
   * Registra el handler del click en el botón Conciso.
   * @param {Function} handler
   */
  bindConciseClick(handler) {
    const btn = this.conciseBtn;
    if (btn) btn.addEventListener('click', handler);
  }

  /**
   * Registra el handler del click en el botón de más opciones.
   * @param {Function} handler
   */
  bindMoreClick(handler) {
    const btn = this.moreBtn;
    if (btn) btn.addEventListener('click', handler);
  }

  /**
   * Registra el handler del click en el botón Optimizar con IA.
   * @param {Function} handler
   */
  bindOptimizeClick(handler) {
    const btn = this.optimizeBtn;
    if (btn) btn.addEventListener('click', handler);
  }
}
