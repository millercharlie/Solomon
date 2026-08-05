import { SmallIcon } from "@libs/Icons";
import styled from "@emotion/styled";
import { BadgeText } from "@libs/Typography";
import { Colors } from "@libs/globals";
import * as badges from "@database/badges.json";
import React from "react";
import { type IBadge, type BadgeAtts, Theme } from "@libs/Types";
import { badgeColorMap } from "@database/colorMap";

const Container = styled.div<{ bColor: string; themeId: string }>`
  width: fit-content;
  height: 18px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  gap: 6px;

  background-color: ${({ bColor }) => `${bColor}4D`};
  border: ${({ bColor, themeId }) =>
    themeId === Theme.DARK ? `2px solid ${bColor}` : undefined};
  border-radius: 18px;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  transition: all 0.2s;
  :hover {
    transform: scale(105%);
  }
`;
const Icon = styled(SmallIcon)`
  color: ${Colors.dark.text};
  cursor: pointer;
`;

const Badge: React.FC<{ _id: string; themeId: Theme }> = ({ _id, themeId }) => {
  const { text, icon, color }: BadgeAtts = React.useMemo(() => {
    const curBadge = badges[_id as keyof typeof badges] as IBadge;
    if (!curBadge) {
      throw new Error("Badge Index Failed");
    }
    return {
      ...curBadge,
      color: badgeColorMap[curBadge.type],
    };
  }, [_id]);

  // TODO: Badge icon should not have default cursor
  return (
    <Container bColor={color} themeId={themeId}>
      <Icon src={`/assets/icons/${icon}`} hover={false} />
      <BadgeText color="#EAEAEA">{text}</BadgeText>
    </Container>
  );
};

export default Badge;
