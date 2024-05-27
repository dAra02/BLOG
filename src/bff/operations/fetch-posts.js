import { getComments, getPosts } from '../api';
import { GetCommentsCount } from '../utils';

export const fetchPosts = async (page, limit) => {
	const [{ posts, links }, comments] = await Promise.all([getPosts(page, limit), getComments()]);

	return {
		error: null,
		res: {
			posts: posts.map((post) => ({
				...post,
				commentsCount: GetCommentsCount(comments, post.id),
			})),
			links,
		},
	};
};
