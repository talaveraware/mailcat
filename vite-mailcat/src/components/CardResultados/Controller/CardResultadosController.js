export class CardResultadosController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
  }

  init() {
    this.view.bindCopyClick(this.handleCopy.bind(this));
    this.view.bindExportPdfClick(this.handleExportPdf.bind(this));
  }

  handleCopy() {
    console.log('Copy to clipboard button clicked');
    // TODO: Implement copy logic
  }

  handleExportPdf() {
    console.log('Export PDF button clicked');
    // TODO: Implement export PDF logic
  }
}
