import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonProps } from '~/types/type';
const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-gray-500';
    case 'danger':
      return 'bg-red-500';
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]';
    case 'success':
      return 'bg-gray-500';
    default:
      return 'bg-[#0286ff]';
  }
};

const getTextVariant = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-black';
    case 'secondary':
      return 'text-gray-100';
    case 'danger':
      return 'text-red-100';
    case 'success':
      return 'text-green-100';
    default:
      return 'text-white';
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex w-full flex-row items-center justify-center rounded-xl shadow-md shadow-neutral-950/70 ${getBgVariantStyle(
        bgVariant
      )} mb-4 px-4 py-2 text-white ${className}`}
      {...props}>
      {IconLeft && <IconLeft />}
      <Text className={`text-md font-bold ${getTextVariant(textVariant)}`}>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
