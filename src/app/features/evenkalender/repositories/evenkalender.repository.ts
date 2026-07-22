import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EvenkalenderService } from '../services/evenkalender.service';
import { Evenkalender } from '../models/evenkalender.model';
import { EvenkalenderMapper } from './evenkalender.mapper';

@Injectable({
  providedIn: 'root'
})
export class EvenkalenderRepository {
  constructor(private service: EvenkalenderService) {}

  getEvenkalenders(): Observable<Evenkalender[]> {
    return this.service.getEvenkalenders().pipe(
      map(dtos => EvenkalenderMapper.toModelList(dtos))
    );
  }
}
