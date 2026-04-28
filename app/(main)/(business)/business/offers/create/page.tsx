"use client"
import { CreateOfferForm } from "@/components/offer/business/CreateOfferForm";
import { useRouter } from "next/navigation";

export default function CreateOffersPage() {
    const router = useRouter();

    const onSuccess = () => {
        const redirect = "/business/offers";
        router.push(redirect);
    }

    return (
        <section>
            <CreateOfferForm onSuccess={onSuccess} />
        </section>
    );
}