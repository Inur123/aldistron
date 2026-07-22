import { HttpStatusDto } from '../models/http-status.dto';
import { HttpStatus } from '../models/http-status.model';

export class DtoToModelMapper {
  static toModel(dto: HttpStatusDto): HttpStatus {
    return dto as unknown as HttpStatus;
  }

  static toModelList(dtos: HttpStatusDto[]): HttpStatus[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
