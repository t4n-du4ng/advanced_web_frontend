import { Manager } from 'socket.io-client'

const URL = process.env.REACT_APP_BACKEND_URL

const manager = new Manager(URL, {
    autoConnect: false,
})

const socket = manager.socket('/') // main namespace
const hostSocket = manager.socket('/host') // host namespace
const memberSocket = manager.socket('/member') // member namespace
const messageSocket = manager.socket('/message') // message namespace
const questionSocket = manager.socket('/question') // question namespace
const notificationSocket = manager.socket('/notification') // notification namespace

export { socket, hostSocket, memberSocket, messageSocket, questionSocket, notificationSocket }
