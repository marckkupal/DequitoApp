import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { BOARDS } from '../data';
import { s } from '../styles';

export function BoardsScreen() {
  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false}>
      <Text style={s.header}>Boards</Text>
      <View style={s.grid}>
        {BOARDS.map((b) => (
          <TouchableOpacity key={b.id} style={s.boardCard}>
            <Text style={{ fontSize: 22, marginBottom: 6 }}>{b.emoji}</Text>
            <Text style={s.postName}>{b.name}</Text>
            <Text style={s.muted}>{b.members} members</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
