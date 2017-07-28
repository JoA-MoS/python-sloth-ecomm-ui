import { SlothEcommUiPage } from './app.po';

describe('sloth-ecomm-ui App', () => {
  let page: SlothEcommUiPage;

  beforeEach(() => {
    page = new SlothEcommUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
