import styled from "@emotion/styled";
import { LargeIcon, MediumIcon } from "@libs/Icons";
import { type ResourceInfo, Controls } from "@libs/Types";

import collapse from "@assets/arrows/collapse.svg?react";
import up_down_arrow from "@assets/arrows/up_down_arrow.svg?react";
import expand_arrows from "@assets/arrows/expand_arrows.svg?react";

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

  background-color: rgba(255, 255, 255, 0.5);
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
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  overflow: visible;
  cursor: pointer;
  transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)};
  :hover {
    transform: ${({ active }) => (active ? "rotate(180deg)" : undefined)}
      scale(110%);
  }
`;

const ControlButtons: React.FC<{
  controls: Controls[];
  resource: ResourceInfo;
  link?: string;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  dropdownActive: boolean;
  setDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
  large?: boolean;
}> = ({
  controls,
  resource,
  link,
  setSelectedResource,
  dropdownActive,
  setDropdownActive,
  className,
  large,
}) => {
  return (
    <Container className={className}>
      {large ? (
        <LargeActionButton
          icon={collapse}
          hover={true}
          onClick={() => setSelectedResource(null)}
        />
      ) : (
        controls.map((control: Controls) => {
          switch (control) {
            case Controls.dropdown:
              return (
                <ActionButton
                  icon={up_down_arrow}
                  onClick={() => setDropdownActive(!dropdownActive)}
                  active={dropdownActive}
                />
              );
            case Controls.fullscreen:
              return (
                <ActionButton
                  icon={expand_arrows}
                  hover={true}
                  onClick={() =>
                    resource
                      ? setSelectedResource(resource)
                      : setSelectedResource(null)
                  }
                />
              );
            case Controls.open_page:
              return (
                <a href={link}>
                  <ActionButton icon={up_down_arrow} hover={true} rotate={45} />
                </a>
              );
          }
        })
      )}
    </Container>
  );
};

export default ControlButtons;

// case Controls.external_link:
// return (
//   <a href={link}>
//     <ActionButton
//       src="/assets/arrows/up_down_arrow.svg?react"
//       hover={true}
//       rotate={45}
//     />
//   </a>
// );
