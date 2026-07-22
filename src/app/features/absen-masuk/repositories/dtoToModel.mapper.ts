import { AbsenMasukDto } from '../models/absen-masuk.dto';
import { AbsenMasuk } from '../models/absen-masuk.model';

export class DtoToModelMapper {
  static toModel(dto: AbsenMasukDto): AbsenMasuk {
    return dto as unknown as AbsenMasuk;
  }

  static toModelList(dtos: AbsenMasukDto[]): AbsenMasuk[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
