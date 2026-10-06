import { View, Text, Image } from 'react-native';
import { s } from '../styles';
import { C } from '../theme';
import type { User } from '../types';
import { initials } from '../utils';

export function Avatar({ user, size = 36 }: { user: User; size?: number }) {
  return user.avatarUri ? (
    <Image source={{ uri: user.avatarUri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
  ) : (
    <View style={[s.avatarCircle, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={{ fontWeight: '800', color: C.dark, fontSize: size * 0.36 }}>{initials(user.name)}</Text>
    </View>
  );
}
