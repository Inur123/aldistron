import { KunjunganJualRinciDto } from '../models/kunjungan-jual-rinci.dto';
import { KunjunganJualRinci } from '../models/kunjungan-jual-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: KunjunganJualRinciDto): KunjunganJualRinci {
    return dto as unknown as KunjunganJualRinci;
  }

  static toModelList(dtos: KunjunganJualRinciDto[]): KunjunganJualRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
