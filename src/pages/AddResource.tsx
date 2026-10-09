import Badge from "@components/Badge";
import BadgeList from "@components/BadgeList";
import { StyledButton } from "@components/Buttons";
import { BadgeInput, InputWithTitle as Input } from "@components/Textboxes";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import { type IBadge, PageType } from "@libs/Types";
import { Title } from "@libs/Typography";
import PageTemplate from "@pages/PageTemplate";
import axios from "axios";
import React, { type FormEvent } from "react";
import allBadgeIds from "../database/badgeIds.json";
import { findBadgeById } from "@libs/utils";

const StyledPageTemplate = styled(PageTemplate)`
  text-align: center;
  min-height: 100vh;
`;
const Form = styled.form`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
`;

const AddResource: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const [chosenBadges, setChosenBadges] = React.useState<string[]>([]);
  const [badgeIds, setBadgeIds] = React.useState<string[]>(allBadgeIds);
  const [visible, setVisible] = React.useState<boolean>(false);

  const onSubmit = React.useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formInfo = new FormData(event.currentTarget);
    const data = Object.fromEntries(formInfo.entries());

    axios
      .post(`${import.meta.env.VITE_API_URI}/resources`, data)
      .catch((e) => console.error(e));
  }, []);

  const handleBadgeClick = React.useCallback(
    (_id: string) => {
      setChosenBadges([...chosenBadges, _id]);
      setBadgeIds([...badgeIds.filter((b) => b !== _id)]);
    },
    [badgeIds, chosenBadges],
  );
  const handleDeSelectBadge = React.useCallback(
    (_id: string) => {
      setChosenBadges([...chosenBadges.filter((b) => b !== _id)]);
      setBadgeIds([...badgeIds, _id]);
    },
    [badgeIds, chosenBadges],
  );

  return (
    <StyledPageTemplate pageType={PageType.add}>
      <Title style={{ marginTop: "30px", textAlign: "center" }}>
        Add a Resource
      </Title>
      <Form onSubmit={onSubmit}>
        <div>
          <Input id="color" name="color" type="color" title="Color" />
        </div>
        <Input
          id="resourceTitle"
          type="input"
          title="Resource/Ministry Name"
          required
        />
        <Input
          id="creatorName"
          name="creatorName"
          type="input"
          title="Creator Name"
        />
        <Input
          id="shortDesc"
          name="shortDesc"
          type="input"
          title="Short Description"
          required
          maxLength={75}
        />
        <Input
          id="longDesc"
          name="longDesc"
          type="textarea"
          title="Long Description"
          required
        />
        <div style={{ width: "100%" }}>
          <BadgeInput onClick={() => setVisible(true)}>
            {chosenBadges.map((badgeId) => {
              const badgeAtts: IBadge | undefined = findBadgeById(badgeId);

              return (
                badgeAtts && (
                  <Badge
                    _id={badgeId}
                    key={badgeId}
                    themeId={theme._id}
                    onClick={() => handleDeSelectBadge(badgeId)}
                  />
                )
              );
            })}
          </BadgeInput>
          <BadgeList
            badgeIds={badgeIds}
            theme={theme}
            visible={visible}
            onBadgeClick={(_id) => {
              handleBadgeClick(_id);
            }}
          />
        </div>
        <StyledButton
          type="submit"
          theme={theme}
          style={{ marginBottom: "100px" }}
        >
          Submit
        </StyledButton>
      </Form>
    </StyledPageTemplate>
  );
};
export default AddResource;
