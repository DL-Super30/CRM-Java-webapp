import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Lead() {
    return (
        <div>
            {/* <Head>
                <title>Leads</title>
            </Head> */}

            {/* Navigation Bar */}
            <NavBar />

            <h1 className="text-2xl font-bold p-6">Leads</h1>

            {/* Lead Card */}
            <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
                <div className="flex justify-between items-center w-full px-6 py-4">
                    <div className="flex items-center space-x-2">
                        {/* Back Icon */}
                        <div className="mt-1">
                            <img src="/back.png" alt="Back Icon" className="w-3 h-3" />
                        </div>

                        {/* Back Text */}
                        <p className="text-gray-700 text-base">Back</p>

                        {/* ID Icon */}
                        <div className="mt-1">
                            <img src="/id-card.png" alt="ID Card Icon" className="w-5 h-5" />
                        </div>

                        {/* Name */}
                        <div className="font-bold text-xl mb-1">V. Hari</div>
                    </div>

                    {/* Button Aligned to Right End */}
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Convert
                        </button>
                    </div>
                </div>
                
                {/* Separator Line */}
                <div className="border-t border-gray-300 pt-1 mt-4"></div>

                {/* Information Section - Side by Side */}
                <div className="flex flex-wrap justify-between px-6 py-4 space-y-4">
                    <div className="flex-1">
                        <p>Lead Source<br /><strong className='text-blue-500'>Website</strong></p>
                    </div>
                    <div className="flex-1">
                        <p>Phone<br /><strong className='text-blue-500'>+91 9502655018</strong></p>
                    </div>
                    <div className="flex-1">
                        <p>Email<br /><strong className='text-blue-500'>hari@gmail.com</strong></p>
                    </div>
                    <div className="flex-1">
                        <p>Lead Status<br /><strong className='text-green-500'>Attempted</strong></p>
                    </div>
                </div>
            </div>
            <div className="max-w-full rounded overflow-hidden shadow-lg bg-white">
    <div className="flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center space-x-2">
            {/* Back Icon */}
            <div className="mt-1">
                <img src="/id-card.png" alt="Back Icon" className="w-10 h-10" />
            </div>

            {/* Back Text */}
            <p className="text-gray-700 text-base">All leads</p>

            <div className="mt-1">
                <img src="/down-arrow(1).png" alt="down-arrow" className="w-6 h-6" />
            </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 ml-auto">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create Lead
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Actions
            </button>
        </div>
    </div>
</div>
       {/* Search Button */}
    <div className="px-6 py-4">
        <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded w-96 flex items-center justify-center space-x-2">
            {/* Search Icon */}
            <img src="/search-interface-symbol(2).png" alt="Search Icon" className="w-5 h-5" />
            <span>Search</span>
        </button>
        <div className="px-6 py-4">
        <div className="grid grid-cols-5 gap-0 border-black-300">
            {/* Search Button */}
            {/* <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
                <img src="/search-icon.png" alt="Search Icon" className="w-5 h-5" />
                <span>Search</span>
            </button> */}

            {/* Columns */}
            <div className="bg-blue-500 p-4 rounded">
                <p className="text-white text-center">Not Connected <strong className='bg-red-600 rounded-md py-px px-1'>0</strong></p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
                <p className="text-gray-700 text-center">Attempted <strong className='bg-red-600 rounded-md py-px px-1'>0</strong></p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
                <p className="text-gray-700 text-center">Warm Lead <strong className='bg-red-600 rounded-md py-px px-1'>0</strong></p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
                <p className="text-gray-700 text-center">Cold Lead <strong className='bg-red-600 rounded-md py-px px-1'>0</strong></p>
            </div>

            {/* <div className="bg-gray-100 p-4 rounded">
            <img src="/cells.png" alt="Table icon" className="w-5 h-5" />
                <p className="text-gray-700 text-center">Table</p>
            </div> */}
            
        </div>
        <div className="mt-6">
        <hr className="border-gray-300 my-4" />
            <div className="flex justify-between bg-gray-200 p-4 rounded">
            <div className="flex items-center justify-center w-1/12">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </div>
                <div className="w-1/5 text-center font-bold">Created On</div>
                <div className="w-1/5 text-center font-bold">Lead Status</div>
                <div className="w-1/5 text-center font-bold">Name</div>
                <div className="w-1/5 text-center font-bold">Phone</div>
                <div className="w-1/5 text-center font-bold">Stack</div>
                <div className="w-1/5 text-center font-bold">Course</div>
            </div>
        </div>
        
        
    </div>

    </div>
    

            
        </div>

    
    );
}
