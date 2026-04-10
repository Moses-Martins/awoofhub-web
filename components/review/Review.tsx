import { useReview } from "@/features/reviews/useReview";
import { useUser } from "@/features/user/useUser";
import { Offer } from "@/types/offer";
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    offer: Offer;
}

export default function Review({ offer }: Props) {
    const router = useRouter();
    const { review, submitReview } = useReview(offer.id);
    const { data: currentUser } = useUser();
    const [value, setValue] = useState<number | null>(0);

    useEffect(() => {
        if (review) {
            setValue(review.rating ?? 0);
        }
    }, [review]);

    return (
        <>
            <Rating
                name="controlled"
                value={value}
                onChange={(event, newValue) => {
                    if (!currentUser) {
                        return router.push('/login');
                    }
                    
                    setValue(newValue);

                    if (newValue) {
                        submitReview(newValue);
                    }
                }}
                className="mr-[7px]"
                icon={<StarRoundedIcon fontSize="inherit" />}
                emptyIcon={<StarOutlineRoundedIcon fontSize="inherit" />}
                sx={{
                    fontSize: '40px',

                    '& .MuiRating-icon': {
                        marginRight: '-7px', // tighter spacing
                    },
                    '& .MuiRating-iconFilled': {
                        color: '#FFA41C', // filled stars
                    },
                    '& .MuiRating-iconEmpty': {
                        color: '#ccc', // empty stars
                    },
                }}
            />
        </>
    );
};

