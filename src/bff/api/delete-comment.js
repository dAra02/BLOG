export const deleteComment = async (commentsId) =>
	fetch(`http://localhost:3005/comments/${commentsId}`, {
		method: 'DELETE',
	});
