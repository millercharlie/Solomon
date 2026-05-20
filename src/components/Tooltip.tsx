import styled from "@emotion/styled";
import { TooltipText } from "@libs/Typography";

const Container = styled.div<{ visible: boolean }>`
  position: absolute;
  display: ${({ visible }) => (visible ? "block" : "none")};
  bottom: 28px;
  left: -6px;
  padding: 5px 10px;
  background-color: #3b3b3b;
  color: #ffffff; // TODO: Colors should be fixed
  border-radius: 5px;
  text-wrap: nowrap;
  filter: drop-shadow(0 0 7px rgba(0, 0, 0, 0.5));
  z-index: 3;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  bottom: -5px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 7px solid #3b3b3b;
`;

const Tooltip: React.FC<{ text: string; visible: boolean }> = ({
  text,
  visible,
}) => {
  return (
    <Container visible={visible}>
      <TooltipText>{text}</TooltipText>
      <Triangle />
    </Container>
  );
};

export default Tooltip;
