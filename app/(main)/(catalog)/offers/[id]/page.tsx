import { use } from "react";


interface Props {
    params: Promise<{ id: string }>;
}

export default function OffersPage({ params }: Props) {
    const { id } = use(params);
    
  return (
    <>
      
    </>
  );
};

