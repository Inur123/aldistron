import { SiteLogDto } from '../models/site-log.dto';
import { SiteLog } from '../models/site-log.model';

export class DtoToModelMapper {
  static toModel(dto: SiteLogDto): SiteLog {
    return dto as unknown as SiteLog;
  }

  static toModelList(dtos: SiteLogDto[]): SiteLog[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
