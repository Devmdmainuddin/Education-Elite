import { useEffect, useState } from "react";
// import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

 import Scholarship from "../components/pages/Scholarship";
import useAxiosCommon from "../hooks/useAxiosCommon";
const AllScholarship = () => {
    const [itemsperpage, setitemsperpage] = useState(6)
    const [counts, setCounts] = useState(0)
    const [filter, setFilter] = useState('')
    const numberofPage = Math.ceil(counts / itemsperpage);
    const [currentPage, setcurrentPage] = useState(0)
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const pages = [...Array(numberofPage).keys()]
    const [items, setitems] = useState([])
    const axiosCommon = useAxiosCommon()

    useEffect(() => {

        const getData = async () => {
            const { data } = await axiosCommon(`/allScholarship?page=${currentPage}&size=${itemsperpage}&filter=${filter}&sort=${sort}&search=${search}`)
            setitems(data)
            
        }
        getData()
    
    }, [currentPage,axiosCommon, itemsperpage, filter, sort, search])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axiosCommon(`/ScholarshipCount?filter=${filter}&search=${search}`
            )
          
            setCounts(data.count)
        }
        getCount()
    }, [filter,axiosCommon, search])


    const handleItemsPerPage = e => {
        const value = parseInt(e.target.value)
        setitemsperpage(value)
        setcurrentPage(0)
    }
    const handleReset = () => {
        setFilter('')
        setSort('')
        setSearch('')
        setSearchText('')
    }


    const handlepre = () => {
        if (currentPage > 0) {
            setcurrentPage(currentPage - 1)
        }
    }
    const handlenext = () => {
        if (currentPage < pages.length - 1) {
            setcurrentPage(currentPage + 1)
        }
    }
    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }

    return (
        <div className="mt-4 max-w-[1420px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <Helmet>
            <title>Education-Elite | all scholarship </title>
        </Helmet>

        <div className="text-center">
           
            <h2 className="text-5xl capitalize">all scholarship</h2>
            <p className="mt-3 w-1/2 mx-auto">From educators to nonprofit professionals, the Event Scholarship Program provides a unique opportunity for leaders to further enhance their skills </p>

        </div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 mt-6'>
            <div>
                <select
                    onChange={e => {
                        setFilter(e.target.value)
                        setcurrentPage(0)
                    }}
                    value={filter}
                    name='SubjectCategorey'
                    id='SubjectCategorey'
                    className='border p-3 rounded-md bg-gray-100'
                >
                    <option value=''>Filter By Category</option>
                    <option value='Agriculture'>Agriculture</option>
                    <option value='Engineering'>Engineering</option>
                    <option value='Doctor'>Doctor</option>
                </select>
            </div>
            <form onSubmit={handleSearch}>
                <div className="flex">

                    <div className="relative ">
                        <input
                            className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600   leading-4"
                            type='text'
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText}
                            name='search'
                            placeholder='Enter Product Title'
                            aria-label='Enter Product Title'

                        />
                        <BsSearch className="absolute pointer-events-none top-4 right-5 " />

                    </div>
                    <button className="bg-teal-500  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-teal-400">
                        Search
                    </button>

                </div>
            </form>


            <div>
                <select
                    onChange={e => {
                        setSort(e.target.value)
                        setcurrentPage(0)
                    }}
                    value={sort}
                    name='sort'
                    id='sort'
                    className='border p-3 rounded-md bg-gray-100'
                >
                    <option value=''>Sort By Deadline</option>
                    <option value='dsc'>Descending Order</option>
                    <option value='asc'>Ascending Order</option>
                </select>
            </div>



            <button onClick={handleReset} className=' border p-3 rounded-md bg-gray-100 text-green-600'>
                Reset
            </button>
        </div>

 {/* <div id="gridLayout" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"> */}
        <div id="gridLayout" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {
                items.map(item => <Scholarship
                    key={item._id}
                    item={item}
                ></Scholarship>)
            }

        </div>

        <div>
            <p className="text-center mt-4">current page : {currentPage}</p>
            <div className="max-w-8xl mx-auto container py-10 flex justify-center items-center ">

                <ul className="flex justify-center items-center ">
                    <li onClick={handlepre}>
                        <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </span>
                    </li>
                    {
                        pages.map(page => <button onClick={() => setcurrentPage(page)} key={page} className={currentPage === page ? "bg-orange-300 p-3" : 'mx-6 p-3 border-2'}>{page}</button>)
                    }
                    {/* <li>
                        <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
                    </li> */}

                    <li onClick={handlenext}>
                        <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </span>
                    </li>
                </ul>
                <select name="" value={itemsperpage} onChange={handleItemsPerPage} id="" className="p-3">
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                    <option value="21">21</option>

                </select>
            </div>
            ;
        </div>
    </div>
    );
};

export default AllScholarship;