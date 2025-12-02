import styled from "@emotion/styled";
import { LargeIcon, MediumIcon } from "@libs/Icons";
import { AccountStatus, type ResourceInfo, Controls } from "@libs/Types";

const Container = styled.div`
  height: fit-content;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
  z-index: 2;
`;
const ActionButton = styled(MediumIcon)<{ active?: boolean; rotate?: number }>`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;

  background-color: rgba(256, 256, 256, 0.5);
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
  overflow: visible;
  cursor: pointer;
  transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)}
    ${({ rotate }) => rotate && `rotate(${rotate}deg)`};
  :hover {
    transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)}
      scale(110%);
  }
`;

const LargeActionButton = styled(LargeIcon)<{ active?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(256, 256, 256, 0.5);
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  border-radius: 50%;
  overflow: visible;
  cursor: pointer;
  transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)};
  :hover {
    transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)}
      scale(110%);
  }
`;

const FavoritedStar = styled.img<{ large?: boolean }>`
  width: ${({ large }) => (large ? `35` : `20`)}px;
  height: ${({ large }) => (large ? `35` : `20`)}px;
  cursor: pointer;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  transition: all 0.2s;
  :hover {
    transform: scale(110%);
  }
`;

const ControlButtons: React.FC<{
  resource: ResourceInfo;
  controls: Controls[];
  favorite: boolean;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  dropdownActive: boolean;
  setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  large?: boolean;
  accountStatus: AccountStatus;
}> = ({
  resource,
  favorite,
  controls,
  setSelectedResource,
  dropdownActive,
  setDropdownActive,
  className,
  large,
  accountStatus,
}) => {
  return (
    <Container className={className}>
      {accountStatus !== AccountStatus.GUEST && (
        <FavoritedStar
          src={
            favorite
              ? "../assets/icons/favorited.png"
              : "../assets/icons/not_favorited.png"
          }
          large={large}
        />
      )}
      {controls.map((control: Controls) => {
        switch (control) {
          case Controls.DROPDOWN:
            return large ? (
              <></>
            ) : (
              resource.recentContent && ( // TODO: This is temporary until all data is filled(
                <ActionButton
                  src="../assets/arrows/up_down_arrow.svg"
                  onClick={() => setDropdownActive(!dropdownActive)}
                  active={dropdownActive}
                />
              )
            );
          case Controls.FULLSCREEN:
            return large ? (
              <LargeActionButton
                src="../assets/arrows/collapse.svg"
                hover={true}
                onClick={() => setSelectedResource(null)}
              />
            ) : (
              (resource.recentContent || resource.recommendedContent) && ( // TODO: This is temporary until all data is filled(
                <ActionButton
                  src="../assets/arrows/expand_arrows.svg"
                  hover={true}
                  onClick={() =>
                    resource
                      ? setSelectedResource(resource)
                      : setSelectedResource(null)
                  }
                />
              )
            );
          case Controls.OPEN_PAGE:
            return large ? (
              <></>
            ) : (
              resource.solomonLink && ( // TODO: This is temporary until all data is filled
                <a href={resource.solomonLink}>
                  <ActionButton
                    src="../assets/arrows/up_down_arrow.svg"
                    hover={true}
                    rotate={45}
                  />
                </a>
              )
            );
          case Controls.EXTERNAL_LINK:
            return large ? (
              <></>
            ) : (
              resource.mainLink && ( // TODO: This is temporary until all data is filled
                <a href={resource.mainLink}>
                  <ActionButton
                    src="../assets/arrows/up_down_arrow.svg"
                    hover={true}
                    rotate={45}
                  />
                </a>
              )
            );
        }
      })}
    </Container>
  );
};

export default ControlButtons;
