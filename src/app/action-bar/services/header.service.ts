import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public isGrayscaleEnabled = new BehaviorSubject<boolean>(false);
  public fetchPhotosClicked = new BehaviorSubject<void>(undefined);
}
