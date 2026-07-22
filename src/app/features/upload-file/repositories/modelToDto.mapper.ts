import { UploadFileDto } from '../models/upload-file.dto';
import { UploadFile } from '../models/upload-file.model';

export class ModelToDtoMapper {
  static toDto(model: UploadFile): UploadFileDto {
    return model as unknown as UploadFileDto;
  }
}
