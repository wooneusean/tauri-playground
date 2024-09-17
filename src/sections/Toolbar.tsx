import { Avatar, Input } from '@mantine/core';
import { IconBasket, IconBell, IconSearch } from '@tabler/icons-react';
import styles from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <div className="flex justify-between my-2">
      <div className="flex items-center gap-4">
        <Input
          leftSection={<IconSearch color="#fafafa" />}
          placeholder="Search"
          className={`${styles.searchInput} w-[500px]`}
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-full bg-[rgba(255,255,255,0.1)]">
          <IconBell />
        </div>
        <div className="p-2 rounded-full bg-[rgba(255,255,255,0.1)]">
          <IconBasket />
        </div>
        <div className="flex items-center gap-2">
          <Avatar>WE</Avatar>
          <div>Woon Eusean</div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
