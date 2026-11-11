import { View, Text, StyleSheet } from 'react-native';
import ChatItem from './ChatItem';

const chats = [
  { id: 1, name: 'Phillip Geidt', emoji: '🧑‍🦱', avatarColor: '#D9C6F5', message: 'Phillip is typing...', time: '11:34', unread: 6, online: true },
  { id: 2, name: 'Kierra from Match', emoji: '👱‍♀️', avatarColor: '#FBE7A1', message: '', time: '11:05', unread: 2, isVoice: true },
  { id: 3, name: 'Mike Smith', emoji: '👨', avatarColor: '#BDECC5', message: 'Yes, put my name down in that list of the donations.', time: '10:31' },
  { id: 4, name: 'Stacey Neighbor', emoji: '👩', avatarColor: '#F3C1DE', message: 'Hi! Her mom already used it', time: '08:12' },
];

export default function RecentChats() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Recent Chat</Text>

      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          name={chat.name}
          emoji={chat.emoji}
          avatarColor={chat.avatarColor}
          message={chat.message}
          time={chat.time}
          unread={chat.unread}
          online={chat.online}
          isVoice={chat.isVoice}
        />
      ))}
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
    marginBottom: 6,
  },
});