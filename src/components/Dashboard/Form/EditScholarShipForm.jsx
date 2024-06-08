import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { imageUpload } from "../../../utils";
import { useForm } from "react-hook-form";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'
import { useState } from "react";


const EditScholarShipForm = () => {
    const { register, handleSubmit } = useForm();
    const sholarship = useLoaderData();
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });
 
    const handleDates = item => {
        setDates(item.selection)
    }
    // console.log(sholarship);
    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
        mutationFn: async updateData => {
            const { data } = await axiosSecure.put(`/ScholarShips/${sholarship._id}`, updateData)
            return data
        },
        onSuccess: () => {

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your items has been Edit",
                showConfirmButton: false,
                timer: 1500
            });
        }
    })

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
           
        }
    

        try {
            await mutateAsync(ScholarShipItem)
        }
        catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "Error",
                title: "Your items not  Edit ",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="my-12">

            <div>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-lg mx-auto p-5 border">
                    <h1 className="text-3xl font-bold text-center uppercase">UPDATE scholarship</h1>
                    <div className="form-control">
                        <label htmlFor="ScholarshipName" className="label">
                            <span className="label-text">Scholarship Name</span>
                        </label>
                        <input type="text" 
                        {...register("ScholarshipName",)}
                        defaultValue={sholarship.ScholarshipName} placeholder="type your name" name="ScholarshipName" id="text" className="input input-bordered focus:border-0" required />

                    </div>
                    <div className="form-control">
                        <label htmlFor="UniversityName" className="label">
                            <span className="label-text">University Name</span>
                        </label>
                        <input type="text" 
                        {...register("UniversityName",)}
                        defaultValue={sholarship.UniversityName} placeholder="type your University Name" name="UniversityName" id="text" className="input input-bordered focus:border-0" required />

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
                            className="focus:border-0"

                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="Country" className="label">
                            <span className="label-text">University Country</span>
                        </label>
                        <input type="text" 
                         {...register("Country",)}
                        defaultValue={sholarship.location.Country} placeholder="type your University Country name " name="Country" id="text" className="input input-bordered focus:border-0" required />

                    </div>
                    <div className="form-control">
                        <label htmlFor="city" className="label">
                            <span className="label-text">University city</span>
                        </label>
                        <input type="text" 
                          {...register("city",)}
                        defaultValue={sholarship.location.city} placeholder="type your University city name" name="city" id="text" className="input input-bordered focus:border-0" required />

                    </div>
                    <div className="form-control">
                        <label htmlFor="rank" className="label">
                            <span className="label-text">University World rank</span>
                        </label>
                        <input type="number" 
                         {...register("WorldRank",)}
                        defaultValue={sholarship.WorldRank} placeholder="type your University World rank" name="WorldRank" id="rank" className="input input-bordered focus:border-0" required />

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
                        <input type="number" 
                         {...register("TuitionFees",)}
                        defaultValue={sholarship.TuitionFees} placeholder="type  Tuition fees" name="TuitionFees" id="TuitionFees" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label htmlFor="ApplicationFees" className="label">
                            <span className="label-text">Application fees</span>
                        </label>
                        <input type="number" 
                         {...register("ApplicationFees",)}
                        defaultValue={sholarship.ApplicationFees} placeholder="type  Application-fees" name="ApplicationFees" id="ApplicationFees" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label htmlFor="ServiceCharge" className="label">
                            <span className="label-text">Service charge</span>
                        </label>
                        <input type="number" 
                        {...register("ServiceCharge",)}
                        defaultValue={sholarship.ServiceCharge} placeholder="type  Service charge" name="ServiceCharge" id="ServiceCharge" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label htmlFor="Application-Deadline" className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <DateRange
                        //  {...register("[dates]",)}
                                showDateDisplay={false}
                                rangeColors={['#F6536D']}
                                editableDateInputs={true}
                                onChange={item => handleDates(item)}
                                moveRangeOnFirstSelection={false}
                                ranges={[dates]}
                            />
                       
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-[#9ff4c5] capitalize">update scholarship</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditScholarShipForm;