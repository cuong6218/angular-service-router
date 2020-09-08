import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary = [
    {id: '1', english: 'Dog', vietnam: 'Con chó', desc: 'dog is a name'},
    {id: '2', english: 'Cat', vietnam: 'Con mèo', desc: 'cat is a name'},
    {id: '3', english: 'Snake', vietnam: 'Con rắn', desc: 'snake is a name'},
    {id: '4', english: 'Fish', vietnam: 'Con cá', desc: 'fish is a name'},
  ];
  constructor() { }
  find(id:string)
  {
    return this.dictionary.find(item => item.id === id);
  }
}
