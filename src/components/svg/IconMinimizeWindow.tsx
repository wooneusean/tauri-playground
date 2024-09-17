import { rem } from '@mantine/core';

interface IconMinimizeWindowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function IconMinimizeWindow({ size, style, ...others }: IconMinimizeWindowProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      viewBox="0 0 24 24"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        fill="currentColor"
        d="M20 14H4v-4h16"
      />
    </svg>
  );
}
