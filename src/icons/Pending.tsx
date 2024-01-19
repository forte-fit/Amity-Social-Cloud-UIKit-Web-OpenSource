import React from 'react';

const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 19 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.6875 9.3125C9.00195 9.3125 10.9062 7.4375 10.9062 5.09375C10.9062 2.7793 9.00195
    0.875 6.6875 0.875C4.34375 0.875 2.46875 2.7793 2.46875 5.09375C2.46875 7.4375 4.34375 9.3125
    6.6875 9.3125ZM6.6875 2.28125C8.21094 2.28125 9.5 3.57031 9.5 5.09375C9.5 6.64648 8.21094
    7.90625 6.6875 7.90625C5.13477 7.90625 3.875 6.64648 3.875 5.09375C3.875 3.57031 5.13477
    2.28125 6.6875 2.28125ZM1.53125 14.4688V13.7363C1.53125 12.3301 2.64453 11.1875 4.05078
    11.1875C4.49023 11.1875 5.16406 11.6562 6.6875 11.6562C7.94727 11.6562 8.73828 11.3047
    9.03125 11.2461C9.08984 10.748 9.17773 10.25 9.35352 9.81055C8.41602 9.78125 8.09375 10.25
    6.6875 10.25C5.28125 10.25 4.90039 9.78125 4.05078 9.78125C1.88281 9.78125 0.125 11.5684
    0.125 13.7363V14.4688C0.125 15.2598 0.740234 15.875 1.53125 15.875H10.9355C10.4668 15.4941
    10.0859 15.0254 9.76367 14.4688H1.53125ZM14.6562 7.4375C12.3125 7.4375 10.4375 9.3418 10.4375
    11.6562C10.4375 14 12.3125 15.875 14.6562 15.875C16.9707 15.875 18.875 14 18.875 11.6562C18.875
    9.3418 16.9707 7.4375 14.6562 7.4375ZM16.5312 11.8613C16.5312 12.0078 16.3848 12.125 16.2383
    12.125H14.4512C14.3047 12.125 14.1875 12.0078 14.1875 11.8613V9.60547C14.1875 9.45898 14.3047
    9.3125 14.4512 9.3125H14.832C14.9785 9.3125 15.125 9.45898 15.125
    9.60547V11.1875H16.2383C16.3848 11.1875 16.5312 11.334 16.5312 11.4805V11.8613Z"
      fill="#292B32"
    />
  </svg>
);

export default Svg;

export const backgroundImage = `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 19 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.6875 9.3125C9.00195 9.3125 10.9062 7.4375 10.9062 5.09375C10.9062 2.7793 9.00195 0.875 6.6875 0.875C4.34375 0.875 2.46875 2.7793 2.46875 5.09375C2.46875 7.4375 4.34375 9.3125 6.6875 9.3125ZM6.6875 2.28125C8.21094 2.28125 9.5 3.57031 9.5 5.09375C9.5 6.64648 8.21094 7.90625 6.6875 7.90625C5.13477 7.90625 3.875 6.64648 3.875 5.09375C3.875 3.57031 5.13477 2.28125 6.6875 2.28125ZM1.53125 14.4688V13.7363C1.53125 12.3301 2.64453 11.1875 4.05078 11.1875C4.49023 11.1875 5.16406 11.6562 6.6875 11.6562C7.94727 11.6562 8.73828 11.3047 9.03125 11.2461C9.08984 10.748 9.17773 10.25 9.35352 9.81055C8.41602 9.78125 8.09375 10.25 6.6875 10.25C5.28125 10.25 4.90039 9.78125 4.05078 9.78125C1.88281 9.78125 0.125 11.5684 0.125 13.7363V14.4688C0.125 15.2598 0.740234 15.875 1.53125 15.875H10.9355C10.4668 15.4941 10.0859 15.0254 9.76367 14.4688H1.53125ZM14.6562 7.4375C12.3125 7.4375 10.4375 9.3418 10.4375 11.6562C10.4375 14 12.3125 15.875 14.6562 15.875C16.9707 15.875 18.875 14 18.875 11.6562C18.875 9.3418 16.9707 7.4375 14.6562 7.4375ZM16.5312 11.8613C16.5312 12.0078 16.3848 12.125 16.2383 12.125H14.4512C14.3047 12.125 14.1875 12.0078 14.1875 11.8613V9.60547C14.1875 9.45898 14.3047 9.3125 14.4512 9.3125H14.832C14.9785 9.3125 15.125 9.45898 15.125 9.60547V11.1875H16.2383C16.3848 11.1875 16.5312 11.334 16.5312 11.4805V11.8613Z' fill='white'/%3E%3C/svg%3E%0A");`;