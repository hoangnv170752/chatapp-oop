const users = [];

// Join user to chat
class userJoin {
    constructor(id,username, room) {
        id = this.id;
        username = this.username;
        room = this.room;
    }
}
function userJoinned(id, username, room) {
    const user = { id, username, room };
    users.push(user);
    return user;
}
// Get current the user id
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// Get room users
function getRoomUsers(room) {
    return users.filter(user => user.room === room);
}

module.exports = {
    userJoinned,
    getCurrentUser,
    userLeave,
    getRoomUsers
};
      