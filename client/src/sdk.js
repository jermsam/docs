
import DHT from '@hyperswarm/dht-relay';
import Stream from '@hyperswarm/dht-relay/ws';
import * as SDK from 'hyper-sdk';

const PORT = import.meta.env.VITE_PORT || 3210;
const HOST = import.meta.env.VITE_HOST || 'localhost';

const socket = new WebSocket(`ws://${HOST}:${PORT}`);

const dht = new DHT(new Stream(true, socket))


export const sdk = await SDK.create({
    storage: false,
    autoJoin: false,
    swarmOpts: {
        dht
    },
})
