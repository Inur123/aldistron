import { HttpStatusDto } from '../models/http-status.dto';
import { HttpStatus } from '../models/http-status.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class HttpStatusMapper {
  static toModel(dto: HttpStatusDto): HttpStatus {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: HttpStatusDto[]): HttpStatus[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: HttpStatus): HttpStatusDto {
    return ModelToDtoMapper.toDto(model);
  }
}
