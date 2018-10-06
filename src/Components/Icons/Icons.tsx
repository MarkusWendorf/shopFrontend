/* tslint:disable */
import * as React from "react";
import "./icons.scss";

// Source (inline svg's): https://github.com/danklammer/bytesize-icons

interface IconProps {
    className?: string;
    onClick?: (e: any) => void;
    style?: any;
}

export const CartIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor"
         strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2"/>
        <circle cx="25" cy="27" r="2"/>
        <circle cx="12" cy="27" r="2"/>
    </svg>
);

export const CloseIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor"
         strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M2 30 L30 2 M30 30 L2 2"/>
    </svg>
);

export const HamburgerIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor"
         strokeLinecap="round"
         strokeLinejoin="round" strokeWidth="2">
        <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"/>
    </svg>
);

export const UserIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" strokeLinecap="round"
         strokeLinejoin="round" strokeWidth="2">
        <path
            d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z"/>
    </svg>
);

export const SearchIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" strokeLinecap="round"
         strokeLinejoin="round" strokeWidth="2">
        <circle cx="14" cy="14" r="12"/>
        <path d="M23 23 L30 30"/>
    </svg>
);

export const OptionsIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" strokeLinecap="round"
         strokeLinejoin="round" strokeWidth="2">
        <path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29"/>
    </svg>
);

export const ArrowDown: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" strokeLinecap="round"
         strokeLinejoin="round" strokeWidth="2">
        <path d="M30 12 L16 24 2 12"/>
    </svg>
);

export const PlusIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" strokeLinecap="round"
         strokeLinejoin="round" strokeWidth="2">
        <path d="M16 2 L16 30 M2 16 L30 16"/>
    </svg>
);


export const MinusIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor" strokeLinecap="round"
         strokeLinejoin="round" strokeWidth="2">
        <path d="M2 16 L30 16"/>
    </svg>
);

export const SignInIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="24" height="24" fill="none"
         stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M3 16 L23 16 M15 8 L23 16 15 24 M21 4 L29 4 29 28 21 28"/>
    </svg>
);

export const FlagIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor"
         strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M6 2 L6 30 M6 6 L26 6 20 12 26 18 6 18"/>
    </svg>
);

export const ArrowRightIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="64" height="64" fill="none" stroke="currentcolor"
         strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M22 6 L30 16 22 26 M30 16 L2 16"/>
    </svg>
);

export const ArrowLeftIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor"
         strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
    </svg>
);

export const ChevronLeftIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="32" height="32" fill="none"
         stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M20 30 L8 16 20 2" />
    </svg>
);

export const ChevronRightIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="32" height="32" fill="none"
         stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M12 30 L24 16 12 2" />
    </svg>
);

export const CheckmarkIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg {...props} viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor"
         strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M2 20 L12 28 30 4" />
    </svg>
);





export const LoadingSpinnerIcon: React.SFC<IconProps> = (props: IconProps) => (
    <div className="loader-icon"/>
);


export const ReduxIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <g fill="#764ABC">
            <path
                d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z"/>
            <path
                d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z"/>
            <path
                d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z"/>
        </g>
    </svg>
);

export const ReactIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="160 0 520.9 570.3">
        <g>
            <path fill="#61DAFB"
                  d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3   c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9   c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6   c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11   c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6   c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4   c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6   c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5   c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2   c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8   c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9   c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3   c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z    M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z    M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z    M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z    M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z    M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9   c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7   c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9   C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6   c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1   c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6   C644,312.2,621.1,332.1,585.7,347.1z"/>
            <polygon fill="#61DAFB" points="320.8,78.4 320.8,78.4 320.8,78.4  "/>
            <circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7"/>
            <polygon fill="#61DAFB" points="520.5,78.1 520.5,78.1 520.5,78.1  "/>
        </g>
    </svg>
);

