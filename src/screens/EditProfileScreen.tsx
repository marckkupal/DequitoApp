import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Avatar } from '../components/Avatar';
import { BackButton } from '../components/BackButton';
import { Field } from '../components/Field';
import { PrimaryButton } from '../components/PrimaryButton';
import { PrivacyNote } from '../components/PrivacyNote';
import { s } from '../styles';
import type { User } from '../types';
import { EMAIL_REGEX, norm } from '../utils';

export function EditProfileScreen({ user, onSave, onClose }: { user: User; onSave: (u: User) => void; onClose: () => void }) {
  const [draft, setDraft] = useState(user);
  const set = (k: keyof User) => (t: string) => setDraft({ ...draft, [k]: t });

  const pickImage = async () => {
    const r = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1, quality: 0.8, maxWidth: 800, maxHeight: 800 });
    if (r.didCancel) return;
    if (r.errorCode) return Alert.alert('Could not open photos', r.errorMessage ?? 'Please try again.');
    const uri = r.assets?.[0]?.uri;
    if (uri) setDraft({ ...draft, avatarUri: uri });
  };

  const changePhoto = () => {
    Alert.alert('Profile photo', undefined, [
      { text: 'Choose from gallery', onPress: pickImage },
      ...(draft.avatarUri
        ? [{ text: 'Remove photo', style: 'destructive' as const, onPress: () => setDraft({ ...draft, avatarUri: undefined }) }]
        : []),
      { text: 'Cancel', style: 'cancel' as const },
    ]);
  };

  const save = () => {
    if (!draft.name.trim()) return Alert.alert('Enter your full name.');
    if (!EMAIL_REGEX.test(norm(draft.email))) return Alert.alert('Enter a valid school email.');
    onSave({ ...draft, name: draft.name.trim(), email: norm(draft.email) });
  };

  return (
    <View style={s.fill}>
      <ScrollView contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps="handled">
        <View style={s.rowBetween}>
          <View style={s.rowCenter}>
            <BackButton onPress={onClose} />
            <Text style={[s.header, { marginBottom: 0, marginLeft: 10, fontSize: 18 }]}>Edit Profile</Text>
          </View>
          <TouchableOpacity onPress={onClose}><Text style={{ fontWeight: '700' }}>Cancel</Text></TouchableOpacity>
        </View>
        <View style={[s.darkCard, { marginTop: 16, marginBottom: 20 }]}>
          <TouchableOpacity onPress={changePhoto} activeOpacity={0.8}>
            <Avatar user={draft} size={72} />
            <View style={s.cameraBadge}><Text style={{ fontSize: 10 }}>📷</Text></View>
          </TouchableOpacity>
          <View style={{ marginLeft: 14 }}>
            <Text style={s.darkName}>{draft.name || 'Your name'}</Text>
            <Text style={s.darkSub}>TIP Quezon City</Text>
            <TouchableOpacity onPress={changePhoto}><Text style={s.darkLink}>Change profile photo</Text></TouchableOpacity>
          </View>
        </View>
        <Field label="Full name" icon="👤" value={draft.name} onChangeText={set('name')} autoCapitalize="words" />
        <Field label="School email" icon="✉️" value={draft.email} onChangeText={set('email')} keyboardType="email-address" />
        <Field label="University" icon="🎓" value={draft.university} onChangeText={set('university')} autoCapitalize="words" />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, marginRight: 10 }}><Field label="Program" value={draft.program} onChangeText={set('program')} autoCapitalize="words" /></View>
          <View style={{ flex: 1 }}><Field label="Year" value={draft.year} onChangeText={set('year')} /></View>
        </View>
      </ScrollView>
      <View style={s.bottomBar}>
        <PrivacyNote />
        <PrimaryButton label="Save Changes" onPress={save} />
      </View>
    </View>
  );
}
