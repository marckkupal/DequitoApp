import { Text, TouchableOpacity } from 'react-native';
import { s } from '../styles';
import { C } from '../theme';

export function PrimaryButton({ label, onPress, dark }: { label: string; onPress: () => void; dark?: boolean }) {
  return (
    <TouchableOpacity onPress={onPress} style={[s.primaryBtn, dark && { backgroundColor: C.dark }]}>
      <Text style={[s.primaryBtnText, dark && { color: '#fff' }]}>{label}</Text>
    </TouchableOpacity>
  );
}
