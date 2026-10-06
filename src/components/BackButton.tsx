import { Text, TouchableOpacity } from 'react-native';
import { s } from '../styles';

export function BackButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.backBtn}>
      <Text style={s.backArrow}>‹</Text>
    </TouchableOpacity>
  );
}
