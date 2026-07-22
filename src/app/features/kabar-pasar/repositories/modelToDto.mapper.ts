import { KabarPasarDto } from '../models/kabar-pasar.dto';
import { KabarPasar } from '../models/kabar-pasar.model';

export class ModelToDtoMapper {
  static toDto(model: KabarPasar): KabarPasarDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_cabang: model.idCabang,
      nama_administrator: model.namaAdministrator,
      email_administrator: model.emailAdministrator,
      id_userdata: model.idUserdata,
      id_produk: model.idProduk,
      id_vendor: model.idVendor,
      share_vendor: model.shareVendor,
      id_produk_kompetitor: model.idProdukKompetitor,
      id_pelanggan: model.idPelanggan,
      province_id: model.provinceId,
      regency_id: model.regencyId,
      district_id: model.districtId,
      village_id: model.villageId,
      nama_propinsi: model.namaPropinsi,
      nama_kabupaten: model.namaKabupaten,
      nama_kecamatan: model.namaKecamatan,
      nama_desa: model.namaDesa,
      kategori: model.kategori,
      gambar_kabar: model.gambarKabar,
      keterangan: model.keterangan,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
