function Resume() {
    return (
      <>
        {/* About Me Section */}
        <div id="resume" className="container mx-auto pl-4 pt-20">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
              <button className="bg-fuchsia-600 bg-opacity-70 text-white py-2 px-4 rounded-lg flex items-center">
                <i className="fas fa-file-alt"></i>
                <span>Resume</span>
              </button>
            </div>
  
            <div className="text-center pt-5">
              <h1 className="text-4xl font-semibold text-fuchsia-500">EDUCATION</h1>
            </div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                <h2 className="text-lg font-semibold">2021 - 2025 (Expected)</h2>
                <p className="text-xl mt-3">Undergraduate in Informatics, 3.94/4.00</p>
                <p className="text-sm mt-1">Universitas Pembangunan Nasional Veteran Jawa Timur</p>
              </div>
  
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                <h2 className="text-lg font-semibold">2023 - 2024</h2>
                <p className="text-xl mt-2">Web Development and Cloud Computing</p>
                <p className="text-sm mt-1">Infinite Learning and SEAL</p>
              </div>
  
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                <h2 className="text-lg font-semibold">2018 - 2021</h2>
                <p className="text-xl mt-2">Science Student</p>
                <p className="text-sm mt-1">SMA Negeri 2 Jombang</p>
              </div>
            </div>
            </div>
            <div className="text-center mb-6 pt-10">
              <h1 className="text-4xl font-semibold text-fuchsia-500 text-center ">EXPERIENCE</h1>
            </div>
          
          <div className="container mx-auto flex flex-col gap-6">
            <h2 className="text-lg text-white text-center">
              More than 1 years experience as a <br />
              <span className="font-bold text-fuchsia-400">Web Development and Designer UI/UX</span>
            </h2>
            <div className="flex flex-col items-center space-y-6">
              {/* Timeline Item 1 */}
              <div className="flex items-center justify-start w-full max-w-4xl mx-auto">
                <div className="w-40 h-10 bg-purple-400 text-white rounded-full flex justify-center items-center">
                  <span className="text-lg">2023 - 2025</span>
                </div>
                <div className="flex-1 h-1 bg-gray-400 mx-4"></div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl w-full">
                  <h2 className="font-semibold text-xl text-white-400">Tutor private and UI/UX Design</h2>
                  <p className="text-sm mt-2 text-gray-300"> Establishing communication with the team and stakeholders
                 and Improving student understanding give them guide for making portofolio</p>
                </div>
              </div>

              {/* Timeline Item 1 */}
              <div className="flex items-center justify-start w-full max-w-4xl mx-auto">
                <div className="w-40 h-10 bg-purple-400 text-white rounded-full flex justify-center items-center">
                  <span className="text-lg">2023</span>
                </div>
                <div className="flex-1 h-1 bg-gray-400 mx-4"></div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl w-full">
                  <h2 className="font-semibold text-xl text-white-400">Laravel Internship</h2>
                  <p className="text-sm mt-2 text-gray-300">PT Sinergi Inovasi Tekno 2023, Code the features on the internal secretariat website and the PT website
                  using Laravel</p>
                </div>
              </div>

              {/* Timeline Item 1 */}
              <div className="flex items-center justify-start w-full max-w-4xl mx-auto">
                <div className="w-40 h-10 bg-purple-400 text-white rounded-full flex justify-center items-center">
                  <span className="text-lg">2023</span>
                </div>
                <div className="flex-1 h-1 bg-gray-400 mx-4"></div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl w-full">
                  <h2 className="font-semibold text-xl text-white-400">UI/UX Design</h2>
                  <p className="text-sm mt-2 text-gray-300">Conducted during Independent Study at Infinite Learning on a large-scale project</p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="flex items-center justify-start w-full max-w-4xl mx-auto">
                <div className="w-40 h-10 bg-purple-400 text-white rounded-full flex justify-center items-center">
                  <span className="text-lg">2023</span>
                </div>
                <div className="flex-1 h-1 bg-gray-400 mx-4"></div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl w-full">
                  <h2 className="font-semibold text-xl text-white-400">Front-End Developer</h2>
                  <p className="text-sm mt-2 text-gray-300">Worked during Independent Study at Infinite Learning
                  , coded using HTML, CSS, Bootstrap, JavaScript, and React Native</p>
                </div>
              </div>
  
              {/* Timeline Item 3 */}
              <div className="flex items-center justify-start w-full max-w-4xl mx-auto">
                <div className="w-40 h-10 bg-purple-400 text-white rounded-full flex justify-center items-center">
                  <span className="text-lg">2023</span>
                </div>
                <div className="flex-1 h-1 bg-gray-400 mx-4"></div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl w-full">
                  <h2 className="font-semibold text-xl text-white-400">Website Developer with Wordpress</h2>
                  <p className="text-sm mt-2 text-gray-300">At the Faculty of Agriculture, UPN "Veteran" East Java, improve website using elementor and other features</p>
                </div>
              </div>
  
              {/* Timeline Item 4 */}
              <div className="flex items-center justify-start w-full max-w-4xl mx-auto">
                <div className="w-40 h-10 bg-purple-400 text-white rounded-full flex justify-center items-center">
                  <span className="text-lg">2023</span>
                </div>
                <div className="flex-1 h-1 bg-gray-400 mx-4"></div>
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl w-full">
                  <h2 className="font-semibold text-xl text-white-400">Tutor Excel</h2>
                  <p className="text-sm mt-2 text-gray-300">Implemented in KKN (Real Work Lecture) activities at SMKN 1 Mojoanyar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Resume;
  