import { ReceipeBookPage } from './app.po';

describe('receipe-book App', () => {
  let page: ReceipeBookPage;

  beforeEach(() => {
    page = new ReceipeBookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
