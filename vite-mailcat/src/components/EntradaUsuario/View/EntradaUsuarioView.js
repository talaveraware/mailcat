export class EntradaUsuarioView {
  constructor(rootElement) {
    this.$root = rootElement;
    this.$container = null;
  }

  render() {
    const template = `
      <div id="input-draft-container" class="bg-surface-container-low rounded-3xl p-4 lg:p-6 border border-outline-variant/10 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Input Draft</label>
          <span class="text-[10px] text-on-surface-variant/50">42 words / 238 chars</span>
        </div>
        <textarea class="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/20 resize-none font-body leading-relaxed text-base lg:text-lg lg:h-[124px] h-[100px]" placeholder="Paste your quick notes, a messy draft, or key points here..."></textarea>
        <div class="flex items-center gap-3 mt-4 pt-4 border-t border-outline-variant/10">
          <button class="text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined" data-icon="attach_file">attach_file</span>
          </button>
          <button class="text-on-surface-variant hover:text-primary transition-colors">
            <span class="material-symbols-outlined" data-icon="mic">mic</span>
          </button>
          <div class="flex-1"></div>
          <button class="text-on-surface-variant text-sm hover:underline">Clear all</button>
        </div>
      </div>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    this.$container = doc.body.firstElementChild;

    this.$root.appendChild(this.$container);
  }
}
