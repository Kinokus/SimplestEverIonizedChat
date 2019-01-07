import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../messages.service';


@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.page.html',
    styleUrls: ['./chat-window.page.scss'],
})
export class ChatWindowPage implements OnInit {

    placeholder = 'message text';
    messageInput: string;


    constructor(private messagesService: MessagesService) {
    }

    ngOnInit() {
    }

    sendMessage() {
        this.messagesService
            .sendMessage(this.messageInput)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }


}
