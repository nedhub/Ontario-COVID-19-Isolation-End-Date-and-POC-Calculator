import db from "../fire";



export const addPost = (post) => ({
    type: "ADD_POST",
    post
})



export const startAddPost = (postData = {}) => {
    return (dispatch) => {

        const {
            title = "",
            body = ""
        } = postData;

        const post = {title, body};
        db.ref("posts").push(post).then(() => {
            dispatch(addPost())
        })
    }
}