import Badge from "@components/Badge";
import ControlButtons from "@components/ControlButtons";
import { HorizontalRow } from "@components/HorizontalRow";
import Link from "@components/Link";
import Modal from "@components/modals/Modal";
import Thumbnail from "@components/Thumbnail";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import { noOp } from "@libs/functions";
import { breakpoints } from "@libs/globals";
import { AccountStatus, type Content, type ResourceInfo } from "@libs/Types";
import * as Typography from "@libs/Typography";
import axios from "axios";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
const Tab = styled.div<{ active?: boolean }>`
  font-family: "fira-sans", "avenir", sans-serif;
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  font-variant: all-small-caps;

  color: ${({ active }) => (active ? "#ffffff" : "#cecece")};
  cursor: pointer;
  margin-bottom: -7px;

  :hover {
    text-decoration: underline;
  }
`;

const LargeControlButtons = styled(ControlButtons)`
  position: absolute;
  top: 30px;
  right: 30px;
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
`;

/**
 * Represents a modal for a single resource, such as a historian or non-profit.
 */
const ResourceModal: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  visible: boolean;
}> = ({ resource, setSelectedResource, visible }) => {
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

  // TODO: This will all be done in the backend. I do not want the API key in the frontend
  // TODO: This is hardcoded to retreive the info for Gavin Ortlund for now until the backend hookup is complete
  React.useEffect(() => {
    const getThumbnail = async () => {
      const thumbnail = await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&forHandle=${"TruthUnites"}&fields=items(id,snippet(thumbnails(high)))&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
        )
        .catch((e) => console.error(e));

      // Invariance: Items will only be 1 item long
      if (thumbnail && thumbnail.data.items[0].snippet.thumbnails.high.url)
        setPfp(thumbnail.data.items[0].snippet.thumbnails.high.url);
    };
    getThumbnail();
  }, [setPfp]);

  React.useEffect(() => {
    const getRecentContent = async () => {
      const playlists = await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${"TruthUnites"}&fields=items(id,contentDetails(relatedPlaylists))&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`,
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
    getRecentContent();
  }, [youtubeVideoToContent]);

  return (
    <Modal visible={visible} backgroundColor={resource.color}>
      {pfp !== "" && <Photo src={pfp} alt="pfp" referrerPolicy="no-referrer" />}
      <Container>
        <Typography.ResourceTitle style={{ marginBottom: 10 }}>
          {resource.name}
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
              <Tab active={active === 0} onClick={() => setActive(0)}>
                About
              </Tab>
              <Tab active={active === 1} onClick={() => setActive(1)}>
                Recent Content
              </Tab>
              <Tab active={active === 2} onClick={() => setActive(2)}>
                Recommended for You
              </Tab>
              <Tab active={active === 3} onClick={() => setActive(3)}>
                Links
              </Tab>
            </AllTabs>
            <HorizontalRow />
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
                      {index < resource.recentContent!.length - 1 && (
                        <HorizontalRow color={theme.secondaryRow} />
                      )}
                    </>
                  ))}
                </ResourceContent>
              )}
              {resource.recommendedContent && active === 2 && (
                <ResourceContent>
                  {resource.recommendedContent?.map((item, index) => (
                    <>
                      <Thumbnail
                        key={index}
                        title={item.title}
                        imageUrl={item.thumbnail}
                        link={item.link}
                        description={item.description}
                        large={true}
                      />
                      {index < resource.recommendedContent!.length - 1 && (
                        <HorizontalRow color={theme.secondaryRow} />
                      )}
                    </>
                  ))}
                </ResourceContent>
              )}
              {resource.links && resource.links.length > 0 && active === 3 && (
                <div id="all-links">
                  {resource.links.map((item) => (
                    <Link item={item} />
                  ))}
                </div>
              )}
            </ContentContainer>
          )}
          {resource.controls && (
            <LargeControlButtons
              resource={resource}
              favorite={resource.favorite || false}
              setSelectedResource={setSelectedResource}
              controls={resource.controls}
              dropdownActive={false}
              setDropdownActive={noOp}
              large={true}
              accountStatus={AccountStatus.GUEST} // TODO: This will almost certainly be calculated with Context
            />
          )}
          <div style={{ width: "100%", marginBottom: -7 }}>
            <HorizontalRow />
          </div>
          <BadgeRow>
            {resource.badges?.map((id, index) => (
              <Badge _id={id} key={index} themeId={theme._id} />
            ))}
          </BadgeRow>
        </Body>
      </Container>
    </Modal>
  );
};

export default ResourceModal;
