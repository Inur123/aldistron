import { PelangganRequestDto } from '../models/pelanggan-request.dto';
import { PelangganRequest } from '../models/pelanggan-request.model';

export class DtoToModelMapper {
  static toModel(dto: PelangganRequestDto): PelangganRequest {
    return {
      id: dto.id,
      idAoldatabase: dto.id_aoldatabase,
      idAoldb: dto.id_aoldb,
      idCabang: dto.id_cabang,
      namaAdministrator: dto.nama_administrator,
      emailAdministrator: dto.email_administrator,
      kategoriPelanggan: dto.kategori_pelanggan,
      namaPelanggan: dto.nama_pelanggan,
      kontakPelanggan: dto.kontak_pelanggan,
      kontakEmail: dto.kontak_email,
      kontakHandphone: dto.kontak_handphone,
      kontakAlamat: dto.kontak_alamat,
      alamatKirimPelanggan: dto.alamat_kirim_pelanggan,
      kodeDesa: dto.kode_desa,
      desaPelanggan: dto.desa_pelanggan,
      kecamatanPelanggan: dto.kecamatan_pelanggan,
      kotaPelanggan: dto.kota_pelanggan,
      propinsiPelanggan: dto.propinsi_pelanggan,
      negaraPelanggan: dto.negara_pelanggan,
      latlongPelanggan: dto.latlong_pelanggan,
      alamatTagihPelanggan: dto.alamat_tagih_pelanggan,
      telpPelanggan: dto.telp_pelanggan,
      emailPelanggan: dto.email_pelanggan,
      handphonePelanggan: dto.handphone_pelanggan,
      nikPelanggan: dto.nik_pelanggan,
      npwpPelanggan: dto.npwp_pelanggan,
      keteranganPelanggan: dto.keterangan_pelanggan,
      statusUsaha: dto.status_usaha,
      luasTempat: dto.luas_tempat,
      statusTempat: dto.status_tempat,
      imagePelanggan: dto.image_pelanggan,
      imageKtp: dto.image_ktp,
      idUserrequest: dto.id_userrequest,
      potensialPelanggan: dto.potensial_pelanggan,
      idUservalidasi: dto.id_uservalidasi,
      validasiPelanggan: dto.validasi_pelanggan,
      supplierPelanggan: dto.supplier_pelanggan,
      produkPelanggan: dto.produk_pelanggan,
      feedbackLingkungan: dto.feedback_lingkungan,
      feedbackSalesman: dto.feedback_salesman,
      feedbackSupplier: dto.feedback_supplier,
      plafonPelanggan: dto.plafon_pelanggan,
      idUserrelease: dto.id_userrelease,
      releasePelanggan: dto.release_pelanggan,
      idUsergenerate: dto.id_usergenerate,
      statusGenerate: dto.status_generate,
      blacklist: dto.blacklist,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: PelangganRequestDto[]): PelangganRequest[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
