import { PengirimanRinciBarangDto } from '../models/pengiriman-rinci-barang.dto';
import { PengirimanRinciBarang } from '../models/pengiriman-rinci-barang.model';
import { DtoToModelMapper } from './dtoToModel.mapper';
import { ModelToDtoMapper } from './modelToDto.mapper';

export class PengirimanRinciBarangMapper {
  static toModel(dto: PengirimanRinciBarangDto): PengirimanRinciBarang {
    return DtoToModelMapper.toModel(dto);
  }

  static toModelList(dtos: PengirimanRinciBarangDto[]): PengirimanRinciBarang[] {
    return DtoToModelMapper.toModelList(dtos);
  }

  static toDto(model: PengirimanRinciBarang): PengirimanRinciBarangDto {
    return ModelToDtoMapper.toDto(model);
  }
}
