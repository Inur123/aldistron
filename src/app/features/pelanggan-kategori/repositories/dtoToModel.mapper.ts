import { PelangganKategoriDto } from '../models/pelanggan-kategori.dto';
import { PelangganKategori } from '../models/pelanggan-kategori.model';

export class DtoToModelMapper {
  static toModel(dto: PelangganKategoriDto): PelangganKategori {
    return dto as unknown as PelangganKategori;
  }

  static toModelList(dtos: PelangganKategoriDto[]): PelangganKategori[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
