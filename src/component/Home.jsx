import React from "react";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel>
          <div className="flex h-full items-center justify-center ">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center ">
            Slide 2
          </div>
          <div className="flex h-full items-center ">Slide 3</div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
