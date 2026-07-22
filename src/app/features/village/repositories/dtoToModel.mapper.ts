import { VillageDto } from '../models/village.dto';
import { Village } from '../models/village.model';

export class DtoToModelMapper {
  static toModel(dto: VillageDto): Village {
    return dto as unknown as Village;
  }

  static toModelList(dtos: VillageDto[]): Village[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
