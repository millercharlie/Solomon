import styled from "@emotion/styled";
import type { ColorTheme } from "@libs/Types";

// const Spinner = styled.div<{ theme: ColorTheme }>`
//   border: 4px solid ${({ theme }) => theme.primary};
//   border-radius: 50%;
// `;

const PagePlaceholderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
`;
const SectionPlaceholderContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50px);
  width: 100%;
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border: 6px solid white;
  border-radius: 50%;
`;

/**
 * Placeholder for a section of a page. This is mostly used when data is still being loaded from the backend
 * @returns page section placeholder
 */
export const SectionPlaceholder: React.FC<{ theme?: ColorTheme }> = ({
  theme,
}) => {
  return (
    <SectionPlaceholderContainer>
      <Spinner />
    </SectionPlaceholderContainer>
  );
};
