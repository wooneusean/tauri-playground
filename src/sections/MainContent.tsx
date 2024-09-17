import HighlightsSection from './HighlightsSection';
import styles from './MainContent.module.css';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <HighlightsSection />
    </div>
  );
};

export default MainContent;
