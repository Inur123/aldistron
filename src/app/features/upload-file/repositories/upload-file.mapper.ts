import { UploadFileDto } from '../models/upload-file.dto';
import { UploadFile } from '../models/upload-file.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class UploadFileMapper {
  static toModel(dto: UploadFileDto): UploadFile {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: UploadFileDto[]): UploadFile[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: UploadFile): UploadFileDto {
    return ModelToDtoMapper.toDto(model);
  }
}
