import styled from "styled-components";

export enum TypographicType {
  Title1 = "title1",
  Title2 = "title2",
  SubTitle1 = "subtitle1",
  Paragraph1 = "paragraph1",
  Label1 = "label1",
}

interface Props {
  type: TypographicType;
  children: any;
}

const styles = {
  title1: { fontSize: 40 },
  title2: { fontSize: 30 },
  subtitle1: { fontSize: 25 },
  paragraph1: { fontSize: 20 },
  label1: { fontSize: 14 },
};

const Typographic = ({ type, children }: Props) => {
  return <Wrapper type={type}>{children}</Wrapper>;
};

const Wrapper = styled.span<{ type: TypographicType }>`
  font-size: ${(props) => `${styles[props.type].fontSize}px`};
`;

export default Typographic;
