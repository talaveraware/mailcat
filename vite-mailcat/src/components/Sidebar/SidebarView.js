export class SidebarView {
  constructor(rootElement) {
    this.$root = rootElement;
    this.$sidebar = null;
    this.$themeToggleBtn = null;
    this.$themeIcon = null;
  }

  render() {
    const template = `
      <aside class="sidebar p-4 gap-2 font-['Inter'] antialiased tracking-tight">
        <div class="mb-8 px-2 flex items-center gap-3 hidden lg:flex">
          <div class="w-8 h-8 rounded bg-primary flex items-center justify-center">
            <span class="material-symbols-outlined text-on-primary text-xl" data-icon="auto_awesome" style="font-variation-settings: 'FILL' 1;">auto_awesome</span>
          </div>
          <div>
            <h1 class="text-xl font-bold tracking-tighter text-primary">MailCat AI</h1>
            <p class="text-[10px] uppercase tracking-widest text-on-surface-variant opacity-60">Pro Synthesis</p>
          </div>
        </div>
        
        <nav class="flex flex-row lg:flex-col lg:flex-1 space-x-2 lg:space-x-0 lg:space-y-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          <a class="text-primary font-semibold flex items-center gap-3 px-4 py-3 bg-surface-container border border-outline-variant/10 rounded-lg transition-transform active:scale-[0.98] whitespace-nowrap" href="#">
            <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span> Principal
          </a>
          <a class="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-surface-container-low rounded-lg whitespace-nowrap" href="#">
            <span class="material-symbols-outlined" data-icon="edit_square">edit_square</span> Borradores
          </a>
          <a class="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-surface-container-low rounded-lg whitespace-nowrap hidden lg:flex" href="#">
            <span class="material-symbols-outlined" data-icon="insights">insights</span> Estadísticas
          </a>
          <a class="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-surface-container-low rounded-lg whitespace-nowrap hidden lg:flex" href="#">
            <span class="material-symbols-outlined" data-icon="settings">settings</span> Configuración
          </a>
        </nav>

        <button class="hidden lg:flex mt-4 w-full gradient-primary text-on-primary font-bold py-3 items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity rounded-full">
          <span class="material-symbols-outlined text-sm" data-icon="add">add</span>
          New Draft
        </button>
        
        <div class="mt-auto pt-4 border-t border-outline-variant/15 space-y-1 hidden lg:block">
          <a class="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-surface-container-low rounded-lg" href="#">
            <span class="material-symbols-outlined" data-icon="dark_mode">dark_mode</span> Theme
          </a>
          <a class="text-on-surface-variant hover:text-on-surface flex items-center gap-3 px-4 py-3 transition-all duration-200 hover:bg-surface-container-low rounded-lg" href="#">
            <span class="material-symbols-outlined" data-icon="help_outline">help_outline</span> Support
          </a>
          <div class="mt-4 p-3 bg-surface-container border border-outline-variant/10 flex items-center gap-3 rounded-full">
            <img alt="User profile avatar" class="w-8 h-8 rounded-full border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5GkmlpWQuDSVPM06AtnXzCV2XffSt6BEsoQhV417298nGjjFyuLT0c2gpRsAqfKt4xf8g2doVMYeVGRIRs6WNnvhZnI-jZzM7gqAdLiKN5Fawb6a6nBhOiFXV-4hC591gedXHqWvfJQTKujEwlXySiGmRm4Tpchbsr3H4PaH4vPh07lW6AmppCKhrYpij9P6aolTT2nyMunfXdWmYHaoUXow8qIepeVYr5dBswVJb1bL5NmbOm9IBJqCOsP_PX0jfWGLd8odCqDo"/>
            <div class="overflow-hidden">
              <p class="text-sm font-bold truncate text-on-surface">Alex Sterling</p>
              <p class="text-[10px] text-on-surface-variant truncate">alex@mailcat.ai</p>
            </div>
          </div>
        </div>
      </aside>
    `;

    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    this.$sidebar = doc.body.firstElementChild;
    
    const iconSpan = this.$sidebar.querySelector('span[data-icon="dark_mode"]');
    if (iconSpan) {
        this.$themeToggleBtn = iconSpan.closest('a');
        this.$themeIcon = iconSpan;
    }

    this.$root.appendChild(this.$sidebar);
  }

  bindThemeToggle(handler) {
    if (this.$themeToggleBtn) {
      this.$themeToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        handler();
      });
    }
  }

  updateThemeUI(isLight) {
    if (this.$themeIcon) {
      if (isLight) {
        this.$themeIcon.textContent = 'light_mode';
        this.$themeIcon.setAttribute('data-icon', 'light_mode');
      } else {
        this.$themeIcon.textContent = 'dark_mode';
        this.$themeIcon.setAttribute('data-icon', 'dark_mode');
      }
    }
  }
}
