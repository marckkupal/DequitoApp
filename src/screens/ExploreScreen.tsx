import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { s } from '../styles';
import { C } from '../theme';

export function ExploreScreen() {
  const [filter, setFilter] = useState('All');
  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false}>
      <Text style={s.header}>Explore</Text>
      <SearchBar />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
        {['All', 'Cafés', 'Study Spaces', 'Food', 'Events'].map((f) => (
          <TouchableOpacity key={f} style={[s.chip, filter === f && s.chipActive]} onPress={() => setFilter(f)}>
            <Text style={[s.chipText, filter === f && { color: C.dark, fontWeight: '700' }]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={s.map}><Text style={{ color: C.muted }}>🗺️ Campus Map</Text></View>
      <Text style={s.sectionTitle}>Nearby Activity</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          { t: 'Semicon Hackathon', sub: '📍 TIP Seminar Hall • 50m away', seed: 'hackathon2' },
          { t: 'Sunset Rooftop Jam', sub: '📍 Bldg 3 Rooftop • Active now', seed: 'rooftop' },
        ].map((a) => (
          <View key={a.t} style={{ width: 220, marginRight: 12, marginBottom: 20 }}>
            <Image source={{ uri: `https://picsum.photos/seed/${a.seed}/400/240` }} style={s.activityImage} />
            <Text style={s.postName}>{a.t}</Text>
            <Text style={s.muted}>{a.sub}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
