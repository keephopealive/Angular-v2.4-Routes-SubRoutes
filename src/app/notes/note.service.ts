import { Injectable } from '@angular/core';

@Injectable()
export class NoteService {
  notes: any[] = [
    {title:"Build project"},
    {title:"Drink coffee "}
  ];

  constructor() {}
}
