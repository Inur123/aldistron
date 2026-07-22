import { HargaJualRinciDto } from '../models/harga-jual-rinci.dto';
import { HargaJualRinci } from '../models/harga-jual-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: HargaJualRinci): HargaJualRinciDto {
    return model as unknown as HargaJualRinciDto;
  }
}
