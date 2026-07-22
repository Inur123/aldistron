import { HargaDiskonRinciDto } from '../models/harga-diskon-rinci.dto';
import { HargaDiskonRinci } from '../models/harga-diskon-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: HargaDiskonRinciDto): HargaDiskonRinci {
    return dto as unknown as HargaDiskonRinci;
  }

  static toModelList(dtos: HargaDiskonRinciDto[]): HargaDiskonRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
