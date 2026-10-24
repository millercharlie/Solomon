import { InputWithTitle as Input } from "@components/Textboxes";
import styled from "@emotion/styled";
import { ThemeContext } from "@libs/Context";
import { RowType } from "@libs/Types";
import { Subtitle } from "@libs/Typography";
import React from "react";

const StyledInput = styled.input`
  font-family: "avenir", sans-serif;
  font-size: 11pt;
  font-weight: 500;
  font-style: normal;
`;

const AddRow = () => {
  const { theme } = React.useContext(ThemeContext);
  const [rowType, setRowType] = React.useState<RowType>(RowType.card);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Subtitle>Type</Subtitle>
        <div style={{ display: "flex", gap: "15px" }}>
          <div>
            <StyledInput
              id="cardRow"
              type="radio"
              name="rowType"
              value={RowType.card}
              defaultChecked
              onClick={() => setRowType(RowType.card)}
            />
            <label htmlFor="cardRow">Card Row</label>
          </div>
          <div>
            <StyledInput
              id="listRow"
              type="radio"
              name="rowType"
              value={RowType.list}
              onClick={() => setRowType(RowType.list)}
            />
            <label htmlFor="listRow">List Row</label>
          </div>
        </div>
      </div>
      {rowType === RowType.card ? (
        <div>
          <Input
            id="_id"
            type="input"
            textColor={theme.text}
            title="Row ID"
            required
          />
          <Input
            id="title"
            type="input"
            textColor={theme.text}
            title="Title"
            required
          />
          <div>Content</div>
        </div>
      ) : (
        <div>
          <Input
            id="_id"
            type="input"
            textColor={theme.text}
            title="Row ID"
            required
          />
          <div>Content</div>
        </div>
      )}
    </div>
  );
};
export default AddRow;
