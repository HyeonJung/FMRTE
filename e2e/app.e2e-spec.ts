import { FmrtePage } from './app.po';

describe('fmrte App', () => {
  let page: FmrtePage;

  beforeEach(() => {
    page = new FmrtePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
