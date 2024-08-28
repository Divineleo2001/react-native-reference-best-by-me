import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import React from 'react';
import { InputFieldProps } from '~/types/type';
const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback>
        <View className="my-2 w-full ">
          <Text className={`font-JakartaSemiBold mb-3 text-lg ${labelStyle}`}>{label}</Text>
          <View
            className={`focus:border-primary-500 relative flex flex-row items-center justify-start rounded-xl border border-neutral-100 bg-neutral-100 shadow-md shadow-neutral-950/70 ${containerStyle}`}>
            {icon && <Image source={icon} className={`mx-3 h-6 w-6 ${iconStyle}`} />}
            <TextInput
              className={`font-JakartaSemiBold flex-1 rounded-xl p-2 text-[12px] ${inputStyle} text-left`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
