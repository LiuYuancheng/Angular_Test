import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public message: string[] = [];

  constructor() { }

  public add(message:string){
    this.message.push(message);
  }

  public clear(){
    this.message = [];
  }


}
