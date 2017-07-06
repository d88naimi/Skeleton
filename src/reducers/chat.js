import * as fromChat from '../actions/chat';

const initialState = { totalNewMsgCounter: 0, ids: [], entities: null, withs: [], selected: null,  messages: [], unread: [] };

/**
 * Reducer
 */
export function reducer(state = initialState, action) {
  switch (action.type) {

    case fromChat.LOAD_ROOMS: {
      const rooms = action.payload.rooms.map(room => {
        room[room.user1._id] = { name: room.user1.name, photoURL: room.user1.photoURL};
        room[room.user2._id] = { name: room.user2.name, photoURL: room.user2.photoURL};
        return room;
      }); //array
      const userId = action.payload.userId;
      const ids = rooms.map(room => room._id);
      const entities = rooms.reduce((acc, room) => Object.assign(acc, {[room._id]: room}), {});
      const withs = rooms.reduce((acc, room) =>
        room.user1._id === userId ?
          Object.assign(acc, {[room.user2._id]: room._id}) : Object.assign(acc, {[room.user1._id]: room._id}), {});
      return Object.assign({}, state, {ids, entities, withs});
    }

    case fromChat.LOAD_ROOM: {
      const rawRoom = action.payload.room;
      const room = Object.assign({}, rawRoom, {
        [rawRoom.user1._id]: { name: rawRoom.user1.name, photoURL: rawRoom.user1.photoURL},
        [rawRoom.user2._id]: { name: rawRoom.user2.name, photoURL: rawRoom.user2.photoURL}
      });
      const userId = action.payload.userId;
      const ids = [...state.ids, room._id];
      const entities = Object.assign({}, state.entities, {[room._id]: room});
      const withs = Object.assign({}, state.withs, room.user1._id === userId ? {[room.user2._id]: room._id} : {[room.user1._id]: room._id});
      return Object.assign({}, state, {ids, entities, withs});
    }

    case fromChat.LOAD_MESSAGES: {
      const messages = action.payload.messages; //array
      const selected = action.payload.roomId;
      const room = Object.assign({}, state.entities[selected], { hasNewMsg: false, newMsgCounter: 0});
      const entities = Object.assign({}, state.entities, {[selected]: room});
      const totalNewMsgCounter = state.totalNewMsgCounter - (state.entities[selected].newMsgCounter || 0);
      return Object.assign({}, state, {messages, selected, entities, totalNewMsgCounter});
    }

    case fromChat.LOAD_MESSAGE: {
      const message = action.payload;
      if(message.room === state.selected) {
        return Object.assign({}, state, {messages: [...state.messages, message]});
      } else {
        const totalNewMsgCounter = state.totalNewMsgCounter + 1;
        const newMsgCounter = (state.entities[message.room].newMsgCounter || 0) + 1;
        const room = Object.assign({}, state.entities[message.room], {latestMessage: message.text, hasNewMsg: true, newMsgCounter});
        const entities = Object.assign({}, state.entities, {[message.room]: room});

        return Object.assign({}, state, {totalNewMsgCounter, entities});
      }
    }

    case fromChat.SELECT_ROOM: {
      const room = action.payload;
      return Object.assign({}, state, {selected: room._id});
    }

    case fromChat.CHECKED_NEW_MESSAGES: {
      return Object.assign({}, state, {totalNewMsgCounter: 0});
    }

    case fromChat.UNSELECT_ROOM: {
      const selected = null;
      return Object.assign({}, state, {selected});
    }

    default:
      return state;
  }

    // case fromChat.LOAD_MESSAGES: {
    //   const userId = action.payload.userId;
    //   const messages = action.payload.messages; // array of messages({to: , from: , text: , createdAt: , updatedAt: })
    //   return {
    //     messages: messages.reduce((acc, msg) => {
    //       const opponent = msg.to._id === userId ? msg.from._id : msg.to._id;
    //       if(!acc[opponent]) acc[opponent] = [];
    //       acc[opponent].push(msg);
    //       return acc;
    //     }, {}),
    //     newMsgCounter: state.newMsgCounter
    //   }
    //
    // }
    //
    // case fromChat.LOAD_MESSAGE: {
    //   const message = action.payload.message;
    //   const opponent = actions.payload.isYours ? message.to._id : message.from._id;
    //
    //   let messages;
    //   if(!state[opponent]) {
    //     messages = Object.assign({}, state.messages, {[opponent]: [message]});
    //   }
    //   else {
    //     messages = Object.assign({}, state.messages, {[opponent]: [...state.messages[opponent], message]});
    //   }
    //   return {
    //     messages,
    //     newMsgCounter: state.newMsgCounter + 1
    //   }
    // }
    //
    // case fromChat.OPEN_CHAT_ROOM: {
    //   const from = action.payload.from;
    //   const to = action.payload.to;
    //
    //
    // }

}

/**
 * Selectors
 */
export const getChatRoomList = (state) => state.ids.map(id => state.entities[id]);