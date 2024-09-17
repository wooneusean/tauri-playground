import { cn } from '../utils/classname-utils';
import styles from './HighlightsSection.module.css';

const HighlightsSection = () => {
  return (
    <div className={styles.layout}>
      <div className={cn(`${styles.hero} bg-orange-400 rounded-xl`)}>x</div>
      <div className={cn(`${styles.detail} bg-green-700 rounded-xl`)}>y</div>
      <div className={cn(`${styles.thumbnail1} bg-red-600 rounded-xl`)}>z</div>
      <div className={cn(`${styles.thumbnail2} bg-blue-500 rounded-xl`)}>w</div>
    </div>
  );
};

export default HighlightsSection;
