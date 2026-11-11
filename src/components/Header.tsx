import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import FriendCard from './FriendCard';

const friends = [
  { id: 1, name: 'Mira', emoji: '👩‍🦳', online: true },
  { id: 2, name: 'Phill', emoji: '🧑‍🦱', online: true },
  { id: 3, name: 'Mike', emoji: '👨', online: false },
  { id: 4, name: 'Kierra', emoji: '👱‍♀️', online: false },
  { id: 5, name: 'Stacey', emoji: '👩', online: false },
];

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Top row: back, title, profile */}
      <View style={styles.topRow}>
        <Pressable style={styles.circleButton}>
          <Ionicons name="chevron-back" size={22} color="#333" />
        </Pressable>

        <Text style={styles.title}>Chats</Text>

        <Pressable style={styles.circleButton}>
          <Ionicons name="person" size={20} color="#333" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>6</Text>
          </View>
        </Pressable>
      </View>

      {/* Friends row that scrolls sideways */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {friends.map((friend) => (
          <FriendCard
            key={friend.id}
            name={friend.name}
            emoji={friend.emoji}
            online={friend.online}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E4E7E3',
    borderRadius: 30,
    padding: 16,
    marginBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  circleButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#D3D6D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E6F28C',
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
});