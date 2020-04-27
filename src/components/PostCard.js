import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/PostCard.scss";

// Helper function for formatting dates.
const formatDate = (date) => new Date(date).toDateString();

const PostCard = ({ post }) => {
	const { link, postId, title, date, author, featuredImage } = post;
	const { name: authorName } = author;

	return (
		<article>
			<Card key={postId} className="post-card">
				<Card.Body>
					<Card.Title className="h3 post-card__heading">
						{title}
					</Card.Title>
					{featuredImage && (
						// If a featured image exists, display it.
						<Card.Img
							variant="top"
							src={featuredImage.sourceUrl}
							alt={featuredImage.altText}
							className="post-card__image"
						/>
					)}
					<Card.Text>
						<span className="post-card__detail">
							<span className="post-card__label">Date:</span>{" "}
							{formatDate(date)}
						</span>
						<span className="post-card__detail">
							<span className="post-card__label">Author:</span>{" "}
							{authorName}
						</span>
					</Card.Text>
					<Button
						href={link}
						target="_blank"
						variant="primary"
						size="sm"
						className="read_more"
					>
						Read More
					</Button>
				</Card.Body>
			</Card>
		</article>
	);
};

export default PostCard;
