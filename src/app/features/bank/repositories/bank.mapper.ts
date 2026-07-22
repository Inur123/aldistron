import { BankDto } from '../models/bank.dto';
import { Bank } from '../models/bank.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class BankMapper {
  static toModel(dto: BankDto): Bank {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: BankDto[]): Bank[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Bank): BankDto {
    return ModelToDtoMapper.toDto(model);
  }
}
