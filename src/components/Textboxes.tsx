import styled from "@emotion/styled";
import { Caption, Subtitle as Title } from "@libs/Typography";
import React from "react";

export const BadgeInput = styled.div`
  border: 2px solid #b7b7b7;
  border-radius: 9px;
  background-color: #b7b7b728;
  width: 100%;
  min-height: 22px;
  padding: 10px 15px;

  font-family: "avenir", sans-serif;
  font-size: 11pt;
  font-weight: 500;
  font-style: normal;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
const Input = styled.input`
  border: 2px solid #b7b7b7;
  border-radius: 9px;
  background-color: #b7b7b728;
  width: 100%;
  padding: 10px 15px;

  font-family: "avenir", sans-serif;
  font-size: 11pt;
  font-weight: 500;
  font-style: normal;
`;
const Textarea = styled.textarea`
  border: 2px solid #b7b7b7;
  border-radius: 9px;
  background-color: #b7b7b728;
  width: 100%;
  padding: 10px 15px;
  resize: vertical;

  font-family: "avenir", sans-serif;
  font-size: 11pt;
  font-weight: 500;
  font-style: normal;
`;
const ColorInput = styled.div`
  border: 2px solid #b7b7b7;
  border-radius: 9px;
  background-color: #b7b7b728;
  width: fit-content;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: 10px;

  font-family: "avenir", sans-serif;
  font-size: 11pt;
  font-weight: 500;
  font-style: normal;
`;

type InputWithTitleProps = {
  title: string;
  textColor?: string;
} & (
  | ({ type: "textarea" } & React.TextareaHTMLAttributes<HTMLTextAreaElement>)
  | ({
      type?: React.HTMLInputTypeAttribute;
    } & React.InputHTMLAttributes<HTMLInputElement>)
);

/**
 * HTML Input with a title above the input box.
 *
 * @param id the identification of this input
 * @param type either an "input" or a "textarea"
 * @param title title that floats above the input box
 * @param required true if this is a required input
 * @param charLimit character limit of the text box, if applicable
 * @param textColor text color–changes by theme
 *
 * @returns Input with a title and potential character limit
 */
export const InputWithTitle: React.FC<InputWithTitleProps> = ({
  title,
  textColor,
  ...props
}) => {
  const [charCount, setCharCount] = React.useState<number>(0);
  const [color, setColor] = React.useState<string>("#ACACAC");

  // Updates the character count of the textbox
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCharCount(e.target.value.length);
    },
    [],
  );

  // Handles when the user changes the color of the resource
  const handleColorChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value.toUpperCase());
    },
    [],
  );

  /**
   * Returns the proper HTML form element
   * @returns
   */
  const findElement = () => {
    switch (props.type) {
      case "input":
        return (
          <Input
            id={props.id}
            name={props.name}
            required={props.required || false}
            maxLength={props.maxLength}
            onChange={(e) => onChange(e)}
            style={{ color: textColor ?? "white" }}
          />
        );
      case "textarea":
        return (
          <Textarea
            id={props.id}
            name={props.name}
            required={props.required || false}
            style={{ color: textColor ?? "white" }}
          />
        );
      case "color":
        return (
          <ColorInput>
            <input
              type="color"
              id={props.id}
              name={props.name}
              required={props.required || false}
              onChange={handleColorChange}
              style={{
                width: "40px",
                padding: "0 2px",
                backgroundColor: "#000000",
                border: "none",
                borderRadius: "4px",
                color: textColor ?? "white",
              }}
            />
            <label htmlFor={props.id}>{color}</label>
          </ColorInput>
        );
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Title style={{ marginBottom: "5px" }}>
        {title} {props.required && <span style={{ color: "red" }}>*</span>}
      </Title>
      {findElement()}
      {props.maxLength && (
        <Caption>{`${charCount} / ${props.maxLength}`}</Caption>
      )}
    </div>
  );
};
