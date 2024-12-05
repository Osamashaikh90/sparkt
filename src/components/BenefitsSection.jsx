import hydration from "../assets/images/hydration.png";
import skin from "../assets/images/skin.png";
import hand from "../assets/images/hand.png";
import leaf from "../assets/images/leaf.png";
import face from "../assets/images/face.png";

const benefits = [
  {
    title: "Deep Hydration",
    description: "Provides long-lasting moisture, keeping skin soft and smooth.",
    imgSrc: hydration,
    marginLeft: "lg:ml-40 md:ml-20",
  },
  {
    title: "Soothes Irritated Skin",
    description: "Calms redness and irritation, perfect for sensitive skin.",
    imgSrc: face,
    marginLeft: "lg:mr-20 md:mr-10",
  },
  {
    title: "Promotes Skin Healing",
    description: "Enhances healing of minor cuts, burns, and blemishes.",
    imgSrc: skin,
    marginLeft: "lg:ml-28 md:ml-14",
  },
  {
    title: "Rich in Antioxidants",
    description: "Fights aging and repairs skin with essential vitamins.",
    imgSrc: leaf,
  },
];

const BenefitsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-16 bg-white md:flex-row lg:px-28">
      {/* Left Section */}
      <div className="order-2 w-full p-4 space-y-8 md:order-1 md:w-1/2 md:p-6 md:space-y-16">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } ${benefit.marginLeft || ""}`}
          >
            <img
              src={benefit.imgSrc}
              alt={benefit.title}
              className="w-16 h-16 p-1 bg-green-100 border border-green-900 rounded-full md:w-20 md:h-20"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-green-900 md:text-xl">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-600 md:text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="relative flex items-center justify-center order-1 w-full mt-8 md:order-2 md:w-1/2 md:mt-0">
        <div className="relative flex items-center justify-center overflow-hidden bg-green-100 rounded-full w-72 h-72 md:w-96 md:h-96">
          <img
            src={hand}
            alt="Product"
            className="object-contain w-[300px] md:w-[400px] absolute bottom-0 -rotate-12 h-full scale-x-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection; 