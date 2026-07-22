import { HargaJualDto } from '../models/harga-jual.dto';
import { HargaJual } from '../models/harga-jual.model';

export class ModelToDtoMapper {
  static toDto(model: HargaJual): HargaJualDto {
    return model as unknown as HargaJualDto;
  }
}
