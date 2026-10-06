import { View, Text } from 'react-native';
import { s } from '../styles';

// Logout icon drawn from Views (door bracket + arrow) so no icon library is needed
export function LogoutIcon() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={s.doorBracket} />
      <Text style={s.doorArrow}>→</Text>
    </View>
  );
}
