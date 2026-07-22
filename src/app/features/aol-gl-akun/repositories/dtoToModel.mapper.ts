import { AolGlAkunDto } from '../models/aol-gl-akun.dto';
import { AolGlAkun } from '../models/aol-gl-akun.model';

export class DtoToModelMapper {
  static toModel(dto: AolGlAkunDto): AolGlAkun {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idAolgl: dto.id_aolgl,
      idParentAolgl: dto.id_parent_aolgl,
      nomorAolglakun: dto.nomor_aolglakun,
      namaAolglakun: dto.nama_aolglakun,
      typeAccount: dto.type_account,
      tipeAkun: dto.tipe_akun,
      suspendedAol: dto.suspended_aol,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: AolGlAkunDto[]): AolGlAkun[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
