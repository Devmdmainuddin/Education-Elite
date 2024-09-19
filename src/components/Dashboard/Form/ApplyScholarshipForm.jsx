import Swal from "sweetalert2";
import { imageUpload } from "../../../utils";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'

const ApplyScholarshipForm = ({ UniversityName,ScholarshipName, total, ScholarshipCategory, SubjectCategorey, id }) => {
    const { register, handleSubmit } = useForm();
    // const categorey = useCategorey();
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth() || {}

    const onSubmit = async data => {
        const image_url = await imageUpload(data.image[0])
        const applyShipItem = {
            phoneNumber: data.phoneNumber,
            image: image_url,
            location: {
                Country: data.Country,
                city: data.city,
            },
            gender: data.gender,
            ScholarshipName:data.ScholarshipName,
            SubjectCategorey: data.SubjectCategorey,
            scholarshipcategory: data.scholarshipcategory,
            Degree: data.Degree,
            studyGap: data.studyGap,
            sscresult: data.sscresult,
            hscresult: data.hscresult,
            universityName: data.universityName,
            applicationfees: total,
            Status:'pending',
            applyDate: new Date,
            username: user?.displayName,
            userId: user?.uid,
            userEmail: user?.email,
            scholarshipID: id,

        }
       

        try {
            const { data } = await axiosSecure.post(`/applyScholarShip`, applyShipItem)
            // console.log(data)
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
            console.log(err)
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
            <form onSubmit={handleSubmit(onSubmit)} className="card-body max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-center">Apply scholarship</h1>
                <div className="form-control">
                    <label htmlFor="number" className="label">
                        <span className="label-text">phone number</span>
                    </label>
                    <input type="text" placeholder="type your name" name="number" id="text" className="input input-bordered" required
                        {...register("phoneNumber",)} />

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
                        <span className="label-text">Country</span>
                    </label>
                    <input type="text" placeholder="Country name" name="Country" id="text" className="input input-bordered" required
                        {...register("Country",)} />

                </div>
                <div className="form-control">
                    <label htmlFor="city" className="label">
                        <span className="label-text">city</span>
                    </label>
                    <input type="text" placeholder="city name" name="city" id="text" className="input input-bordered" required
                        {...register("city",)} />

                </div>

                <div className="form-control">
                    <label className="block mt-4 mb-2 dark:text-white"
                        htmlFor="gender">gender</label>
                    <select
                        {...register("gender",)}
                        name="gender"
                        defaultValue='male'
                        id="male"
                        className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                        type="text"

                        placeholder="Select Gender"
                    >
                        <option value='male' >
                            male
                        </option>
                        <option value='female'>
                            female
                        </option>
                    </select>
                </div>

                <div className="form-control">
                    <label
                        className="block mt-4 mb-2 dark:text-white"
                        htmlFor="Degree"
                    >
                        Appliying   Degree
                    </label>
                    <select
                        {...register("Degree",)}
                        defaultValue='Bachelor'
                        name="Degree"
                        id="Degree"
                        className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                        type="text"
                        placeholder="Select Scholarship category"
                    >
                        <option value='Full fund' >
                            Diploma
                        </option>
                        <option value='Partial' >
                            Bachelor
                        </option>
                        <option value='Self-fund' >
                            masters
                        </option>


                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="Tuition-fees" className="label">
                        <span className="label-text">SSC Result</span>
                    </label>
                    <input type="number" placeholder="type  SSC Result" name="University-Name" id="text" className="input input-bordered" required
                        {...register("sscresult",)} />

                </div>
                <div className="form-control">
                    <label htmlFor="Application-fees" className="label">
                        <span className="label-text">HSC Result</span>
                    </label>
                    <input type="number" placeholder="type  HSC Result" name="University-Name" id="text" className="input input-bordered" required
                        {...register("hscresult",)} />

                </div>
                <div className="form-control">
                    <label htmlFor="studyGap" className="label">
                        <span className="label-text">Study gap</span>
                    </label>
                    <input type="number" placeholder="type your  study Gap" name="studyGap" id="text" className="input input-bordered" required
                        {...register("studyGap",)} />

                </div>

                <div className="form-control">
                    <label htmlFor="city" className="label">
                        <span className="label-text">Scholarship Name</span>
                    </label>
                    <input type="text" defaultValue={ScholarshipName} readOnly placeholder="type your University city name" name="city" id="text" className="input input-bordered" required
                        {...register("ScholarshipName",)} />

                </div>
                <div className="form-control">
                    <label htmlFor="city" className="label">
                        <span className="label-text">University name</span>
                    </label>
                    <input type="text" defaultValue={UniversityName} readOnly placeholder="type your University city name" name="city" id="text" className="input input-bordered" required
                        {...register("universityName",)} />

                </div>
                <div className="form-control">
                    <label htmlFor="scholarshipcategory" className="label">
                        <span className="label-text">Scholarship Category</span>
                    </label>
                    <input type="text" defaultValue={ScholarshipCategory} readOnly placeholder="type your University city name" name="scholarshipcategory" id="text" className="input input-bordered" required
                        {...register("scholarshipcategory")} />

                </div>
                <div className="form-control">
                    <label htmlFor="SubjectCategorey" className="label">
                        <span className="label-text">Subject Category</span>
                    </label>
                    <input type="text" defaultValue={SubjectCategorey} readOnly placeholder="type your University city name" name="SubjectCategorey" id="text" className="input input-bordered" required
                        {...register("SubjectCategorey")} />

                </div>



                <div className="form-control mt-6">
                    <button className="btn bg-[#9ff4c5] capitalize">Apply Scholarship</button>
                </div>
            </form>
        </div>
    );
};
ApplyScholarshipForm.propTypes = {
    id: PropTypes.string,
    SubjectCategorey: PropTypes.string,
    ScholarshipName: PropTypes.string,
    UniversityName: PropTypes.string,
    ScholarshipCategory: PropTypes.string,
    total: PropTypes.number
}

export default ApplyScholarshipForm;