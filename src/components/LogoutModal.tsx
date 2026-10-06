import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { LogoutIcon } from './LogoutIcon';
import { s } from '../styles';
import { C } from '../theme';

export function LogoutModal({ visible, onCancel, onConfirm }: { visible: boolean; onCancel: () => void; onConfirm: () => void }) {
  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onCancel} statusBarTranslucent>
      <View style={s.scrim}>
        <View style={s.modalCard}>
          <View style={s.modalIcon}><LogoutIcon /></View>
          <Text style={s.modalTitle}>Log out of Vicinia?</Text>
          <Text style={s.modalBody}>You can log back in anytime to reconnect with your campus circle.</Text>
          <View style={s.modalActions}>
            <TouchableOpacity style={[s.modalBtn, s.modalCancel]} onPress={onCancel} activeOpacity={0.8}>
              <Text style={s.modalBtnText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[s.modalBtn, { backgroundColor: C.yellow }]} onPress={onConfirm} activeOpacity={0.8}>
              <Text style={s.modalBtnText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
