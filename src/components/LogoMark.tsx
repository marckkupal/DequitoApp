import { View, Text } from 'react-native';
import { s } from '../styles';
import { C } from '../theme';

export function LogoMark({ size = 40, dark = true }: { size?: number; dark?: boolean }) {
  return (
    <View style={[s.logoMark, { width: size, height: size, borderRadius: size * 0.28, backgroundColor: dark ? C.dark : C.yellow }]}>
      <Text style={{ fontSize: size * 0.45 }}>📍</Text>
    </View>
  );
}
