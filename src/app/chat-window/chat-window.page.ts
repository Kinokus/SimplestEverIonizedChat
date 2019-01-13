import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../messages.service';
import {ChatServerResponse} from '../chat-server-response';


@Component({
    selector: 'app-chat-window',
    templateUrl: './chat-window.page.html',
    styleUrls: ['./chat-window.page.scss'],
})
export class ChatWindowPage implements OnInit {

    messageInput: string;
    placeholderMessage = 'message text';
    placeholderFrom = 'message from';
    messageFrom: string;
    serverResponse: string;
    messages: any;


    constructor(private messagesService: MessagesService) {
    }

    ngOnInit() {
    }

    sendMessage() {
        this.messagesService
            .sendMessage(this.messageInput, this.messageFrom)
            .then((data: ChatServerResponse) => {
                this.serverResponse = data.status;
                this.messages = data.messages;
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }


}
