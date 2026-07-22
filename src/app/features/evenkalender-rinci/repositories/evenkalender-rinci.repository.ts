import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EvenkalenderRinciService } from '../services/evenkalender-rinci.service';
import { EvenkalenderRinci } from '../models/evenkalender-rinci.model';
import { EvenkalenderRinciMapper } from './evenkalender-rinci.mapper';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderRinciRepository {
  constructor(private service: EvenkalenderRinciService) {}

  getEvenkalenderRincis(): Observable<EvenkalenderRinci[]> {
    return this.service.getEvenkalenderRincis().pipe(
      map(dtos => EvenkalenderRinciMapper.toModelList(dtos))
    );
  }
}
