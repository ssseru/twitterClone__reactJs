import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="data:image/jpeg;base64,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" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Sai Sagar Seru {" "} 
                            <span className="post__headerSpecial">
                            <VerifiedUserIcon className="post__badge"/> @ssseru
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Dummy Text Here</p>
                    </div>
                </div>
                <img src="https://image.shutterstock.com/image-photo/tropical-leaves-textureabstract-nature-leaf-260nw-778131475.jpg" />
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />
            </div>
            </div>
        </div>
    )
}

export default Post