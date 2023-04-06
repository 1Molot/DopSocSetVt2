import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../redux/State';

type ProfileProps = {
    posts: PostType[]
    updateText: string
    addPost: (postMessage: string) => void
    updateNewText:(message:string)=>void

}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.posts} addPost={props.addPost} updateText={props.updateText}
                 updateNewText={props.updateNewText}
        />
    </div>

};

export default Profile;