import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors, type, spacing } from '../theme/theme';

// A simplified polaroid: white frame, photo, handwritten-style date.
// No blur/inset video layering yet -- that's a v2 pass. See README.
export default function KishyCard({ kishy, onPress, rotation = 0 }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.frame, { transform: [{ rotate: `${rotation}deg` }] }]}
    >
      <Image source={{ uri: kishy.thumbnailUrl }} style={styles.photo} />
      <View style={styles.caption}>
        <Text style={styles.id}>{kishy.id}</Text>
        <Text style={styles.date}>{kishy.dateCaptured}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: colors.polaroidFrame,
    padding: spacing.sm,
    paddingBottom: spacing.md,
    width: 150,
  },
  photo: {
    width: '100%',
    height: 180,
    backgroundColor: colors.surfaceRaised,
  },
  caption: {
    marginTop: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  id: {
    ...type.label,
    color: colors.polaroidInk,
  },
  date: {
    ...type.bodySmall,
    fontSize: 11,
    color: colors.polaroidInk,
  },
});
