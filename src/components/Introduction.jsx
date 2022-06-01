import React from "react";
const Introduction = () => {
  return (
    <>
      <section id="home-section" class="hero">
        <div class="home-slider  owl-carousel">
          <div class="slider-item ">
            <div class="overlay"></div>
            <div class="container">
              <div
                class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              >
                <div
                  class="one-third js-fullheight order-md-last img"
                  style={{backgroundImage:"url(images/bg_1.png);"}}
                >
                  <div class="overlay"></div>
                </div>
                <div
                  class="one-forth d-flex  align-items-center ftco-animate"
                  data-scrollax=" properties: { translateY: '70%' }"
                >
                  <div class="text">
                    <span class="subheading">Hello!</span>
                    <h1 class="mb-4 mt-3">
                      I'm <span>Clark Thompson</span>
                    </h1>
                    <h2 class="mb-4">A Freelance Web Designer</h2>
                    <p>
                      <a href="#" class="btn btn-primary py-3 px-4">
                        Hire me
                      </a>{" "}
                      <a
                        href="#"
                        class="btn btn-white btn-outline-white py-3 px-4"
                      >
                        My works
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
