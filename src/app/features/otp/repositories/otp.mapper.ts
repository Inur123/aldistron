import { OtpDto } from '../models/otp.dto';
import { Otp } from '../models/otp.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class OtpMapper {
  static toModel(dto: OtpDto): Otp {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: OtpDto[]): Otp[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Otp): OtpDto {
    return ModelToDtoMapper.toDto(model);
  }
}
