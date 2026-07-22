import { KabarpasarchatDto } from '../models/kabarpasarchat.dto';
import { Kabarpasarchat } from '../models/kabarpasarchat.model';

export class ModelToDtoMapper {
  static toDto(model: Kabarpasarchat): KabarpasarchatDto {
    return model as unknown as KabarpasarchatDto;
  }
}
