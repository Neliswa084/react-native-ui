import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type ChatItemProps = {
  name: string;
  emoji: string;
  avatarColor: string;
  message: string;
  time: string;
  unread?: number;
  online?: boolean;
  isVoice?: boolean;
};

export default function ChatItem({
  name,
  emoji,
  avatarColor,
  message,
  time,
  unread = 0,
  online = false,
  isVoice = false,
}: ChatItemProps) {
  return (
    <View style={styles.row}>
      {/* Face */}
      <View style={[styles.avatar, { backgroundColor: avatarColor }]}>
        <Text style={styles.emoji}>{emoji}</Text>
        {online && <View style={styles.onlineDot} />}
      </View>

      {/* Name and message */}
      <View style={styles.middle}>
        <Text style={styles.name}>{name}</Text>

        {isVoice ? (
          <View style={styles.voiceRow}>
            <Ionicons name="play-circle" size={18} color="#111" />
            <Text style={styles.message}> Voice message</Text>
          </View>
        ) : (
          <Text style={styles.message} numberOfLines={2}>
            {message}
          </Text>
        )}
      </View>

      {/* Time and unread badge */}
      <View style={styles.right}>
        <Text style={styles.time}>{time}</Text>
        {unread > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unread}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 34,
  },
  onlineDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#3BD16F',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  middle: {
    flex: 1,
    marginLeft: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  voiceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
  right: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  time: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  badge: {
    width: 22,
    height: 22,
    borderRadius: 11,
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