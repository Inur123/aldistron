import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { KabarpasarchatService } from '../services/kabarpasarchat.service';
import { Kabarpasarchat } from '../models/kabarpasarchat.model';
import { KabarpasarchatMapper } from './kabarpasarchat.mapper';

@Injectable({
  providedIn: 'root'
})
export class KabarpasarchatRepository {
  constructor(private service: KabarpasarchatService) {}

  getKabarpasarchats(): Observable<Kabarpasarchat[]> {
    return this.service.getKabarpasarchats().pipe(
      map(dtos => KabarpasarchatMapper.toModelList(dtos))
    );
  }
}
