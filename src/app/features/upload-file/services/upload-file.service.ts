import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadFileDto } from '../models/upload-file.dto';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  private readonly endpoint = 'upload-file';

  constructor(private http: HttpClient) {}

  getUploadFiles(): Observable<UploadFileDto[]> {
    return this.http.get<UploadFileDto[]>("https://api.aldistron.com/upload-file");
  }
}
