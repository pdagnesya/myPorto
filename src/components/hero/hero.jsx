import myPhoto from "../../assets/my-photo.png";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="mx-auto w-full top-0 pl-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center w-full">
          {/* Flex Left */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="flex flex-col w-full">
              {/* Intro */}
              <div className="h-[35%] pt-36">
                <h2 className="heading-2 text-white">Hai!</h2>
                <h1 className="heading-1 text-white">
                  I am <span className="text-fuchsia-400">Putri Dwi Agnesya</span>
                </h1>
                <p className="text-white-300 font-poppins pt-1">
                  Web Developer | UI/UX Designer
                </p>
              </div>
              <div className="h-[45%] pt-6">
                <div className="line-1 mt-1"></div>
                <p className="text-white-300 text-justify font-poppins mt-3">
                  I am a student of S1-Informatics study program at UPN 
                  &quot;Veteran&quot; Jawa Timur. I have interests and experience 
                  in the fields of web development, UI/UX design, research, and 
                  also product manager. In addition, I am also experienced in 
                  teaching private lessons. I can work individually or in groups. 
                  Learning new things is my passion which makes me a better and more 
                  productive person. I am also a friendly and adaptive person so I 
                  can communicate well.
                </p>
              </div>
              {/* End Intro */}

              {/* Button */}
              <div className="h-[20%] pt-9">
                <div className="left-0 flex flex-col sm:flex-row h-fit text-center">
                  <a
                    href="https://drive.google.com/file/d/11XRHcywor7Qu22O2BFOmOiJJfN1ObdCt/view?usp=sharing"
                    target="_blank"
                    className="downloadCV mb-4 sm:mb-0 sm:mr-4 bg-fuchsia-500 border-fuchsia-500 !important"
                  >
                    <i className="bi bi-file-text-fill mr-2"></i>
                    See My CV
                  </a>
                  <a href="https://wa.me/6282244601948" className="moreAboutMe border-fuchsia-500" target="_blank" rel="noopener noreferrer">
                    Contact Me
                  </a>
                </div>
              </div>
              {/* End Button */}
            </div>
          </div>
          {/* End Flex Left */}

          {/* Flex Right */}
          <div className="flex w-full md:w-1/2 justify-center order-1 md:order-2">
            <div className="flex flex-col items-center w-full">
              {/* Photo */}
              <div className="h-[90%] pt-28 pl-12 md:pl-0">
                <img src={myPhoto} alt="my-photo" className="w-full md:w-80 object-cover rounded-lg shadow-lg" />
              </div>
              {/* End Photo */}
            </div>
          </div>
          {/* End Flex Right */}
        </div>
      </section>
    </>
  );
}

export default Hero;
