const socket = require('socket.io-client')(process.env.SOCKET_URL || 'http://localhost:4000');
export class SocketServices {
    async sendToSocket(data, event) {
        try {
            if (!socket.connected) {
                socket.connect();
            }

            socket.on('disconnect', (reason) => {
                socket.connect();
            });

            socket.on('connect_error', (error) => {
                socket.connect();
            });

            socket.emit(event, { data });
        } catch (error) {
            console.log('sendToSocket::error', error);
        }
    }

    createTransactionSocketData(user, content, transaction) {
        return {
            user: user,
            content: content,
            transaction: transaction,
        };
    }
}
