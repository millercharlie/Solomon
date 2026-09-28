import Spinner from "@components/Spinner";
import styled from "@emotion/styled";
import { breakpoints } from "@libs/globals";
import {
  PageType,
  type ColorTheme,
  type Content,
  type ResourceInfo,
  type ResourceLink,
} from "@libs/Types";
import { fetcher } from "@libs/utils";
import React from "react";
import { useParams } from "react-router";
import useSWR from "swr";
import * as Typography from "@libs/Typography";
import axios from "axios";
import { ThemeContext } from "@libs/Context";
import { HorizontalRow } from "@components/HorizontalRow";
import Thumbnail from "@components/Thumbnail";
import Link from "@components/Link";
import Badge from "@components/Badge";
import PageTemplate from "@pages/PageTemplate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 60px);
  margin-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
`;
const Body = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ContentContainer = styled.div`
  margin-top: 15px;

  @media (max-width: ${breakpoints.md}px) {
    display: block;
  }
`;
const ResourceContent = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    padding-bottom: 20px;
  }
`;

const TabsContainer = styled.div`
  width: 100%;
`;
const AllTabs = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tab = styled.div<{ active?: boolean; theme: ColorTheme }>`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  /* font-variant: all-small-caps; */

  color: ${({ active, theme }) => (active ? theme.text : theme.secondaryText)};
  cursor: pointer;
  margin-bottom: -7px;

  :hover {
    text-decoration: underline;
  }
`;

const BadgeRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const Photo = styled.img`
  border-radius: 50%;
  max-width: 100px;
  position: absolute;
  float: left;
  margin-top: 30px;
  margin-left: 45px;
`;

// TODO: Right now, ResourceModal and ResourcePage largely duplicate each other.
/**
 * Single Resource Page
 * @returns JSX.Element
 */
