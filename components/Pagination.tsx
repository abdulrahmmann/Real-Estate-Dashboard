import {FaChevronLeft} from "react-icons/fa6";
import {FaChevronRight} from "react-icons/fa6";
import Link from "next/link";


const items = [
    {id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote'},
    {id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote'},
    {id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote'},
]

export default function Pagination() {
    return (
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link
                    href="#"
                    className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </Link>
                <Link
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-secondaryTextColor">
                        Showing <span className="font-medium">1</span> to <span
                        className="font-medium">10</span> Items
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex gap-1 rounded-md ">
                        <Link
                            href="#"
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400"
                        >
                            <span className="sr-only">Previous</span>
                            <FaChevronLeft aria-hidden="true" className="size-3.5"/>
                        </Link>
                        <Link
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-primaryColor rounded-lg px-4 py-2 text-sm font-semibold text-white">
                            1
                        </Link>
                        <Link
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-transparent rounded-lg px-4 py-2 text-sm font-semibold text-secondaryTextColor">
                            2
                        </Link>
                        <Link
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-transparent rounded-lg px-4 py-2 text-sm font-semibold text-secondaryTextColor">
                            3
                        </Link>
                        <Link
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-transparent rounded-lg px-4 py-2 text-sm font-semibold text-secondaryTextColor">
                            4
                        </Link>
                        <Link
                            href="#"
                            aria-current="page"
                            className="relative z-10 inline-flex items-center bg-transparent rounded-lg px-4 py-2 text-sm font-semibold text-secondaryTextColor">
                            5
                        </Link>

                        {/*<span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">...</span>*/}

                        <Link
                            href="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400"
                        >
                            <span className="sr-only">Next</span>
                            <FaChevronRight aria-hidden="true" className="size-3.5"/>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}
