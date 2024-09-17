import { useState } from 'react';
import { SteamLogo } from '../components/svg/SteamLogo';
import styles from './Sidebar.module.css';
import { cn } from '../utils/classname-utils';

const Sidebar = () => {
  const [activeNavigation, setActiveNavigation] = useState(0);

  return (
    <div className={styles.sidebar}>
      <SteamLogo
        height="50px"
        className="my-2"
      />
      <div className="py-8">
        <div className="flex flex-col gap-4">
          <div
            className={cn({ [styles.active]: activeNavigation == 0, 'cursor-pointer': true })}
            onClick={() => setActiveNavigation(0)}
          >
            Game Store
          </div>
          <div
            className={cn({ [styles.active]: activeNavigation == 1, 'cursor-pointer': true })}
            onClick={() => setActiveNavigation(1)}
          >
            Library
          </div>
          <div
            className={cn({ [styles.active]: activeNavigation == 2, 'cursor-pointer': true })}
            onClick={() => setActiveNavigation(2)}
          >
            Community
          </div>
          <div
            className={cn({ [styles.active]: activeNavigation == 3, 'cursor-pointer': true })}
            onClick={() => setActiveNavigation(3)}
          >
            Friends
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
