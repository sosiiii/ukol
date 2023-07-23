import { Component, Input } from '@angular/core';

import {Photo} from "./photo.model";

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
})
export class PhotoItemComponent {
  @Input() inputPhoto: Photo = new Photo("","","");
  @Input() grayscaleActive = false;


}
