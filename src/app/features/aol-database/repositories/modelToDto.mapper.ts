import { AolDatabaseDto } from '../models/aol-database.dto';
import { AolDatabase } from '../models/aol-database.model';

export class ModelToDtoMapper {
  static toDto(model: AolDatabase): AolDatabaseDto {
    return {
      id: model.id,
      id_aoldb: model.idAoldb,
      id_aoltoken: model.idAoltoken,
      nama_aoldatabase: model.namaAoldatabase,
      aktif_aoldatabase: model.aktifAoldatabase,
      sync_satu: model.syncSatu,
      sync_dua: model.syncDua,
      accessible_until_aoldatabase: model.accessibleUntilAoldatabase.toISOString(),
      user_aolconnector: model.userAolconnector,
      email_aolconnector: model.emailAolconnector,
      handphone_aoldatabase: model.handphoneAoldatabase,
      id_alserwa: model.idAlserwa,
      sync_employee: model.syncEmployee,
      id_employee: model.idEmployee,
      id_salesman: model.idSalesman,
      kode_seri_koneksi: model.kodeSeriKoneksi,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString(),
      deleted_at: model.deletedAt ? model.deletedAt.toISOString() : null
    };
  }
}
