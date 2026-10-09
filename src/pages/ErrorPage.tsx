import styled from "@emotion/styled";
import { DefaultIcon as Icon } from "@libs/Icons";
import { PageType } from "@libs/Types";
import * as Typography from "@libs/Typography";
import PageTemplate from "@pages/PageTemplate";
import logogram from "@assets/logos/logogram.svg?react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import React from "react";

const OuterContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  overflow-y: hidden;
  display: flex;
  justify-content: center;
`;
const InnerContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 10px;
  right: 30px;
`;

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const defaultMessage =
    "It appears this page had a catastrophic error while loading. Please reach out to me and report the problem at onecharliemiller@gmail.com if possible. Thanks!";

  const errorMessage = React.useMemo((): string => {
    if (isRouteErrorResponse(error)) {
      return `${defaultMessage}\n\n${error.status} ${error.statusText}`;
    } else if (error instanceof Error) {
      return `${defaultMessage}\n\n${error}`;
    } else return defaultMessage;
  }, [error]);

  return (
    <PageTemplate pageType={PageType.error}>
      <OuterContainer>
        <InnerContainer>
          <Typography.Title>Error</Typography.Title>
          <Typography.RowHeading>{errorMessage}</Typography.RowHeading>
          <StyledIcon icon={logogram} width={200} height={75} hover={false} />
        </InnerContainer>
      </OuterContainer>
    </PageTemplate>
  );
};
export default ErrorPage;
