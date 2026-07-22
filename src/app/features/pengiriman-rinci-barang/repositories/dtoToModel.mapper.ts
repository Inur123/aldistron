import { PengirimanRinciBarangDto } from '../models/pengiriman-rinci-barang.dto';
import { PengirimanRinciBarang } from '../models/pengiriman-rinci-barang.model';

export class DtoToModelMapper {
  static toModel(dto: PengirimanRinciBarangDto): PengirimanRinciBarang {
    return dto as unknown as PengirimanRinciBarang;
  }

  static toModelList(dtos: PengirimanRinciBarangDto[]): PengirimanRinciBarang[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
