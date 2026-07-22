import { TokenDto } from '../models/token.dto';
import { Token } from '../models/token.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class TokenMapper {
  static toModel(dto: TokenDto): Token {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: TokenDto[]): Token[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Token): TokenDto {
    return ModelToDtoMapper.toDto(model);
  }
}
