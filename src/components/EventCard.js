import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { colors, type, spacing } from '../theme/theme';

export default function EventCard({ event, onAddComment }) {
  const [expanded, setExpanded] = useState(false);
  const [draft, setDraft] = useState('');

  const submit = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    onAddComment(event.id, { body: trimmed });
    setDraft('');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.description}</Text>

      <Pressable onPress={() => setExpanded((v) => !v)} hitSlop={8}>
        <Text style={styles.toggle}>
          {expanded
            ? 'Hide comments'
            : `Comments \u00b7 skills (${event.comments.length})`}
        </Text>
      </Pressable>

      {expanded ? (
        <View style={styles.expanded}>
          {event.comments.map((comment) => (
            <View key={comment.id} style={styles.comment}>
              <Text style={styles.commentAuthor}>{comment.author}</Text>
              <Text style={styles.commentBody}>{comment.body}</Text>
            </View>
          ))}

          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Share an opinion, or offer a skill that could help"
            placeholderTextColor={colors.textDim}
            style={styles.input}
            multiline
          />
          <Pressable onPress={submit} style={styles.submitButton} hitSlop={8}>
            <Text style={styles.submitLabel}>Post</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  date: {
    ...type.label,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  title: {
    ...type.sectionTitle,
    color: colors.textPrimary,
    textTransform: 'uppercase',
  },
  description: {
    ...type.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
  toggle: {
    ...type.label,
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
  expanded: {
    marginTop: spacing.md,
    gap: spacing.sm,
  },
  comment: {
    borderLeftWidth: 2,
    borderColor: colors.border,
    paddingLeft: spacing.sm,
  },
  commentAuthor: {
    ...type.label,
    color: colors.textPrimary,
  },
  commentBody: {
    ...type.bodySmall,
    color: colors.textSecondary,
    marginTop: 2,
  },
  input: {
    ...type.body,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.sm,
    minHeight: 44,
  },
  submitButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: colors.textPrimary,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  submitLabel: {
    ...type.label,
    color: colors.textPrimary,
  },
});
