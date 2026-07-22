import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UploadFileService } from '../services/upload-file.service';
import { UploadFile } from '../models/upload-file.model';
import { UploadFileMapper } from './upload-file.mapper';

@Injectable({
  providedIn: 'root'
})
export class UploadFileRepository {
  constructor(private service: UploadFileService) {}

  getUploadFiles(): Observable<UploadFile[]> {
    return this.service.getUploadFiles().pipe(
      map(dtos => UploadFileMapper.toModelList(dtos))
    );
  }
}
