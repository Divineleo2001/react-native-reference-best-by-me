import '../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider, useAuth } from './context/AuthContext';
import { APIProvider } from './api/ApiProvider';

export default function RootLayout() {
  const { onLogout, authState } = useAuth();
  return (
    <APIProvider>
      <AuthProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack>
            {/* {true ? (
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          )} */}
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
          </Stack>
        </GestureHandlerRootView>
      </AuthProvider>
    </APIProvider>
  );
}
