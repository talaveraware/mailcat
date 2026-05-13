export class SidebarController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    
    this.view.bindThemeToggle(this.handleThemeToggle.bind(this));
    this.view.bindCollapseToggle(this.handleCollapseToggle.bind(this));
    
    this.view.updateThemeUI(this.model.theme === 'light');
    this.view.updateCollapseUI(this.model.isCollapsed);
    
    // Ensure the app wrapper reflects the initial theme
    const appWrapper = document.querySelector('.app-wrapper');
    if (appWrapper) {
      if (this.model.theme === 'light') {
        appWrapper.classList.remove('dark');
        appWrapper.classList.add('light');
      } else {
        appWrapper.classList.remove('light');
        appWrapper.classList.add('dark');
      }
    }
  }

  handleThemeToggle() {
    const newTheme = this.model.toggleTheme();
    
    const appWrapper = document.querySelector('.app-wrapper');
    if (appWrapper) {
      if (newTheme === 'light') {
        appWrapper.classList.remove('dark');
        appWrapper.classList.add('light');
      } else {
        appWrapper.classList.remove('light');
        appWrapper.classList.add('dark');
      }
    }

    this.view.updateThemeUI(newTheme === 'light');
  }

  handleCollapseToggle() {
    const newState = this.model.toggleCollapse();
    this.view.updateCollapseUI(newState);
  }
}
