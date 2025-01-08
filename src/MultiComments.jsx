import React, { useState } from 'react';
function MultiComments() {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);
  const addComment = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        id: Date.now(),
        userName: 'User',
        text: commentText,
        replies: [],
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };
  const addNestedComment = (replyText,parentId) => {
    if (replyText.trim() !== '') {
      const updateComments = (commentsList) =>
        
        {
          return commentsList.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: Date.now(),
                    userName: 'User',
                    text: replyText,
                    replies: [],
                  },
                ],
              }
            : {
                ...comment,
                replies: updateComments(comment.replies), // Recursively update nested replies
              }
        );}

      setComments(updateComments(comments));
    }
  };


  return (
    <div>

      <input
        className="mt-4 ms-4"
        type="text"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write a comment..."
      />
      <button className="ms-2 btn btn-sm btn-primary" onClick={addComment}>
        Add Comment
      </button>

      {comments.length>0 && comments?.map((comment)=><Comments key={comment.id} addreply={addNestedComment} comment={comment}/>)}
    </div>
  );
}

function Comments({addreply,comment}){
  const [nestedComment,setNestedCommentText] = useState('')
  return (
    <div className="mt-4 ms-4">
      <p className='ms-4 m-0'>User Comment: {comment.text}</p>
      <input
      className='ms-4'
        type="text"
        value={nestedComment}
        onChange={(e) => setNestedCommentText(e.target.value)}
        placeholder="Write a comment..."
      />
      <button className="ms-2 btn btn-sm btn-primary" onClick={() => {addreply(nestedComment,comment.id);setNestedCommentText('')}}>
       Reply
      </button>
      {
        comment.replies.length>0 && comment.replies.map((reply)=>(
          <Comments key={reply.id} comment={reply} addreply={addreply} />
        ))
      }
    </div>
  );
}


export default MultiComments;
