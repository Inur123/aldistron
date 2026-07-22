import { ArmadaDto } from '../models/armada.dto';
import { Armada } from '../models/armada.model';

export class ModelToDtoMapper {
  static toDto(model: Armada): ArmadaDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_cabang: model.idCabang,
      kode_armada: model.kodeArmada,
      nama_armada: model.namaArmada,
      jenis_armada: model.jenisArmada,
      kategori_armada: model.kategoriArmada,
      tahun_armada: model.tahunArmada,
      panjang_armada: model.panjangArmada,
      lebar_armada: model.lebarArmada,
      tinggi_armada: model.tinggiArmada,
      volume_armada: model.volumeArmada,
      tonase_armada: model.tonaseArmada,
      nopol_armada: model.nopolArmada,
      stnk_expired: model.stnkExpired.toISOString(),
      pic_armada: model.picArmada,
      aktif: model.aktif,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
