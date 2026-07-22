import { HttpStatusDto } from '../models/http-status.dto';
import { HttpStatus } from '../models/http-status.model';

export class ModelToDtoMapper {
  static toDto(model: HttpStatus): HttpStatusDto {
    return model as unknown as HttpStatusDto;
  }
}
