import { useLoaderData } from "react-router-dom";


const EditScholarShipForm = () => {
    const sholarship = useLoaderData();
    console.log(sholarship);
    const handleSubmit=async e=>{
        e.preventDefault()
        const form = e.target
        const ScholarshipName = form.ScholarshipName.value
        const UniversityName = form.UniversityName.value
        const image = form.image
        const Country = form.Country.value
        const city = form.city.value
        const WorldRank = form.WorldRank.value
        const Subjectcategory = form.Subjectcategory.value
        const ScholarshipCategory = form.ScholarshipCategory
        const Degree = form.Degree.value
        const TuitionFees = form.TuitionFees.value
        const ApplicationFees = form.ApplicationFees.value
        const ServiceCharge = form.ServiceCharge
        const ApplicationDeadline = form.ApplicationDeadline.value
        
     const updateData = {
        ScholarshipName,
        UniversityName,
        image,
           WorldRank,
         Subjectcategory,
          ScholarshipCategory,
          Degree,
          TuitionFees,
           ApplicationFees,
         ServiceCharge,
          ApplicationDeadline,
          location: {
            Country,
            city,
          },
       }
       console.log(updateData);
    }
    return (
        <div>

        <div>

            <form onSubmit={handleSubmit} className="card-body max-w-lg mx-auto">
                <h1 className="text-3xl font-bold text-center">UPDATE scholarship</h1>
                <div className="form-control">
                    <label htmlFor="text" className="label">
                        <span className="label-text">Scholarship Name</span>
                    </label>
                    <input type="text" defaultValue={sholarship.ScholarshipName} placeholder="type your name" name="text" id="text" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label htmlFor="University-Name" className="label">
                        <span className="label-text">University Name</span>
                    </label>
                    <input type="text" defaultValue={sholarship.ScholarshipName} placeholder="type your University Name" name="UniversityName" id="text" className="input input-bordered" required/>

                </div>
                <div className="form-control">
                    <label htmlFor='image' className='block mb-2 text-sm'>
                        Select Image:
                    </label>
                    <input
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
                    <input type="text" defaultValue={sholarship.ScholarshipName} placeholder="type your University Country name" name="Country" id="text" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label htmlFor="city" className="label">
                        <span className="label-text">University city</span>
                    </label>
                    <input type="text" defaultValue={sholarship.ScholarshipName} placeholder="type your University city name" name="city" id="text" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label htmlFor="rank" className="label">
                        <span className="label-text">University World rank</span>
                    </label>
                    <input type="number" defaultValue={sholarship.ScholarshipName} placeholder="type your University World rank" name="WorldRank" id="rank" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label
                        className="block mt-4 mb-2 dark:text-white"
                        htmlFor="Subjectcategory"
                    >
                        Subject category
                    </label>
                    <select
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
                    <input type="number" defaultValue={sholarship.ScholarshipName} placeholder="type  Tuition fees" name="TuitionFees" id="text" className="input input-bordered" required/>

                </div>
                <div className="form-control">
                    <label htmlFor="Application-fees" className="label">
                        <span className="label-text">Application fees</span>
                    </label>
                    <input type="number" defaultValue={sholarship.ScholarshipName} placeholder="type  Application-fees" name="ApplicationFees" id="text" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label htmlFor="Service-charge" className="label">
                        <span className="label-text">Service charge</span>
                    </label>
                    <input type="number" defaultValue={sholarship.ScholarshipName} placeholder="type  Service charge" name="ServiceCharge" id="text" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label htmlFor="Application-Deadline" className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="number" defaultValue={sholarship.ScholarshipName} placeholder="type  Service charge" name="ApplicationDeadline" id="text" className="input input-bordered" required/>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">add items</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default EditScholarShipForm;