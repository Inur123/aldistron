import { DistrictDto } from '../models/district.dto';
import { District } from '../models/district.model';

export class DtoToModelMapper {
  static toModel(dto: DistrictDto): District {
    return dto as unknown as District;
  }

  static toModelList(dtos: DistrictDto[]): District[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
