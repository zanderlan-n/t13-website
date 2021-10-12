import styled from "styled-components";

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
}
interface Props {
  label: string;
  action: () => void;
  type?: ButtonTypes;
}

const Button = ({ label, action, type = ButtonTypes.Primary }: Props) => {
  return (
    <StyledButton type={type} onClick={action}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<any>`
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  color: ${(props) => (props.type === ButtonTypes.Primary ? "#FFF" : props.theme.primary)};
  background-color: ${(props) => (props.type === ButtonTypes.Primary ? props.theme.primary : props.theme.secondary)};
`;

export default Button;
