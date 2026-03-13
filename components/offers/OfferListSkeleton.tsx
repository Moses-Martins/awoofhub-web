interface Props {
  number: number;
}

const OfferListSkeleton = ({ number }: Props) => {
  return (
    <>
      <div className="" aria-label="Offer list skeleton">
        {[...Array(number)].map((_, i) => (
          <div key={i} className="">
            <div className="">
              <div className=""></div>
            </div>
            <div className="">
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OfferListSkeleton;