import baseDb from "../../data/index"
import * as types from "./postType"
import { toast } from "react-toastify"
const setLoading = (data) =>({
    type:types.SET_LOADING,
    payload:data,
})

const getPost = (data)=>({
    type: types.SET_POSTS,
    payload:data,
})



export const fetchPost = () => dispatch =>{
    dispatch(setLoading(true));

    baseDb.collection("Post").get().then(Post=>{
            const allPost=[];
            Post.forEach(Post=>{
                const data = {data:Post.data(),postId:Post.id};
                allPost.push(data)
            })
            dispatch(getPost(allPost))
            dispatch(setLoading(false));

    }).catch(err=>{
        console.log(err);
        toast.error(err);
    })
}