// Design tokens for Kishy, matching the Kish Kolektif website:
// pure black, bold all-caps display type, grayscale UI with photos/video
// as the only source of color. No accent color, no rounded "card kit" chrome.

export const colors = {
  background: '#000000',
  surface: '#0D0D0D',
  surfaceRaised: '#161616',
  border: '#262626',
  textPrimary: '#FFFFFF',
  textSecondary: '#8C8C8C',
  textDim: '#4D4D4D',
  polaroidFrame: '#F2F2F2',
  polaroidInk: '#1A1A1A',
};

// Archivo Black for display/headers, Inter for body and UI text.
// (Best free open-source match for the site's bold grotesque headers;
// swap fontFamily values here if you get the original font later.)
export const fonts = {
  display: 'ArchivoBlack_400Regular',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemiBold: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
};

export const type = {
  wordmark: { fontFamily: fonts.display, fontSize: 22, letterSpacing: 0.5 },
  screenTitle: { fontFamily: fonts.display, fontSize: 28, letterSpacing: 0.5 },
  sectionTitle: { fontFamily: fonts.display, fontSize: 18, letterSpacing: 0.5 },
  navLabel: { fontFamily: fonts.bodySemiBold, fontSize: 12, letterSpacing: 1.2 },
  body: { fontFamily: fonts.body, fontSize: 15, lineHeight: 22 },
  bodySmall: { fontFamily: fonts.body, fontSize: 13, lineHeight: 19 },
  label: { fontFamily: fonts.bodyMedium, fontSize: 12, letterSpacing: 1 },
  index: { fontFamily: fonts.bodySemiBold, fontSize: 13, letterSpacing: 0.5 },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};
