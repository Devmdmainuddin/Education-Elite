import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import AddReview from "../../pages/AddReview";
import PropTypes from 'prop-types'
import { IoClose } from "react-icons/io5";
const AddReviewModal = ({ setAddReview, addReviews,id,ScholarshipName,universityName,scholarshipcategory}) => {
    return (
        <Transition appear show={addReviews} as={Fragment}>
        <Dialog
            as='div'
            className='relative z-10'
            onClose={() => setAddReview(false)}
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
                               Add Reviews
                            </DialogTitle>
                            <IoClose onClick={() => setAddReview(false)} className="text-3xl ml-auto bg-red-300 rounded" />
                           <AddReview setAddReview={setAddReview} universityName={universityName} ScholarshipName={ScholarshipName} scholarshipcategory={scholarshipcategory} id={id}></AddReview>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </Transition>
    );
};
AddReviewModal.propTypes = {
    setAddReview: PropTypes.func,
    addReviews: PropTypes.bool,
    id: PropTypes.string,
    ScholarshipName: PropTypes.string,
    universityName: PropTypes.string,
    scholarshipcategory: PropTypes.string,
}
export default AddReviewModal;