import { newSpecPage } from '@stencil/core/testing';
import { HorsesPage } from './page-horses';

describe('Horses page spec test', () => {
  it('should render horses page', async () => {
    const { root } = await newSpecPage({ components: [HorsesPage], html: '<page-horses></page-horses>' });

    expect(root.querySelector('ion-title').textContent).toEqual('Horses');
  });
});
