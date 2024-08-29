import { Stack, useRouter } from 'expo-router';

import { useGetEvents } from '~/app/api/use-get-events';
import { useAuth } from '~/app/context/AuthContext';
import { Container } from '~/components/Container';
import CustomButton from '~/components/CustomButton';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const { authState, onLogout } = useAuth();
  const { data } = useGetEvents();
  const router = useRouter();
  const handleLogout = async () => {
    await onLogout();
    router.replace('/(auth)/login');
    console.log(authState);
  };

  console.log(data);
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <CustomButton
        title="Logout"
        bgVariant="danger"
        textVariant="default"
        onPress={handleLogout}
      />

      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" />
      </Container>
    </>
  );
}
