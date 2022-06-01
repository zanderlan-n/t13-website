import styled from "styled-components";

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
}
interface Props {
  label: string;
  onClick: () => void;
  type?: ButtonTypes;
}

const Button = ({ label, onClick, type = ButtonTypes.Primary }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<any>`
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  height: fit-content;

  width: fit-content;
  color: ${(props) =>
    props.type === ButtonTypes.Primary ? "#FFF" : props.theme.primary};
  background-color: ${(props) =>
    props.type === ButtonTypes.Primary
      ? props.theme.primary
      : props.theme.secondary};
`;

export default Button;
