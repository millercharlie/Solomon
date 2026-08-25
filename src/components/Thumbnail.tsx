import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";

const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const ThumbnailImage = styled.img<{ large?: boolean }>`
  width: ${({ large }) => (large ? `150` : `100`)}px;
  float: right;
  /* height: auto; */
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
  imageUrl: string;
  link: string;
  description?: string;
  large?: boolean;
}> = ({ title, imageUrl, link, description, large }) => {
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
      </div>
      <a href={link}>
        <ThumbnailImage src={imageUrl} alt="thumbnail" large={large} />
      </a>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
