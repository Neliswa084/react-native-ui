import { View, Text, StyleSheet } from 'react-native';

type FriendCardProps = {
  name: string;
  emoji: string;
  online: boolean;
};

export default function FriendCard({ name, emoji, online }: FriendCardProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.emoji}>{emoji}</Text>
        {online && <View style={styles.onlineDot} />}
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 80,
    paddingVertical: 12,
    backgroundColor: '#F1F6EE',
    borderRadius: 18,
    alignItems: 'center',
    marginRight: 10,
  },
  emoji: {
    fontSize: 34,
  },
  onlineDot: {
    position: 'absolute',
    top: 0,
    right: -6,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3BD16F',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  name: {
    marginTop: 6,
    fontSize: 13,
    color: '#333',
  },
});