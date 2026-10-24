import { StyledButton } from "@components/Buttons";
import { InputWithTitle as Input } from "@components/Textboxes";
import { platformIconMap } from "@database/iconMap";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import { LargeIcon } from "@libs/Icons";
import { type RowData, type DataType, type IconComponent } from "@libs/Types";
import { Subtitle } from "@libs/Typography";
import { capitalize } from "@libs/utils";
import AddRow from "@pages/AddData/AddRow";
import axios from "axios";
import React, { type FormEvent } from "react";

const Form = styled.form`
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: baseline;
`;

const AddPage: React.FC<{ type: DataType }> = ({ type }) => {
  const { theme } = React.useContext(ThemeContext);
  const [rowCount, setRowCount] = React.useState<number>(1);
  const [rows, setRows] = React.useState<RowData[]>([]);

  const onSubmit = React.useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formInfo = new FormData(event.currentTarget);
    const data = Object.fromEntries(formInfo.entries());

    // TODO: Add type

    axios
      .post(`${import.meta.env.VITE_API_URI}/topics`, data)
      .catch((e) => console.error(e));
  }, []);

  /**
 * export interface IPage {
  _id: string; X
  title: string; X
  longTitle?: string; X
  color?: string; X
  rows: IRow[];
  pageType: pageType; X
  shortDesc?: string; X
  longDesc?: string; X
  related?: string[];
  sub?: string[];
}
 */

  const renderedIcon = React.useMemo<IconComponent>(
    () => platformIconMap[type],
    [type],
  );

  return (
    <Form onSubmit={onSubmit}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <LargeIcon icon={renderedIcon} hover={false} />
        <Subtitle>{capitalize(type)} Page</Subtitle>
      </div>
      <div>
        <Input id="color" name="color" type="color" title="Accent Color" />
      </div>
      <Input
        id="title"
        type="input"
        textColor={theme.text}
        title={`${type === "bible" ? "Bible Book" : capitalize(type)} Title`}
        placeholder={type === "bible" ? "Daniel" : "Adam & Eve"}
        required
      />
      <Input
        id="longTitle"
        type="input"
        textColor={theme.text}
        title="Long Title (Optional - Displayed in fullscreen only)"
      />
      <Input
        id="shortDesc"
        name="shortDesc"
        type="input"
        textColor={theme.text}
        title="Short Description"
        required
        maxLength={75}
      />
      <Input
        id="longDesc"
        name="longDesc"
        type="textarea"
        title="Long Description"
        textColor={theme.text}
        required
      />
      {[...new Array(rowCount)].map(() => (
        <AddRow />
      ))}
      <div>
        <StyledButton
          type="button"
          theme={theme}
          onClick={() => setRowCount(rowCount + 1)}
        >
          Add Row
        </StyledButton>
        <StyledButton
          type="button"
          theme={theme}
          onClick={() => setRowCount(rowCount - 1)}
        >
          Remove Row
        </StyledButton>
      </div>
      <StyledButton
        type="submit"
        theme={theme}
        style={{ marginBottom: "100px" }}
      >
        Submit
      </StyledButton>
    </Form>
  );
};
export default AddPage;
