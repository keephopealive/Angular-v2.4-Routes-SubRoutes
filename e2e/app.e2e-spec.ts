import { RoutesSubroutesPage } from './app.po';

describe('routes-subroutes App', function() {
  let page: RoutesSubroutesPage;

  beforeEach(() => {
    page = new RoutesSubroutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
