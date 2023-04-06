import React, {ChangeEvent, TextareaHTMLAttributes} from 'react';
import s from './MyPosts.module.css';
import {PostType} from '../../redux/State';
import message from "../../Dialogs/Message/Message";
import Post from "./Post/Post";

type MyPostsProps = {
    posts: PostType[]
    updateText: string
    addPost: (postMessage: string) => void
    updateNewText: (message: string) => void

}

const MyPosts = (props: MyPostsProps) => {

    let newTextElement;                // надо получить текущее значение в textarea


    let postsElements = props.posts.map(el=><Post key={el.id} title={el.message} likesCount={el.likesCount}/> )           // надо отрисовать посты


    const addPost = () => {
        props.addPost(props.updateText)
        // добавляем новый пост

    }

    const newTextElementHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewText(e.currentTarget.value)
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea value={props.updateText} onChange={
                    newTextElementHandler
                }></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>

};

export default MyPosts;