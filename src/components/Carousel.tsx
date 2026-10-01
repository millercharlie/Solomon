import { Card } from "@components/Cards";
import styled from "@emotion/styled";
import "@libs/embla.css";
import type { ColorTheme, ResourceInfo, RowData } from "@libs/Types";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { DefaultIcon as Icon } from "@libs/Icons";
import squarrow from "@assets/arrows/squarrow.svg?react";

const Container = styled.div`
  width: 100%;
`;
const DotRow = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  gap: 5px;
  justify-content: center;
`;
const Dot = styled.div<{ selected: boolean; bColor: string }>`
  width: 8px;
  height: 8px;
  background-color: ${({ bColor }) => bColor};
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;

const Carousel: React.FC<{
  row: RowData;
  setSelectedResource: React.Dispatch<
    React.SetStateAction<ResourceInfo | null>
  >;
  theme: ColorTheme;
}> = ({ row, setSelectedResource, theme }) => {
  const [carousel, carouselApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [selectedSnap, setSelectedSnap] = React.useState<number>(0);

  const goToPrev = () => carouselApi?.scrollPrev();
  const goToNext = () => carouselApi?.scrollNext();
  const goTo = (index: number) => carouselApi?.scrollTo(index);
  const setActiveSnap = (api: EmblaCarouselType) =>
    setSelectedSnap(api.selectedScrollSnap());

  const setupSnaps = (api: EmblaCarouselType) =>
    setScrollSnaps(api.scrollSnapList());

  React.useEffect(() => {
    if (!carouselApi) return;

    setupSnaps(carouselApi);
    setActiveSnap(carouselApi);

    carouselApi.on("reInit", setupSnaps);
    carouselApi.on("reInit", setActiveSnap);
    carouselApi.on("select", setActiveSnap);
  }, [carouselApi]);
  return (
    <Container>
      <div className="carousel">
        <Icon
          icon={squarrow}
          onClick={goToPrev}
          hover={false}
          width={15}
          height={15}
          style={{ cursor: "pointer", transform: "rotate(-135deg)" }}
        />
        <div className="embla">
          <div className="embla__viewport" ref={carousel}>
            <div className="embla__container">
              {row.content.map((item, j) => (
                <div className="embla__slide">
                  <Card
                    resource={item}
                    key={j}
                    setSelectedResource={setSelectedResource}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Icon
          icon={squarrow}
          onClick={goToNext}
          hover={false}
          width={15}
          height={15}
          style={{ cursor: "pointer", transform: "rotate(45deg)" }}
        />
      </div>

      <DotRow>
        {scrollSnaps.map((_, index) => (
          <Dot
            key={index}
            onClick={() => goTo(index)}
            selected={index === selectedSnap}
            bColor={theme.text}
          />
        ))}
      </DotRow>
    </Container>
  );
};
export default Carousel;
