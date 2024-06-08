import PropTypes from 'prop-types'
import { Fragment, } from 'react'
import {
    Dialog,
    Transition,
    TransitionChild,
    DialogTitle,
    DialogPanel,

} from '@headlessui/react'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { IoClose } from 'react-icons/io5'

const FeedbackModal = ({ setOpenFeedback, openFeedback, id, refetch }) => {
    const axiosSecure = useAxiosSecure()

    const { mutateAsync } = useMutation({
        mutationFn: async Feedback => {
            const { data } = await axiosSecure.patch(`/application/updateFeedback/${id}`, Feedback)
            return data
        },
        onSuccess: data => {

            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Feedback has been add",
                showConfirmButton: false,
                timer: 1500
            });
            setOpenFeedback(false)

        }
    })

    const handleFeedback = async (e) => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value

        const userRole = {
            feedback: feedback,
          
          }

        await mutateAsync(userRole)
    }
    return (
        <Transition appear show={openFeedback} as={Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={() => setOpenFeedback(false)}
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
                                    Give Feedback
                                </DialogTitle>
                                <IoClose onClick={() => setOpenFeedback(false)}  className="text-3xl ml-auto bg-red-300 rounded"/>
                                <form action="" onSubmit={handleFeedback}>
                                    <label className="block mb-2 mt-4 dark:text-white" htmlFor="Comments">Comments</label>
                                    <textarea
                                        className="w-full p-2 resize-none border rounded-md focus:border-teal-500 focus:outline-none"
                                        placeholder="type uour feedback here"
                                        id="feedback"
                                        name="feedback"
                                    />
                                    <input
                                        className="block mx-auto  justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                                        type="submit"
                                        value="Add feedback"
                                    />
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

FeedbackModal.propTypes = {
    // openFeedback: PropTypes.object,
    id: PropTypes.string,
    setOpenFeedback: PropTypes.func,
    openFeedback: PropTypes.bool,
    refetch: PropTypes.func,
}
export default FeedbackModal;