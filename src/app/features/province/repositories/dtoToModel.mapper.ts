import { ProvinceDto } from '../models/province.dto';
import { Province } from '../models/province.model';

export class DtoToModelMapper {
  static toModel(dto: ProvinceDto): Province {
    return dto as unknown as Province;
  }

  static toModelList(dtos: ProvinceDto[]): Province[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
