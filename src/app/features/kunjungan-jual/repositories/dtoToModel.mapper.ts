import { KunjunganJualDto } from '../models/kunjungan-jual.dto';
import { KunjunganJual } from '../models/kunjungan-jual.model';

export class DtoToModelMapper {
  static toModel(dto: KunjunganJualDto): KunjunganJual {
    return dto as unknown as KunjunganJual;
  }

  static toModelList(dtos: KunjunganJualDto[]): KunjunganJual[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
