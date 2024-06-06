import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types'


const DetailsModal = ({ detailsModal, setDetailsModal, ScholarshipName, universityName, SubjectCategorey, Degree }) => {
    return (
        <Transition appear show={detailsModal} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setDetailsModal(false)}
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
                            <DialogPanel className='w-full h-56 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <div className="flex justify-between">
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-Inter uppercase font-medium text-center leading-6 text-gray-900'
                                >
                                    applied Scholarship 
                                </DialogTitle> <IoClose onClick={() => setDetailsModal(false)}  className="text-3xl bg-red-300 rounded"/>
                                </div>
  
                                <Description className="font-Inter mt-6 text-lg">
                                    <h2 >ScholarshipName : <span className="text-sm">{ScholarshipName}</span> </h2>
                                    <h2> universityName:  <span className="text-sm"> {universityName}</span></h2>
                                    <h2>SubjectCategorey : <span className="text-sm">{SubjectCategorey}</span> </h2>
                                    <h2>degree : <span className="text-sm">{Degree}</span></h2>

                                </Description>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
DetailsModal.propTypes = {
    ScholarshipName: PropTypes.string,
    universityName: PropTypes.string,
    SubjectCategorey: PropTypes.string,
    Degree: PropTypes.string,
    setDetailsModal: PropTypes.func,
    detailsModal: PropTypes.bool
  };
export default DetailsModal;