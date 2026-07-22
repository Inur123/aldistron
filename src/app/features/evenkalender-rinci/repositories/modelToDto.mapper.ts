import { EvenkalenderRinciDto } from '../models/evenkalender-rinci.dto';
import { EvenkalenderRinci } from '../models/evenkalender-rinci.model';

export class ModelToDtoMapper {
  static toDto(model: EvenkalenderRinci): EvenkalenderRinciDto {
    return model as unknown as EvenkalenderRinciDto;
  }
}
