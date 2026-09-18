/* =============================================================
   NAITS — SITE CONTENT
   -------------------------------------------------------------
   This is the ONLY file you need to edit to update the site.
   All links below were verified against the artist's own
   Linktree (linktr.ee/naits), YouTube channel and store pages.
   Images live in /assets/images. `image: null` shows a placeholder.
   ============================================================= */

window.SITE = {

  /* ---------- IDENTITY ---------- */
  artist: {
    name: "NAITSMUSIC",
    short: "NAITS",
    handle: "@naitsmusic",
    tagline: "The new single “no one else” is out now.",
    location: "Oslo, Norway",
  },

  /* ---------- SOCIAL / STREAMING (verified) ---------- */
  socials: [
    { id: "spotify",    label: "Spotify",     url: "https://open.spotify.com/artist/7eD6KWTeu81k4qcy1taHaj" },
    { id: "apple",      label: "Apple Music", url: "https://music.apple.com/us/artist/naits/1273876236" },
    { id: "youtube",    label: "YouTube",     url: "https://www.youtube.com/@NINJANAITS" },
    { id: "soundcloud", label: "SoundCloud",  url: "https://soundcloud.com/itsnaits" },
    { id: "instagram",  label: "Instagram",   url: "https://www.instagram.com/naitsmusic" },
    { id: "tiktok",     label: "TikTok",      url: "https://www.tiktok.com/@ninjanaits" },
  ],

  /* ---------- HERO ---------- */
  hero: {
    image: "assets/images/hero-banner.jpg",      // official YouTube channel banner (2048px) — alt: artist-apple.jpg / artist-yt.jpg
    position: "62% 30%",                         // focal point (CSS background-position)
    filter: "grayscale(0.15) contrast(1.06) brightness(1)",   // this image is already dark & graded; override the default darkening
    listenUrl: "https://open.spotify.com/track/12eG3kPPnYhNaOmxaZe96p",
    watchUrl: "https://www.youtube.com/watch?v=Gs8M_jEJOjE",
  },

  /* ---------- NOW PLAYING STRIP ---------- */
  nowPlaying: {
    title: "no one else",
    meta:  "Out now",
    url:   "https://open.spotify.com/track/12eG3kPPnYhNaOmxaZe96p",
  },

  /* ---------- MUSIC ---------- */
  // Dates, credits and artwork from Spotify / Apple Music. Newest first.
  releases: [
    {
      featured: true,
      title: "no one else",
      preview: "https://p.scdn.co/mp3-preview/6a6abc10f2e9dc94da9fe4ce6a35fc6de56e961a",   // 30s preview (Spotify) — powers the in-page player
      type: "Single",
      date: "30 Jan 2026",
      label: "℗ 2026 Pigeon Gang",
      image: "assets/images/no-one-else.jpg",
      description: "The new single from Naits — three minutes in his own lane: sad lyrics, high tempo, a melodic top-line. Out now on every platform.",
      tracklist: [{ title: "no one else", duration: "2:57" }],
      links: {
        spotify:    "https://open.spotify.com/track/12eG3kPPnYhNaOmxaZe96p",
        apple:      "https://music.apple.com/us/album/no-one-else-single/1868038459",
        youtube:    "https://www.youtube.com/watch?v=Gs8M_jEJOjE",
        soundcloud: "https://soundcloud.com/itsnaits/no-one-else",
      },
    },
    {
      title: "don't wanna be here",
      preview: "https://p.scdn.co/mp3-preview/3cdcb715468ae53fbcd0f2e28695b7dc8d627be5",
      with: "Boyfifty",
      type: "Single",
      date: "2025",
      image: "assets/images/dont-wanna-be-here.jpg",
      links: {
        spotify: "https://open.spotify.com/track/5fb5P8cd8hLCXBvXtJmFjk",
        apple:   "https://music.apple.com/us/album/dont-wanna-be-here-single/1844852126",
        youtube: "https://www.youtube.com/watch?v=B7lgUmOi3ps",
      },
    },
    {
      title: "comedown (a face like)",
      preview: "https://p.scdn.co/mp3-preview/e89e7fad5a33d5415a801390bd0de89a40331de7",
      type: "Single",
      date: "2025",
      image: "assets/images/comedown.jpg",
      links: {
        spotify: "https://open.spotify.com/track/3bas0XaDbP8cTyJX2LcXEc",
        apple:   "https://music.apple.com/us/album/comedown-a-face-like-single/1812313256",
        youtube: "https://www.youtube.com/watch?v=wOq68p8PRgk",
      },
    },
    {
      title: "glory",
      preview: "https://p.scdn.co/mp3-preview/3e5bd0972aa94fd496feee53f491454f8db59e3c",
      type: "Single",
      date: "2024",
      image: "assets/images/glory.jpg",
      links: {
        spotify: "https://open.spotify.com/track/39DVPwuZ5YXjtRIxvfVVSW",
        apple:   "https://music.apple.com/us/album/glory-single/1773796986",
        youtube: "https://www.youtube.com/watch?v=uM9FBn8r-O4",
      },
    },
    {
      title: "touching the star",
      preview: "https://p.scdn.co/mp3-preview/da66daf80e5b8186e4b3921cf33d405f81932ab5",
      type: "Single",
      date: "2024",
      image: "assets/images/touching-the-star.jpg",
      links: {
        spotify: "https://open.spotify.com/track/1R5kFeYmJc0Dqp1pNw3eQC",
        apple:   "https://music.apple.com/us/album/touching-the-star-single/1767561085",
        youtube: "https://www.youtube.com/watch?v=0fUawkLMDgU",
      },
    },
    {
      title: "this / that",
      preview: "https://p.scdn.co/mp3-preview/b7bb7445e28411fbcc348b5e58ba39b2c0658205",
      type: "Single",
      date: "2024",
      image: "assets/images/this-that.jpg",
      links: {
        spotify: "https://open.spotify.com/track/6IlPERLHWWzUdKuEse7LI5",
        apple:   "https://music.apple.com/us/album/this-that-single/1753760430",
        youtube: "https://www.youtube.com/watch?v=FDP7DXmRaqY",
      },
    },
    {
      title: "lonely road",
      preview: "https://p.scdn.co/mp3-preview/55b2232af5dd1f10df66b6d780c98cbf2ef3f738",
      type: "Single",
      date: "2023",
      image: "assets/images/lonely-road.jpg",
      links: {
        spotify: "https://open.spotify.com/track/7GfCJU7IMUVa5rl5DoOEOh",
        apple:   "https://music.apple.com/us/album/lonely-road-single/1686192101",
        youtube: "https://www.youtube.com/watch?v=mAU2TWKDTng",
      },
    },
    {
      title: "dirty lies",
      preview: "https://p.scdn.co/mp3-preview/8ff6a6fe616374483d2538699374aed8c3fec193",
      with: "Lloyd P-White",
      type: "Single",
      date: "2022",
      image: "assets/images/dirty-lies.jpg",
      links: {
        spotify: "https://open.spotify.com/track/1Gctm4XpQbsoRmt6Er7VGB",
        apple:   "https://music.apple.com/us/album/dirty-lies-single/1628309393",
      },
    },
    {
      title: "coffin girl",
      preview: "https://p.scdn.co/mp3-preview/f297be20df4dc2a98656776c89f0e19463c7c442",
      with: "fawlin",
      type: "Single",
      date: "2020",
      image: "assets/images/coffin-girl.jpg",
      links: {
        spotify: "https://open.spotify.com/track/04lVv6pxNxYCf8S2sk0IuV",
        apple:   "https://music.apple.com/us/album/coffin-girl-single/1575470539",
      },
    },
  ],

  /* ---------- VIDEOS ---------- */
  // All from the official channel youtube.com/@NINJANAITS. First item is the large feature.
  videos: [
    { title: "glory",                year: "2024", kind: "Lyric Video",    duration: "02:38", image: "assets/images/video-glory.jpg",               url: "https://www.youtube.com/watch?v=uM9FBn8r-O4", position: "center 18%" },
    // `position` (optional) = CSS background-position, to choose the focal point of a thumbnail
    { title: "no one else",          year: "2026", kind: "Lyric Video",    duration: "02:58", image: "assets/images/video-no-one-else.jpg",         url: "https://www.youtube.com/watch?v=Gs8M_jEJOjE" },
    { title: "don't wanna be here",  year: "2025", kind: "Lyric Video",    duration: "02:40", image: "assets/images/video-dont-wanna-be-here.jpg",  url: "https://www.youtube.com/watch?v=B7lgUmOi3ps" },
    { title: "diamonds on my neck",  year: "2020", kind: "Official Video", duration: "02:53", image: "assets/images/video-diamonds-on-my-neck.jpg", url: "https://www.youtube.com/watch?v=MXo77Uz2mso" },
    { title: "Drown My Sorrows",     year: "2020", kind: "Official Video", duration: "02:52", image: "assets/images/video-drown-my-sorrows.jpg",    url: "https://www.youtube.com/watch?v=o1Aqw1QXyLU" },
  ],

  /* ---------- ABOUT ---------- */
  // Lead quote: Naits, The Hype Magazine (Feb 2022). Facts sourced from that piece,
  // Beyond The Stage Magazine (Feb 2022) and the artist's SoundCloud bio.
  about: {
    image: "assets/images/artist-spotify.jpg",              // official Spotify artist photo (B&W)
    imageCaption: "Artist photo",
    lead: "“I have always used music as *therapy* for myself.”",
    body: [
      "Naits is a singer-songwriter and rapper from Oslo, Norway. Raised around music — his father is a musician — he released his first songs in 2017 and, in 2020, traded straight rap for something more melodic and sung. That same year *coffin girl* (with fawlin) put his sound in front of a wider audience: near-therapeutic lyrics, a distinctive vocal tone, and a blend of hip-hop, alternative pop, R&B and emo trap that is dark but never slow.",
      "The songs come from living — a breakup, losing a friend, the fear of not getting where he wants to go — written the way he has always written, to get the feelings out. Picked up by Spotify editorial playlists like New Music Friday Norway and Norwegian Rap, he has followed with a run of singles: *lonely road*, *glory*, *comedown (a face like)*, *don't wanna be here* — and, in 2026, *no one else*.",
    ],
    facts: [
      { k: "Based",     v: "Oslo, Norway" },
      { k: "Sound",     v: "Emo rap · alt pop" },
      { k: "Releasing", v: "Since 2017" },
    ],
  },

  /* ---------- VISUAL ARCHIVE ---------- */
  // Official artwork, video frames and the artist photo. Swap in press/live photos as they come.
  archive: [
    { caption: "Artist photo",             year: "2025", image: "assets/images/artist-wide.jpg" },
    { caption: "glory — visual",           year: "2024", image: "assets/images/video-glory.jpg" },
    { caption: "diamonds on my neck",      year: "2020", image: "assets/images/video-diamonds-on-my-neck.jpg" },
    { caption: "comedown — artwork",       year: "2025", image: "assets/images/comedown.jpg" },
    { caption: "Drown My Sorrows",         year: "2020", image: "assets/images/video-drown-my-sorrows.jpg" },
    { caption: "touching the star",        year: "2024", image: "assets/images/touching-the-star.jpg" },
    { caption: "lonely road — artwork",    year: "2023", image: "assets/images/lonely-road.jpg" },
  ],

  /* ---------- CONTACT ---------- */
  // Email as published on the artist's previous official site (naitsmusic.com, 2022).
  // No separate booking / management contacts are public — add a channel here if one exists.
  contact: {
    headline: "Let's create something.",
    channels: [
      { label: "Contact",   value: "naitsmusic@gmail.com" },
      { label: "Instagram", value: "@naitsmusic", url: "https://www.instagram.com/naitsmusic" },
    ],
  },

  /* ---------- FOOTER ---------- */
  // `id` picks an icon (linktree, facebook, or any social id above)
  footer: {
    links: [
      { id: "linktree", label: "Linktree", url: "https://linktr.ee/naits" },
      { id: "facebook", label: "Facebook", url: "https://www.facebook.com/NaitsMusic" },
    ],
  },
};
