import { getComments, getPosts } from '../api';
import { GetCommentsCount } from '../utils';

export const fetchPosts = async () => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()]);

	return {
		error: null,
		res: posts.map((post) => ({
			...post,
			commentsCount: GetCommentsCount(comments, post.id),
		})),
	};
};
