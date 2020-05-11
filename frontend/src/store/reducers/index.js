import { combineReducers } from 'redux';
import roomReducer from './room.reducer';
import localUserReducer from "./localUser.reducer";
import peersReducer from './peers.reducer';
import connectionsReducer from './connections.reducer';
import callsReducer from './calls.reducer';
import streamsReducer from "./streams.reducer";

const reducer = combineReducers({
    // room: roomReducer,
    localUser: localUserReducer,
    peers: peersReducer,
    calls: callsReducer,
    connections: connectionsReducer,
    streams: streamsReducer
});

export default reducer;
