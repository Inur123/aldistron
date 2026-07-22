import { RegencyDto } from '../models/regency.dto';
import { Regency } from '../models/regency.model';

export class DtoToModelMapper {
  static toModel(dto: RegencyDto): Regency {
    return dto as unknown as Regency;
  }

  static toModelList(dtos: RegencyDto[]): Regency[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
