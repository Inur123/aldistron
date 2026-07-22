import { AolTokenDto } from '../models/aol-token.dto';
import { AolToken } from '../models/aol-token.model';

export class ModelToDtoMapper {
  static toDto(model: AolToken): AolTokenDto {
    return {
      id: model.id,
      access_token: model.accessToken,
      refresh_token: model.refreshToken,
      expires_in: model.expiresIn,
      token_type: model.tokenType,
      scope: model.scope,
      tgl_expired: model.tglExpired.toISOString(),
      aoluser_name: model.aoluserName,
      aoluser_nickname: model.aoluserNickname,
      aoluser_mobile: model.aoluserMobile,
      aoluser_id: model.aoluserId,
      aoluser_email: model.aoluserEmail,
      kodeseri_koneksi: model.kodeseriKoneksi,
      created_at: model.createdAt?.toISOString(),
      updated_at: model.updatedAt?.toISOString()
    };
  }
}
