import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import {
  Dialog,
  Listbox,
  Transition,
  TransitionChild,
  DialogTitle,
  DialogPanel,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineDown } from 'react-icons/ai'
import Swal from 'sweetalert2'
import { useMutation } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
const status = ['pending', 'processing', 'completed']

const UpdateApplyModal = ({ setIsOpen, isOpen, stat, id, refetch }) => {
  const [selected, setSelected] = useState(stat)

  const axiosSecure = useAxiosSecure()

  const { mutateAsync } = useMutation({
    mutationFn: async userRole => {
      const { data } = await axiosSecure.patch(`/application/update/${id}`, userRole)
      return data
    },
    onSuccess: data => {
      console.log(data)
      refetch()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Application Status update successfully",
        showConfirmButton: false,
        timer: 1500
      });

      setIsOpen(false)

    }
  })


  const modalHandler = async selected => {

    const userRole = {
      status: selected,

    }
    try {
      refetch()
      await mutateAsync(userRole)
    } catch (err) {
      console.log(err.message);
      toast.error(err.message)
    }
  }


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
              <DialogPanel className='w-full h-56 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Update apply status
                </DialogTitle>
                <div className='mt-4 w-full'>
                  <Listbox value={selected} onChange={setSelected}>
                    <div className='relative mt-1'>
                      <ListboxButton className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
                        <span className='block truncate'>{selected}</span>
                        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                          <AiOutlineDown
                            className='h-5 w-5 text-gray-400'
                            aria-hidden='true'
                          />
                        </span>
                      </ListboxButton>
                      <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <ListboxOptions className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
                          {status.map((role, roleIdx) => (
                            <ListboxOption
                              key={roleIdx}
                              className='relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 data-[focus]:bg-amber-100  data-[focus]:text-amber-900'
                              value={role}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                      }`}
                                  >
                                    {role}
                                  </span>
                                  {selected ? (
                                    <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                                      <BsCheckLg
                                        className='h-5 w-5'
                                        aria-hidden='true'
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </ListboxOption>
                          ))}
                        </ListboxOptions>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <hr className='mt-16 ' />

                <div className='flex mt-2 justify-center gap-5'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                    onClick={() => modalHandler(selected)}
                  >
                    Update
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

UpdateApplyModal.propTypes = {
  user: PropTypes.object,
  modalHandler: PropTypes.func,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  id: PropTypes.func,
  refetch: PropTypes.func,
}

export default UpdateApplyModal;