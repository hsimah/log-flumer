import React from 'react';
import CommentItem from './comment-item';
import Comment from '../models/comment'

export default function CommentList({ comments }) {

  return Array.isArray(comments) === true ?
    comments.map((c, i) => {
      const comment = new Comment(c);
      return <CommentItem key={i} comment={comment} />
    }) : null;
}