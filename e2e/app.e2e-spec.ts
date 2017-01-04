import { A2RestPage } from './app.po';

describe('a2-rest App', function() {
  let page: A2RestPage;

  beforeEach(() => {
    page = new A2RestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
