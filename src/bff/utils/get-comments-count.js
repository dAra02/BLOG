export const GetCommentsCount = (comments = [], postId) => {
	const postComments = comments.filter(({ postId: commentsPostId }) => commentsPostId === postId);

	return postComments.length;
};
