import { KabarpasarchatDto } from '../models/kabarpasarchat.dto';
import { Kabarpasarchat } from '../models/kabarpasarchat.model';

export class DtoToModelMapper {
  static toModel(dto: KabarpasarchatDto): Kabarpasarchat {
    return dto as unknown as Kabarpasarchat;
  }

  static toModelList(dtos: KabarpasarchatDto[]): Kabarpasarchat[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
