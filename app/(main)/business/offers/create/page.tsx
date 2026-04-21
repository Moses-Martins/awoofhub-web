"use client"
import { GoogleAutocompleteNew } from "@/components/form/AutoComplete";
import { InputField } from "@/components/form/InputField";
import { Controller, useForm } from "react-hook-form";
import { FiGlobe } from "react-icons/fi";

const options = [
    { label: "Lagos Island", value: "lagos-island" },
    { label: "Ikeja", value: "ikeja" },
];

type FormValues = {
    website: string,
    address: string | null;
};

export default function CreateOffersPage() {
    const { handleSubmit, control, register, formState, } = useForm<FormValues>({
        defaultValues: {
            address: null,
        },
    });

    const onSubmit = (data: FormValues) => {

    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="address"
                control={control}
                render={({ field, fieldState }) => (
                    <GoogleAutocompleteNew
                        label="Address"
                        value={field.value}
                        onPlaceSelect={field.onChange}
                        error={fieldState.error}
                    />
                )}
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
        </form>
    );
}