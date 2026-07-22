import { InfoKhususDto } from '../models/info-khusus.dto';
import { InfoKhusus } from '../models/info-khusus.model';

export class DtoToModelMapper {
  static toModel(dto: InfoKhususDto): InfoKhusus {
    return dto as unknown as InfoKhusus;
  }

  static toModelList(dtos: InfoKhususDto[]): InfoKhusus[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
