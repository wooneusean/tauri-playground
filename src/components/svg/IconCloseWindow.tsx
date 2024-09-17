import { rem } from '@mantine/core';

interface IconCloseWindowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function IconCloseWindow({ size, style, ...others }: IconCloseWindowProps) {
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
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      />
    </svg>
  );
}
