import { newSpecPage } from '@stencil/core/testing';
import { HorsePage } from './page-horse';

describe('Horse page spec test', () => {
  it('should render page with title', async () => {
    const { root } = await newSpecPage({ components: [HorsePage], html: '<page-horse></page-horse>' });

    expect(root.querySelector('ion-title').textContent).toEqual('Horse Details');
  });
});
