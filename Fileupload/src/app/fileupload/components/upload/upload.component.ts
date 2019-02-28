import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';


  const URL = 'https://localhost:3000/api/upload';
  @Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }
  

  public uploader: FileUploader = new FileUploader(
    {url: URL, itemAlias: 'photo'});
  ngOnInit() {

  this.uploader.onAfterAddingFile = (file) => 
    { 
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
  }

}
}



  