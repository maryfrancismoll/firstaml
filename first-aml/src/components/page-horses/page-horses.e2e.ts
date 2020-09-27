import { newE2EPage } from '@stencil/core/testing';

describe('Horses Page E2E', () => {
  // is it safe to assume the api has mock data?
  it('should show some  horses', async () => {
    const page = await newE2EPage({ url: '/horses' });

    // wait for changes since horses are fetched after the component loads.
    await page.waitForChanges();

    const horseList = await page.find('[data-testid="page-horses.list"]');
    expect(horseList).toBeTruthy();

    // check for pagination footer
    const footer = await page.find('[data-testid="page-horses.footer"]');
    expect(footer).toBeTruthy();
  });
});
