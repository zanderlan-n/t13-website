import styled from "styled-components";
import Carousel from "./carousel";

const HomeCarousel = () => {
  const items: never[] = [];

  return (
    <Wrapper>
      <Carousel items={items} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomeCarousel;
