import { VerifikasiRinciDto } from '../models/verifikasi-rinci.dto';
import { VerifikasiRinci } from '../models/verifikasi-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: VerifikasiRinciDto): VerifikasiRinci {
    return {
      id: dto.id,
      idVerifikasi: dto.id_verifikasi,
      idCabang: dto.id_cabang,
      kodeVerifikasi: dto.kode_verifikasi,
      kodeRegister: dto.kode_register,
      idUserdata: dto.id_userdata,
      userRegister: dto.user_register,
      emailRegister: dto.email_register,
      divisi: dto.divisi,
      kelasAkses: dto.kelas_akses,
      idVendor: dto.id_vendor,
      namaVendor: dto.nama_vendor,
      keteranganKode: dto.keterangan_kode,
      logAolbranchId: dto.log_aolbranch_id,
      idDevice: dto.id_device,
      device: dto.device,
      level: dto.level,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: VerifikasiRinciDto[]): VerifikasiRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