const ResourcePage: React.FC = () => {
  const params = useParams();
  const {
    data: resource,
    error,
    isLoading,
  } = useSWR(
    `${import.meta.env.VITE_API_URI}/resource/${params.resourceId}`,
    fetcher,
  ) as { data: ResourceInfo; error: string; isLoading: boolean };

  const { theme } = React.useContext(ThemeContext);
  const [active, setActive] = React.useState<number>(0);
  const [pfp, setPfp] = React.useState<string>("");
  const [recentContent, setRecentContent] = React.useState<Content[]>();

  type APIVideo = {
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        high: {
          width: number;
          height: number;
          url: string;
        };
      };
    };
    contentDetails: {
      videoId: string;
    };
  };

  React.useEffect(() => {
    console.log(resource);
  }, [resource]);

  const youtubeVideoToContent = React.useCallback(
    (video: APIVideo): Content => {
      // YouTube native URL
      const { snippet, contentDetails } = video;
      const url = `https://www.youtube.com/watch?v=${contentDetails.videoId}`;

      // Shortens the video description to 150 characters
      const shortenedDesc = `${snippet.description.slice(0, 150)}...`;

      return {
        _id: contentDetails.videoId,
        title: snippet.title,
        description: shortenedDesc,
        thumbnail: snippet.thumbnails.high.url,
        link: url,
      };
    },
    [],
  );

  React.useEffect(() => {
    const getThumbnail = async () => {
      const thumbnail = await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forHandle=${resource.api?.queryParam}&fields=items(id,snippet(thumbnails(high)))&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
        )
        .catch((e) => console.error(e));

      // Invariance: Items will only be 1 item long
      if (thumbnail && thumbnail.data.items[0].snippet.thumbnails.high.url) {
        const url = thumbnail.data.items[0].snippet.thumbnails.high.url;
        // Removes this absolutely wild default photo that is returned without a valid username for some reason?
        if (
          !url.includes(
            "dLHdx9gnMUMqdYnrZ26atHPNfJRIn8t8Q-bF_5I3KmpFFVF-TdBE86A96It6yZYsaAre-AUM=s800-c-k-c0x00ffffff-no-rj",
          )
        )
          setPfp(thumbnail.data.items[0].snippet.thumbnails.high.url);
      }
    };
    if (resource) getThumbnail();
  }, [resource, setPfp]);

  const priorityLink = React.useMemo((): ResourceLink | undefined => {
    return resource && resource.links.find((l) => l.priority);
  }, [resource]);

  React.useEffect(() => {
    const getRecentContent = async () => {
      const playlists = await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${resource.api?.queryParam}&fields=items(id,contentDetails(relatedPlaylists))&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
        )
        .catch((e) => console.error(e));

      if (playlists) {
        const rc = await axios
          .get(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlists.data.items[0].contentDetails.relatedPlaylists.uploads}&fields=items(id,snippet(title,description,thumbnails(high)),contentDetails(videoId))&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
          )
          .catch((e) => console.error(e));

        if (rc) {
          const recentVideos = rc.data.items.slice(0, 3);
          const parsedVideos = recentVideos.map((v: APIVideo) =>
            youtubeVideoToContent(v),
          );

          setRecentContent(parsedVideos);
        }
      }
    };
    if (resource) getRecentContent();
  }, [resource, youtubeVideoToContent]);

  return isLoading ? (
    <Spinner />
  ) : resource ? (
    <PageTemplate pageType={PageType.RESOURCE}>
      {pfp !== "" && <Photo src={pfp} alt="pfp" referrerPolicy="no-referrer" />}
      <Container>
        <Typography.ResourceTitle style={{ marginBottom: 10 }}>
          {resource.creator
            ? `${resource.name} - ${resource.creator}`
            : resource.name}
        </Typography.ResourceTitle>
        <Typography.Description
          fontSize="20px"
          italic={true}
          style={{ marginTop: 0, marginBottom: 30 }}
        >
          {resource.shortDesc}
        </Typography.Description>
        <Body>
          <TabsContainer>
            <AllTabs>
              <Tab
                active={active === 0}
                onClick={() => setActive(0)}
                theme={theme}
              >
                About
              </Tab>
              <Tab
                active={active === 1}
                onClick={() => setActive(1)}
                theme={theme}
              >
                Recent Content
              </Tab>
              <Tab
                active={active === 2}
                onClick={() => setActive(2)}
                theme={theme}
              >
                Links
              </Tab>
            </AllTabs>
            <HorizontalRow color={theme.primaryRow} />
          </TabsContainer>
          {active === 0 && (
            <Typography.Description fontSize="14px">
              {resource.longDesc}
            </Typography.Description>
          )}
          {active > 0 && (
            <ContentContainer>
              {recentContent && active === 1 && (
                <ResourceContent>
                  {recentContent?.map((item, index) => (
                    <>
                      <Thumbnail
                        key={index}
                        title={item.title}
                        imageUrl={item.thumbnail}
                        link={item.link}
                        description={item.description}
                        large={true}
                      />
                      {index < recentContent!.length - 1 && (
                        <HorizontalRow color={theme.secondaryRow} />
                      )}
                    </>
                  ))}
                </ResourceContent>
              )}
              {resource.links.length > 0 && active === 2 && (
                <div id="all-links">
                  {resource.links.map((item) => (
                    <Link item={item} />
                  ))}
                </div>
              )}
            </ContentContainer>
          )}
          {active === 0 && (
            <>
              <div style={{ width: "100%", marginBottom: -7 }}>
                <HorizontalRow color={theme.primaryRow} />
              </div>
              <BadgeRow>
                {resource.badges?.map((id, index) => (
                  <Badge _id={id} key={index} themeId={theme._id} />
                ))}
              </BadgeRow>
            </>
          )}
          {priorityLink && (
            <>
              <div style={{ width: "100%", marginBottom: -7 }}>
                <HorizontalRow color={theme.primaryRow} />
              </div>
              <div style={{ width: "100%" }}>
                <Link item={priorityLink} />
              </div>
            </>
          )}
        </Body>
      </Container>
    </PageTemplate>
  ) : (
    <p>{`Failed to load. ${error}`}</p>
  );
};

export default ResourcePage;
