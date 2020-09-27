import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />

          {/* horse pages */}
          <ion-route url="horses" component="page-horses" />
          <ion-route url="horse/:hid" component="page-horse" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
