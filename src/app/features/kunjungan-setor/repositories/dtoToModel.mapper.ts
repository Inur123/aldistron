import { KunjunganSetorDto } from '../models/kunjungan-setor.dto';
import { KunjunganSetor } from '../models/kunjungan-setor.model';

export class DtoToModelMapper {
  static toModel(dto: KunjunganSetorDto): KunjunganSetor {
    return dto as unknown as KunjunganSetor;
  }

  static toModelList(dtos: KunjunganSetorDto[]): KunjunganSetor[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
