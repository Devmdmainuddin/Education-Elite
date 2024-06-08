import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utils";
import useAuth from "../../../hooks/useAuth";
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const AddScholarShipForm = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth() || {}
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
    const handleDates = item => {
        setDates(item.selection)
    }

    const onSubmit = async data => {
        const image_url = await imageUpload(data.image[0])
        const ScholarShipItem = {
            ScholarshipName: data.ScholarshipName,
            UniversityName: data.UniversityName,
            image: image_url,
            location: {
                Country: data.Country,
                city: data.city,
            },
            WorldRank: data.WorldRank,
            SubjectCategorey: data.Subjectcategory,
            ScholarshipCategory: data.ScholarshipCategory,
            Degree: data.Degree,
            TuitionFees: data.TuitionFees,
            ApplicationFees: data.ApplicationFees,
            ServiceCharge: data.ServiceCharge,
            ApplicationDeadline:dates.endDate,
            postDate: new Date(),
            PostedBy: user?.email,

        }
        try {
            const { data } = await axiosSecure.post(`/addScholarShip`, ScholarShipItem)
          
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your items has been add",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
        catch (err) {
        
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "try again",
                showConfirmButton: false,
                timer: 1500
            });
        }



    }
    return (
        <div>

            <div>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-lg mx-auto border my-6 font-Inter capitalize">
                    <h1 className="text-3xl font-bold text-center">add scholarship</h1>
                    <div className="form-control">
                        <label htmlFor="text" className="label">
                            <span className="label-text">Scholarship Name</span>
                        </label>
                        <input type="text" placeholder="type your name" name="text" id="text" className="input input-bordered" required
                            {...register("ScholarshipName",)} />

                    </div>
                    <div className="form-control">
                        <label htmlFor="University-Name" className="label">
                            <span className="label-text">University Name</span>
                        </label>
                        <input type="text" placeholder="type your University Name" name="University-Name" id="text" className="input input-bordered" required
                            {...register("UniversityName",)} />

                    </div>
                    <div className="form-control">
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Image:
                        </label>
                        <input
                            {...register("image",)}
                            required
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Country" className="label">
                            <span className="label-text">University Country</span>
                        </label>
                        <input type="text" placeholder="type your University Country name" name="Country" id="text" className="input input-bordered" required
                            {...register("Country",)} />

                    </div>
                    <div className="form-control">
                        <label htmlFor="city" className="label">
                            <span className="label-text">University city</span>
                        </label>
                        <input type="text" placeholder="type your University city name" name="city" id="text" className="input input-bordered" required
                            {...register("city",)} />

                    </div>
                    <div className="form-control">
                        <label htmlFor="rank" className="label">
                            <span className="label-text">University World rank</span>
                        </label>
                        <input type="text" placeholder="type your University World rank" name="rank" id="rank" className="input input-bordered" required
                            {...register("WorldRank",)} />

                    </div>
                    <div className="form-control">
                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="Subjectcategory"
                        >
                            Subject category
                        </label>
                        <select
                            {...register("Subjectcategory",)}
                            name="Subjectcategory"
                            id="Subjectcategory"
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Select category"
                        >
                            <option value='Agriculture'>Agriculture</option>
                            <option value='Engineering'>Engineering</option>
                            <option value='Doctor'>Doctor</option>


                        </select>
                    </div>
                    <div className="form-control">
                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="ScholarshipCategory"
                        >
                            Scholarship category
                        </label>
                        <select
                            {...register("ScholarshipCategory",)}
                            name="ScholarshipCategory"
                            id="ScholarshipCategory"
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Select Scholarship category"
                        >
                            <option value='Full fund' >
                                Full fund
                            </option>
                            <option value='Partial' >
                                Partial
                            </option>
                            <option value='Self-fund' >
                                Self-fund
                            </option>


                        </select>
                    </div>
                    <div className="form-control">
                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="Degree"
                        >
                            Degree
                        </label>
                        <select
                            {...register("Degree",)}
                            name="Degree"
                            id="Degree"
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Select Scholarship category"
                        >
                            <option value='Diploma' >Diploma</option>
                            <option value='Bachelor' >Bachelor</option>
                            <option value='masters' >masters</option>


                        </select>
                    </div>
                    <div className="form-control">
                        <label htmlFor="Tuition-fees" className="label">
                            <span className="label-text">Tuition fees</span>
                        </label>
                        <input type="number" placeholder="type  Tuition fees" name="University-Name" id="text" className="input input-bordered" required
                            {...register("TuitionFees",)} />

                    </div>
                    <div className="form-control">
                        <label htmlFor="Application-fees" className="label">
                            <span className="label-text">Application fees</span>
                        </label>
                        <input type="number" placeholder="type  Application-fees" name="University-Name" id="text" className="input input-bordered" required
                            {...register("ApplicationFees",)} />

                    </div>
                    <div className="form-control">
                        <label htmlFor="Service-charge" className="label">
                            <span className="label-text">Service charge</span>
                        </label>
                        <input type="number" placeholder="type  Service charge" name="University-Name" id="text" className="input input-bordered" required
                            {...register("ServiceCharge",)} />

                    </div>
                    <div className="form-control">
                        <label htmlFor="Application-Deadline" className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <DateRange
                        
                                showDateDisplay={false}
                                rangeColors={['#F6536D']}
                                editableDateInputs={true}
                                onChange={item => handleDates(item)}
                                moveRangeOnFirstSelection={false}
                                ranges={[dates]}
                            />
                        
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-[#bef2f5] capitalize">add  scholarship</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddScholarShipForm;