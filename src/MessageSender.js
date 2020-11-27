import { Avatar } from '@material-ui/core';
import React, {useState} from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam'; 
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            message:input,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.displayName,
            image:imageUrl
        });
    }
    return (
        <div className="messagesender">
            <div className="messagesender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value ={input}
                        onChange={(e)=> setInput(e.target.value)}
                        className="messagesender__input"   
                        placeholder={`What's on your mind ${user.displayName}?`}
                    />
                    <input
                        value ={imageUrl}
                        onChange= {(e)=> setImageUrl(e.target.value)} 
                        placeholder={`Image URl (optional)`} 
                    />

                    <button onClick={handleSubmit} type="Submit"> Hidden Submit </button>
                </form>

            </div>
            <div className="messagesender__bottom">
                <div className="messagesender__option">
                    <VideocamIcon style={{color : "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messagesender__option">
                    <PhotoLibraryIcon style={{color : "green"}} />
                    <h3>Photo/Videos</h3>
                </div>

                <div className="messagesender__option">
                    < InsertEmoticonIcon style={{color : "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>       



            </div>

            
        </div>
    )
}

export default MessageSender;
