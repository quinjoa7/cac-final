function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:'absolute', marginRight:'30px',
      zIndex:'2'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position:'absolute', marginLeft:'30px',
      zIndex:'2'}}
      onClick={onClick}
    />
  );
}

export const carouselSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5.25,
  slidesToScroll: 2,
  arrows: true,
  className: 'carousel',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.25,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
