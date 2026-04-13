"use client"
import { Button } from '@/components/button/Button';
import { InputField } from '@/components/form/InputField';
import { useUpdateUserPhoto } from '@/features/upload/useUpdateProfilePhoto';
import { useUpdateUser } from '@/features/user/useUpdateUser';
import { useUser } from '@/features/user/useUser';
import { notificationsStore } from '@/store/notifications/notifications';
import { EditProfileFormProps } from '@/types/form-props';
import { UpdateUserData } from '@/types/user';
import { capitalizeFirstLetter } from '@/utils/truncate';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FiCamera, FiFileText, FiGlobe, FiMapPin, FiUser } from 'react-icons/fi';
import { ImSpinner2 } from 'react-icons/im';

export const EditProfileForm = ({ onSuccess }: EditProfileFormProps) => {
    const { data: currentUser } = useUser();
    const updateUser = useUpdateUser({ onSuccess });

    const { uploadPhoto, isPending: isUploading } = useUpdateUserPhoto();
    const fileInputRef = useRef<HTMLInputElement>(null);


    const { register, handleSubmit, formState, reset, setValue, watch } = useForm<UpdateUserData>();

    const photoUrl = watch('profileImageUrl');

    const onSubmit = (data: UpdateUserData) => {
        updateUser.submit(data);
    };

    const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const res = await uploadPhoto(file);
                setValue('profileImageUrl', res.data);
            } catch (err) {
                const message =
                    err instanceof Error
                        ? err.message
                        : 'Something went wrong';

                notificationsStore.getState().showNotification({
                    type: 'error',
                    title: 'Error',
                    duration: 5000,
                    message,
                });
            }
        }
    };


    useEffect(() => {
        if (currentUser) {
            reset({
                name: currentUser.name || '',
                bio: currentUser.bio || '',
                address: currentUser.address || '',
                website: currentUser.website || '',
                profileImageUrl: currentUser.profileImageUrl || '', 
            });
        }
    }, [currentUser, reset]);


    return (
        <div className="mt-5 mb-30 lg:mb-10 mx-auto w-full max-w-2xl">

            {/* Photo Upload Section */}
            <div className="flex flex-col items-center mb-8">
                <div className="relative h-32 w-32">
                    <div className="h-full w-full rounded-full border-4 border-gray-200 overflow-hidden bg-gray-100 flex items-center justify-center">
                        {photoUrl ? (
                             <Image width={500} height={500} src={photoUrl} alt="profile" className="w-full h-full object-contain" />
                        ) : (
                            <div className="bg-green-500 text-white text-[70px] font-semibold flex items-center justify-center w-full h-full">
                                {capitalizeFirstLetter(currentUser?.name || "User")}
                            </div>
                        )}
                    </div>

                    {/* Camera Button */}
                    <Button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="!absolute !bottom-0 !right-0 !p-2 !bg-primary !text-white !rounded-full !shadow-lg !hover:bg-primary-dark !transition-colors !w-10 !h-10"
                        isDisabled={isUploading}
                    >
                        {isUploading ? <ImSpinner2 className="animate-spin" size={18} /> : <FiCamera size={18} />}
                    </Button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handlePhotoUpload}
                        className="hidden"
                        accept="image/*"
                    />
                </div>
                <p className="text-sm text-gray-700 mt-2">Click the camera to update photo</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    label="Name"
                    type="text"
                    compulsory={true}
                    icon={<FiUser size={18} color="gray" />}
                    {...register('name', {
                        required: 'Name is required',
                        maxLength: {
                            value: 50,
                            message: 'Name must be less than 50 characters',
                        },
                    })}
                    error={formState.errors['name']} 
                />
                <InputField
                    label="Bio"
                    type="textarea"
                    icon={<FiFileText size={18} color="gray" />}
                    {...register('bio', {
                        maxLength: {
                            value: 200,
                            message: 'Bio must be less than 200 characters',
                        },
                    })}
                    error={formState.errors['bio']}
                />

                 <InputField
                    label="Website"
                    type="text"
                    icon={<FiGlobe size={18} color="gray" />}
                    {...register('website', {
                        pattern: {
                            value: /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/,
                            message: 'Enter a valid URL',
                        },
                    })}
                    error={formState.errors['website']}
                />

                <InputField
                    label="Address"
                    type="text"
                    icon={<FiMapPin size={18} color="gray" />}
                    {...register('address')}
                    error={formState.errors['address']}
                />

                <div className="flex w-60 gap-3 mt-10">
                    <Button
                        type="button"
                        onClick={() => reset()}
                        isDisabled={updateUser.isPending}
                        className="!bg-gray-300 !text-black !rounded-2xl"
                    >
                        Reset
                    </Button>

                    <Button
                        isLoading={updateUser.isPending}
                        isDisabled={updateUser.isPending}
                        type="submit"
                        className="!rounded-2xl"
                    >
                        Update
                    </Button>
                </div>

            </form >
        </div>
    );
};