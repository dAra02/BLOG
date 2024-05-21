export const transformComment = (dbComment) => ({
	id: dbComment.id,
	postId: dbComment.post_id,
	authorId: dbComment.author_id,
	content: dbComment.content,
	publichedAt: dbComment.publiched_at,
});
