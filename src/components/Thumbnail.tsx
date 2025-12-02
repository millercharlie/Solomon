import Badge from "@components/Badge";
import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";

const ThumbnailContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ThumbnailImage = styled.img<{ large?: boolean }>`
  width: ${({ large }) => (large ? `175` : `100`)}px;
  float: right;
  height: auto;
  border-radius: ${({ large }) => (large ? `8` : `3`)}px;
  cursor: pointer;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));

  transition: all 0.2s;
  :hover {
    transform: scale(105%) rotate(-5deg);
  }
`;

const Thumbnail: React.FC<{
  title: string;
  image: string;
  link: string;
  description?: string;
  badges: string[];
  large?: boolean;
}> = ({ title, image, link, description, badges, large }) => {
  return (
    <ThumbnailContainer>
      <div id="title/description">
        {large ? (
          <Typography.LargeThumbnailTitle>
            {title}
          </Typography.LargeThumbnailTitle>
        ) : (
          <Typography.ThumbnailTitle>{title}</Typography.ThumbnailTitle>
        )}
        {large && <Typography.Paragraph>{description}</Typography.Paragraph>}
        {badges.map((badge) => (
          <Badge id={badge} />
        ))}
      </div>
      <a href={link}>
        <ThumbnailImage
          src={`../assets/mocks/${image}`}
          alt="thumbnail"
          large={large}
        />
      </a>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
