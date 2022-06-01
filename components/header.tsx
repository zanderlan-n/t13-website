import Logo from "../public/images/logo1.png";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Button, { ButtonTypes } from "./button";

const Header = () => {
  const menus = [
    { label: "Home", path: "home" },
    { label: "Sindiconet", path: "/sindiconet" },
    { label: "Contato", path: "/contato" },
    { label: "A empresa", path: "/empresa" },
  ];

  return (
    <Wrapper>
      <Image alt="logo" width="100" height="100" src="/images/logo1.png" />
      <Menus>
        {menus.map((item) => (
          <MenuItem key={item.label}>
            <Link href={item.path}>{item.label}</Link>
          </MenuItem>
        ))}
      </Menus>
      <Options>
        <Button onClick={() => {}} label="Retire seu boleto" />
        <Button
          onClick={() => {}}
          label="Portal do condomínio"
          type={ButtonTypes.Secondary}
        />
      </Options>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Menus = styled.div`
  align-self: center;
  gap: 20px;
  display: flex;
`;

const MenuItem = styled.span`
  & a {
    text-decoration: none;
    color: black;
  }
`;

export default Header;