export const ReactRouterIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2500" height="1367" viewBox="0 0 256 140"
         preserveAspectRatio="xMidYMid">
        <path
            d="M190.318 91.214c-4.826 1.575-10.015 2.059-15.056 2.942-1.372.24-2.82.026-4.205.218-10.753 1.492-14.816 5.799-16.335 17.249-.808 6.095-2.412 11.888-5.91 17.074-5.91 8.759-17.391 12.734-27.217 9.312-10.518-3.663-16.89-13.25-16.04-24.135.766-9.807 8.512-18.471 19.39-20.989 5.094-1.179 10.379-1.64 15.605-2.116 9.755-.887 14.064-5.164 15.689-14.756.935-5.519.102-10.726-1.122-15.932-1.87-7.957-7.663-11.654-17.39-12.362-5.308-.387-10.708-1.157-15.787-2.683-10.692-3.215-16.917-12.497-16.424-23.386.432-9.535 8.197-18.819 17.524-20.951 11.05-2.527 22.05 1.892 26.75 11.733 2.466 5.164 3.82 11.014 4.786 16.705 1.729 10.204 5.783 14.163 15.96 15.269 6.583.716 13.29 1.532 19.567 3.496 9.532 2.983 15.258 11.866 15.256 21.738-.001 9.657-5.911 18.595-15.041 21.574z"
            fill="#62DAFB"/>
        <path
            d="M78.072 92.782c-12.778.002-23.21-10.427-23.212-23.203-.002-12.777 10.427-23.21 23.203-23.212 12.777-.002 23.209 10.427 23.211 23.203.002 12.777-10.427 23.21-23.202 23.212zM23.13 139.2C10.363 139.168-.032 128.703 0 115.915c.032-12.767 10.496-23.162 23.284-23.129 12.767.031 23.162 10.496 23.13 23.284-.032 12.767-10.496 23.162-23.284 23.13zM232.962 139.2c-12.8.073-23.309-10.28-23.382-23.033-.073-12.799 10.28-23.309 23.033-23.381 12.8-.074 23.308 10.278 23.382 23.032.073 12.799-10.28 23.309-23.033 23.382z"
            fill="#424242"/>
    </svg>
);

