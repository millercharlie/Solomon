import styled from "@emotion/styled";
import { type ColorTheme, type IBadge } from "@libs/Types";
import React from "react";
import Badge from "@components/Badge";
import { findBadgeById } from "@libs/utils";

const Container = styled.div<{ visible?: boolean; theme: ColorTheme }>`
  width: 100%;
  height: 40px;
  padding: 15px;
  overflow-y: scroll;
  border-radius: 12px;
  border: 2px solid ${({ theme }) => theme.primaryRow};
  background-color: ${({ theme }) => `#${theme.primary.slice(1)}66`};

  display: ${({ visible }) => (visible ? "flex" : "none")};
  gap: 10px;
  flex-wrap: wrap;
`;

// TODO: This should probably have a close button

/**
 * Represents a list of all badges
 * @param theme the Color Theme of Solomon
 * @param onBadgeClick fires when a single badge is clicked
 * @returns list of all badges
 */
const BadgeList: React.FC<{
  badgeIds: string[];
  theme: ColorTheme;
  onBadgeClick?: (_id: string) => void;
  visible?: boolean;
}> = ({ badgeIds, theme, onBadgeClick, visible }) => {
  const badges = React.useMemo(
    () =>
      badgeIds
        .map((badgeId) => findBadgeById(badgeId))
        .filter((b): b is IBadge => b !== undefined),
    [badgeIds],
  );

  return (
    <Container visible={visible} theme={theme}>
      {badges.map((badge) => (
        <Badge
          _id={badge._id}
          key={badge._id}
          themeId={theme._id}
          onClick={() => onBadgeClick && onBadgeClick(badge._id)}
        />
      ))}
    </Container>
  );
};

export default BadgeList;
