import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../messages.service';

@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.page.html',
    styleUrls: ['./chat-window.page.scss'],
})
export class ChatWindowPage implements OnInit {

    placeholder = 'message text';

    constructor(messagesService: MessagesService) {
    }

    ngOnInit() {
    }

    sendMessage() {
    }


}
