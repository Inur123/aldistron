import { HariKerjaDto } from '../models/hari-kerja.dto';
import { HariKerja } from '../models/hari-kerja.model';

export class DtoToModelMapper {
  static toModel(dto: HariKerjaDto): HariKerja {
    return dto as unknown as HariKerja;
  }

  static toModelList(dtos: HariKerjaDto[]): HariKerja[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
