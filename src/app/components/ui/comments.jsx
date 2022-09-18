import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router";
import AddCommentsForm from "../common/comments/addCommentForm";
import CommentsList from "../common/comments/commentsList";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComments(data));
    }, []);

    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, pageId: userId })
            .then((data) => setComments([...comments, data]));
    };

    const handleRemoveComment = (id) => {
        api.comments.remove(id).then((id) => {
            setComments(comments.filter((x) => x._id !== id));
        });
    };

    const sortedComments = orderBy(comments, ["create_at"], ["desc"]);

    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body">
                    <AddCommentsForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body">
                        <h2>Комментарии</h2>
                        <hr />
                        <CommentsList
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
