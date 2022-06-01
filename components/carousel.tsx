import styled from "styled-components";
import Button from "./button";
import Typographic, { TypographicType } from "./typographic";
import Image from "next/image";

const Carousel = ({ items }) => {
  const mock = {
    title: (
      <>
        Cuide do que importa,
        <br /> o resto deixa com a gente!"
      </>
    ),
    description: (
      <>
        Nossa meta é a mesma que a sua, o seu SUCESSO!
        <br /> "Pessoas com METAS triunfam, porque sabem para onde vão. Simples
        Assim."
      </>
    ),
    buttonLabel: "Solicite um orçamento",
    buttonAction: () => {},
  };

  return (
    //TODO: add carousel lib
    <CarouselItem>
      <Text>
        <Typographic type={TypographicType.Title1}>{mock.title}</Typographic>
        <Typographic type={TypographicType.Paragraph1}>
          {mock.description}
        </Typographic>
        <Button onClick={mock.buttonAction} label={mock.buttonLabel} />
      </Text>
      <ImageWrapper>
        <Image alt="logo" layout="fill" src="/images/mock-image1.png" />
      </ImageWrapper>
    </CarouselItem>
  );
};

const CarouselItem = styled.div`
  display: flex;
  max-width: 90%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 25px;
  align-self: center;
`;
const ImageWrapper = styled.div`
  width: 30%;
  height: 480px;
  position: relative;
`;
const Description = styled.div``;

export default Carousel;
