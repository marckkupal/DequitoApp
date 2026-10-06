import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s } from '../styles';
import { C } from '../theme';
import type { Post } from '../types';
import { fmtCount } from '../utils';

export function PostCard({ p }: { p: Post }) {
  const [liked, setLiked] = useState(false);
  const actions = [
    { key: 'like', label: liked ? 'Liked' : 'Like', icon: liked ? '♥' : '♡', onPress: () => setLiked(!liked), active: liked },
    { key: 'comment', label: 'Comment', icon: '💬', onPress: undefined, active: false },
    { key: 'share', label: 'Share', icon: '↗', onPress: undefined, active: false },
  ];
  return (
    <View style={s.card}>
      <View style={s.rowCenter}>
        <View style={[s.avatarCircle, { width: 32, height: 32, borderRadius: 16, marginRight: 10, backgroundColor: p.avatarBg }]}>
          <Text style={{ fontWeight: '800', fontSize: 10, color: C.dark }}>{p.ini}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={s.postName}>{p.name}</Text>
          <Text style={s.muted}>{p.handle}</Text>
        </View>
        <TouchableOpacity style={s.moreBtn}><Text style={{ color: C.muted, fontSize: 12 }}>⠿</Text></TouchableOpacity>
      </View>

      <View style={[s.postTile, { backgroundColor: p.tint }]}>
        <View style={s.rowBetween}>
          <View style={s.tilePill}><Text style={s.tilePillText}>{p.tag}</Text></View>
          {p.live && <View style={s.livePill}><Text style={s.livePillText}>Live</Text></View>}
        </View>
        <View>
          <Text style={s.tileTitle}>{p.title}</Text>
          <View style={[s.rowCenter, { marginTop: 6 }]}>
            <Text style={s.tileStat}>♡ {fmtCount(p.likes + (liked ? 1 : 0))}</Text>
            <Text style={[s.tileStat, { marginLeft: 14 }]}>💬 {p.comments}</Text>
          </View>
        </View>
      </View>

      <View style={s.actionRow}>
        {actions.map((a, i) => (
          <TouchableOpacity
            key={a.key}
            onPress={a.onPress}
            style={[s.actionPill, a.active && { backgroundColor: C.yellow }, i < actions.length - 1 && { marginRight: 8 }]}
          >
            <Text style={s.actionIcon}>{a.icon}</Text>
            <Text style={s.actionText}>{a.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
