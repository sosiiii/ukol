import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Photo} from "../components/photo-item/photo.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor(private httpService: HttpClient) {

  }
  fetchPhotos()
  {
    return this.httpService.post<PhotoDataContent>("https://backend.aukro.cz/backend-web/api/offers/searchItemsCommon?page=0&size=60",
      {
        "categorySeoUrl": "sberatelstvi",
        "fallbackItemsCount": 12,
        "splitGroupKey": "listing",
        "splitGroupValue": "A18"
      }).pipe(map((data: PhotoDataContent) => {
        const randomData = this.getRandomElementsFromArray(data.content, 4);
        return this.createPhotos(randomData)
      }));
  }
  createPhotos(randomPhotosData: PhotoData[]): Photo[]
  {
    const photos: Photo[] = [];
    randomPhotosData.map((data) => {

      const photo= new Photo(
        data.itemName,
        data.sellerLogin,
        data.titleImageUrl
        );

      photos.push(photo);
    });
    return photos;
  }
  getRandomElementsFromArray(elements: PhotoData[], numberOfElements: number) : PhotoData[]
  {
    return elements.sort(() => 0.5 - Math.random()).slice(0,numberOfElements);
  }
}
interface PhotoDataContent {
  content: PhotoData[];
}
interface PhotoData {
  itemName: string;
  sellerLogin: string;
  titleImageUrl: string;
}
