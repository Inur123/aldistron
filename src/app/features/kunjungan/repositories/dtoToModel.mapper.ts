import { KunjunganDto } from '../models/kunjungan.dto';
import { Kunjungan } from '../models/kunjungan.model';

export class DtoToModelMapper {
  static toModel(dto: KunjunganDto): Kunjungan {
    return dto as unknown as Kunjungan;
  }

  static toModelList(dtos: KunjunganDto[]): Kunjungan[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
