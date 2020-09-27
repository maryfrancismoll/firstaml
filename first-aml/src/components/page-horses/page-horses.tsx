import { Component, h, State } from '@stencil/core';
import { fetchHorseList, range } from '../../helpers/utils';

@Component({ tag: 'page-horses' })
export class HorsesPage {
  @State()
  horses: Horse[];

  @State()
  page = 1;

  @State()
  pageNumbers = [1];

  readonly pageSize = 2;

  async componentDidLoad() {
    const horses = await fetchHorseList();

    if (horses) {
      this.horses = horses;
    }

    // set the page numbers
    const pages = range(1, this.horses.length / this.pageSize);
    if (pages) {
      this.pageNumbers = pages;
    }
  }

  goToPage = (pageNumber: number) => (this.page = pageNumber);

  render() {
    // get list of horses for page
    const end = this.pageSize * this.page;
    const start = end - this.pageSize;
    const horsesInCurrentPage = this.horses && this.horses.slice(start >= 0 ? start : 0, end <= this.horses.length ? end : this.horses.length);

    return [
      <ion-header>
        <ion-toolbar>
          <ion-title color="primary">Horses</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        {horsesInCurrentPage && (
          <ion-list data-testid="page-horses.list">
            {horsesInCurrentPage.map(horse => (
              <ion-item onClick={() => (window.location.href = `horse/${horse.id}`)}>{horse.name}</ion-item>
            ))}
          </ion-list>
        )}
      </ion-content>,
      <ion-footer>
        <ion-buttons data-testid="page-horses.footer">
          {this.pageNumbers.map(pageNumber => (
            <ion-button color="primary" onClick={() => this.goToPage(pageNumber)}>
              {pageNumber}
            </ion-button>
          ))}
          Current page: {this.page}
        </ion-buttons>
      </ion-footer>,
    ];
  }
}
