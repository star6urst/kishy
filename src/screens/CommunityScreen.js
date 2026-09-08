import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../components/ScreenHeader';
import { colors, type, spacing } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';
import { websiteInfo } from '../data/mockData';

function WebsiteLink() {
  return (
    <Pressable
      onPress={() => Linking.openURL(`https://${websiteInfo.label}`)}
      style={styles.websiteRow}
    >
      <Text style={styles.websiteLabel}>{websiteInfo.label}</Text>
      <Text style={styles.websiteDescription}>{websiteInfo.description}</Text>
    </Pressable>
  );
}

export default function CommunityScreen() {
  const { communityMessages, addCommunityMessage } = useAppData();
  const [draft, setDraft] = useState('');

  const send = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    addCommunityMessage({ body: trimmed });
    setDraft('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScreenHeader title="Community" subtitle="For members, not events" />
        <FlatList
          data={communityMessages}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<WebsiteLink />}
          renderItem={({ item }) => (
            <View style={styles.message}>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}
          contentContainerStyle={styles.list}
        />
        <View style={styles.composer}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Say something"
            placeholderTextColor={colors.textDim}
            style={styles.input}
          />
          <Pressable onPress={send} hitSlop={8} style={styles.sendButton}>
            <Text style={styles.sendLabel}>Send</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  list: {
    paddingBottom: spacing.lg,
  },
  websiteRow: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
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
  message: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  author: {
    ...type.label,
    color: colors.textSecondary,
  },
  body: {
    ...type.body,
    color: colors.textPrimary,
    marginTop: 2,
  },
  composer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  input: {
    ...type.body,
    flex: 1,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  sendButton: {
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  sendLabel: {
    ...type.label,
    color: colors.textPrimary,
  },
});
