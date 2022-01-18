import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "dog.jpg" },
  { url: "cat.jpg" },
  { url: "rabbit.jpg" },
  { url: "bird.jpg" },
  { url: "horse.jpg" },
  { url: "sheep.jpg" },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />  
    </div>
  );
}

export default Slider;