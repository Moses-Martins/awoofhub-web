import { Offer } from '@/types/offer';
import OfferList from './OfferList';
import styles from './ProductOverviewSection.module.css';

interface Props {
  initialOffers: Offer[];
}

const OfferOverview = ({ initialOffers }: Props) => {
  
  return (
    <div className={styles.container}>
      <h1>Offer Overview</h1>
      <OfferList offers={initialOffers} />
    </div>
  );
};

export default OfferOverview;