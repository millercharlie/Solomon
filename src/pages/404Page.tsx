import styled from "@emotion/styled";
import { DefaultIcon as Icon } from "@libs/Icons";
import { PageType } from "@libs/Types";
import * as Typography from "@libs/Typography";
import PageTemplate from "@pages/PageTemplate";

const Container = styled.div`
  width: 100vw;
  height: 92vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 10px;
  right: 30px;
`;

const NotFound: React.FC = () => {
  return (
    <PageTemplate pageType={PageType.NOTFOUND}>
      <Container>
        <Typography.Title>404: Page Not Found</Typography.Title>
        <Typography.Description>
          It appears this page cannot be found. Please try another link!
        </Typography.Description>
        <StyledIcon
          src="/src/assets/logos/logogram_colored.svg"
          width={200}
          height={75}
          hover={false}
        />
      </Container>
    </PageTemplate>
  );
};
export default NotFound;