export const TypescriptIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="logo-typescript" viewBox="-64.9 417 216.5 51.9">
        <path className="st0" d="M-38.2 421.7h-11.1V456h-4.5v-34.3h-11.1v-4.1h26.6v4.1h.1z"/>
        <path className="st0"
              d="M-16.9 428.6l-12.6 31.8c-2.3 5.7-5.4 8.5-9.5 8.5-1.1 0-2.1-.1-2.9-.3v-3.9c.9.3 1.8.5 2.6.5 2.2 0 3.9-1.3 5-4l2.2-5.2-10.7-27.4h4.9l7.4 21.1c.1.3.3 1 .6 2.1h.2c.1-.4.3-1.1.5-2l7.8-21.2h4.5zM-9.5 452.1h-.1v16.6H-14v-40h4.4v4.8h.1c2.2-3.6 5.3-5.5 9.5-5.5 3.5 0 6.3 1.2 8.3 3.7s3 5.7 3 9.9c0 4.6-1.1 8.3-3.3 11s-5.3 4.1-9.2 4.1c-3.6 0-6.3-1.5-8.3-4.6zm-.1-11.1v3.8c0 2.3.7 4.2 2.2 5.8s3.3 2.4 5.6 2.4c2.7 0 4.7-1 6.3-3.1 1.6-2.1 2.3-4.9 2.3-8.5 0-3.1-.7-5.4-2.1-7.2-1.4-1.7-3.3-2.6-5.7-2.6-2.6 0-4.6.9-6.2 2.7-1.6 1.8-2.4 4-2.4 6.7zM38.4 443.4H19c.1 3.1.9 5.4 2.5 7.1s3.7 2.5 6.5 2.5c3.1 0 5.9-1 8.5-3.1v4.1c-2.4 1.8-5.6 2.6-9.6 2.6-3.9 0-6.9-1.2-9.1-3.7-2.2-2.5-3.3-6-3.3-10.5 0-4.3 1.2-7.7 3.6-10.4 2.4-2.7 5.4-4 9-4s6.4 1.2 8.3 3.5c2 2.3 2.9 5.5 2.9 9.7v2.2h.1zm-4.5-3.7c0-2.5-.6-4.5-1.8-5.9-1.2-1.4-2.9-2.1-5-2.1s-3.8.7-5.3 2.2c-1.4 1.5-2.3 3.4-2.7 5.8h14.8zM40.8 454.7v-3c2.8 1.8 5.5 2.6 8.4 2.6 3 0 5.3-.6 6.8-1.9 1.6-1.2 2.3-3 2.3-5.2 0-2-.5-3.5-1.6-4.7-1-1.2-3.3-2.8-6.8-4.8-3.9-2.3-6.4-4.2-7.4-5.7s-1.6-3.3-1.6-5.3c0-2.7 1.1-5 3.2-6.9 2.1-1.9 4.9-2.8 8.4-2.8 2.3 0 4.6.4 6.9 1.2v2.8c-2.3-1-4.7-1.5-7.2-1.5-2.6 0-4.7.7-6.2 2s-2.3 3-2.3 5 .5 3.5 1.6 4.7c1 1.2 3.3 2.7 6.8 4.7 3.6 2 6 3.8 7.2 5.4 1.2 1.6 1.8 3.4 1.8 5.5 0 2.9-1 5.3-3.1 7.2-2 1.9-4.9 2.8-8.7 2.8-1.3 0-2.8-.2-4.6-.6-1.6-.5-2.9-1-3.9-1.5zM84.3 454.8c-2 1.2-4.5 1.9-7.3 1.9-3.7 0-6.7-1.3-9-3.8-2.3-2.6-3.4-5.9-3.4-10.1 0-4.4 1.3-7.9 3.9-10.7 2.6-2.8 5.9-4.2 9.9-4.2 2.1 0 4.1.4 6.1 1.3v2.8c-2-1.2-4.1-1.8-6.5-1.8-3.2 0-5.8 1.2-7.8 3.5s-3 5.3-3 9c0 3.6.9 6.4 2.7 8.6 1.8 2.2 4.2 3.2 7.2 3.2 2.7 0 5.1-.7 7.2-2.2v2.5zM100.9 431.2c-.8-.6-1.8-.9-2.9-.9-2.2 0-4 1.1-5.4 3.3-1.5 2.2-2.2 5.4-2.2 9.5V456H88v-27.4h2.4v6.1h.1c.6-2.1 1.6-3.7 3-4.9 1.4-1.2 2.9-1.7 4.7-1.7 1 0 1.9.2 2.7.5v2.6zM105.1 421.7c-.5 0-1-.2-1.4-.6s-.6-.9-.6-1.5.2-1.1.6-1.4c.4-.4.9-.5 1.4-.5.6 0 1 .2 1.5.5.4.4.6.8.6 1.4s-.2 1.1-.6 1.5c-.5.4-.9.6-1.5.6zm-1.2 34.4v-27.4h2.5v27.4h-2.5zM115 451.2h-.1v17.5h-2.5v-40h2.5v5.7h.1c1-2 2.4-3.6 4.2-4.7 1.8-1.1 3.8-1.6 6-1.6 3.5 0 6.2 1.2 8.2 3.6 2 2.4 2.9 5.7 2.9 9.8 0 4.6-1.1 8.3-3.4 11.1-2.2 2.8-5.2 4.2-8.9 4.2-4-.1-7-1.9-9-5.6zm-.1-10.2v3.5c0 2.8.9 5.1 2.6 7.1s4 3 6.8 3 5.1-1.2 6.8-3.6c1.7-2.4 2.6-5.6 2.6-9.5 0-3.4-.8-6.2-2.4-8.2s-3.8-3-6.4-3c-3.2 0-5.7 1.1-7.4 3.2-1.7 2.1-2.6 4.6-2.6 7.5zM151.6 455.7c-1.3.6-2.5.9-3.6.9-4.1 0-6.1-2.4-6.1-7.3v-18.4H137v-2.3h4.9v-7.1c.4-.1.8-.3 1.2-.4.4-.1.8-.3 1.2-.4v8h7.2v2.3h-7.2v18.1c0 1.9.3 3.3.9 4.1.6.8 1.6 1.3 3 1.3 1 0 2.1-.3 3.3-1v2.2h.1z"/>
    </svg>

);

