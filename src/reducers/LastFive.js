const LastFive = (state = 0, action) => {
    switch(action.type) {
        case 'First Data':

            return state +1

        case "Second Data":

            return state + 2;

        case "Third Data":

            return state +3;

        case "Fourth Data":

            return state +4;

        case "Fifth Data":

        return state +5;

        default:

        return state ;

    }
}

export default LastFive;