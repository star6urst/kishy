import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
import { colors, type, spacing } from '../theme/theme';

// Horizontal 01 / 02 / 03 selector strip, echoing the site's Kaptures index.
// Only makes sense here because Kishys really are an ordered sequence.
export default function NumberedIndex({ items, activeId, onSelect }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <Pressable
            key={item.id}
            onPress={() => onSelect(item.id)}
            hitSlop={8}
            style={styles.item}
          >
            <Text
              style={[
                styles.itemText,
                isActive ? styles.itemTextActive : styles.itemTextInactive,
              ]}
            >
              {item.id}
            </Text>
            {isActive ? <View style={styles.underline} /> : null}
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
  item: {
    alignItems: 'center',
    paddingBottom: spacing.sm,
  },
  itemText: {
    ...type.index,
  },
  itemTextActive: {
    color: colors.textPrimary,
  },
  itemTextInactive: {
    color: colors.textDim,
  },
  underline: {
    marginTop: spacing.xs,
    height: 2,
    width: 16,
    backgroundColor: colors.textPrimary,
  },
});
