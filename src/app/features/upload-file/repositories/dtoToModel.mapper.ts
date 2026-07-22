import { UploadFileDto } from '../models/upload-file.dto';
import { UploadFile } from '../models/upload-file.model';

export class DtoToModelMapper {
  static toModel(dto: UploadFileDto): UploadFile {
    return dto as unknown as UploadFile;
  }

  static toModelList(dtos: UploadFileDto[]): UploadFile[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
