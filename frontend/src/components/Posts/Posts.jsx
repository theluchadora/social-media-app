import React, { useEffect } from 'react'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Post/Post'
import { getTimelinePosts } from '../../actions/postAction'
import { useParams } from 'react-router-dom'

const Posts = () => {
  
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.authData);
  let { posts, loading } = useSelector((state) => state.post);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  },[])

  if(!posts) return "No Posts";
  if(params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="Posts">
        {loading 
        ? "Loading Posts... "
        : posts.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>
  )
}

export default Posts