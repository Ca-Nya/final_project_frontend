import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Box, Input,Button,Form} from '../../common';
import axios from "axios";
import {__addComment} from "../../redux/modules/comment/commentSlice"

const CommentItem = () => {
    const dispatch = useDispatch();
    const nickname = localStorage.getItem("Nickname");
    const {token} = useSelector(state => state.join);
    const [ment,SetMent] = useState("");

    const onClickHandler = (e) => {
        e.preventDefault();
        dispatch(__addComment(ment));
    }

  return (
    <Form onSubmit={onClickHandler}>
        {token ? (nickname):("")}
      <Input
       type="text"
       name="comment"
       placeholder="댓글을 입력해주세요."
       value={ment}
       onChange={(e)=>{
        const comment = e.target.value;
        SetMent(comment)
       }}

      />
    <Button>등록</Button>
    </Form>
  )
}

export default CommentItem
