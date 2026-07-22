import { HargaJualRinciDto } from '../models/harga-jual-rinci.dto';
import { HargaJualRinci } from '../models/harga-jual-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: HargaJualRinciDto): HargaJualRinci {
    return dto as unknown as HargaJualRinci;
  }

  static toModelList(dtos: HargaJualRinciDto[]): HargaJualRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
