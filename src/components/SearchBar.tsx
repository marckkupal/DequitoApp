import { View, Text, TextInput } from 'react-native';
import { s } from '../styles';
import { C } from '../theme';

export function SearchBar({ filter }: { filter?: boolean }) {
  return (
    <View style={s.searchBar}>
      <Text style={{ marginRight: 10, color: C.muted }}>🔍</Text>
      <TextInput style={{ flex: 1, fontSize: 14, color: C.dark }} placeholder="Search places, events, communities" placeholderTextColor="#A5A296" />
      {filter && <Text style={{ fontSize: 16 }}>🎚️</Text>}
    </View>
  );
}
