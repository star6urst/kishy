import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NumberedIndex from '../components/NumberedIndex';
import LayeredVideo from '../components/LayeredVideo';
import { colors, type, spacing } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';

export default function KishyDetailScreen({ route, navigation }) {
  const { kishys, savedKishyIds, toggleSavedKishy } = useAppData();
  const { kishyId } = route.params;
  const kishy = kishys.find((k) => k.id === kishyId) || kishys[0];
  const isSaved = savedKishyIds.includes(kishy.id);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <NumberedIndex
        items={kishys}
        activeId={kishy.id}
        onSelect={(id) => navigation.setParams({ kishyId: id })}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.mediaWrap}>
          <LayeredVideo key={kishy.videoUrl} videoUrl={kishy.videoUrl} />
        </View>

        <View style={styles.info}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.id}>{kishy.id}</Text>
              <Text style={styles.name}>{kishy.name}</Text>
              <Text style={styles.medium}>{kishy.medium}</Text>
            </View>
            <Pressable
              onPress={() => toggleSavedKishy(kishy.id)}
              style={[styles.saveButton, isSaved && styles.saveButtonActive]}
            >
              <Text
                style={[
                  styles.saveLabel,
                  isSaved && styles.saveLabelActive,
                ]}
              >
                {isSaved ? 'Saved' : 'Save'}
              </Text>
            </Pressable>
          </View>
          <Text style={styles.bio}>{kishy.bio}</Text>
        </View>
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
    paddingBottom: spacing.xxl,
  },
  mediaWrap: {
    marginTop: spacing.md,
    marginHorizontal: spacing.lg,
  },
  info: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  saveButton: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  saveButtonActive: {
    borderColor: colors.textPrimary,
  },
  saveLabel: {
    ...type.label,
    color: colors.textSecondary,
  },
  saveLabelActive: {
    color: colors.textPrimary,
  },
  id: {
    ...type.label,
    color: colors.textSecondary,
  },
  name: {
    ...type.screenTitle,
    color: colors.textPrimary,
    textTransform: 'uppercase',
    marginTop: spacing.xs,
  },
  medium: {
    ...type.body,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  bio: {
    ...type.body,
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
});