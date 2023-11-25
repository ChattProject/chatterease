import { io } from 'socket.io-client';

const socket = io('https://wechat-85y195m1.b4a.run/api/chats/');

export default socket;

// const socket = Server('https://wechat-85y195m1.b4a.run')

