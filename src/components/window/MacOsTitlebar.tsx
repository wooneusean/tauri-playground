import { useEffect } from 'react';
import { appWindow } from '@tauri-apps/api/window';
import styles from './MacOsTitlebar.module.css';
import { cn } from '../../utils/classname-utils';

const MacOsTitlebar = () => {
  useEffect(() => {
    const minimize = () => appWindow.minimize();
    const toggleMaximize = () => appWindow.toggleMaximize();
    const close = () => appWindow.close();

    document.getElementById('titlebar-minimize')!.addEventListener('click', minimize);

    document.getElementById('titlebar-maximize')!.addEventListener('click', toggleMaximize);

    document.getElementById('titlebar-close')!.addEventListener('click', close);

    return () => {
      document.getElementById('titlebar-minimize')!.removeEventListener('click', minimize);

      document.getElementById('titlebar-maximize')!.removeEventListener('click', toggleMaximize);

      document.getElementById('titlebar-close')!.removeEventListener('click', close);
    };
  }, []);

  return (
    <div
      data-tauri-drag-region
      className={styles.titlebar}
    >
      <div
        className={cn(`${styles.titlebarButton} bg-[#fc5753]`)}
        id="titlebar-close"
      />
      <div
        className={cn(`${styles.titlebarButton} bg-[#fdbc40]`)}
        id="titlebar-minimize"
      />
      <div
        className={cn(`${styles.titlebarButton} bg-[#33c748]`)}
        id="titlebar-maximize"
      />
    </div>
  );
};

export default MacOsTitlebar;
