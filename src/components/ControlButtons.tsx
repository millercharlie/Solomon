import styled from "@emotion/styled";
import { LargeIcon, MediumIcon } from "@libs/Icons";
import dropdownArrow from "@assets/arrows/up_down_arrow.svg";
import { AccountStatus, type ResourceInfo, Controls } from "@libs/Types";

const Container = styled.div`
  height: fit-content;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, 1fr);
  gap: 6px;
  z-index: 2;
`;
const ActionButton = styled(MediumIcon)<{ active?: boolean }>`
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
  transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)};
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
              ? "/src/assets/icons/favorited.png"
              : "/src/assets/icons/not_favorited.png"
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
              <ActionButton
                src={dropdownArrow}
                onClick={() => setDropdownActive(!dropdownActive)}
                active={dropdownActive}
              />
            );
          case Controls.FULLSCREEN:
            return large ? (
              <LargeActionButton
                src="/src/assets/arrows/collapse.svg"
                hover={true}
                onClick={() => setSelectedResource(null)}
              />
            ) : (
              <ActionButton
                src="/src/assets/arrows/expand_arrows.svg"
                hover={true}
                onClick={() => {
                  resource
                    ? setSelectedResource(resource)
                    : setSelectedResource(null); // TODO: This doesn't work
                }}
              />
            );
          case Controls.OPEN_PAGE:
            return large ? (
              <></>
            ) : (
              <a href={resource.solomon_link}>
                <ActionButton
                  src="/src/assets/arrows/up_down_arrow.svg"
                  hover={true}
                  style={{ transform: "rotate(45deg)" }} // TODO: This appears to screw up the hover for some reason
                />
              </a>
            );
        }
      })}
    </Container>
  );
};

export default ControlButtons;
