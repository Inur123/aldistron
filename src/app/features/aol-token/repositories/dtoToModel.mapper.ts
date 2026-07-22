import { AolTokenDto } from '../models/aol-token.dto';
import { AolToken } from '../models/aol-token.model';

export class DtoToModelMapper {
  static toModel(dto: AolTokenDto): AolToken {
    return {
      id: dto.id,
      accessToken: dto.access_token,
      refreshToken: dto.refresh_token,
      expiresIn: dto.expires_in,
      tokenType: dto.token_type,
      scope: dto.scope,
      tglExpired: new Date(dto.tgl_expired),
      aoluserName: dto.aoluser_name,
      aoluserNickname: dto.aoluser_nickname,
      aoluserMobile: dto.aoluser_mobile,
      aoluserId: dto.aoluser_id,
      aoluserEmail: dto.aoluser_email,
      kodeseriKoneksi: dto.kodeseri_koneksi,
      createdAt: dto.created_at ? new Date(dto.created_at) : undefined,
      updatedAt: dto.updated_at ? new Date(dto.updated_at) : undefined
    };
  }

  static toModelList(dtos: AolTokenDto[]): AolToken[] {
    return dtos.map(dto => this.toModel(dto));
  }
}
