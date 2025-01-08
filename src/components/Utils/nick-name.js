function nickName(name) {
    let nick = name.split(" ");
    // console.log(nick);
    if (nick.length > 1) {
        return (nick[0][0] + nick[1][0]).toString().toUpperCase();
    } else {
        return (nick[0][0] + nick[0][1]).toString().toUpperCase();
    }
    
}

export default nickName;