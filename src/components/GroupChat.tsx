import { View, Text, StyleSheet } from 'react-native';

export default function GroupChat() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Group Chat</Text>

      <View style={styles.row}>
        {/* Group picture */}
        <View style={styles.groupAvatar}>
          <Text style={styles.mainEmoji}>🧑‍🦱</Text>

          <View style={[styles.smallFace, styles.topLeft]}>
            <Text style={styles.smallEmoji}>👩‍🦳</Text>
          </View>
          <View style={[styles.smallFace, styles.topRight]}>
            <Text style={styles.smallEmoji}>👨</Text>
          </View>
          <View style={[styles.smallFace, styles.bottomLeft]}>
            <Text style={styles.smallEmoji}>👩</Text>
          </View>

          <Text style={styles.more}>+6</Text>
        </View>

        {/* Name and message */}
        <View style={styles.middle}>
          <Text style={styles.name}>Kevin's BP</Text>
          <Text style={styles.message}>Kate and Ann are typing...</Text>
        </View>

        {/* Time and badge */}
        <View style={styles.right}>
          <Text style={styles.time}>12:32</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>6</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 18,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Group picture
  groupAvatar: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: '#CDEBF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainEmoji: {
    fontSize: 36,
  },
  smallFace: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallEmoji: {
    fontSize: 16,
  },
  topLeft: {
    top: -8,
    left: -8,
  },
  topRight: {
    top: -8,
    right: -8,
  },
  bottomLeft: {
    bottom: -8,
    left: -8,
  },
  more: {
    position: 'absolute',
    bottom: 8,
    right: 10,
    fontSize: 14,
    fontWeight: '700',
    color: '#111',
  },

  // Name and message
  middle: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: '#555',
  },

  // Time and badge
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