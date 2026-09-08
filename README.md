# Kishy

A mobile app for the Kish Kolektif collective. Five tabs: Kishy's, Events, Submit, Discovery and Community. See the full concept spec for the product background.

## Status

This is a working, fully interactive frontend. Every screen, form and button works, however all data lives in memory on the device (React Context) and resets when the app restarts. There is no real backend yet: no accounts, no persistence, no real review pipeline for private submissions, no real video hosting. That is intentionally the next project, once this UI feels right.

## Tech stack

- Expo (React Native), SDK 57
- React Navigation (bottom tabs, plus a stack for Kishy's list and detail)
- expo-video for video playback (expo-av is deprecated and Expo Go no longer bundles its native module)
- Archivo Black for display and headers, Inter for body and UI text (a close free match for the site's bold headers; swap the font files in `src/theme/theme.js` if you get the original)

## Run it locally

```
npm install
npx expo start
```

Scan the QR code with the Expo Go app on your phone, or press `a` for an Android emulator.

## Get an installable APK

Every push to `main` runs `.github/workflows/build-android.yml`, which builds a debug APK and attaches it to a new entry on the repository's Releases page. Open Releases on GitHub from your phone, download `app-debug.apk` and open it (Android will ask you to allow installs from that source the first time).

The first build after you push usually takes 8 to 12 minutes, mostly Android SDK setup. Later builds are similar since this workflow does not cache the native build.

## Project structure

```
App.js                   font loading, providers
app.json                 Expo config (name, package id, colors)
src/theme/                colors, type, spacing
src/data/mockData.js      sample Kishys, events, submissions, messages
src/context/               shared in-memory app state
src/components/            reusable UI pieces
src/screens/                one file per tab (plus Kishy detail)
src/navigation/             bottom tab + stack setup
.github/workflows/          the APK build
```

## Design notes for this pass

- Navigation: bottom tabs, the standard mobile pattern
- Kishy's tab: a polaroid-style grid, tap through to a detail screen with the 01/02/03 index, a tap-to-play video and the bio
- The video treatment is intentionally simple for v1: a thumbnail with a play button, not the site's blurred-background-plus-inset-video effect. That effect is a good v2 target once the rest of the app is settled
- No accent color anywhere. Black, white and grays only, so photos and video are the only color on screen, matching the site

## Push this to GitHub

No connector was available to do this automatically, so from this folder:

```
git init
git add .
git commit -m "Kishy v0.1"
git branch -M main
git remote add origin <your empty GitHub repo URL>
git push -u origin main
```

Create the empty repo on GitHub first (no README or .gitignore, so it stays empty), then run the commands above.
