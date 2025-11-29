import ControlButtons from "@components/ControlButtons";
import { HorizontalRow } from "@components/HorizontalRow";
import Link from "@components/Link";
import Modal from "@components/modals/Modal";
import Thumbnail from "@components/Thumbnail";
import { colorMap } from "@database/colorMap";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import { noOp } from "@libs/functions";
import { breakpoints } from "@libs/globals";
import { AccountStatus, type ResourceInfo } from "@libs/Types";
import * as Typography from "@libs/Typography";
import React from "react";

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: baseline;
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

const LargeControlButtons = styled(ControlButtons)`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const ResourceModal: React.FC<{
  resource: ResourceInfo;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  visible: boolean;
}> = ({ resource, setSelectedResource, visible }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Modal visible={visible} backgroundColor={colorMap[resource.type]}>
      <Typography.Title style={{ marginBottom: 10 }}>
        {resource.name}
      </Typography.Title>
      <Typography.Description
        fontSize="32px"
        italic={true}
        style={{ marginTop: 0, marginBottom: 30 }}
      >
        {resource.shortDescription}
      </Typography.Description>
      <Typography.Description fontSize="16px" style={{ marginBottom: 50 }}>
        {resource.longDescription}
      </Typography.Description>
      <ContentContainer>
        {resource.recentContent && (
          <ResourceContent>
            <Typography.Subtitle style={{ marginBottom: 0 }}>
              Recent Content
            </Typography.Subtitle>
            {resource.recentContent?.map((item, index) => (
              <>
                <Thumbnail
                  key={index}
                  title={item.title}
                  image={item.thumbnail}
                  link={item.link}
                  badges={item.badges}
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
        {resource.recommendedContent && (
          <ResourceContent>
            <Typography.Subtitle style={{ marginBottom: 0 }}>
              Recommended Content
            </Typography.Subtitle>
            {resource.recommendedContent?.map((item, index) => (
              <>
                <Thumbnail
                  key={index}
                  title={item.title}
                  image={item.thumbnail}
                  link={item.link}
                  badges={item.badges}
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
        {resource.links && resource.links.length > 0 && (
          <div id="all-links">
            <Typography.Subtitle style={{ paddingBottom: 10 }}>
              Links
            </Typography.Subtitle>
            {resource.links.map((item) => (
              <Link item={item} />
            ))}
          </div>
        )}
      </ContentContainer>
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
    </Modal>
  );
};

export default ResourceModal;