export const LambdaIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2065" height="2500" viewBox="0 0 256 310"
         preserveAspectRatio="xMidYMid">
        <path d="M0 245.262l16.322 8.161L19 248.668V59.333l-2.678-3.494L0 64v181.262" fill="#9D5025"/>
        <path d="M47.678 63.57l-31.356-7.731v197.584l31.356-7.302V63.57" fill="#F68536"/>
        <path d="M143.893 78.604l22.335-11.597 74.309 28.778-19.758 2.577-76.886-19.758" fill="#6B3A19"/>
        <path d="M144.752 230.658l21.906 11.597 74.308-28.778-19.758-2.578-76.456 19.759" fill="#FBBF93"/>
        <path
            d="M150.336 198.872l39.087 5.155 2.244-4.027v-90l-2.244-4.765-39.087 5.154v88.483M35.651 45.96l24.054-12.027L62.333 39v231l-2.628 5.329-24.054-12.027V45.96"
            fill="#9D5025"/>
        <path d="M108.671 259.007l-48.966 15.892V33.933l48.966 15.893v209.181" fill="#F68536"/>
        <path
            d="M89.772 289.933L128 309.262l4-4.595v-299L128 0 89.772 19.329v270.604M219.919 98.362l19.759-2.577 1.697 2.465V211l-1.697 2.906-19.759-2.577V98.362"
            fill="#9D5025"/>
        <path d="M189.423 105.235v99.221l40.805-49.825-40.805-49.396" fill="#F68536"/>
        <path
            d="M239.678 55.839L128 0v309.262l128-64V64l-16.322-8.161zm0 158.217l-73.45 21.936V73.27l73.45 21.936v118.85z"
            fill="#F68536"/>
    </svg>
);

export const DynamoDBIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2215" height="2500" viewBox="0 0 256 289"
         preserveAspectRatio="xMidYMid">
        <path d="M165.258 288.501h3.508l57.261-28.634.953-1.347V29.964l-.953-1.354L168.766 0h-3.551l.043 288.501"
              fill="#5294CF"/>
        <path d="M90.741 288.501h-3.557l-57.212-28.634-1.161-1.997-.589-226.742 1.75-2.518L87.184 0h3.601l-.044 288.501"
              fill="#1F5B98"/>
        <path d="M87.285 0h81.426v288.501H87.285V0z" fill="#2D72B8"/>
        <path
            d="M256 137.769l-1.935-.429-27.628-2.576-.41.204-57.312-2.292h-81.43l-57.313 2.292V91.264l-.06.032.06-.128 57.313-13.28h81.43l57.312 13.28 21.069 11.199v-7.2l8.904-.974-.922-1.798-28.192-20.159-.859.279-57.312-17.759h-81.43L29.972 72.515V28.61L0 63.723v30.666l.232-.168 8.672.946v7.348L0 107.28v30.513l.232-.024 8.672.128v12.807l-7.482.112L0 150.68v30.525l8.904 4.788v7.433l-8.531.942-.373-.28v30.661l29.972 35.118v-43.901l57.313 17.759h81.43l57.481-17.811.764.335 27.821-19.862 1.219-1.979-8.904-.982v-7.284l-1.167-.466-19.043 10.265-.69 1.44-57.481 13.203v.016h-81.43v-.016l-57.313-13.259v-43.864l57.313 2.284v.056h81.43l57.312-2.34 1.305.6 26.779-2.306 1.889-.923-8.904-.128v-12.807l8.904-.128"
            fill="#1A476F"/>
        <path
            d="M226.027 215.966v43.901L256 224.749v-30.461l-29.8 21.626-.173.052M226.027 197.421l.173-.04 29.8-16.028v-30.649l-29.973 2.757v43.96M226.2 91.208l-.173-.04v43.8L256 137.769v-30.634l-29.8-15.927M226.2 72.687L256 94.193V63.731L226.027 28.61v43.905l.173.06v.112"
            fill="#2D72B8"/>
    </svg>
);


