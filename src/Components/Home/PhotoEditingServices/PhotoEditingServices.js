import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import img1 from "../../../Assets/PhotoEditingServices/Services_1.png";
import img2 from "../../../Assets/PhotoEditingServices/Services_2.png";
import img3 from "../../../Assets/PhotoEditingServices/Services_3.png";
import img4 from "../../../Assets/PhotoEditingServices/Services_4.png";
import img5 from "../../../Assets/PhotoEditingServices/Services_5.png";
import img6 from "../../../Assets/PhotoEditingServices/Services_6.png";

const PhotoEditingServices = () => {
  const editingServices = [
    {
      title: "Clipping Path Service",
      details:
        "With our pro photo editors, we provide 100% accurate, professional, pixel-perfect clipping path services to top e-commerce, fashion, accessories and apparel businesses all over the world.",
      img: img1,
    },
    {
      title: "Multi-clipping Path Service",
      details:
        "We make your life easy by helping your post-production team to achieve large batches of 100% accurate and perfectly shaped product clippings in as little as 6 hours.",
      img: img2,
    },
    {
      title: "Retouching Services",
      details:
        "Get high-end editorial, apparel, fashion, and accessories retouching from us and tell your brand story! Build your own team from our 100+ pro-retouchers, who will specifically work on your project only.",
      img: img3,
    },
    {
      title: "Ghost Mannequin",
      details:
        "We provide pro-photographers, fashion, garments and apparel businesses with pixel-perfect complex ghost mannequin services. Our professional retouchers take as little as 3 hours to deliver the best services in the industry so that you can save time and money.",
      img: img4,
    },
    {
      title: "Embroidery Digitizing",
      details:
        "Get production-friendly, neat machine output with no breakage — sharp and symmetrical stitch work and save your time and money with lighthouse.",
      img: img5,
    },
    {
      title: "Vector Conversion Services",
      details:
        "Our specialized expert team of photo editors converts large batches of raster to vectors so that you can print your preferred design in any size, saving more time and money.",
      img: img6,
    },
  ];

  return (
    <div>
      <div className="mb-14">
        <div className="mb-24 mx-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Photo Editing Services
          </h2>
          <h2 className="text-[#595a5c] text-lg font-medium text-center">
            Let us look after the edits, so you can get back to the work that
            needs you. You can always get up to 20% discount.
          </h2>
        </div>

        <div>
          {editingServices?.map((services) => (
            <div className="flex justify-center">
              <div className="flex flex-col-reverse md:flex-row justify-between gap-8 mb-16 mx-10">
                <div className="flex justify-center md:flex-none">
                  <div className="md:w-[300px]">
                    <h2 className="text-center md:text-left text-3xl font-bold mb-4">
                      {services?.title}
                    </h2>
                    <h2 className="text-center md:text-left text-[#595a5c] text-lg font-medium mb-6">
                      {services?.details}
                    </h2>

                    <div className="flex justify-center md:block">
                      <div className="flex items-center gap-2 hover:cursor-pointer">
                        <h2 className="text-lg font-semibold text-sky-600">
                          Learn More
                        </h2>
                        <AiOutlineArrowRight className="text-lg font-semibold text-sky-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={services?.img} className="w-full" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoEditingServices;
