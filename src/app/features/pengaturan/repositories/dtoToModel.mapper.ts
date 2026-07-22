import { PengaturanDto } from '../models/pengaturan.dto';
import { Pengaturan } from '../models/pengaturan.model';

export class DtoToModelMapper {
  static toModel(dto: PengaturanDto): Pengaturan {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      perusahaan: dto.perusahaan,
      parameter: dto.parameter,
      namaParam: dto.nama_param,
      namaSlug: dto.nama_slug,
      paramInt: dto.param_int,
      paramString: dto.param_string,
      katString: dto.kat_string,
      paramArray: dto.param_array,
      keterangan: dto.keterangan,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: PengaturanDto[]): Pengaturan[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
