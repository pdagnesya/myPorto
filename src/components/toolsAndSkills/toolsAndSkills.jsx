function ToolsAndSkills() {
    return (
        <>
            <div id="sertification" className="container mx-auto pl-0 pt-20">
                <div className="container mx-auto p-8">
                    <div className="flex justify-between items-center">
                        <button className="bg-fuchsia-600 bg-opacity-70 text-white py-2 px-4 rounded-lg flex items-center">
                            <i className="fas fa-file-alt"></i>
                            <span>Sertification</span>
                        </button>
                    </div>
  
                    <div className="text-center pt-5">
                        <h1 className="text-4xl font-semibold text-fuchsia-500">Sertifikasi</h1>
                    </div>
  
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                            <h2 className="text-lg font-semibold">2024</h2>
                            <p className="text-xl mt-3">Web Development BNSP</p>
                        </div>
  
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                            <h2 className="text-lg font-semibold">2024</h2>
                            <p className="text-xl mt-2">Cloud Computing</p>
                            <p className="text-sm mt-1">SEAL - Social Economic Accelerator Lab</p>
                        </div>
  
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                            <h2 className="text-lg font-semibold">2023 - 2024</h2>
                            <p className="text-xl mt-2">Web Development</p>
                            <p className="text-sm mt-1">Infinite Learning</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                            <h2 className="text-lg font-semibold">2023</h2>
                            <p className="text-xl mt-2">Web Development (Laravel)</p>
                            <p className="text-sm mt-1">PLAN Indonesia program Yes Tech</p>
                        </div>
  
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-fuchsia-200 hover:bg-opacity-10">
                            <h2 className="text-lg font-semibold">2022</h2>
                            <p className="text-xl mt-2">IT Support</p>
                            <p className="text-sm mt-1">Coursera</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToolsAndSkills;