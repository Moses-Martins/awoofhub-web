import { DatePickerField } from "@/components/date/DatePickerField";
import { use } from "react";



interface Props {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: Props) {
  const { id } = use(params);


  return (
    <>
      <DatePickerField />


    </>
  );
}