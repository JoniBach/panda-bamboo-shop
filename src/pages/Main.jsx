import { Halo } from "../components/Halo";
import { Nav } from "../components/Nav";
import { Text } from "../components/Text";
const cover =
  "https://video.cgtn.com/news/3d3d514d7a6b544d33457a6333566d54/video/ab8d270da7074d32b6bd9399ccb1e676/ab8d270da7074d32b6bd9399ccb1e676.jpg";

function Main() {
  return (
    <div>
      <Halo full image={cover} />
      
    </div>
  );
}

export default Main;
