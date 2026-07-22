import { HargaDiskonDto } from '../models/harga-diskon.dto';
import { HargaDiskon } from '../models/harga-diskon.model';

export class DtoToModelMapper {
  static toModel(dto: HargaDiskonDto): HargaDiskon {
    return dto as unknown as HargaDiskon;
  }

  static toModelList(dtos: HargaDiskonDto[]): HargaDiskon[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
