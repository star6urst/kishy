import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Linking,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../components/ScreenHeader';
import KishyCard from '../components/KishyCard';
import { colors, type, spacing } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';
import { websiteInfo } from '../data/mockData';

export default function ProfileScreen({ navigation }) {
  const {
    displayName,
    setDisplayName,
    submissions,
    kishys,
    savedKishyIds,
  } = useAppData();
  const [nameDraft, setNameDraft] = useState(displayName);

  const mySubmissions = submissions.filter((s) => s.author === displayName);
  const savedKishys = kishys.filter((k) => savedKishyIds.includes(k.id));

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader title="Profile" subtitle="You, on Kishy" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Display name</Text>
        <TextInput
          value={nameDraft}
          onChangeText={setNameDraft}
          onBlur={() => setDisplayName(nameDraft.trim() || 'You')}
          placeholder="Your name"
          placeholderTextColor={colors.textDim}
          style={styles.input}
        />

        <Pressable
          onPress={() => Linking.openURL(`https://${websiteInfo.label}`)}
          style={styles.websiteRow}
        >
          <Text style={styles.websiteLabel}>{websiteInfo.label}</Text>
          <Text style={styles.websiteDescription}>
            {websiteInfo.description}
          </Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Your submissions</Text>
        {mySubmissions.length === 0 ? (
          <Text style={styles.emptyText}>
            Nothing yet. Anything you submit shows up here, public or
            private.
          </Text>
        ) : (
          mySubmissions.map((item) => (
            <View key={item.id} style={styles.submissionRow}>
              <Text style={styles.submissionTitle}>{item.title}</Text>
              <Text style={styles.submissionMeta}>
                {item.visibility === 'public'
                  ? 'Public \u00b7 in Discovery'
                  : 'Private \u00b7 with the core team'}
              </Text>
            </View>
          ))
        )}

        <Text style={styles.sectionTitle}>Saved Kishy's</Text>
        {savedKishys.length === 0 ? (
          <Text style={styles.emptyText}>
            Nothing saved yet. Save a Kishy from their profile to find them
            here.
          </Text>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.savedRow}
          >
            {savedKishys.map((kishy) => (
              <KishyCard
                key={kishy.id}
                kishy={kishy}
                onPress={() =>
                  navigation.navigate('Kishys', {
                    screen: 'KishyDetail',
                    params: { kishyId: kishy.id },
                  })
                }
              />
            ))}
          </ScrollView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  label: {
    ...type.label,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  input: {
    ...type.body,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.sm,
  },
  websiteRow: {
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  websiteLabel: {
    ...type.sectionTitle,
    fontSize: 15,
    color: colors.textPrimary,
  },
  websiteDescription: {
    ...type.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  sectionTitle: {
    ...type.sectionTitle,
    color: colors.textPrimary,
    textTransform: 'uppercase',
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  emptyText: {
    ...type.body,
    color: colors.textSecondary,
  },
  submissionRow: {
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.sm,
  },
  submissionTitle: {
    ...type.body,
    color: colors.textPrimary,
  },
  submissionMeta: {
    ...type.bodySmall,
    color: colors.textSecondary,
    marginTop: 2,
  },
  savedRow: {
    gap: spacing.md,
  },
});