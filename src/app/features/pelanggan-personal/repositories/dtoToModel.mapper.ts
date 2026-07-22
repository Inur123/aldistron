import { PelangganPersonalDto } from '../models/pelanggan-personal.dto';
import { PelangganPersonal } from '../models/pelanggan-personal.model';

export class DtoToModelMapper {
  static toModel(dto: PelangganPersonalDto): PelangganPersonal {
    return dto as unknown as PelangganPersonal;
  }

  static toModelList(dtos: PelangganPersonalDto[]): PelangganPersonal[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
