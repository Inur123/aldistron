import { AolGlAkunDto } from '../models/aol-gl-akun.dto';
import { AolGlAkun } from '../models/aol-gl-akun.model';

export class ModelToDtoMapper {
  static toDto(model: AolGlAkun): AolGlAkunDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_aolgl: model.idAolgl,
      id_parent_aolgl: model.idParentAolgl,
      nomor_aolglakun: model.nomorAolglakun,
      nama_aolglakun: model.namaAolglakun,
      type_account: model.typeAccount,
      tipe_akun: model.tipeAkun,
      suspended_aol: model.suspendedAol,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString(),
      deleted_at: model.deletedAt ? model.deletedAt.toISOString() : null
    };
  }
}
