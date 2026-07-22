import { HargaJualDto } from '../models/harga-jual.dto';
import { HargaJual } from '../models/harga-jual.model';

export class DtoToModelMapper {
  static toModel(dto: HargaJualDto): HargaJual {
    return dto as unknown as HargaJual;
  }

  static toModelList(dtos: HargaJualDto[]): HargaJual[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
