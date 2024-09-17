import { appWindow } from '@tauri-apps/api/window';
import { useEffect } from 'react';
import { IconCloseWindow } from '../svg/IconCloseWindow';
import { IconMaximizeWindow } from '../svg/IconMaximizeWindow';
import { IconMinimizeWindow } from '../svg/IconMinimizeWindow';
import styles from './WindowsTitlebar.module.css';

const WindowsTitlebar = () => {
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
        className={styles.titlebarButton}
        id="titlebar-minimize"
      >
        <IconMinimizeWindow />
      </div>
      <div
        className={styles.titlebarButton}
        id="titlebar-maximize"
      >
        <IconMaximizeWindow />
      </div>
      <div
        className={styles.titlebarButton}
        id="titlebar-close"
      >
        <IconCloseWindow />
      </div>
    </div>
  );
};

export default WindowsTitlebar;
