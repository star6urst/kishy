import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useVideoPlayer, VideoView } from 'expo-video';
import NumberedIndex from '../components/NumberedIndex';
import { colors, type, spacing } from '../theme/theme';
import { useAppData } from '../context/AppDataContext';

export default function KishyDetailScreen({ route, navigation }) {
  const { kishys } = useAppData();
  const { kishyId } = route.params;
  const kishy = kishys.find((k) => k.id === kishyId) || kishys[0];
  const [playing, setPlaying] = useState(false);

  const player = useVideoPlayer(kishy.videoUrl, (p) => {
    p.loop = false;
  });

  // Swap the source when a different number is picked in the index above,
  // and drop back to the thumbnail rather than carrying playback over.
  useEffect(() => {
    player.replace(kishy.videoUrl);
    setPlaying(false);
  }, [kishy.videoUrl]);

  useEffect(() => {
    if (playing) {
      player.play();
    } else {
      player.pause();
    }
  }, [playing, player]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <NumberedIndex
        items={kishys}
        activeId={kishy.id}
        onSelect={(id) =>
          navigation.setParams({ kishyId: id })
        }
      />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.mediaWrap}>
          {playing ? (
            <VideoView
              player={player}
              style={styles.media}
              nativeControls
              contentFit="cover"
            />
          ) : (
            <Pressable onPress={() => setPlaying(true)} style={styles.media}>
              <Image
                source={{ uri: kishy.thumbnailUrl }}
                style={StyleSheet.absoluteFill}
              />
              <View style={styles.playBadge}>
                <Text style={styles.playGlyph}>{'\u25B6'}</Text>
              </View>
            </Pressable>
          )}
        </View>

        <View style={styles.info}>
          <Text style={styles.id}>{kishy.id}</Text>
          <Text style={styles.name}>{kishy.name}</Text>
          <Text style={styles.medium}>{kishy.medium}</Text>
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
  media: {
    width: '100%',
    aspectRatio: 4 / 5,
    backgroundColor: colors.surfaceRaised,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderWidth: 1,
    borderColor: colors.textPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playGlyph: {
    color: colors.textPrimary,
    fontSize: 18,
    marginLeft: 3,
  },
  info: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
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
