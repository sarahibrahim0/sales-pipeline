import {Output, EventEmitter} from '@angular/core'
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DealsService } from 'src/app/services/deals/deals.service';
import { Deal } from 'src/app/interfaces/deal';
import { __values } from 'tslib';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  constructor(private dealsService: DealsService) { }

  enteredSearchValue : string

@Output()searchTextChanged :EventEmitter<string> = new EventEmitter<string>()

  deals = []
  potentialValue = [];
  focus = [];
  contactMade = [];
  offerSent = [];
  gettingReady = [];


  drop(event: CdkDragDrop<string[]>, status: string) {
    let dataStatus = status
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('5araa')


    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );


      let currentObj = JSON.stringify(event.container.data[event.currentIndex]);
      let currenParse = JSON.parse(currentObj)

      let selected
      switch (dataStatus) {
        case 'Potential Value':
          if (event.container.data.length !== 0) {
            selected = this.potentialValue.find(item => {
              return item.status === currenParse.status
            });
            selected.status = 'Potential Value';
          }
          break;
        case 'Focus':
          selected = this.focus.find(item => {
            return item.status === currenParse.status
          });
          selected.status = 'Focus';
          break;
        case 'Contact Made':
          selected = this.contactMade.find(item => {
            return item.status === currenParse.status
          });
          selected.status = 'Contact Made';
          break;

        case 'Offer Sent':
          selected = this.offerSent.find(item => {
            return item.status === currenParse.status
          });
          selected.status = 'Offer Sent';
          break;
        case 'Getting Ready':
          selected = this.gettingReady.find(item => {
            return item.status === currenParse.status
          });
          selected.status = 'Getting Ready';
          break;
        default:
          return
      }

    }
  }


  ngOnInit() {
    this.getDeals();
  }

  private getDeals() {
    this.dealsService.getDeals().subscribe((deals: [Deal]) => {
      deals.map((deal: Deal) => {
        return this.deals.push(deal);
      })

      this.getPotentialValueStatus();
      this.getFocusStatus();
      this.getContactMadeStatus();
      this.getOfferSentStatus();
      this.getGettingReadyStatus();

    })

  }

  private getPotentialValueStatus() {
    this.deals.map(deal => {
      if (deal.status === 'Potential Value') {
        this.potentialValue.push(deal);
      }
    })
  }

  private getFocusStatus() {
    this.deals.map(deal => {
      if (deal.status === 'Focus') {
        this.focus.push(deal);
      }
    })
  }



  private getContactMadeStatus() {
    this.deals.map(deal => {
      if (deal.status === 'Contact Made') {
        this.contactMade.push(deal);
      }
    })
  }

  private getOfferSentStatus() {
    this.deals.map(deal => {
      if (deal.status === 'Offer Sent') {
        this.offerSent.push(deal);
      }
    })
  }

  private getGettingReadyStatus() {
    this.deals.map(deal => {
      if (deal.status === 'Getting Ready') {
        this.gettingReady.push(deal);
      }
    })
  }

  onSearch(){
    this.searchTextChanged.emit(this.enteredSearchValue)
     }}
