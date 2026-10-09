import styled from "@emotion/styled";
import * as Typography from "@libs/Typography";

const ThumbnailContainer = styled.div<{ mobile?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? `column` : `row`)};
  gap: 20px;
  justify-content: space-between;
`;
const ThumbnailImage = styled.img<{ large?: boolean; mobile?: boolean }>`
  width: ${({ large, mobile }) =>
    mobile ? `100%` : large ? `150px` : `100px`};
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
  mobile?: boolean;
}> = ({ title, imageUrl, link, description, large, mobile }) => {
  return (
    <ThumbnailContainer mobile={mobile}>
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
        <ThumbnailImage
          src={imageUrl}
          alt="thumbnail"
          large={large}
          mobile={mobile}
        />
      </a>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
