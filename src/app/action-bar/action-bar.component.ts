import {Component} from '@angular/core';
import {HeaderService} from "./services/header.service";

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
})
export class ActionBarComponent {
  private grayscaleActive = false;
  constructor(private headerService: HeaderService) {}
  fetchPhotosClicked(){
    this.headerService.fetchPhotosClicked.next();
  }
  toggleGrayscale(){
    this.grayscaleActive = !this.grayscaleActive;
    this.headerService.isGrayscaleEnabled.next(this.grayscaleActive);
  }
}

