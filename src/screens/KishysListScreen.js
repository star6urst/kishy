import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenHeader from '../components/ScreenHeader';
import KishyCard from '../components/KishyCard';
import { colors, spacing } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';

// Slight alternating tilt on the cards, just enough to read as polaroids
// scattered on a table rather than a grid of app icons.
const ROTATIONS = [-2, 1.5, -1, 2, -1.5];

export default function KishysListScreen({ navigation }) {
  const { kishys } = useAppData();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScreenHeader
        title="Kishy's"
        subtitle={`${kishys.length} artists captured so far`}
      />
      <FlatList
        data={kishys}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        renderItem={({ item, index }) => (
          <View style={styles.cell}>
            <KishyCard
              kishy={item}
              rotation={ROTATIONS[index % ROTATIONS.length]}
              onPress={() =>
                navigation.navigate('KishyDetail', { kishyId: item.id })
              }
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  grid: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
  },
  row: {
    justifyContent: 'space-around',
    marginBottom: spacing.lg,
  },
  cell: {
    marginBottom: spacing.sm,
  },
});
