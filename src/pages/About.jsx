import { Halo } from "../components/Halo";
import { Nav } from "../components/Nav";
import { Text } from "../components/Text";
const cover =
  "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS435-4CDskGEiuWljTZzMwcxXTkqF304tIs8oo0eGx9rMFvCDOtQa7IOPWOL8O4SRyXU9G7-beLJEdmjTqM_w";

function About() {
  return (
    <div>
      <Halo image={cover} />
      <Text type="section" title="About Us">
        <div style={{ display: "flex" }}>
          {/* <img src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS435-4CDskGEiuWljTZzMwcxXTkqF304tIs8oo0eGx9rMFvCDOtQa7IOPWOL8O4SRyXU9G7-beLJEdmjTqM_w' height='100px' /> */}
          We sell all different varieties of bamboo. Our bamboos are 100% gaurenteed to be delicious. Especially if you are a panda. Yummy!
          <br />
          <br />
          Pandas live mainly in temperate forests high in the mountains of
          southwest China, where they subsist almost entirely on bamboo. They
          must eat around 26 to 84 pounds of it every day, depending on what
          part of the bamboo they are eating. They use their enlarged wrist
          bones that function as opposable thumbs.
          <br />
          <br />A newborn panda is about the size of a stick of butter—about
          1/900th the size of its mother—but females can grow up to about 200
          pounds, while males can grow up to about 300 pounds as adults. These
          bears are excellent tree climbers despite their bulk.
        </div>
      </Text>
      <Text type="section" title="About Pandas">
        <div style={{ display: "flex" }}>
          {/* <img src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS435-4CDskGEiuWljTZzMwcxXTkqF304tIs8oo0eGx9rMFvCDOtQa7IOPWOL8O4SRyXU9G7-beLJEdmjTqM_w' height='100px' /> */}
          The giant panda, also known as the panda bear, is a bear native to
          South Central China. It is characterised by its bold black-and-white
          coat and rotund body. The name "giant panda" is sometimes used to
          distinguish it from the red panda, a neighboring musteloid.
          <br />
          <br />
          Pandas live mainly in temperate forests high in the mountains of
          southwest China, where they subsist almost entirely on bamboo. They
          must eat around 26 to 84 pounds of it every day, depending on what
          part of the bamboo they are eating. They use their enlarged wrist
          bones that function as opposable thumbs.
          <br />
          <br />A newborn panda is about the size of a stick of butter—about
          1/900th the size of its mother—but females can grow up to about 200
          pounds, while males can grow up to about 300 pounds as adults. These
          bears are excellent tree climbers despite their bulk.
        </div>
      </Text>
      <Text type="section" title="About Bamboo">
        <div style={{ display: "flex" }}>
          {/* <img src='http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcS435-4CDskGEiuWljTZzMwcxXTkqF304tIs8oo0eGx9rMFvCDOtQa7IOPWOL8O4SRyXU9G7-beLJEdmjTqM_w' height='100px' /> */}
          Bamboos are a diverse group of evergreen perennial flowering plants in the subfamily Bambusoideae of the grass family Poaceae. Giant bamboos are the largest members of the grass family.
          <br />
          <br />
          
Bamboo is the fastest growing plant on this planet. It has been recorded growing at an amazing 47.6 inches in a 24 hour period. Bamboo is a crucial element in the balance of oxygen and carbon dioxide in the atmosphere. A grove of bamboo release 35% more oxygen than an equivalent stand of trees.
     
        </div>
      </Text>
    </div>
  );
}

export default About;
