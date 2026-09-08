import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, type, spacing } from '../theme/theme';

export default function ScreenHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
  },
  title: {
    ...type.screenTitle,
    color: colors.textPrimary,
    textTransform: 'uppercase',
  },
  subtitle: {
    ...type.bodySmall,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});
