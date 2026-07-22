import { InfoGlobalDto } from '../models/info-global.dto';
import { InfoGlobal } from '../models/info-global.model';

export class DtoToModelMapper {
  static toModel(dto: InfoGlobalDto): InfoGlobal {
    return dto as unknown as InfoGlobal;
  }

  static toModelList(dtos: InfoGlobalDto[]): InfoGlobal[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
