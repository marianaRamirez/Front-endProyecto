import { FrontendProyectoPage } from './app.po';

describe('frontend-proyecto App', () => {
  let page: FrontendProyectoPage;

  beforeEach(() => {
    page = new FrontendProyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
