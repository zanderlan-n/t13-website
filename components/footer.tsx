import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const menus = [
    { label: "Home", path: "home" },
    { label: "Sindiconet", path: "/sindiconet" },
    { label: "Contato", path: "/contato" },
    { label: "A empresa", path: "/empresa" },
  ];

  return (
    <>
      <Wrapper>
        <Logo>
          <Image
            alt="logo"
            width="100px"
            height="100px"
            layout="fixed"
            src="/images/logo1.png"
          />
          <SocialMedias>
            <Image
              alt="logo"
              width="30"
              height="30"
              src="/images/facebook.png"
            />

            <Image
              alt="logo"
              width="30"
              height="30"
              src="/images/instagram.png"
            />
          </SocialMedias>
        </Logo>
        <Menus>
          {menus.map((item) => (
            <MenuItem key={item.label}>
              <Link href={item.path}>{item.label}</Link>
            </MenuItem>
          ))}
        </Menus>
      </Wrapper>
      {/* //TODO: GET YEAR */}
      <Terms>DIREITOS RESERVADOS À T13 CONTABILIDADE - 2022</Terms>
    </>
  );
};

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
const SocialMedias = styled.div`
  align-self: center;
  gap: 10px;
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 240px;
  background-color: #034e85;
`;

const Terms = styled.div`
  background-color: #172433;
  color: white;
  text-align: center;
  padding: 10px;
`;

export default Footer;
