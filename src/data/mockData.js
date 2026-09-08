// Placeholder content only. Swap thumbnailUrl/videoUrl for real captures,
// and replace this whole file with real data once there's a backend.

export const initialKishys = [
  {
    id: '001',
    name: 'Elif Aksoy',
    medium: 'Painter',
    thumbnailUrl: 'https://picsum.photos/seed/kishy001/600/750',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    dateCaptured: '04.27.26',
    bio:
      'Elif works in oil and ink, building large abstract canvases from ' +
      'small daily sketches. Kish Kolektif spent an afternoon in her ' +
      'studio watching a single piece take shape from first mark to last.',
  },
  {
    id: '002',
    name: 'Deniz Kara',
    medium: 'Musician',
    thumbnailUrl: 'https://picsum.photos/seed/kishy002/600/750',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    dateCaptured: '05.01.26',
    bio:
      'Deniz builds looped violin and modular synth pieces late at night. ' +
      'This capture follows one loop from a bare melody to a full, ' +
      'layered track.',
  },
  {
    id: '003',
    name: 'Mert Yıldız',
    medium: 'Muralist',
    thumbnailUrl: 'https://picsum.photos/seed/kishy003/600/750',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    dateCaptured: '04.27.26',
    bio:
      'Mert paints large-scale murals in stairwells and underpasses ' +
      'around the city, usually at night and usually alone. Kish ' +
      'Kolektif caught one piece going up start to finish.',
  },
  {
    id: '004',
    name: 'Sude Çelik',
    medium: 'Sculptor',
    thumbnailUrl: 'https://picsum.photos/seed/kishy004/600/750',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    dateCaptured: '06.03.26',
    bio:
      'Sude casts small ceramic and resin forms, then arranges them into ' +
      'shifting installations. No two showings of the same piece look ' +
      'the same.',
  },
  {
    id: '005',
    name: 'Kaan Öztürk',
    medium: 'Abstract / mixed media',
    thumbnailUrl: 'https://picsum.photos/seed/kishy005/600/750',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    dateCaptured: '06.03.26',
    bio:
      'Kaan works across photography, found objects, and print, usually ' +
      'combining all three in one piece. This capture is from the week ' +
      'he put together his first show.',
  },
];

export const initialEvents = [
  {
    id: 'ev-1',
    title: 'Kaptures Vol. 2 opening night',
    date: 'Oct 4, 2026',
    description:
      'A one-night showing of the next batch of Kaptures, printed large ' +
      'and hung together for the first time.',
    comments: [
      { id: 'c-1', author: 'Aylin', body: 'Been waiting for this all year.' },
    ],
  },
  {
    id: 'ev-2',
    title: 'Open studio: sound + visual',
    date: 'Oct 18, 2026',
    description:
      'A shared studio day for anyone working across music and visual ' +
      'art. Bring something unfinished.',
    comments: [],
  },
  {
    id: 'ev-3',
    title: 'Archive digitization sprint',
    date: 'Nov 2, 2026',
    description:
      'Helping scan and tag two years of Polaroids and tapes for the ' +
      'archive. Always short on hands for this one.',
    comments: [
      {
        id: 'c-2',
        author: 'Barış',
        body: 'I can bring a second scanner if that helps.',
      },
    ],
  },
];

export const initialSubmissions = [
  {
    id: 'sub-1',
    title: 'Night bus sketches',
    body:
      'A set of ten ink sketches, all drawn on the same bus route over ' +
      'one month. Looking for anyone interested in turning these into a ' +
      'small zine.',
    author: 'Pelin',
    visibility: 'public',
  },
  {
    id: 'sub-2',
    title: 'Field recordings from Kadıköy ferries',
    body:
      'About forty minutes of raw audio, engine noise and gulls and ' +
      'announcements. Open to anyone who wants stems for a track.',
    author: 'Onur',
    visibility: 'public',
  },
];

export const initialCommunityMessages = [
  {
    id: 'm-1',
    author: 'Zeynep',
    body: 'Does anyone have a spare tripod for Saturday?',
  },
  {
    id: 'm-2',
    author: 'Kaan',
    body: 'I do, I\'ll bring it to the open studio.',
  },
  {
    id: 'm-3',
    author: 'Aylin',
    body: 'Kapture 004 is incredible, Sude\'s process is wild to watch.',
  },
];

export const websiteInfo = {
  label: 'kishkolektif.com',
  description: 'The full archive and the shop live on the website.',
};
