import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../components/ScreenHeader';
import SubmissionCard from '../components/SubmissionCard';
import { colors, type, spacing } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';

export default function DiscoveryScreen() {
  const { submissions } = useAppData();
  const publicSubmissions = submissions.filter(
    (item) => item.visibility === 'public'
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader title="Discovery" subtitle="What people are sharing" />
      <FlatList
        data={publicSubmissions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SubmissionCard submission={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              Nothing public yet. Submissions marked public will show up
              here.
            </Text>
          </View>
        }
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
    flexGrow: 1,
  },
  empty: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  emptyText: {
    ...type.body,
    color: colors.textSecondary,
  },
});
