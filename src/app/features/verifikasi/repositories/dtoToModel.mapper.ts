import { VerifikasiDto } from '../models/verifikasi.dto';
import { Verifikasi } from '../models/verifikasi.model';

export class DtoToModelMapper {
  static toModel(dto: VerifikasiDto): Verifikasi {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      perusahaan: dto.perusahaan,
      namaAdministrator: dto.nama_administrator,
      emailAdministrator: dto.email_administrator,
      emailAolconnector: dto.email_aolconnector,
      serialNumber: dto.serial_number,
      kodeMaksimal: dto.kode_maksimal,
      expiredDate: new Date(dto.expired_date),
      serialAktif: dto.serial_aktif,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: VerifikasiDto[]): Verifikasi[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
