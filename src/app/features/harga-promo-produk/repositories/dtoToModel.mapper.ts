import { HargaPromoProdukDto } from '../models/harga-promo-produk.dto';
import { HargaPromoProduk } from '../models/harga-promo-produk.model';

export class DtoToModelMapper {
  static toModel(dto: HargaPromoProdukDto): HargaPromoProduk {
    return dto as unknown as HargaPromoProduk;
  }

  static toModelList(dtos: HargaPromoProdukDto[]): HargaPromoProduk[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
