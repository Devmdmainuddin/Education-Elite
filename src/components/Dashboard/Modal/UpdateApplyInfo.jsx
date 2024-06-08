import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types'

const UpdateApplyInfo = ({ setIsOpen, isOpen, modalHandler, universityName }) => {


    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setIsOpen(false)}
            >
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    UpDate application Info
                                </DialogTitle>
                                <IoClose onClick={() => setIsOpen(false)} className="text-3xl ml-auto bg-red-300 rounded" />
                                <form action="" onSubmit={modalHandler}>
                                    <label className="block mb-2 mt-4 dark:text-white" htmlFor="universityName">university Name</label>
                                    <input
                                        className="w-full p-2 resize-none border rounded-md focus:border-teal-500 focus:outline-none"
                                        placeholder="type uour comment here"
                                        id="universityName"
                                        defaultValue={universityName}
                                        name="universityName"
                                    />


                                    <div className="form-control">
                                        <label
                                            className="block mt-4 mb-2 dark:text-white"
                                            htmlFor="SubjectCategorey"
                                        >
                                            Subject category
                                        </label>
                                        <select

                                            name="SubjectCategorey"
                                            id="SubjectCategorey"
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
                                            htmlFor="Degree"
                                        >
                                            Appliying   Degree
                                        </label>
                                        <select
                                            
                                            name="Degree"
                                            id="Degree"
                                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                            type="text"
                                            placeholder="Select Scholarship category"
                                        >
                                            <option value='Diploma' >
                                                Diploma
                                            </option>
                                            <option value='Bachelor' >
                                                Bachelor
                                            </option>
                                            <option value='masters' >
                                                masters
                                            </option>
                                        </select>
                                    </div>


                                    <input
                                        className="block mx-auto  justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mt-4"
                                        type="submit"
                                        value="Update Application"
                                    />
                                </form>


                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
//  setIsOpen, isOpen, modalHandler
UpdateApplyInfo.propTypes = {
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool,
    modalHandler: PropTypes.func,
    universityName: PropTypes.string,
  
}
export default UpdateApplyInfo;