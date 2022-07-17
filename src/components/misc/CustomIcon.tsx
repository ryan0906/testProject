import React from 'react';
import Icon from '@ant-design/icons';

const CoordSvg = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 7C8.79 7 7 8.79 7 11C7 13.21 8.79 15 11 15C13.21 15 15 13.21 15 11C15 8.79 13.21 7 11 7ZM19.94 10C19.48 5.83 16.17 2.52 12 2.06V0H10V2.06C5.83 2.52 2.52 5.83 2.06 10H0V12H2.06C2.52 16.17 5.83 19.48 10 19.94V22H12V19.94C16.17 19.48 19.48 16.17 19.94 12H22V10H19.94ZM11 18C7.13 18 4 14.87 4 11C4 7.13 7.13 4 11 4C14.87 4 18 7.13 18 11C18 14.87 14.87 18 11 18Z" fill="white"/>
  </svg>
);

const AltitudeSvg = () => (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.19 0H2C0.9 0 0.00999999 0.9 0.00999999 2V6C1.11 6 2 6.9 2 8C2 9.1 1.11 10 0 10V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.19 0 18.19 0ZM15.73 9.3L6.87 11.66L5.21 8.78L6.14 8.53L7.4 9.52L9.79 8.88L7.39 4.72L8.79 4.34L12.8 8.08L15.24 7.43C15.75 7.29 16.28 7.6 16.42 8.11C16.55 8.62 16.25 9.15 15.73 9.3Z" fill="white"/>
  </svg>
);

const BatterySvg = () => (
  <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.67 2H7V0H3V2H1.33C0.6 2 0 2.6 0 3.33V18.66C0 19.4 0.6 20 1.33 20H8.66C9.4 20 10 19.4 10 18.67V3.33C10 2.6 9.4 2 8.67 2Z" fill="white"/>
  </svg>
);

const StatusSvg = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="white" strokeWidth="2"/>
  </svg>
);

const StatusActiveSvg = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="white"/>
  </svg>
);

const LogSvg = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.74104 11L7 1.98464L12.259 11H1.74104Z" stroke="white" strokeWidth="2"/>
  </svg>
);

const LogActiveSvg = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.74104 11L7 1.98464L12.259 11H1.74104Z" fill="white" stroke="white" strokeWidth="2"/>
  </svg>
);

export const CoordIcon = (props: any) => <Icon component={CoordSvg} {...props} />;
export const AltitudeIcon = (props: any) => <Icon component={AltitudeSvg} {...props} />;
export const BatteryIcon = (props: any) => <Icon component={BatterySvg} {...props} />;
export const StatusIcon = (props: any) => <Icon component={StatusSvg} {...props} />;
export const StatusActiveIcon = (props: any) => <Icon component={StatusActiveSvg} {...props} />;
export const LogIcon = (props: any) => <Icon component={LogSvg} {...props} />;
export const LogActiveIcon = (props: any) => <Icon component={LogActiveSvg} {...props} />;