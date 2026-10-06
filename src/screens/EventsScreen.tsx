import { View, Text, ScrollView } from 'react-native';
import { s } from '../styles';

export function EventsScreen() {
  const events = [
    { d: 'OCT\n28', t: 'Semicon Hackathon', sub: 'Seminar Hall Bldg • 1:00 PM' },
    { d: 'NOV\n03', t: 'Midterms Review Night', sub: 'TIP QC Study Plaza • 6:00 PM' },
    { d: 'NOV\n12', t: 'Wellness Day', sub: 'Clinic & Guidance Office • 9:00 AM' },
  ];
  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false}>
      <Text style={s.header}>Events</Text>
      {events.map((e) => (
        <View key={e.t} style={[s.card, s.rowCenter]}>
          <View style={s.dateBox}><Text style={s.dateText}>{e.d}</Text></View>
          <View style={{ marginLeft: 12, flex: 1 }}>
            <Text style={s.postName}>{e.t}</Text>
            <Text style={s.muted}>{e.sub}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
