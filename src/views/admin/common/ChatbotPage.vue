<template>

    <div id="main-content" class="container">
        <div class="row">
            <div class="col-md-6">
                <form class="form-inline">
                    <div class="form-group">
                        <label for="connect">웹소켓 연결:</label>
                        <button @click.prevent="connect" class="btn btn-default">연결</button>
                        <button @click.prevent="disconnect" class="btn btn-default" :disabled="!connected">해제</button>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <form class="form-inline">
                    <div class="form-group">
                        <label for="msg">문의사항</label>
                        <input v-model="message" type="text" id="msg" class="form-control" placeholder="내용을 입력하세요....">
                    </div>
                    <button @click.prevent="sendMessage" class="btn btn-default" :disabled="!connected">보내기</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table id="conversation" class="table table-striped">
                    <thead>
                    <tr>
                        <th>메세지</th>
                    </tr>
                    </thead>
                    <tbody id="communicate">
                    <tr v-for="(msg, index) in messages" :key="index">
                        <td>{{ msg }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>
<script>
import SockJS from 'sockjs-client';
import Stomp from 'webstomp-client';
export default {
    data() {
        return {
            stompClient: null,
            connected: false,
            message: '',
            messages: [],
        };
    },
    methods: {
        setConnected(connected) {
            this.connected = connected;
        },
        connect() {
            const socket = new SockJS('/ws');
            this.stompClient = Stomp.over(socket);
            this.stompClient.connect(
                {},
                (frame) => {
                    this.setConnected(true);
                    console.log('Connected: ' + frame);
                    this.stompClient.subscribe('/topic/public', (message) => {
                        this.showMessage('Received message: ' + message.body);
                    });
                }
            );
        },
        disconnect() {
            if (this.stompClient !== null) {
                this.stompClient.disconnect();
            }
            this.setConnected(false);
            console.log('Disconnected');
        },
        sendMessage() {
            this.showMessage('Sent message: ' + this.message);
            this.stompClient.send(
                '/app/sendMessage',
                this.message
            );
            this.message = '';
        },
        showMessage(message) {
            this.messages.push(message);
        },
    },
};
</script>

<style scoped>
/* Your styles go here */
</style>