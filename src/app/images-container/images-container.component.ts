import {Component, OnDestroy, OnInit} from '@angular/core';
import {PhotoService} from "./services/photo.service";
import {Subscription} from "rxjs";
import {Photo} from "./components/photo-item/photo.model";
import {HeaderService} from "../action-bar/services/header.service";

@Component({
  selector: 'app-images-container',
  templateUrl: './images-container.component.html',
})
export class ImagesContainerComponent implements OnInit, OnDestroy {

  public photoSubscription: Subscription;
  public grayscaleSubscription: Subscription;
  public fetchButtonSubscription: Subscription;
  photoItems: Photo[] = [];
  grayscaleActive = false;

  constructor(private photoService: PhotoService, private headerService: HeaderService) {}
  ngOnInit(){

    this.fetchButtonSubscription = this.headerService.fetchPhotosClicked.subscribe(() => {
      this.photoSubscription = this.photoService.fetchPhotos().subscribe((data)=> {
        this.photoItems = data;
      });
    });
    this.grayscaleSubscription = this.headerService.isGrayscaleEnabled.subscribe((active) => {
      this.grayscaleActive = active;
    })
  }
  ngOnDestroy(): void {
    this.photoSubscription.unsubscribe();
    this.grayscaleSubscription.unsubscribe();
    this.fetchButtonSubscription.unsubscribe();
  }
  photosLoaded () {
    return this.photoItems.length === 4;
  }
}
