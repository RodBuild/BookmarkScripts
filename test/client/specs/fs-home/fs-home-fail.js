const baseUrl = 'https://www.familysearch.org/en/';

describe('FS Home Page: Testing', () => {
  it('should open url and wait for main element to exist', async () => {
    await browser.url(baseUrl);
    const main = await $('main');
    await main.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Main element not found' });
  });
  it('should have a title', async () => {
    const title = await $('h1');
    await expect(title).toHaveText('Clearly a Bad Title');
  });
});
