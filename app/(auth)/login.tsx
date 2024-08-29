import axios from 'axios';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useGetEvents } from '../api/use-get-events';
import { useGetToken } from '../api/use-get-token';
import { useAuth } from '../context/AuthContext';

import CustomButton from '~/components/CustomButton';
import InputField from '~/components/InputField';
import { icons } from '~/constants';

const LoginPage = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });
  const { authState, setAuthState, onLogout } = useAuth();
  const router = useRouter();

  const { mutate: getToken } = useGetToken();

  const handleLogin = () => {
    getToken(
      { email: form.email, password: form.password },
      {
        onSuccess: async (data) => {
          setAuthState({
            token: data.jwtToken,
            authenticated: true,
          });
          axios.defaults.headers.common['Authorization'] = `Bearer ${data.jwtToken}`;
          await SecureStore.setItemAsync('token', data.jwtToken);

          return data;
        },
      }
    );

    console.log(authState);

    // getToken(
    //   { email, password },
    //   {
    //     onSuccess: async (data) => {
    //       setAuthState({
    //         token: data.jwtToken,
    //         authenticated: true,
    //       });
    //       axios.defaults.headers.common['Authorization'] = `Bearer ${data.jwtToken}`;
    //       await SecureStore.setItemAsync(TOKEN_KEY, data.jwtToken);

    //       return data;
    //     },
    //     onError: (error) => {
    //       console.log(error);
    //       return error;
    //     },
    //   }
    // );
  };

  const handleRoute = () => {
    router.push('/(drawer)/(tabs)/');
    console.log(authState?.token);
  };
  // const handleLogin = onLogin(form.email, form.password)

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

        <CustomButton
          title="Move to Home"
          bgVariant="danger"
          textVariant="default"
          onPress={handleRoute}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