export const CloudFrontIcon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2078" height="2500" viewBox="0 0 256 308"
         preserveAspectRatio="xMidYMid">
        <path d="M166.01 127.465l59.202-6.314 30.676 6.369.111.068-56.558 3.374-33.484-3.442.053-.055z" fill="#5E1F18"/>
        <path d="M165.958 127.521l59.204-4.625.407-.593.002-73.044-.407-.835-59.206 15.397v63.7" fill="#8C3123"/>
        <path d="M256 127.59l-30.838-4.694.002-74.472 30.835 15.428.001 63.738" fill="#E05243"/>
        <path d="M165.958 180.115l.865.606 58.349 3.959 29.772-3.959 1.055-.579-56.557-3.475-33.484 3.448"
              fill="#F2B0A9"/>
        <path d="M165.958 180.115l59.214 4.405.183.246-.045 73.942-.146.386-59.206-15.275v-63.704" fill="#8C3123"/>
        <path d="M255.999 180.142l-30.827 4.378-.008 74.574 30.835-15.309v-63.643" fill="#E05243"/>
        <g>
            <path d="M89.119 127.408l-58.53-5.014L.195 127.44l-.193.151 56.557 3.374 32.874-3.376-.314-.18z"
                  fill="#5E1F18"/>
            <path d="M.002 127.59l30.557-4.474.899-.637v-73.2l-.899-.855L.002 63.855v63.735" fill="#8C3123"/>
            <path d="M89.433 127.588l-58.874-4.472V48.424l58.877 15.397-.003 63.767" fill="#E05243"/>
        </g>
        <g>
            <path d="M89.433 180.142l-1.351.985-57.523 4.313-29.583-4.313-.976-.985 56.559-3.475 32.874 3.475"
                  fill="#F2B0A9"/>
            <path d="M0 180.142l30.558 4.34.777.952.083 72.333-.859 1.327L.002 243.785 0 180.142" fill="#8C3123"/>
            <path d="M89.433 180.142l-58.875 4.34.001 74.612 58.874-15.275v-63.677" fill="#E05243"/>
        </g>
        <g>
            <path d="M189.104 189.66l-61.103-6.026-61.712 6.027.87.735 60.541 9.617 60.533-9.617.871-.736"
                  fill="#F2B0A9"/>
            <path d="M66.289 189.661l61.411 8.998.623.833.079 106.959-.702 1.186-61.411-30.706v-87.27" fill="#8C3123"/>
            <path d="M189.104 189.66l-61.404 8.999v108.978l61.405-30.706-.001-87.271" fill="#E05243"/>
        </g>
        <g>
            <path d="M128.001 123.933l-61.712-5.958.159-.091 61.249-9.502 61.222 9.524.186.069-61.104 5.958z"
                  fill="#5E1F18"/>
            <path d="M66.289 117.975l61.411-8.949.294-.268L127.858.165 127.7 0 66.289 30.709v87.266" fill="#8C3123"/>
            <path d="M189.105 117.975l-61.405-8.949V0l61.405 30.709v87.266" fill="#E05243"/>
        </g>
    </svg>
);

export const S3Icon: React.SFC<IconProps> = (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="2065" height="2500" viewBox="0 0 256 310"
         preserveAspectRatio="xMidYMid">
        <path d="M20.624 53.686L0 64v181.02l20.624 10.254.124-.149V53.828l-.124-.142" fill="#8C3123"/>
        <path d="M131 229L20.624 255.274V53.686L131 79.387V229" fill="#E05243"/>
        <path d="M81.178 187.866l46.818 5.96.294-.678.263-76.77-.557-.6-46.818 5.874v66.214" fill="#8C3123"/>
        <path d="M127.996 229.295l107.371 26.035.169-.269-.003-201.195-.17-.18-107.367 25.996v149.613" fill="#8C3123"/>
        <path d="M174.827 187.866l-46.831 5.96v-78.048l46.831 5.874v66.214" fill="#E05243"/>
        <path d="M174.827 89.631l-46.831 8.535-46.818-8.535 46.759-12.256 46.89 12.256" fill="#5E1F18"/>
        <path d="M174.827 219.801l-46.831-8.591-46.818 8.591 46.761 13.053 46.888-13.053" fill="#F2B0A9"/>
        <path d="M81.178 89.631l46.818-11.586.379-.117V.313L127.996 0 81.178 23.413v66.218" fill="#8C3123"/>
        <path d="M174.827 89.631l-46.831-11.586V0l46.831 23.413v66.218" fill="#E05243"/>
        <path d="M127.996 309.428l-46.823-23.405v-66.217l46.823 11.582.689.783-.187 75.906-.502 1.351" fill="#8C3123"/>
        <path
            d="M127.996 309.428l46.827-23.405v-66.217l-46.827 11.582v78.04M235.367 53.686L256 64v181.02l-20.633 10.31V53.686"
            fill="#E05243"/>
    </svg>
);
