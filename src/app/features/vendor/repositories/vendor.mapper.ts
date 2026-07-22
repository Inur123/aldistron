import { VendorDto } from '../models/vendor.dto';
import { Vendor } from '../models/vendor.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class VendorMapper {
  static toModel(dto: VendorDto): Vendor {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: VendorDto[]): Vendor[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: Vendor): VendorDto {
    return ModelToDtoMapper.toDto(model);
  }
}
