import { rem } from '@mantine/core';

interface IconMaximizeWindowProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function IconMaximizeWindow({ size, style, ...others }: IconMaximizeWindowProps) {
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
        d="M4 4h16v16H4zm2 4v10h12V8z"
      />
    </svg>
  );
}
