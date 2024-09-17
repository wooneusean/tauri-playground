import { rem } from '@mantine/core';

interface SteamLogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function SteamLogo({ size, style, ...others }: SteamLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 295.457 90.473"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
    >
      <path
        fill="currentcolor"
        d="m45.084 1c-23.238 0-42.275 17.918-44.084 40.689l23.71 9.803c2.009-1.374 4.436-2.179 7.047-2.179.234 0 .467.01.698.021l10.544-15.283c0-.073 0-.144 0-.216 0-9.199 7.483-16.683 16.683-16.683 9.199 0 16.682 7.484 16.682 16.683s-7.483 16.684-16.682 16.684c-.127 0-.253 0-.379-.01l-15.038 10.73c.01.195.015.394.015.592 0 6.906-5.617 12.522-12.522 12.522-6.061 0-11.129-4.326-12.277-10.055l-16.957-7.006c5.25 18.568 22.309 32.181 42.56 32.181 24.432 0 44.237-19.806 44.237-44.235 0-24.433-19.806-44.238-44.237-44.238"
      />
      <path
        fill="currentcolor"
        d="m28.721 68.122-5.434-2.245c.963 2.005 2.629 3.684 4.841 4.606 4.782 1.992 10.295-.277 12.288-5.063.965-2.314.971-4.869.014-7.189-.955-2.321-2.757-4.131-5.074-5.097-2.299-.957-4.762-.922-6.926-.105l5.613 2.321c3.527 1.47 5.195 5.52 3.725 9.047-1.467 3.528-5.52 5.196-9.047 3.725"
      />
      <path
        fill="currentcolor"
        d="m70.796 33.835c0-6.129-4.986-11.116-11.116-11.116-6.129 0-11.116 4.987-11.116 11.116 0 6.13 4.987 11.115 11.116 11.115 6.13 0 11.116-4.986 11.116-11.115m-19.448-.019c0-4.612 3.739-8.35 8.351-8.35s8.351 3.738 8.351 8.35-3.739 8.35-8.351 8.35-8.351-3.739-8.351-8.35"
      />
      <path
        fill="currentcolor"
        d="m136.564 31.267-2.964 5.21c-2.283-1.595-5.377-2.555-8.078-2.555-3.087 0-4.997 1.278-4.997 3.567 0 2.781 3.393 3.428 8.436 5.238 5.421 1.917 8.537 4.17 8.537 9.135 0 6.793-5.342 10.608-13.02 10.608-3.742 0-8.256-.966-11.726-3.077l2.162-5.776c2.819 1.489 6.191 2.372 9.197 2.372 4.052 0 5.978-1.495 5.978-3.705 0-2.529-2.937-3.289-7.678-4.859-5.403-1.804-9.147-4.171-9.147-9.666 0-6.197 4.963-9.756 12.104-9.756 4.977 0 8.977 1.577 11.196 3.264"
      />
      <path
        fill="currentcolor"
        d="m152.755 61.899v-27.339h-10.13v-5.986h27.209v5.986h-10.1v27.339z"
      />
      <path
        fill="currentcolor"
        d="m197.902 42.051v5.986h-13.356v7.821h15.496v6.041h-22.473v-33.325h22.473v5.968h-15.496v7.509z"
      />
      <path
        fill="currentcolor"
        d="m215.619 55.429-2.206 6.471h-7.316l12.495-33.325h7.025l12.848 33.324h-7.563l-2.254-6.471h-13.029zm6.446-18.905-4.551 13.343h9.196z"
      />
      <path
        fill="currentcolor"
        d="m261.224 60.928-8.972-19.299v20.27h-6.683v-33.325h6.668l11.2 24.056 10.802-24.056h6.726v33.325h-6.682v-20.444l-9.12 19.473z"
      />
      <path
        fill="currentcolor"
        d="m294.457 32.778c0 2.864-2.146 4.649-4.609 4.649-2.472 0-4.623-1.785-4.623-4.649 0-2.863 2.151-4.636 4.623-4.636 2.464 0 4.609 1.773 4.609 4.636m-8.457 0c0 2.396 1.726 3.901 3.848 3.901 2.114 0 3.833-1.505 3.833-3.901 0-2.403-1.719-3.885-3.833-3.885-2.116 0-3.848 1.5-3.848 3.885m3.912-2.369c1.195 0 1.597.632 1.597 1.315 0 .626-.371 1.046-.823 1.26l1.071 2.007h-.877l-.903-1.779h-.931v1.779h-.73v-4.582zm-.859 2.132h.814c.527 0 .838-.331.838-.747 0-.42-.223-.69-.84-.69h-.813v1.437z"
      />
    </svg>
  );
}
