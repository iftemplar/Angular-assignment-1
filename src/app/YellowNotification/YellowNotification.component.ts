import { Component } from '@angular/core';

@Component ({
    selector: 'yellow-notification',
    // templateUrl: './server.component.html',
    template: '<div>I\'m a yellow notification created and styled directly in the .ts file. Also I\'m shown from the Warning alert component! </div>',
    styles: [`
      div{
          background: yellow;
      }  
    `]
})

export class YellowNotification {
}