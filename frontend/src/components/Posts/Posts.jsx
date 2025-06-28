import React, { useEffect } from 'react'
import './Posts.css'
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Post/Post'
import { getTimelinePosts } from '../../actions/postAction'

const Posts = () => {
  
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.authData);
  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  },[])
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