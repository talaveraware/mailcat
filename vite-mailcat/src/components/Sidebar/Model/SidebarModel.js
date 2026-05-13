export class SidebarModel {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.isCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    return this.theme;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('sidebar_collapsed', this.isCollapsed);
    return this.isCollapsed;
  }
}
