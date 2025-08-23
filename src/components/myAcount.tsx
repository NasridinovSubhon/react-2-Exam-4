import { useAppDispatch, useAppSelector } from "@/app/hook"
import { editProfile, getMyProfile } from "@/app/productSl"
import { useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import { Input } from "./ui/input"
import { Skeleton } from "./ui/skeleton"
import { Pencil } from "lucide-react"
import { useForm } from 'react-hook-form';

import {
  Dialog,
  DialogContent,
  DialogHeader,

  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog"




const MyAcount = () => {
  const { dataprofile, loadiProfile } = useAppSelector(state => state.prod) as any
  const dispatch = useAppDispatch()

  const token = jwtDecode(localStorage.getItem("accessToken") || "") as any
  useEffect(() => {
    dispatch(getMyProfile(token.sid))
  }, [])

  const Edit_Use_f = useForm()


  async function handleEdit(e:any) {
    const fd = new FormData() as any
    fd.append("Image", e.Image[0])
    fd.append("FirstName", e.FirstName)
    fd.append("LastName", e.LastName)
    fd.append("Email", e.Email)
    fd.append("PhoneNumber", e.PhoneNumber)
    fd.append("Dob", e.Dob)
    await dispatch(editProfile(fd))
    dispatch(getMyProfile(token.sid))

  }


  const ProfileSkeleton = () => (
    <div className="xl:w-[70%] sm:w-full bg-white dark:bg-gray-900 shadow-lg shadow-gray-300 dark:shadow-gray-800 p-6 rounded-2xl">
      <Skeleton className="h-7 w-40 mb-6 rounded-md" />
      <div className="flex flex-wrap gap-4">
        <Skeleton className="xl:w-[47%] sm:w-full h-10 rounded-lg" />
        <Skeleton className="xl:w-[47%] sm:w-full h-10 rounded-lg" />
      </div>
      <div className="flex flex-wrap gap-4 mt-6">
        <Skeleton className="xl:w-[47%] sm:w-full h-10 rounded-lg" />
        <Skeleton className="xl:w-[47%] sm:w-full h-10 rounded-lg" />
      </div>
      <Skeleton className="h-5 w-48 mt-8 mb-3 rounded-md" />
      <Skeleton className="w-full h-10 rounded-lg" />
      <div className="flex flex-wrap gap-4 mt-6">
        <Skeleton className="xl:w-[47%] sm:w-full h-10 rounded-lg" />
        <Skeleton className="xl:w-[47%] sm:w-full h-10 rounded-lg" />
      </div>
    </div>
  )

  return (
    <div className="xl:w-[85%] sm:w-[95%] m-auto flex justify-between flex-wrap mb-[100px] mt-[100px]">

      <div className="xl:w-[25%] sm:w-full mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          My Profile
        </h2>
      </div>
      {loadiProfile ? (
        <ProfileSkeleton />
      ) : (
        <div className="xl:w-[70%] sm:w-full bg-white dark:bg-gray-900 shadow-lg shadow-gray-300 dark:shadow-gray-800 p-6 rounded-2xl">
          <div className="w-[95%] m-auto" >
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Profile Information
              </h1>
              <img
                src={`http://37.27.29.18:8002/images/${dataprofile?.image}`}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Input
                className="xl:w-[48%] sm:w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                defaultValue={dataprofile?.firstName}
              />
              <Input
                className="xl:w-[48%] sm:w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                defaultValue={dataprofile?.lastName}
              />
            </div>


            <div className="flex flex-wrap gap-4 mt-6">
              <Input
                className="xl:w-[48%] sm:w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                defaultValue={dataprofile?.email}
              />
              <Input
                className="xl:w-[48%] sm:w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Address"
              />
            </div>

            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-8">
              Password Changes
            </h3>
            <Input
              placeholder="User ID"
              defaultValue={dataprofile?.userId}
              className="w-[98%]  mt-3 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-wrap gap-4 mt-6">
              <Input
                className="xl:w-[48%] sm:w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="New Password"
              />
              <Input
                className="xl:w-[48%] sm:w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
              />
            </div>

            <div className="flex items-center justify-end gap-2 mt-4  " >
              <Dialog>
                <DialogTrigger>
                  <button className="cursor-pointer  " >
                    <Pencil className="inline mr-2" />
                    Edit profile
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <form onSubmit={Edit_Use_f.handleSubmit(handleEdit)} >
                    <DialogHeader>
                      <img
                        src={`http://37.27.29.18:8002/images/${dataprofile?.image}`}
                        alt="Profile"
                        className="w-14 h-14 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 -mt-5 " />
                      <Input {...Edit_Use_f.register("Image")} type="file" placeholder="Image" className="mt-4" />
                      <Input {...Edit_Use_f.register("FirstName")} defaultValue={dataprofile.firstName} placeholder="FirstName" />
                      <Input {...Edit_Use_f.register("LastName")} defaultValue={dataprofile.lastName} placeholder="LastName" />
                      <Input {...Edit_Use_f.register("Email")} defaultValue={dataprofile.email} type="email" placeholder="Email" />
                      <Input {...Edit_Use_f.register("PhoneNumber")} defaultValue={dataprofile.phoneNumber} type="number" placeholder="PhoneNumber" />
                      <Input {...Edit_Use_f.register("Dob")} defaultValue={dataprofile.dob} placeholder="Dob " />
                      <DialogClose>
                        <button type="submit" > Submit </button>
                      </DialogClose>
                    </DialogHeader>
                  </form>
                </DialogContent>
              </Dialog>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyAcount
