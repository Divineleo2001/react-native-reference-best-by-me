import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useGetToken } from '../api/use-get-token';

import CustomButton from '~/components/CustomButton';
import InputField from '~/components/InputField';
import { icons } from '~/constants';

const LoginPage = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const { mutate: getToken } = useGetToken();
  const handleLogin = () => {
    getToken(
      { username: form.email, password: form.password },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  return (
    <SafeAreaView className="bg-white">
      <View className="p-5 ">
        <Text className="mt-20 text-3xl font-bold">Login</Text>
        <InputField
          label="Email"
          placeholder="Enter your Email"
          value={form.email}
          onChangeText={(value: string) => setForm({ ...form, email: value })}
        />
        <InputField
          label="password"
          placeholder="Enter your Password"
          value={form.password}
          onChangeText={(value: string) => setForm({ ...form, password: value })}
        />
        <CustomButton
          title="Login"
          bgVariant="primary"
          textVariant="default"
          onPress={handleLogin}
        />
        {/* <InputField
          label="Email"
          placeholder="Enter your Email"
          icon={icons.email}
          value={form.email}
          onChangeText={(value: string) => setForm({ ...form, email: value })}
        /> */}
        {/* <InputField
          label="Password"
          placeholder="Enter your Password"
          icon={icons.lock}
          secureTextEntry={true}
          value={form.password}
          onChangeText={(value: string) => setForm({ ...form, password: value })}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
