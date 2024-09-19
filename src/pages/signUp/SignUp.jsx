import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
// import axios from 'axios'
import toast from 'react-hot-toast';
import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from '../../utils/index';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import useAxiosCommon from '../../hooks/useAxiosCommon';

const SignUp = () => {
  const [showpassword, setshowpassword] = useState(null)
  const axiosCommon = useAxiosCommon()
  const navigate = useNavigate()
  const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useAuth()

  const handleSubmit = async e => {
    e.preventDefault()

    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const image = form.image.files[0]

    const userinfo = {
      name: name ,
      email: email ,
      role: 'user',
      status: 'verified',
    }

    if (password.length < 6) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "password must have a  6 letter",
        showConfirmButton: false,
        timer: 1500
      });
      //toast.error('error.message')
      return
    }
    if (/[A-Z]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "password don't have a capital letter",
        showConfirmButton: false,
        timer: 1500
      });
      //toast.error("password must have a  uppercase  letter")
      return
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "password don't have a special character",
        showConfirmButton: false,
        timer: 1500
      });
      //toast.error('password must have a capital letter')
      return
    }


    try {
      setLoading(true)
      // 1. Upload image and get image url
      const image_url = await imageUpload(image)

      //2. user ragistration
      const result = await createUser(email, password)
      //2. update user profile
      await updateUserProfile(name, image_url)
      axiosCommon.put(`/user`, userinfo)
        .then(res => {

        })
      navigate('/')
      toast.success('signup Successful')
    }
    catch (err) {
      setLoading(false)
      toast.error(err.message)
    }



  }
  const handleGoogleSignIn = async () => {

    try {
      setLoading(true)
      await signInWithGoogle()

     

      navigate('/')
      toast.success('signup Successful')
    }
    catch (err) {
      setLoading(false)
      toast.error(err.message)
    }
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to Eduction-Elite</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
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
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <div className="flex items-center gap-x-2 relative">
                <input
                  type={showpassword ? "text" : "password"}
                  name='password'
                  autoComplete='new-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                />
                <span className="absolute right-3" onClick={() => setshowpassword(!showpassword)}>
                  {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
                </span>
              </div>

            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type='submit'
              className=' bg-[#95f0bc] capitalize w-full rounded-md py-3 '
            >
              {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'Continue'}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className='disabled:cursor-not-allowed flex justify-center  items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
