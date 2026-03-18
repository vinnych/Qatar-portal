export default function FooterScenery() {
  return (
    <div className="w-full overflow-hidden leading-none pointer-events-none select-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b8ddf0" />
            <stop offset="60%" stopColor="#c9e8f5" />
            <stop offset="100%" stopColor="#d8eef5" />
          </linearGradient>
        </defs>

        {/* Sky background */}
        <rect x="0" y="0" width="1440" height="200" fill="url(#skyGrad)" />

        {/* Mountain range — far layer (lighter, more distant) */}
        <path
          d="M0 130 Q80 95 160 110 Q240 80 320 100 Q400 70 480 90 Q560 60 640 80 Q720 50 800 72 Q880 60 960 78 Q1040 55 1120 75 Q1200 65 1280 82 Q1360 70 1440 85 L1440 200 L0 200 Z"
          fill="#9ab5cc"
          opacity="0.5"
        />
        {/* Mountain range — near layer (darker, more defined) */}
        <path
          d="M0 148 Q100 118 200 135 Q300 108 400 128 Q500 100 600 120 Q660 108 720 118 Q780 106 860 122 Q960 100 1060 125 Q1160 108 1260 128 Q1360 115 1440 130 L1440 200 L0 200 Z"
          fill="#7b9db8"
          opacity="0.7"
        />

        {/* Dense low treeline — background shrubs/palms */}
        <path
          d="M0 168 Q30 158 60 162 Q90 152 120 158 Q150 148 180 156 Q210 150 240 155 Q270 146 300 153 Q330 148 360 154 Q390 144 420 152 Q450 146 480 153 Q510 144 540 151 Q570 145 600 152 Q630 144 660 151 Q690 145 720 152 Q750 145 780 152 Q810 144 840 151 Q870 145 900 153 Q930 146 960 154 Q990 148 1020 155 Q1050 148 1080 156 Q1110 150 1140 158 Q1170 152 1200 160 Q1230 154 1260 162 Q1290 156 1320 164 Q1360 158 1440 165 L1440 200 L0 200 Z"
          fill="#2a5c1e"
          opacity="0.85"
        />
        {/* Treeline layer 2 — slightly lighter, in front */}
        <path
          d="M0 175 Q40 165 80 170 Q120 160 160 167 Q200 162 240 168 Q280 160 320 167 Q360 162 400 169 Q440 162 480 170 Q520 163 560 170 Q600 164 640 172 Q680 164 720 171 Q760 165 800 172 Q840 164 880 171 Q920 164 960 172 Q1000 164 1040 172 Q1080 164 1120 172 Q1160 165 1200 173 Q1240 165 1280 173 Q1320 166 1360 174 Q1400 167 1440 174 L1440 200 L0 200 Z"
          fill="#346b25"
          opacity="0.9"
        />

        {/* Ground */}
        <rect x="0" y="185" width="1440" height="15" fill="#ddd8c8" />

        {/* ══ PALMS ══ */}

        {/* Far-left small background palm */}
        <g opacity="0.75">
          <path d="M80 185 Q82 162 80 138" stroke="#7a5520" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M80 138 Q62 120 46 126 Q64 124 80 138 Z" fill="#2d6e1f" />
          <path d="M80 138 Q70 112 62 104 Q76 118 80 138 Z" fill="#265c1a" />
          <path d="M80 138 Q80 110 79 100 Q82 114 80 138 Z" fill="#2d6e1f" />
          <path d="M80 138 Q92 112 100 104 Q86 118 80 138 Z" fill="#265c1a" />
          <path d="M80 138 Q96 120 112 126 Q96 124 80 138 Z" fill="#2d6e1f" />
          <path d="M80 138 Q62 120 46 126" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M80 138 Q70 112 62 104" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M80 138 Q80 110 79 100" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M80 138 Q92 112 100 104" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M80 138 Q96 120 112 126" stroke="#3d8a2a" strokeWidth="1" fill="none" />
        </g>

        {/* Left tall palm — straight, prominent */}
        <path d="M310 188 Q312 155 310 112 Q311 80 309 42" stroke="#8B5e18" strokeWidth="8" fill="none" strokeLinecap="round" />
        {/* trunk texture rings */}
        <path d="M311 168 Q305 166 311 163" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M310 148 Q304 146 310 143" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M310 126 Q304 124 310 121" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M310 104 Q304 102 310 99" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M309 80 Q303 78 309 75" stroke="#6b4a10" strokeWidth="2" fill="none" />
        {/* Fronds — long drooping, 8 directions */}
        <path d="M309 42 Q270 28 238 44 Q268 40 309 42 Z" fill="#265c1a" />
        <path d="M309 42 Q278 10 264 -4 Q290 22 309 42 Z" fill="#2d6e1f" />
        <path d="M309 42 Q296 6 290 -12 Q306 16 309 42 Z" fill="#265c1a" />
        <path d="M309 42 Q308 4 306 -14 Q310 10 309 42 Z" fill="#2d6e1f" />
        <path d="M309 42 Q322 4 328 -14 Q314 12 309 42 Z" fill="#265c1a" />
        <path d="M309 42 Q328 8 342 -4 Q320 20 309 42 Z" fill="#2d6e1f" />
        <path d="M309 42 Q344 20 370 32 Q338 30 309 42 Z" fill="#265c1a" />
        <path d="M309 42 Q284 34 260 46 Q284 40 309 42 Z" fill="#3d8a2a" opacity="0.8" />
        <path d="M309 42 Q334 34 356 44 Q332 40 309 42 Z" fill="#3d8a2a" opacity="0.8" />
        {/* Frond veins */}
        <path d="M309 42 Q270 28 238 44" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M309 42 Q278 10 264 -4" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M309 42 Q296 6 290 -12" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M309 42 Q308 4 306 -14" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M309 42 Q322 4 328 -14" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M309 42 Q328 8 342 -4" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M309 42 Q344 20 370 32" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        {/* Date clusters */}
        <circle cx="310" cy="48" r="4.5" fill="#c47c0a" />
        <circle cx="303" cy="54" r="4" fill="#b06808" />
        <circle cx="317" cy="53" r="4" fill="#c47c0a" />
        <circle cx="309" cy="60" r="3.5" fill="#d4870b" />

        {/* CENTER dominant tall palm — tallest, most prominent */}
        <path d="M720 190 Q722 150 720 105 Q721 65 719 18" stroke="#7a5010" strokeWidth="10" fill="none" strokeLinecap="round" />
        {/* trunk rings */}
        <path d="M722 172 Q714 169 722 165" stroke="#5e3e0c" strokeWidth="3" fill="none" />
        <path d="M721 150 Q713 147 721 143" stroke="#5e3e0c" strokeWidth="3" fill="none" />
        <path d="M720 126 Q712 123 720 119" stroke="#5e3e0c" strokeWidth="3" fill="none" />
        <path d="M720 100 Q712 97 720 93" stroke="#5e3e0c" strokeWidth="3" fill="none" />
        <path d="M720 76 Q712 73 720 69" stroke="#5e3e0c" strokeWidth="2.5" fill="none" />
        <path d="M719 52 Q711 49 719 45" stroke="#5e3e0c" strokeWidth="2.5" fill="none" />
        {/* Crown fronds — very full, long, gracefully drooping */}
        <path d="M719 18 Q672 -2 638 14 Q672 10 719 18 Z" fill="#235818" />
        <path d="M719 18 Q684 -20 668 -36 Q696 -10 719 18 Z" fill="#2a6e1e" />
        <path d="M719 18 Q700 -28 692 -46 Q712 -18 719 18 Z" fill="#235818" />
        <path d="M719 18 Q716 -30 713 -50 Q720 -22 719 18 Z" fill="#2a6e1e" />
        <path d="M719 18 Q722 -30 726 -50 Q720 -22 719 18 Z" fill="#235818" />
        <path d="M719 18 Q738 -28 748 -46 Q728 -18 719 18 Z" fill="#2a6e1e" />
        <path d="M719 18 Q750 -18 768 -32 Q742 -8 719 18 Z" fill="#235818" />
        <path d="M719 18 Q762 2 796 14 Q762 10 719 18 Z" fill="#2a6e1e" />
        <path d="M719 18 Q690 8 666 20 Q692 14 719 18 Z" fill="#3d8a2a" opacity="0.8" />
        <path d="M719 18 Q748 8 772 18 Q746 14 719 18 Z" fill="#3d8a2a" opacity="0.8" />
        <path d="M719 18 Q704 -10 694 -22 Q710 -4 719 18 Z" fill="#2a6e1e" opacity="0.7" />
        <path d="M719 18 Q734 -10 744 -22 Q728 -4 719 18 Z" fill="#235818" opacity="0.7" />
        {/* Frond veins */}
        <path d="M719 18 Q672 -2 638 14" stroke="#52b028" strokeWidth="2" fill="none" />
        <path d="M719 18 Q684 -20 668 -36" stroke="#52b028" strokeWidth="2" fill="none" />
        <path d="M719 18 Q700 -28 692 -46" stroke="#52b028" strokeWidth="2" fill="none" />
        <path d="M719 18 Q716 -30 713 -50" stroke="#52b028" strokeWidth="2" fill="none" />
        <path d="M719 18 Q722 -30 726 -50" stroke="#52b028" strokeWidth="2" fill="none" />
        <path d="M719 18 Q738 -28 748 -46" stroke="#52b028" strokeWidth="2" fill="none" />
        <path d="M719 18 Q750 -18 768 -32" stroke="#52b028" strokeWidth="2" fill="none" />
        <path d="M719 18 Q762 2 796 14" stroke="#52b028" strokeWidth="2" fill="none" />
        {/* Date clusters */}
        <circle cx="720" cy="26" r="6" fill="#c47c0a" />
        <circle cx="711" cy="33" r="5" fill="#b06808" />
        <circle cx="729" cy="32" r="5" fill="#c47c0a" />
        <circle cx="719" cy="40" r="4.5" fill="#d4870b" />
        <circle cx="710" cy="43" r="3.5" fill="#b06808" />
        <circle cx="728" cy="42" r="3.5" fill="#c47c0a" />

        {/* Right tall palm — mirrored */}
        <path d="M1130 188 Q1128 155 1130 112 Q1129 80 1131 42" stroke="#8B5e18" strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d="M1129 168 Q1135 166 1129 163" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M1130 148 Q1136 146 1130 143" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M1130 126 Q1136 124 1130 121" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M1130 104 Q1136 102 1130 99" stroke="#6b4a10" strokeWidth="2.5" fill="none" />
        <path d="M1131 80 Q1137 78 1131 75" stroke="#6b4a10" strokeWidth="2" fill="none" />
        <path d="M1131 42 Q1170 28 1202 44 Q1172 40 1131 42 Z" fill="#265c1a" />
        <path d="M1131 42 Q1162 10 1176 -4 Q1150 22 1131 42 Z" fill="#2d6e1f" />
        <path d="M1131 42 Q1144 6 1150 -12 Q1134 16 1131 42 Z" fill="#265c1a" />
        <path d="M1131 42 Q1132 4 1134 -14 Q1130 10 1131 42 Z" fill="#2d6e1f" />
        <path d="M1131 42 Q1118 4 1112 -14 Q1126 12 1131 42 Z" fill="#265c1a" />
        <path d="M1131 42 Q1112 8 1098 -4 Q1120 20 1131 42 Z" fill="#2d6e1f" />
        <path d="M1131 42 Q1096 20 1070 32 Q1102 30 1131 42 Z" fill="#265c1a" />
        <path d="M1131 42 Q1156 34 1180 46 Q1156 40 1131 42 Z" fill="#3d8a2a" opacity="0.8" />
        <path d="M1131 42 Q1106 34 1084 44 Q1108 40 1131 42 Z" fill="#3d8a2a" opacity="0.8" />
        <path d="M1131 42 Q1170 28 1202 44" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M1131 42 Q1162 10 1176 -4" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M1131 42 Q1144 6 1150 -12" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M1131 42 Q1132 4 1134 -14" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M1131 42 Q1118 4 1112 -14" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M1131 42 Q1112 8 1098 -4" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <path d="M1131 42 Q1096 20 1070 32" stroke="#4aaa30" strokeWidth="1.5" fill="none" />
        <circle cx="1130" cy="48" r="4.5" fill="#c47c0a" />
        <circle cx="1137" cy="54" r="4" fill="#b06808" />
        <circle cx="1123" cy="53" r="4" fill="#c47c0a" />
        <circle cx="1131" cy="60" r="3.5" fill="#d4870b" />

        {/* Far-right small background palm */}
        <g opacity="0.75">
          <path d="M1360 185 Q1358 162 1360 138" stroke="#7a5520" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M1360 138 Q1342 120 1326 126 Q1344 124 1360 138 Z" fill="#2d6e1f" />
          <path d="M1360 138 Q1350 112 1342 104 Q1356 118 1360 138 Z" fill="#265c1a" />
          <path d="M1360 138 Q1360 110 1361 100 Q1358 114 1360 138 Z" fill="#2d6e1f" />
          <path d="M1360 138 Q1372 112 1380 104 Q1366 118 1360 138 Z" fill="#265c1a" />
          <path d="M1360 138 Q1376 120 1392 126 Q1376 124 1360 138 Z" fill="#2d6e1f" />
          <path d="M1360 138 Q1342 120 1326 126" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M1360 138 Q1350 112 1342 104" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M1360 138 Q1360 110 1361 100" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M1360 138 Q1372 112 1380 104" stroke="#3d8a2a" strokeWidth="1" fill="none" />
          <path d="M1360 138 Q1376 120 1392 126" stroke="#3d8a2a" strokeWidth="1" fill="none" />
        </g>
      </svg>
    </div>
  );
}
