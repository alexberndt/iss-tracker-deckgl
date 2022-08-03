import React from 'react';
import * as icons from 'react-feather';

interface IconProps {
  /**
   * Icon to display
   */
  name: string;
  /**
   * Size of the icon
   */
  size?: number;
  /**
   * Icon outline color
   */
  color?: string;
  /**
   * Size of the icon
   */
  strokeWidth?: number;
}

export const Icon = ({
  name,
  size = 20,
  color = 'black',
  ...props
}: IconProps) => {
  const iconMap: { [index: string]: any } = icons;
  const Component = iconMap[`${name[0].toUpperCase()}${name.slice(1)}`];

  if (!Component) {
    console.warn(`Icon ${name} not found.`);
    return <></>;
  }

  return <Component color={color} size={size} {...props} />;
};
