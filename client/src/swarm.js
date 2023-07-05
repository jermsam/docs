
import {sdk} from './sdk.js';
import b4a from "b4a";
import goodbye from "graceful-goodbye";

const topicBuffer = await crypto.subtle.digest('SHA-256', b4a.from('files', 'hex')).then(b4a.from)
export const swarm = await sdk.get(topicBuffer)

swarm.on('peer-add', peerInfo => {
    console.log('new peer, peer:', peerInfo, 'peer count:', swarm.peers.length)
})

swarm.on('peer-remove', peerInfo => {
    console.log('Peer ', peerInfo, 'disconnected!')
})


goodbye(async () => {
    // await db.close()
    await swarm.close()
    await sdk.close()
})

sdk.joinCore(swarm).then(() => console.log('discovering'))

