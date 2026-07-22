import { Useradmin } from '../../useradmin/models/useradmin.model';
import { Userdata } from '../../userdata/models/userdata.model';
import { Token } from '../../token/models/token.model';
import { AolSession } from '../../aol-session/models/aol-session.model';

export interface AuthSession {
  token: Token;
  useradmin: Useradmin;
  userdata: Userdata;
  aolSession?: AolSession;
}
