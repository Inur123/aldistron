import { KlaimBiayaRinciDto } from '../models/klaim-biaya-rinci.dto';
import { KlaimBiayaRinci } from '../models/klaim-biaya-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: KlaimBiayaRinciDto): KlaimBiayaRinci {
    return dto as unknown as KlaimBiayaRinci;
  }

  static toModelList(dtos: KlaimBiayaRinciDto[]): KlaimBiayaRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
