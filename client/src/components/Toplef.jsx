import topLeftImage from "../pp/top-left-img.png";

export default function topleft() {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px]opacity-50 ">
      <img src={topLeftImage} width={400} height={400} alt="lefttopimage" />
    </div>
  );
}
