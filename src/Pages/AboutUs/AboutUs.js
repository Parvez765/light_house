import React from "react";
import AllTitle from "../../Hooks/AllTitle/AllTitle";

import pic1 from "../../Assets/AboutUs/pic1.jpeg";
import pic2 from "../../Assets/AboutUs/pic2.jpg";

import human1 from "../../Assets/AboutUs/human1.jpg";
import human2 from "../../Assets/AboutUs/human2.jpg";
import human3 from "../../Assets/AboutUs/human3.jpg";

import office1 from "../../Assets/AboutUs/office1.jpg";
import office2 from "../../Assets/AboutUs/office2.jpeg";
import office3 from "../../Assets/AboutUs/office3.jpg";
import office4 from "../../Assets/AboutUs/office4.jpg";
import office5 from "../../Assets/AboutUs/office5.jpeg";
import office6 from "../../Assets/AboutUs/office6.jpg";

import onlyLogo from "../../Assets/AboutUs/only_logo.png";
import photographer from "../../Assets/AboutUs/PG.jpg";

import { BsArrowUpRight } from "react-icons/bs";

const AboutUs = () => {
  AllTitle("About Us");

  const perseverances = [
    {
      name: "Rasel",
      title:
        "One of our best Quality Assurance Managers. Learn how he became a part of our family!",
      human: human1,
    },

    {
      name: "Saida",
      title:
        "One of our most skilled photo editors. Learn her story in her own words!",
      human: human2,
    },

    {
      name: "Sobhan",
      title:
        "One of our most skilled traffic controller. Learn his story in from his own words!",
      human: human3,
    },
  ];
  return (
    <div className="my-10">
      {/* Welcome to lighthouse */}
      <div>
        <div className="flex flex-col items-center mb-10 mx-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Welcome to
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold text-center text-sky-900">
            lighthouse
          </h2>
        </div>

        <img
          src={pic1}
          className="w-full h-[300px] xl:h-[400px] object-cover object-center mb-24 md:mb-32"
          alt=""
        />

        <div className="flex flex-col lg:flex-row justify-center gap-20 mx-4 mb-[100px] sm:mb-[250px]">
          <div className="flex flex-col text-center">
            <h2 className="text-gray-600 text-5xl sm:text-7xl font-bold">
              5000+
            </h2>
            <h2 className="text-gray-600 text-xl font-medium">
              companies are thriving with our help
            </h2>
          </div>

          <div className="flex flex-col text-center">
            <h2 className="text-gray-600 text-5xl sm:text-7xl font-bold">
              12000+
            </h2>
            <h2 className="text-gray-600 text-xl font-medium">
              images edited every day
            </h2>
          </div>

          <div className="flex flex-col text-center">
            <h2 className="text-gray-600 text-5xl sm:text-7xl font-bold">
              1795+
            </h2>
            <h2 className="text-gray-600 text-xl font-medium">
              individuals trained and empowered in 15+ years
            </h2>
          </div>
        </div>
      </div>

      {/* It was never about us */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mx-4 mb-[200px]">
        <div className="max-w-xl">
          <h2 className="text-5xl sm:text-6xl font-bold">Actually...</h2>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            it was never about 'us' !
          </h2>

          <h2 className="text-xl text-gray-600 font-medium">
            Our mission is simple! We empower people and build a bridge of
            harmony between our photo editors and you! No matter wherever you
            are or how timezones set us apart, we make your work easy and
            effortless.
          </h2>
        </div>

        <img src={onlyLogo} className="w-[150px] md:w-[200px]" alt="" />
      </div>

      {/* We are a hybrid company */}
      <div className="flex justify-center mb-[200px] mx-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-16 max-w-max rounded-2xl bg-gradient-to-br from-white from-50% via-white via-70% to-sky-300 to-100%">
          <div className="flex flex-col max-w-xl">
            <div class="flex mb-6">
              <h1 class="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-sky-600">
                We are a hybrid company.
              </h1>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold">
              Fully flexible to our employees and customers.
            </h2>
          </div>

          <h2 className="text-2xl text-gray-600 font-medium max-w-lg">
            At lighthouse, we have only one rule – act with utmost integrity and
            professionalism. No matter where you or we are, we make sure you get
            the service you need. Properly, consistently, perfectly.
          </h2>
        </div>
      </div>

      {/* We are a family of 300+ passionate individuals */}
      <div className="flex justify-center mx-4 mb-[200px]">
        <div className="bg-gradient-to-r from-yellow-100 to-green-100 flex flex-col items-center gap-10 max-w-max rounded-xl p-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <h2 className="text-5xl sm:text-6xl text-center md:text-left font-bold max-w-xl">
              We are a family of 300+ passionate individuals
            </h2>
            <h2 className="text-xl text-center md:text-left font-medium text-gray-600 max-w-xl">
              See how we're working to create a positive and reinforceable
              change in the world by building a bridge of harmony between you
              and one of your fellow earthmen.
            </h2>
          </div>

          <img
            src={pic2}
            className="xl:max-w-[1000px] object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>

      {/* From perseverance to Finesse */}
      <div className="mx-4 mb-[200px]">
        <h2 className="text-5xl sm:text-6xl text-center font-bold mb-6">
          From Perseverance to Finesse
        </h2>
        <h2 className="text-xl text-gray-600 text-center font-medium mb-10">
          Our journey was not simple. For 20+ years, we’ve trained 1595+ photo
          editors and picked the best of them to work for you. Here are three of
          your photo editors sharing their stories.
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-5 p-6 lg:gap-6 2xl:gap-10 bg-gradient-to-b from-gray-100 to-sky-100">
            {perseverances?.map((perseverance) => (
              <div className="max-w-[400px] shadow-xl drop-shadow-xl">
                <img
                  src={perseverance?.human}
                  className="rounded-t-xl object-cover object-center h-[400px]"
                  alt=""
                />

                <div className="bg-white hover:bg-gray-300 duration-300 ease-in-out px-5 py-3">
                  <h2 className="text-lg font-semibold text-sky-700 mb-4">
                    Meet {perseverance?.name}
                  </h2>

                  <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:h-[150px]">
                    {perseverance?.title}
                  </h2>

                  <div className="flex items-center max-w-max gap-3 text-gray-600 hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer">
                    <h2 className="text-xl font-medium">Read more</h2>

                    <BsArrowUpRight className="font-bold" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer-Centricity is our core value */}
      <div className="flex justify-center mb-[200px]">
        <div className="flex flex-col mx-4 sm:mx-10 lg:w-[800px] xl:w-[900px] 2xl:w-[1100px]">
          <h2 className="text-4xl sm:text-6xl text-gray-600 font-bold text-center mb-24">
            Customer-Centricity is our core value. But the journey towards it
            wasn’t smooth and has never been easy.
          </h2>

          <h2 className="text-4xl sm:text-6xl font-bold mb-14">
            Let's dive into our story!
          </h2>

          {/* ----------------- */}
          <div className="flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-10 mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold">2005</h2>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-600">
              The story goes back to a time, when inflation was rising, and the
              unemployment rate in Bangladesh was skyrocketing. Where school
              graduates were falling short of getting employed, what about the
              drop-outs?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-10 mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold">2008</h2>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-600">
              That’s the question that struck our founder, Shariar Tanvir. Do
              you want to know a secret? He is the Jack of all trades and master
              of many (but he doesn’t know that yet). Tanvir wanted to make a
              change in his community. But how?
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-10 mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold">2012</h2>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-600">
              Would you take a chance on a recovered addict? A school drop-out?
              An unemployed but educated son of a farmer or ‘housewife’?
              Socially ostracized divorced girls and women? People from
              different ages, casts, backgrounds, and diversity? Tanvir did.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-10 mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold">2014</h2>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-600">
              He made this umbrella named lighthouse, trained ‘his’ people
              (that’s what he likes to call it!), and made them empowered
              through his constantly evolving innovations and business
              strategies.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-10 mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold">2018</h2>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-600">
              By this time, lighthouse has been operating in three offices, two
              in Bangladesh and one in the USA, with 100+ photo editors working
              around the clock to serve its clients best.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:items-center gap-6 md:gap-10 mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold">2023</h2>
            <h2 className="text-lg sm:text-2xl font-semibold text-gray-600">
              Now, we, more than 250+ people, are living happily ever after
              under his leadership at lighthouse and are ‘forced’ (we mean it!)
              to be continually evolving, learning, and training for the next
              level of the next future.
            </h2>
          </div>
        </div>
      </div>

      {/* Where’re you in our story? */}
      <div className="flex justify-center mb-[200px]">
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center gap-10 xl:w-[1100px] 2xl:w-[1300px] mx-4">
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold mb-14">
              Where’re you in our story?
            </h2>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-600">
              See that’s the main theme of our company. We never meant us when
              we said ‘we.’ We meant ‘you.’ We don’t process or edit or retouch
              images for you, we provide you with the solutions you need most.
              <br />
              <br />
              As we have said, we’re the middleman. But how is that? Each
              payment we receive from you goes directly to your photo editor,
              who works 24/7 for you, with the lowest of opportunities in life
              and the highest of skills. You are not paying for your work, you
              are empowering one of your mates to get through life a little
              easier.
            </h2>
          </div>

          <img
            src={photographer}
            className="xl:w-[700px] 2xl:w-[800px]"
            alt=""
          />
        </div>
      </div>

      {/* Life at lighthouse */}
      <div className="mx-4 mb-[100px]">
        <h2 className="text-5xl sm:text-6xl font-bold text-center mb-10">
          Life at lighthouse
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1500px]">
            <img
              src={office1}
              className="rounded-xl h-full object-cover"
              alt=""
            />

            <div className="grid grid-rows-2 gap-4">
              <img
                src={office2}
                className="rounded-xl h-full object-cover"
                alt=""
              />
              <img
                src={office3}
                className="rounded-xl h-full object-cover"
                alt=""
              />
            </div>

            <img
              src={office4}
              className="rounded-xl h-full object-cover hidden md:block"
              alt=""
            />

            <div className="hidden lg:grid lg:grid-rows-2 lg:gap-4">
              <img
                src={office5}
                className="rounded-xl h-full object-cover"
                alt=""
              />
              <img
                src={office6}
                className="rounded-xl h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
