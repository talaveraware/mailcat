export class DashboardView {
  constructor() {
    this.root = this.createElement(this.template());
    this.$sidebarRoot = this.root.querySelector('#sidebar-root');
    this.$entradaUsuarioRoot = this.root.querySelector('#entrada-usuario-root');
    this.$cardOpcionesRoot = this.root.querySelector('#card-opciones-root');
    this.$cardResultRoot = this.root.querySelector('#card-result-root');
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
        <div id="card-result-root"></div>
      </div>

    </div>
  </main>
</div>
</div>
    `;
  }
}
