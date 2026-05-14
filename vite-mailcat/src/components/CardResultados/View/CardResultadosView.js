import { 
  CONTENT_COPY_ICON, 
  PICTURE_AS_PDF_ICON, 
  MAIL_ICON, 
  STAR_ICON, 
  STAR_HALF_ICON 
} from '../Icons/svg_icons.js';

export class CardResultadosView {
  constructor(rootElement) {
    this.$root = rootElement;
    this.$container = null;
  }

  render() {
    const template = `
      <div id="cardResultRoot" class="glass-panel border border-primary/10 rounded-[2rem] overflow-hidden flex flex-col shadow-sm">
        <div class="p-4 border-b border-outline-variant/10 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span class="text-xs font-bold uppercase tracking-widest text-primary">MailCat Resultado</span>
          </div>
          <div class="flex gap-2">
            <button id="copyBtn" class="p-1.5 rounded-lg hover:bg-surface-container-highest text-on-surface-variant transition-colors flex items-center justify-center" title="Copy to clipboard">
              ${CONTENT_COPY_ICON}
            </button>
            <button id="exportPdfBtn" class="p-1.5 rounded-lg hover:bg-surface-container-highest text-on-surface-variant transition-colors flex items-center justify-center" title="Export PDF">
              ${PICTURE_AS_PDF_ICON}
            </button>
          </div>
        </div>

        <div class="p-4 lg:p-6 space-y-3 font-body text-on-surface leading-relaxed relative min-h-[180px]">
          <div class="space-y-3 opacity-10">
            <div class="h-3 bg-on-surface-variant/40 rounded-full w-3/4"></div>
            <div class="h-3 bg-on-surface-variant/40 rounded-full w-full"></div>
            <div class="h-3 bg-on-surface-variant/40 rounded-full w-5/6"></div>
          </div>
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
            <div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-3 border border-outline-variant/10 shadow-sm text-primary">
              ${MAIL_ICON}
            </div>
            <h4 class="font-bold text-on-surface text-sm mb-0.5">Listo para trabajar</h4>
            <p class="text-[11px] text-on-surface-variant max-w-[200px]">El texto profesional aparecerá aquí.</p>
          </div>
        </div>

        <div class="p-3 bg-surface-container-low flex items-center justify-between border-t border-outline-variant/10">
          <div class="flex items-center gap-2">
            <img class="w-8 h-8 rounded-lg object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmlfmz05wOq02XFOTy4A51TdLstHKmhOCH1eu6nnGsM_wdJQfjwwqR9Zn8VxpZOn8y2--_x8znKEE8fEplWItSCKTzKt-PcVL4v05jNOVZALJqmq-CXc3gVG1wJNJENVPnEeBD8zOznV0mfkJD6Q_QqkvuwR0TW_VPRAEo0hz9VtHlv4SOUlVRxA3UdzRLklDGIAmy97e_LZHXQh1FvwcKWn1eTU8tXR0_02_uwwb6F0aJnc2VxuAL0-5CTUtf0Al2ot6QDKYtrig"/>
            <div class="text-[9px] leading-tight text-on-surface-variant">
              <p class="font-bold">ENGINE STATUS</p>
              <p class="text-primary uppercase font-black">Optimal</p>
            </div>
          </div>
          <div class="flex items-center gap-0.5 text-on-surface-variant">
            ${STAR_ICON}
            ${STAR_ICON}
            ${STAR_ICON}
            ${STAR_ICON}
            ${STAR_HALF_ICON}
          </div>
        </div>
      </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    this.$container = doc.body.firstElementChild;

    this.$root.appendChild(this.$container);
  }

  // --- Getters ---

  get copyBtn() {
    return this.$container ? this.$container.querySelector('#copyBtn') : null;
  }

  get exportPdfBtn() {
    return this.$container ? this.$container.querySelector('#exportPdfBtn') : null;
  }

  // --- Bindings ---

  bindCopyClick(handler) {
    const btn = this.copyBtn;
    if (btn) btn.addEventListener('click', handler);
  }

  bindExportPdfClick(handler) {
    const btn = this.exportPdfBtn;
    if (btn) btn.addEventListener('click', handler);
  }
}
