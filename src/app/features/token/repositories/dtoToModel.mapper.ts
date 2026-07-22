import { TokenDto } from '../models/token.dto';
import { Token } from '../models/token.model';

export class DtoToModelMapper {
  static toModel(dto: TokenDto): Token {
    return dto as unknown as Token;
  }

  static toModelList(dtos: TokenDto[]): Token[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
