import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../components/ScreenHeader';
import { colors, type, spacing } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';

export default function SubmitScreen() {
  const { addSubmission } = useAppData();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [visibility, setVisibility] = useState('public');
  const [confirmation, setConfirmation] = useState(null);

  const canSubmit = title.trim().length > 0 && body.trim().length > 0;

  const handleSubmit = () => {
    if (!canSubmit) return;
    addSubmission({ title: title.trim(), body: body.trim(), visibility });
    setConfirmation(
      visibility === 'public'
        ? 'Posted. Find it in Discovery.'
        : 'Sent to the core team as a pitch to become a Kishy.'
    );
    setTitle('');
    setBody('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScreenHeader
          title="Submit"
          subtitle="Share your work, public or private"
        />
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.label}>Title</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Give it a name"
            placeholderTextColor={colors.textDim}
            style={styles.input}
          />

          <Text style={styles.label}>Body</Text>
          <TextInput
            value={body}
            onChangeText={setBody}
            placeholder="Write it up, the way you would for a Substack post"
            placeholderTextColor={colors.textDim}
            style={[styles.input, styles.multiline]}
            multiline
          />

          <Text style={styles.label}>Visibility</Text>
          <View style={styles.toggleRow}>
            <Pressable
              onPress={() => setVisibility('public')}
              style={[
                styles.toggleOption,
                visibility === 'public' && styles.toggleOptionActive,
              ]}
            >
              <Text
                style={[
                  styles.toggleLabel,
                  visibility === 'public' && styles.toggleLabelActive,
                ]}
              >
                Public
              </Text>
              <Text style={styles.toggleHint}>
                Visible in Discovery, for finding collaborators
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setVisibility('private')}
              style={[
                styles.toggleOption,
                visibility === 'private' && styles.toggleOptionActive,
              ]}
            >
              <Text
                style={[
                  styles.toggleLabel,
                  visibility === 'private' && styles.toggleLabelActive,
                ]}
              >
                Private
              </Text>
              <Text style={styles.toggleHint}>
                Goes only to the core team, as a pitch to become a Kishy
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={handleSubmit}
            disabled={!canSubmit}
            style={[
              styles.submitButton,
              !canSubmit && styles.submitButtonDisabled,
            ]}
          >
            <Text style={styles.submitLabel}>Submit</Text>
          </Pressable>

          {confirmation ? (
            <Text style={styles.confirmation}>{confirmation}</Text>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    marginTop: spacing.lg,
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
  multiline: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  toggleRow: {
    gap: spacing.sm,
  },
  toggleOption: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  toggleOptionActive: {
    borderColor: colors.textPrimary,
  },
  toggleLabel: {
    ...type.sectionTitle,
    fontSize: 15,
    color: colors.textSecondary,
    textTransform: 'uppercase',
  },
  toggleLabelActive: {
    color: colors.textPrimary,
  },
  toggleHint: {
    ...type.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  submitButton: {
    marginTop: spacing.xl,
    backgroundColor: colors.textPrimary,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    opacity: 0.35,
  },
  submitLabel: {
    ...type.label,
    fontSize: 13,
    color: colors.background,
  },
  confirmation: {
    ...type.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
});
