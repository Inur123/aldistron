import { HargaDiskonProdukDto } from '../models/harga-diskon-produk.dto';
import { HargaDiskonProduk } from '../models/harga-diskon-produk.model';

export class DtoToModelMapper {
  static toModel(dto: HargaDiskonProdukDto): HargaDiskonProduk {
    return dto as unknown as HargaDiskonProduk;
  }

  static toModelList(dtos: HargaDiskonProdukDto[]): HargaDiskonProduk[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
