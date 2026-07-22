import { PelangganRinciDto } from '../models/pelanggan-rinci.dto';
import { PelangganRinci } from '../models/pelanggan-rinci.model';

export class DtoToModelMapper {
  static toModel(dto: PelangganRinciDto): PelangganRinci {
    return {
      id: dto.id,
      idPelanggan: dto.id_pelanggan,
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
      handphonePelanggan: dto.handphone_pelanggan,
      emailPelanggan: dto.email_pelanggan,
      nikPelanggan: dto.nik_pelanggan,
      npwpPelanggan: dto.npwp_pelanggan,
      keteranganPelanggan: dto.keterangan_pelanggan,
      infokhususPelanggan: dto.infokhusus_pelanggan,
      imagePelanggan: dto.image_pelanggan,
      imageKtp: dto.image_ktp,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined,
      deletedAt: dto.deleted_at ? new Date(dto.deleted_at) : null
    };
  }

  static toModelList(dtos: PelangganRinciDto[]): PelangganRinci[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
