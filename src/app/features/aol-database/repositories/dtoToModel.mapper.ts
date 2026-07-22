import { AolDatabaseDto } from '../models/aol-database.dto';
import { AolDatabase } from '../models/aol-database.model';

export class DtoToModelMapper {
  static toModel(dto: AolDatabaseDto): AolDatabase {
    return {
      id: dto.id,
      idAoldb: dto.id_aoldb,
      idAoltoken: dto.id_aoltoken,
      namaAoldatabase: dto.nama_aoldatabase,
      aktifAoldatabase: dto.aktif_aoldatabase,
      syncSatu: dto.sync_satu,
      syncDua: dto.sync_dua,
      accessibleUntilAoldatabase: new Date(dto.accessible_until_aoldatabase),
      userAolconnector: dto.user_aolconnector,
      emailAolconnector: dto.email_aolconnector,
      handphoneAoldatabase: dto.handphone_aoldatabase,
      idAlserwa: dto.id_alserwa,
      syncEmployee: dto.sync_employee,
      idEmployee: dto.id_employee,
      idSalesman: dto.id_salesman,
      kodeSeriKoneksi: dto.kode_seri_koneksi,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: AolDatabaseDto[]): AolDatabase[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
