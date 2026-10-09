import styled from "@emotion/styled";
import searchIcon from "@assets/icons/search.svg";
import Link from "@components/Link";
import React from "react";
import useSWR from "swr";
import { isDarkTheme, timeoutFetcher } from "@libs/utils";
import type { ResourceLink } from "@libs/Types";
import { ThemeContext } from "@libs/Context";

// const submitQuery = () => {
//   console.log("submission recorded :D");
// };

// TODO: Mobile Search should activate when the window is <900px

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 28px;
`;
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;
const SearchInput = styled.input<{ hasData?: boolean }>`
  width: calc(100% - 40px);
  height: 28px;
  padding-left: 30px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: ${({ hasData }) => (hasData ? `10px 10px 0 0` : `10px`)};

  background-color: white;
  color: #585858;
  font-family: "avenir", sans-serif;
  font-weight: bolder;

  ::placeholder {
    color: #9b9b9b;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  margin-inline: auto;
  height: 12px;
  width: 12px;
`;

const LinkContainer = styled.div<{ themeId: string }>`
  position: absolute;
  top: 30px;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  overflow-y: scroll;
  padding: 15px;
  border: ${({ themeId }) =>
    isDarkTheme(themeId) ? `2px solid #a2a2a2` : undefined};
  border-radius: 0 0 10px 10px;

  backdrop-filter: blur(40px);
  background-color: rgba(162, 162, 162, 0.4);

  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
`;

// TODO: In the future, I'll probably have a full search page if there are tons of resources that need to be filted through.

/**
 * Represents Solomon's search bar.
 * @returns JSX.Component
 */
const SearchBar = () => {
  const [query, setQuery] = React.useState<string>("");
  const { theme } = React.useContext(ThemeContext);

  const { data } = useSWR<ResourceLink[]>(
    query ? `${import.meta.env.VITE_API_URI}/search/${query}` : null,
    timeoutFetcher,
    { suspense: false, shouldRetryOnError: false },
  );

  return (
    <SearchContainer>
      <InputContainer>
        <SearchInput
          placeholder="Search..."
          id="search_input"
          onChange={(event) => setQuery(event.target.value)}
          hasData={!!data && data.length > 0}
        />
        <SearchIcon src={searchIcon} alt="search_icon" />
      </InputContainer>
      {data && data.length > 0 && (
        <LinkContainer themeId={theme._id}>
          {data.map((link) => (
            <Link item={link} noIcon />
          ))}
        </LinkContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
