import { Injectable } from '@angular/core';

@Injectable()
export class MessageProvider{
    public getMessage(): string{
        return "Hey! Mahfuz Shazol"
    }
}