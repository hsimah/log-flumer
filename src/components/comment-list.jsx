import React from 'react';
import CommentItem from './comment-item';

export default function CommentList({ comments }) {

  return Array.isArray(comments) === true ?
    comments.map((c, i) => {
      return <CommentItem key={i} comment={c} />
    }) : null;
}