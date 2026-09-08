import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, type, spacing } from '../theme/theme';

export default function SubmissionCard({ submission }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{submission.title}</Text>
      <Text style={styles.author}>{submission.author}</Text>
      <Text style={styles.body}>{submission.body}</Text>
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
  title: {
    ...type.sectionTitle,
    color: colors.textPrimary,
    textTransform: 'uppercase',
  },
  author: {
    ...type.label,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  body: {
    ...type.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
});
