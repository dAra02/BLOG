import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const PostCardContainer = ({ className, id, title, imageUrl, publichedAt, commentsCount }) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="publisshed-at">
							<Icon inactive={true} id="fa-calendar-o" margin="0 7px 0 0" size="18px" />
							{publichedAt}
						</div>
						<div className="comments-count">
							<Icon inactive={true} id="fa-comment-o" margin="0 7px 0 0" size="18px" />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #000;

	& img {
		display: block;
		width: 100%;
	}

	& .post-card-footer {
		border-top: 1px solid #000;
		padding: 5px;
	}

	& h4 {
		margin: 0;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}

	& .publisshed-at {
		display: flex;
	}

	& .comments-count {
		display: flex;
	}
`;

PostCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	publichedAt: PropTypes.string.isRequired,
	commentsCount: PropTypes.number.isRequired,
};
