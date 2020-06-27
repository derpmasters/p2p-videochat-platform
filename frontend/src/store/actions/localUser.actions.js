import {INIT_LOCAL_USER_PEER, INIT_LOCAL_USER_SOCKET, RESET_LOCAL_USER, SET_LOCAL_USER_LOADING, SET_LOCAL_USER_METADATA} from '../actionTypes';
import Peer from "peerjs";
import {API_BASE_URL, PORT_SIGNALING, PORT_SOCKET, SSL_ENABLED} from "../../constants";
import io from "socket.io-client";
import {persistData, serializeQueryString} from "../../utils";
import {addConnection, removeConnection} from "./connections.actions";
import {addCall} from "./calls.actions";
import {startLocalStream} from "./streams.actions";

export const resetLocalUser = () => ({type: RESET_LOCAL_USER});

const initLocalUserPeer = (customPeerId) => async (dispatch, getState) => {
    const peer = await new Peer(customPeerId, {
        host: API_BASE_URL,
        port: PORT_SIGNALING,
        path: '/peer/signal',
        // debug: 3,
        config: {iceServers: [{url: 'stun:stun.l.google.com:19302'}]}
    });

    await dispatch({type: INIT_LOCAL_USER_PEER, payload: {peer}});
    // await dispatch(startLocalStream(peer));
    await dispatch(initLocalUserPeerListeners(peer));
    dispatch({type: SET_LOCAL_USER_LOADING, payload: {loading: false}});
};

/**
 * Init the socket.io client. Once socket is ready, init the peerJS Peer and store them in the store.
 */
export const initLocalUser = (metadata) => async (dispatch, getState) => {
    if (getState().localUser.loading) { return; }
    dispatch({type: SET_LOCAL_USER_LOADING, payload: {loading: true}});
    // const metadata = getState().localUser.metadata || {};
    // FIXME peer init can fail when socket.id start with an underscore. Rarely happens though, allow peerId to be different from socketId
    const protocol = SSL_ENABLED ? 'https' : 'http';
    const socket = io(`${protocol}://${API_BASE_URL}:${PORT_SOCKET}`, {
        // transports: ['websocket'],
        secure: SSL_ENABLED,
        query: serializeQueryString(metadata)
    });

    socket.on('ready', (socketId) => {
        dispatch({type: INIT_LOCAL_USER_SOCKET, payload: {socket}});
        dispatch(initLocalUserPeer(socketId));
    });

    socket.on('user-leave', (socketId) => {
        const connection = getState().connections.data[socketId];
        if (connection) {
            dispatch(removeConnection(connection));
        }
    });
};

const initLocalUserPeerListeners = (peer) => async (dispatch, getState) => {
    const localPeer = peer || getState().localUser.peer;

    if (localPeer) {
        localPeer.on('open', id => {
        });

        localPeer.on('connection', connection => {
            dispatch(addConnection(connection));
        });

        localPeer.on('call', async call => {
            const localStream = await getState().streams.data[localPeer.id] || dispatch(startLocalStream(peer));
            call.answer(localStream);
            dispatch(addCall(call));
        })
    }
};

export const setMetadata = (metadata) => (dispatch, getState) => {
    persistData('metadata', metadata);
    dispatch({type: SET_LOCAL_USER_METADATA, payload: {metadata}});
};
