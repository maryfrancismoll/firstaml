import { E2EPage, newE2EPage } from '@stencil/core/testing';

let page: E2EPage;

const findByTestId = (testid: string) => page.find(`[data-testid="${testid}"]`);

describe('Horse page E2E test', () => {
  // assumption is that mock data exists
  it('should render horse details', async () => {
    const artax: Horse = {
      id: 'e109d9a7-2706-4283-9307-f62de7cdd99d',
      name: 'Artax',
      profile: {
        favouriteFood: 'Carrots',
        physical: {
          height: 198.99,
          weight: 400,
        },
      },
    };

    page = await newE2EPage({ url: `/horse/${artax.id}` });

    // wait for changes because the horse details will be updated after the page renders
    await page.waitForChanges();

    expect((await findByTestId('page-horse.name')).innerText).toBe(artax.name);
    expect((await findByTestId('page-horse.favoriteFood')).innerText).toBe(artax.profile.favouriteFood);
    expect((await findByTestId('page-horse.physical-height')).innerText).toBe(artax.profile.physical.height.toString());
    expect((await findByTestId('page-horse.physical-weight')).innerText).toBe(artax.profile.physical.weight.toString());
  });
});
