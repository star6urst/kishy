import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../components/ScreenHeader';
import EventCard from '../components/EventCard';
import { colors } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';

export default function EventsScreen() {
  const { events, addEventComment } = useAppData();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader title="Events" subtitle="Upcoming, and in progress" />
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} onAddComment={addEventComment} />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingBottom: 48,
  },
});
