import styled from "@emotion/styled";
import { PageType } from "@libs/Types";
import { Title } from "@libs/Typography";
import PageTemplate from "@pages/PageTemplate";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Loading page for when no page data has been rendered.
 */
const LoadingPage: React.FC = () => {
  return (
    <PageTemplate pageType={PageType.loading}>
      <Container>
        <Title>Loading Page Data...</Title>
      </Container>
    </PageTemplate>
  );
};
export default LoadingPage;
