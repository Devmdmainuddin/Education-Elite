
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types';

const UpdateReview = ({ setIsOpen, isOpen,rating, comment,modalHandler }) => {

   
    
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
                               UpDate Reviews
                            </DialogTitle>
                            <IoClose onClick={() => setIsOpen(false)}  className="text-3xl ml-auto bg-red-300 rounded"/>
                            <form action="" onSubmit={modalHandler}>

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="rating"
                            >
                                Rating
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                                maxLength={5}
                                max={5}
                                min={1}
                                type="number"
                                defaultValue={rating}
                                placeholder="Enter Rating 1 to 5"
                                id="rating"
                                name="rating"
                            />
                                <label className="block mb-2 mt-4 dark:text-white" htmlFor="Comments">Comments</label>
                                <textarea
                                    className="w-full p-2 resize-none border rounded-md focus:border-teal-500 focus:outline-none"
                                    placeholder="type uour comment here"
                                    id="comment"
                                    defaultValue={comment}
                                    name="comment"
                                />


                                <input
                                    className="block mx-auto  justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                    type="submit"
                                    value="Update Review"
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
UpdateReview.propTypes = {
    comment: PropTypes.string,
    rating: PropTypes.string,
    modalHandler: PropTypes.func,
    setIsOpen: PropTypes.func,
    isOpen: PropTypes.bool
  };
//   setIsOpen, isOpen,rating, comment,modalHandler
export default UpdateReview;