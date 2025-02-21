import myPhoto from "../../assets/my-photo.png";
import myPorto12 from "../../assets/porto-homeline.png"
import myPorto21 from "../../assets/porto-apotek1.jpg"
import myPorto22 from "../../assets/porto-apotek2.png"
import myPorto23 from "../../assets/porto-apotek3.jpg"
import myPorto31 from "../../assets/porto31.png"
import myPorto32 from "../../assets/porto32.png"
import myPorto33 from "../../assets/porto33.png"
import myPorto41 from "../../assets/porto41.png"
import myPorto42 from "../../assets/porto42.png"
import myPorto1 from "../../assets/porto.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project() {
  return (
    <>
      {/* Hero Section */}
      <div  class="container flex justify-between items-center mx-auto p-8 mt-20">
        <button id="project" class="bg-fuchsia-600 bg-opacity-70 text-white py-2 px-4 rounded-lg flex items-center">
          <i class="fas fa-file-alt"></i>
          <span>Project</span>
        </button>
      </div>
      <div class="container mx-auto p-8 pt-0">
        <div class="text-center mb-10">
          <h1 class="text-4xl font-semibold text-fuchsia-500">EXPLORE MY PROJECT</h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div class="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-between transition duration-300 ease-in-out">
            <h2 class="text-2xl font-semibold mb-6">Homeline</h2>
            <h3 class="text-xl font-bold text-fuchsia-400 mb-4">HTML, CSS, React Native, bootstrap, UI/UX Design and Research</h3>
            <p class="text-sm mb-4">Website that provides various information about houses or land for sale at affordable prices and strategic locations.</p>
            <p class="text-sm text-white border-b border-fuchsia-400"></p>

            <div class="mt-5 mb-0">
              <div class="relative item-center justify-center">
                <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                  <div>
                    <img
                      src={myPorto1}
                      alt="my-photo"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'my-photo.png'; }}
                    />
                  </div>
                  <div>
                    <img
                      src={myPorto12}
                      alt="porto"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto-homeline.png'; }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-between transition duration-300 ease-in-out">
            <h2 class="text-2xl font-semibold mb-6">Apotek Website</h2>
            <h3 class="text-xl font-bold text-fuchsia-400 mb-4">HTML, CSS, PHP, bootstrap</h3>
            <p class="text-sm mb-4">Website providing and selling medicines and medical devices</p>
            <p class="text-sm text-white border-b border-fuchsia-400"></p>

            <div class="mt-5 mb-0">
              <div class="relative item-center justify-center">
                <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                  <div>
                    <img
                      src={myPorto21}
                      alt="my-photo"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto-apotek1.jpg'; }}
                    />
                  </div>
                  <div>
                    <img
                      src={myPorto22}
                      alt="porto"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto-apotek2.png'; }}
                    />
                  </div>
                  <div>
                    <img
                      src={myPorto23}
                      alt="my-photo"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto-apotek1=3.jpg'; }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-between transition duration-300 ease-in-out">
            <h2 class="text-2xl font-semibold mb-6">Amerta</h2>
            <h3 class="text-xl font-bold text-fuchsia-400 mb-4">HTML, CSS, bootstrap, UI/UX Design and Research</h3>
            <p class="text-sm mb-4">Website that provides various information about wedding organizer for booking wedding organizer and get the information.</p>
            <p class="text-sm text-white border-b border-fuchsia-400"></p>

            <div class="mt-5 mb-0">
              <div class="relative item-center justify-center">
                <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                  <div>
                    <img
                      src={myPorto31}
                      alt="my-photo"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto31.png'; }}
                    />
                  </div>
                  <div>
                    <img
                      src={myPorto32}
                      alt="porto"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto32.png'; }}
                    />
                  </div>
                  <div>
                    <img
                      src={myPorto33}
                      alt="porto"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto33.png'; }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col justify-between transition duration-300 ease-in-out">
            <h2 class="text-2xl font-semibold mb-6">BuRee Building Reservation</h2>
            <h3 class="text-xl font-bold text-fuchsia-400 mb-4">UI/UX Design</h3>
            <p class="text-sm mb-4">Mobile Design about a plan for a rental application for a building or venue by a party to be rented by a tenant</p>
            <p class="text-sm text-white border-b border-fuchsia-400"></p>

            <div class="mt-5 mb-0">
              <div class="relative item-center justify-center">
                <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                  <div>
                    <img
                      src={myPorto41}
                      alt="my-photo"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto41.png'; }}
                    />
                  </div>
                  <div>
                    <img
                      src={myPorto42}
                      alt="porto"
                      class="w-full h-80 object-cover rounded-lg shadow-lg"
                      onError={(e) => { e.target.src = 'porto42.png'; }}
                    />
                  </div>
                </Slider>
              </div>
            </div>
          </div>




        </div>
      </div>
    </>
  );
}

export default Project;
