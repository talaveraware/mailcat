export class DashboardView {
  constructor() {
    this.root = this.createElement(this.template());
    this.$sidebarRoot = this.root.querySelector('#sidebar-root');
    this.$entradaUsuarioRoot = this.root.querySelector('#entrada-usuario-root');
    this.$cardOpcionesRoot = this.root.querySelector('#card-opciones-root');
    this.$cardResultRoot = this.root.querySelector('#cardResultRoot');
    // Referencias adicionales pueden ir aquí con el prefijo $
  }

  createElement(template) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(template, "text/html");
    return doc.body.firstElementChild;
  }

  template() {
    return `
<div class="app-wrapper dark w-full h-full">
<!-- Sidebar -->
<div id="sidebar-root" class="h-full"></div>

<div class="main-content">
  <!-- TopAppBar has been removed in Dark Theme Screen -->
  
  <!-- Main Content -->
  <main class="flex-1 overflow-y-auto bg-surface hide-scrollbar custom-scrollbar px-4 pb-10 pt-4 lg:px-10 lg:pt-6">
    <div class="max-w-6xl mx-auto">
      
      <!-- Workspace Grid -->
      <div class="grid grid-cols-12 gap-4 lg:gap-6 items-start">
        
        <!-- Header Block: Left-aligned with the Input Draft card -->
        <div class="col-span-12 text-left lg:text-left mb-4 lg:mb-8">
          <h2 class="text-[2.5rem] lg:text-[3.5rem] font-extrabold tracking-tight leading-tight text-on-surface mb-2 lg:text-center text-left">Domina tu <span class="text-[#59de9b]">comunicación</span>.</h2>
          <p class="text-on-surface-variant text-base lg:text-lg leading-relaxed text-left">MailCat AI transforma tus notas rápidas en correos electrónicos corporativos impecables con el poder de la síntesis profesional.</p>
        </div>
        
        <!-- Left Column -->
        <div class="col-span-12 lg:col-span-7 space-y-4 lg:space-y-6">
          <div id="entrada-usuario-root"></div>
        </div>
        
        <!-- Right Column -->
        <div id="rightColumnRoot" class="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:gap-6 mt-2 lg:mt-0">
          <div id="card-opciones-root"></div>
        </div>
      </div>

      <!-- Result Section — full width, below both columns -->
      <div id="result-section" class="mt-4 lg:mt-6 w-full">
        <div id="cardResultRoot" class="glass-panel border border-primary/10 rounded-[2rem] overflow-hidden flex flex-col shadow-sm">
          <div class="p-4 border-b border-outline-variant/10 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span class="text-xs font-bold uppercase tracking-widest text-primary">Synthesis Result</span>
            </div>
            <div class="flex gap-2">
              <button class="p-1.5 rounded-lg hover:bg-surface-container-highest text-on-surface-variant transition-colors" title="Copy to clipboard">
                <span class="material-symbols-outlined text-base" data-icon="content_copy">content_copy</span>
              </button>
              <button class="p-1.5 rounded-lg hover:bg-surface-container-highest text-on-surface-variant transition-colors" title="Export PDF">
                <span class="material-symbols-outlined text-base" data-icon="picture_as_pdf">picture_as_pdf</span>
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
              <div class="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-3 border border-outline-variant/10 shadow-sm">
                <span class="material-symbols-outlined text-primary text-2xl" data-icon="mail" style="font-variation-settings: 'FILL' 1;">mail</span>
              </div>
              <h4 class="font-bold text-on-surface text-sm mb-0.5">Ready for synthesis</h4>
              <p class="text-[11px] text-on-surface-variant max-w-[200px]">Professional translation will appear here.</p>
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
            <div class="flex items-center gap-0.5">
              <span class="material-symbols-outlined text-[10px] text-on-surface-variant" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[10px] text-on-surface-variant" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[10px] text-on-surface-variant" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[10px] text-on-surface-variant" data-icon="star" style="font-variation-settings: 'FILL' 1;">star</span>
              <span class="material-symbols-outlined text-[10px] text-on-surface-variant" data-icon="star_half">star_half</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</div>
</div>
    `;
  }
}
