import { PelangganKategoriDto } from '../models/pelanggan-kategori.dto';
import { PelangganKategori } from '../models/pelanggan-kategori.model';

export class ModelToDtoMapper {
  static toDto(model: PelangganKategori): PelangganKategoriDto {
    return model as unknown as PelangganKategoriDto;
  }
}
