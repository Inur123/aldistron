import { PengirimanRinciBarangDto } from '../models/pengiriman-rinci-barang.dto';
import { PengirimanRinciBarang } from '../models/pengiriman-rinci-barang.model';

export class ModelToDtoMapper {
  static toDto(model: PengirimanRinciBarang): PengirimanRinciBarangDto {
    return model as unknown as PengirimanRinciBarangDto;
  }
}
