import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { BackButton } from '../components/BackButton';
import { Field } from '../components/Field';
import { PrimaryButton } from '../components/PrimaryButton';
import { PrivacyNote } from '../components/PrivacyNote';
import { s } from '../styles';
import type { User } from '../types';
import { EMAIL_REGEX, norm } from '../utils';

export function SignUpScreen({ users, onSignUp, onBack, onSwitch }: { users: User[]; onSignUp: (u: User) => void; onBack: () => void; onSwitch: () => void }) {
  const [f, setF] = useState({ name: '', email: '', university: 'Technological Institute of the Philippines Q.C.', program: '', year: '', password: '' });
  const [error, setError] = useState('');
  const set = (k: keyof typeof f) => (t: string) => { setF({ ...f, [k]: t }); setError(''); };

  const submit = () => {
    const email = norm(f.email);
    if (!f.name.trim()) return setError('Enter your full name.');
    if (!EMAIL_REGEX.test(email)) return setError('Enter a valid school email.');
    if (!f.program.trim() || !f.year.trim()) return setError('Enter your program and year.');
    if (f.password.length < 6) return setError('Password must be at least 6 characters.');
    if (users.some((u) => norm(u.email) === email)) return setError('An account with this email already exists. Log in instead.');
    onSignUp({ name: f.name.trim(), email, password: f.password, university: f.university.trim(), program: f.program.trim(), year: f.year.trim() });
  };

  return (
    <KeyboardAvoidingView style={s.fill} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={s.formContent} keyboardShouldPersistTaps="handled">
        <BackButton onPress={onBack} />
        <Text style={s.formTitle}>Join your campus circle.</Text>
        <Text style={s.formSub}>Tell us a little about you. Your student details help Vicinia surface the most relevant communities.</Text>
        <Field label="Full name" icon="👤" value={f.name} onChangeText={set('name')} placeholder="Juan Dela Cruz" autoCapitalize="words" />
        <Field label="School email" icon="✉️" value={f.email} onChangeText={set('email')} placeholder="jdelacruz@tip.edu.ph" keyboardType="email-address" />
        <Field label="University" icon="🎓" value={f.university} onChangeText={set('university')} autoCapitalize="words" />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2, marginRight: 10 }}>
            <Field label="Program" value={f.program} onChangeText={set('program')} placeholder="BS Computer Science" autoCapitalize="words" />
          </View>
          <View style={{ flex: 1 }}>
            <Field label="Year" value={f.year} onChangeText={set('year')} placeholder="3rd year" />
          </View>
        </View>
        <Field label="Password" icon="🔒" value={f.password} onChangeText={set('password')} placeholder="At least 6 characters" secure />
        {!!error && <Text style={s.errorPlain}>{error}</Text>}
      </ScrollView>
      <View style={s.bottomBar}>
        <PrivacyNote />
        <PrimaryButton label="Create account" onPress={submit} />
        <TouchableOpacity onPress={onSwitch} style={{ marginTop: 12, alignItems: 'center' }}>
          <Text style={s.footLink}>Already have an account? <Text style={{ fontWeight: '800' }}>Sign in</Text></Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
