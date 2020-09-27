import { Component, h, Prop, State } from '@stencil/core';
import { fetchHorse } from '../../helpers/utils';

@Component({ tag: 'page-horse' })
export class HorsePage {
  @Prop()
  hid: string;

  @Prop()
  initialHorse: Horse;

  @State()
  horse: Horse;

  componentWillLoad() {
    // set the initial horse prop to the state horse
    if (this.initialHorse) {
      this.horse = this.initialHorse;
    }
  }

  async componentDidLoad() {
    // fetch the horse details to get any updated info on horse after initial load of prop from list
    const horseInfo = await fetchHorse(this.hid);
    if (horseInfo) {
      this.horse = horseInfo;
    }
  }

  renderItem = (label: string, testid: string, text?: string | number) => (
    <ion-item>
      <ion-label>{label}:</ion-label>
      {/* all are NOT editable for now... */}
      <ion-text contentEditable={false} data-testid={`page-horse.${testid}`}>
        {text || ''}
      </ion-text>
    </ion-item>
  );

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title color="primary">Horse Details</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        {this.horse && (
          <ion-list>
            {this.renderItem('Name', 'name', this.horse.name)}
            {this.renderItem('Favorite Food', 'favoriteFood', this.horse.profile.favouriteFood)}
            {this.renderItem('Height', 'physical-height', this.horse.profile.physical.height)}
            {this.renderItem('Weight', 'physical-weight', this.horse.profile.physical.weight)}
          </ion-list>
        )}
      </ion-content>,
    ];
  }
}
