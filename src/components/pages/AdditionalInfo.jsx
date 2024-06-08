

const AdditionalInfo = () => {
    return (
        <div>
            <h2 className="text-3xl text-center mt-10 text-emerald-700">Additional Information</h2>
            <span className="w-1/4 mx-auto h-[2px] bg-slate-400"></span>
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-x-6">
                <div >
                    <h2 className="text-2xl  text-emerald-700">Helpful Hints For Completing Scholarship Applications</h2>
                    <ul className="mt-4 text-lg">
                        <li className="list-disc">Review criteria to ensure you are eligible.</li>
                        <li className="list-disc">Collect items needed to complete application. Prepare essays in advance.</li>
                        <li className="list-disc">Use the correct method to apply for scholarships.</li>
                        <li className="list-disc">Deadlines and submittal requirements vary greatly – check them carefully.</li>
                        <li className="list-disc">Online applications: typically require a profile setup with an email address</li>
                        <li className="list-disc">Anticipate that all information will be communicated via email</li>
                        <li className="list-disc">Use a valid email address that you use on regular basis</li>
                        <li className="list-disc">Once you are ready to apply for an online scholarship, review the tutorial and start the application</li>
                       
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl text-emerald-700">What To Do When You Are Awarded A Scholarship</h2>
                    <ul className="mt-4 text-lg">
                        <li className="list-disc">Student must be enrolled/attending college full-time.</li>
                        <li className="list-disc">Review award letter carefully</li>
                        <li className="list-disc"> Most scholarships require additional information such as a scholarship agreement and information about the college.</li>
                        <li className="list-disc">Some scholarships require transcripts to be submitted</li>
                        <li className="list-disc">Complete any additional documents and note any other deadlines.</li>
                        <li className="list-disc">Some scholarships only pay after the 1st semester and require submittal of a transcript.</li>
                        <li className="list-disc">Multi-year scholarships typically require transcript submission.</li>
                        <li className="list-disc">Inform your college financial aid office of the scholarship.</li>
                        <li className="list-disc"> Send a thank you note to the donor.</li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default AdditionalInfo;