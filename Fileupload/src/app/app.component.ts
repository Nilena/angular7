import { Component,ViewChild } from '@angular/core';
import { ImageCroppedEvent , ImageCropperComponent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  
  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;
  title = 'Fileupload';
  imageChangedEvent: any = '';
croppedImage: any = '';

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);
}
imageLoaded() {
    // show cropper
}
loadImageFailed() {
    // show message
}
}
