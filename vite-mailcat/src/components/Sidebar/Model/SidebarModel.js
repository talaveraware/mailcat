export class SidebarModel {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    return this.theme;
  }
}
