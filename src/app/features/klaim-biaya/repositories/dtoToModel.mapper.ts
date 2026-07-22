import { KlaimBiayaDto } from '../models/klaim-biaya.dto';
import { KlaimBiaya } from '../models/klaim-biaya.model';

export class DtoToModelMapper {
  static toModel(dto: KlaimBiayaDto): KlaimBiaya {
    return dto as unknown as KlaimBiaya;
  }

  static toModelList(dtos: KlaimBiayaDto[]): KlaimBiaya[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
