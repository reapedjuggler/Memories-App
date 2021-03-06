import React,{ useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost, updatePost } from '../../../redux/memories/memoriesAction'

import useStyles from './postStyles';

const Post = ({setCurrentId, post}) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem('authDetails'));
 
    // useEffect(() => {

    //     user = JSON.parse(localStorage.getItem('authDetails'));

    // }, [user])

    const Likes = () => {
        

        if (post.likes.length > 0) {
 
            return (

                post?.likes.find((like) => like === (user?.resp?.googleId || user?.resp?._id)) ? (
                    <>                                      
                    <ThumbUpAltIcon fontSize = "small">
                    </ThumbUpAltIcon>
                    {`You and ${post?.likes?.length} others`}
                    </>
                ) : (
                    <>                                      
                    <ThumbUpAltIcon fontSize = "small">
                    </ThumbUpAltIcon>
                    {`${post?.likes?.length} other people like this`}
                    </>   
                )
            )                                           

        }

        return (
            <>
            <ThumbUpAltIcon fontSize = "small">
            </ThumbUpAltIcon>
            {`Like`}
            </>
        )

    }

    return (

        <Card className={classes.card}>
          
                <CardMedia className={classes.media} image = {post.selectedFile} title = {post.title} />

          
                <div className={classes.overlay}>
                    <Typography variant = "h6">{post.name}</Typography>
                    <Typography variant = "body2"> {post.createdAt}</Typography>
                </div>

                {
                    (user?.resp?._id?.toString() === post?.creator?.toString() || user?.profile?.googleId === post?.creator) ? (

                        <div className = {classes.overlay2}> 
                            <Button style = {{color: "white"}} size = "small" onClick = {() => setCurrentId(post._id)}>
                                <MoreHorizIcon fontSize = "default"></MoreHorizIcon>
                            </Button>
                        </div>
                    ) : (
                        <> </>           // React fragments ftw XD    
                    )
                }

                <div className = {classes.details}> 
                    <Typography variant = "body2" color = "textSecondary" > {post.tags.map((tag) => `#${tag}`)} </Typography>
                </div>
                
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                </CardContent>
                
                <CardActions className = {classes.cardActions}>
                       
                        <Button size = "small" color = "primary" onClick = {() => dispatch(likePost(post?._id))}>
                            <Likes />
                        </Button>

                        <Button size = "small" color = "primary" onClick = {() => dispatch(deletePost(post?._id))}>
                            
                            {/* 
                                Not everyone can delete the post ,only the same user who
                                created the post can delete it other wise not
                            */}
                            
                            {/* { console.log(user, " Iam user for delete\n")} */}

                            {

                                    (user && (user?.resp?._id?.toString() === post?.creator?.toString() || user?.profile?.googleId === post?.creator)) ? (
                                        <>
                                        <DeleteIcon fontSize = "small" />
                                            Delete &nbsp;
                                        </>
                                    ) : (
                                        <></>
                                    )                              

                            }
                               
                            </Button>

                </CardActions>
        </Card>
    )
}

export default Post;