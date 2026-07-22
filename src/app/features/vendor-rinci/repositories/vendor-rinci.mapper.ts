import { VendorRinciDto } from '../models/vendor-rinci.dto';
import { VendorRinci } from '../models/vendor-rinci.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class VendorRinciMapper {
  static toModel(dto: VendorRinciDto): VendorRinci {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: VendorRinciDto[]): VendorRinci[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: VendorRinci): VendorRinciDto {
    return ModelToDtoMapper.toDto(model);
  }
}
