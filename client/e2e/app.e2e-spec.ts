import { NeuProfileAppPage } from './app.po';

describe('neu-profile-app App', () => {
  let page: NeuProfileAppPage;

  beforeEach(() => {
    page = new NeuProfileAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
