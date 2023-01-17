import { Component } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color: white;
        border-radius: 5px;
    }`]
})

export class ServerComponent{
    serverId: number = 0;
    min = Math.ceil(1);
    max = Math.floor(100);
    serverStatus: string = 'offline';
    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        this.serverId = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}