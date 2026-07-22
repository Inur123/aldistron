import { KunjunganJualRinciDto } from '../models/kunjungan-jual-rinci.dto';
import { KunjunganJualRinci } from '../models/kunjungan-jual-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: KunjunganJualRinci): KunjunganJualRinciDto {
    return model as unknown as KunjunganJualRinciDto;
  }
}
