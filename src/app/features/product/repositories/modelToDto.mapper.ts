import { Product } from '../models/product.model';
import { ProductDto } from '../models/product.dto';

export class ModelToDtoMapper {
  static toDto(model: Product): ProductDto {
    return {
      id: model.id,
      id_aoldatabase: model.idAoldatabase,
      id_aoldb: model.idAoldb,
      id_vendor: model.idVendor,
      id_produkbrand: model.idProdukbrand,
      id_produkkategori: model.idProdukkategori,
      id_aolprod: model.idAolprod,
      nama_vendor_produk: model.namaVendorProduk,
      nama_brand_produk: model.namaBrandProduk,
      nama_kategori_produk: model.namaKategoriProduk,
      nomor_produk: model.nomorProduk,
      nama_produk: model.namaProduk,
      jenis_produk: model.jenisProduk,
      barcode_produk: model.barcodeProduk,
      keterangan_produk: model.keteranganProduk,
      aktif_produk: model.aktifProduk,
      konversi_unit1: model.konversiUnit1,
      konversi_unit2: model.konversiUnit2,
      konversi_unit3: model.konversiUnit3,
      konversi_unit4: model.konversiUnit4,
      konversi_unit5: model.konversiUnit5,
      rasio_unit1: model.rasioUnit1,
      rasio_unit2: model.rasioUnit2,
      rasio_unit3: model.rasioUnit3,
      rasio_unit4: model.rasioUnit4,
      rasio_unit5: model.rasioUnit5,
      gramasi_produk: model.gramasiProduk,
      panjang_produk_kecil: model.panjangProdukKecil,
      lebar_produk_kecil: model.lebarProdukKecil,
      tinggi_produk_kecil: model.tinggiProdukKecil,
      panjang_produk_besar: model.panjangProdukBesar,
      lebar_produk_besar: model.lebarProdukBesar,
      tinggi_produk_besar: model.tinggiProdukBesar,
      gambar_produk: model.gambarProduk,
      minim_beli_unit1: model.minimBeliUnit1,
      minim_stok_unit1: model.minimStokUnit1,
      log_aolcat_id: model.logAolcatId,
      log_aolven_id: model.logAolvenId,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString(),
      deleted_at: model.deletedAt ? model.deletedAt.toISOString() : null
    };
  }
}
