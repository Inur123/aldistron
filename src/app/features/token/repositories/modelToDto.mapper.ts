import { TokenDto } from '../models/token.dto';
import { Token } from '../models/token.model';

export class ModelToDtoMapper {
  static toDto(model: Token): TokenDto {
    return model as unknown as TokenDto;
  }
}
