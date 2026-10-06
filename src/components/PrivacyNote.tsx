import { View, Text } from 'react-native';
import { s } from '../styles';
import { C } from '../theme';

export function PrivacyNote() {
  return (
    <View style={s.privacy}>
      <Text style={{ color: C.green, marginRight: 8 }}>🛡️</Text>
      <Text style={s.privacyText}>Your details stay private and are used only to personalize your campus experience.</Text>
    </View>
  );
}
