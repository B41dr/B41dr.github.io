import type { ReactNode } from 'react';

// 库内置 10 个 + 手绘 23 个,全部 24×24 viewBox,fill="currentColor"
export const I_PATHS: Record<string, ReactNode> = {
  // ----- library built-ins (10) -----
  'icon-camera': (
    <g>
      <path d="M9.2 5L7.5 7.2H4.5a2 2 0 0 0-2 2v9.3a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V9.2a2 2 0 0 0-2-2h-3L14.8 5z" />
      <circle cx="12" cy="13.6" r="4.4" fill="rgb(247,243,223)" />
      <circle cx="12" cy="13.6" r="2.6" />
      <circle cx="18" cy="10" r=".9" fill="rgb(247,243,223)" />
    </g>
  ),
  'icon-chat': (
    <g>
      <path d="M4.5 4h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4.7L9 21.5v-4.5H4.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <circle cx="8.2" cy="10.5" r="1.2" fill="rgb(247,243,223)" />
      <circle cx="12" cy="10.5" r="1.2" fill="rgb(247,243,223)" />
      <circle cx="15.8" cy="10.5" r="1.2" fill="rgb(247,243,223)" />
    </g>
  ),
  'icon-critterpedia': (
    <g>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 18.5z" />
      <path d="M6.5 18H19v2H6.5a1 1 0 1 1 0-2z" fill="rgb(247,243,223)" opacity=".55" />
      <circle cx="12" cy="10.5" r="3.2" fill="rgb(247,243,223)" />
      <path d="M12 8v2.5h2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </g>
  ),
  'icon-design': (
    <g>
      <path d="M12 2a10 10 0 1 0 .5 20c1.7 0 2-1.3 1.2-2.4-1-1.5.4-3 2-3A4.3 4.3 0 0 0 20 12c0-5-3.8-10-8-10z" />
      <circle cx="7" cy="11" r="1.4" fill="rgb(247,243,223)" />
      <circle cx="10.5" cy="6.5" r="1.4" fill="rgb(247,243,223)" />
      <circle cx="15.5" cy="8.5" r="1.4" fill="rgb(247,243,223)" />
      <circle cx="16" cy="13.5" r="1.4" fill="rgb(247,243,223)" />
    </g>
  ),
  'icon-diy': (
    <g>
      <path d="M10.5 2.2l11 5.4-1.7 3.4-11-5.4z" />
      <path d="M9 7.4l-5.8 12a1.7 1.7 0 0 0 2.5 2.2l9.2-9.4z" />
    </g>
  ),
  'icon-helicopter': (
    <g>
      <path d="M2 7.5h20v1.4H2z" />
      <circle cx="12" cy="8.2" r="1.2" />
      <path d="M4 11h11.5a3.5 3.5 0 0 1 3.5 3.5V17H7l-3-3z" />
      <path d="M7 17h2v3a1 1 0 0 1-2 0z" />
      <path d="M15 17h2v3a1 1 0 0 1-2 0z" />
    </g>
  ),
  'icon-map': (
    <g>
      <path d="M2 6l6-2 8 2 6-2v14l-6 2-8-2-6 2z" />
      <path d="M8 4v14" stroke="rgb(247,243,223)" strokeWidth="1.4" fill="none" opacity=".7" />
      <path d="M16 6v14" stroke="rgb(247,243,223)" strokeWidth="1.4" fill="none" opacity=".7" />
    </g>
  ),
  'icon-miles': (
    <g>
      <circle cx="12" cy="12" r="10" />
      <path d="M7 16V8h1.6l2.2 4.5L13 8h1.6v8h-1.6v-4.6l-2 4h-.5l-2-4V16z" fill="rgb(247,243,223)" />
    </g>
  ),
  'icon-shopping': (
    <g>
      <path d="M5 8h14l-1 13a1 1 0 0 1-1 .9H7a1 1 0 0 1-1-.9z" />
      <path d="M9 8V6.2a3 3 0 0 1 6 0V8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  ),
  'icon-variant': (
    <g>
      <path d="M4.5 6.4L9 3.2c.8 1.4 4.2 1.4 6 0l4.5 3.2-2.8 4.8-1.6-.9V21H8.9V10.3l-1.6.9z" />
    </g>
  ),

  // ----- hand-drawn (23) -----
  drop: (
    <g>
      <path d="M12 2.4c-3.4 4.7-7 8.6-7 12.4a7 7 0 0 0 14 0c0-3.8-3.6-7.7-7-12.4z" />
      <ellipse cx="9.5" cy="14.6" rx="1.2" ry="1.8" fill="rgb(247,243,223)" opacity=".4" />
    </g>
  ),
  crown: (
    <g>
      <path d="M3 17l1-9 4.5 4L12 5.5 15.5 12 20 8l1 9z" />
      <rect x="3" y="17" width="18" height="3.2" rx="1.4" />
      <circle cx="4" cy="8" r="1.5" />
      <circle cx="20" cy="8" r="1.5" />
      <circle cx="12" cy="5.4" r="1.6" />
    </g>
  ),
  star: <path d="M12 2.5l2.7 6.4 6.9.5-5.3 4.5 1.7 6.7L12 17l-6 3.6 1.7-6.7-5.3-4.5 6.9-.5z" />,
  sparkle: <path d="M12 2l1.4 8.6L22 12l-8.6 1.4L12 22l-1.4-8.6L2 12l8.6-1.4z" />,
  leaf: (
    <g>
      <path d="M20 4C11.5 4 4.5 10.5 4.5 18.5c0 .8.2 1.6.5 2.2C12 19 19 12 19.8 4.4 19.9 4.2 19.9 4 20 4z" />
      <path d="M7 19L18 6" stroke="rgb(247,243,223)" strokeWidth="1.4" opacity=".55" strokeLinecap="round" fill="none" />
    </g>
  ),
  bolt: <path d="M13.5 2L4 14.2h6.5L8.5 22 20 9.2h-6.5z" />,
  rainbow: (
    <g>
      <path d="M2 18.5a10 10 0 0 1 20 0" stroke="#fc736d" strokeWidth="2.1" fill="none" strokeLinecap="round" />
      <path d="M4.8 18.5a7.2 7.2 0 0 1 14.4 0" stroke="#f7cd67" strokeWidth="2.1" fill="none" strokeLinecap="round" />
      <path d="M7.6 18.5a4.4 4.4 0 0 1 8.8 0" stroke="#82d5bb" strokeWidth="2.1" fill="none" strokeLinecap="round" />
      <path d="M10.4 18.5a1.6 1.6 0 0 1 3.2 0" stroke="#889df0" strokeWidth="2.1" fill="none" strokeLinecap="round" />
    </g>
  ),
  fish: (
    <g>
      <path d="M2.5 12c1.6-3.8 5.3-6 10-5.5 3.4.4 5.7 1.8 6.8 4l3-2.6c.4-.4 1 0 1 .5v7.2c0 .5-.6.9-1 .5l-3-2.6c-1.1 2.2-3.4 3.6-6.8 4-4.7.5-8.4-1.7-10-5.5z" />
      <circle cx="11" cy="10.5" r=".9" fill="rgb(247,243,223)" />
    </g>
  ),
  bottle: (
    <g>
      <rect x="9.5" y="2.5" width="5" height="3" rx=".8" />
      <path d="M7.5 6h9l1 3v10.5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z" />
      <rect x="8.5" y="12" width="7" height="5" rx=".8" fill="rgb(247,243,223)" opacity=".35" />
    </g>
  ),
  headphone: (
    <g>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="2.8" y="13" width="4.4" height="7.4" rx="1.7" />
      <rect x="16.8" y="13" width="4.4" height="7.4" rx="1.7" />
    </g>
  ),
  wand: (
    <g>
      <path d="M5 20L17 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M18 2.2l1 2.6 2.6 1-2.6 1-1 2.6-1-2.6-2.6-1 2.6-1z" />
      <path d="M5.5 13l.6 1.5 1.5.6-1.5.6L5.5 17l-.6-1.3-1.5-.6 1.5-.6z" />
    </g>
  ),
  heart: <path d="M12 21C5.5 16.5 2 12.5 2 8.6a4.2 4.2 0 0 1 8-1.8 4.2 4.2 0 0 1 8 1.8c0 3.9-3.5 7.9-10 12.4z" />,
  turtle: (
    <g>
      <ellipse cx="11" cy="12.5" rx="7" ry="6" />
      <circle cx="19" cy="10.5" r="1.8" />
      <rect x="3" y="11.5" width="2.2" height="2.2" rx=".9" />
      <rect x="18.5" y="14" width="2.2" height="2.2" rx=".9" />
      <rect x="6" y="17.5" width="2.2" height="2.2" rx=".9" />
      <rect x="15" y="17.5" width="2.2" height="2.2" rx=".9" />
      <path d="M8 10.5l3-2 3 2M8 14.5l3-2 3 2" stroke="rgb(247,243,223)" strokeWidth="1" opacity=".55" fill="none" />
    </g>
  ),
  moon: <path d="M19.5 14.4A8 8 0 1 1 10 3a6 6 0 0 0 9.5 11.4z" />,
  flame: (
    <g>
      <path d="M12 2.4c0 4.4-5 7.3-5 12.6a5 5 0 0 0 10 0c0-3.3-3-4.4-5-12.6z" />
      <path d="M12 13.5a3 3 0 0 0 0 5.5 2 2 0 0 0 0-5.5z" fill="rgb(247,243,223)" opacity=".45" />
    </g>
  ),
  tea: (
    <g>
      <path d="M5 8.5h11.5v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M16.5 10.5h2.2a2 2 0 0 1 0 4h-2.2" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M9 3.5c1 1.5-.5 3 .5 4.5M13 3.5c1 1.5-.5 3 .5 4.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </g>
  ),
  salt: (
    <g>
      <rect x="7.5" y="6.5" width="9" height="14" rx="2" />
      <rect x="8.5" y="3" width="7" height="3.5" rx="1.6" />
      <circle cx="10" cy="4.7" r=".45" fill="rgb(247,243,223)" />
      <circle cx="12" cy="4.7" r=".45" fill="rgb(247,243,223)" />
      <circle cx="14" cy="4.7" r=".45" fill="rgb(247,243,223)" />
      <path d="M9 11h6M9 14h6" stroke="rgb(247,243,223)" strokeWidth="1" opacity=".55" />
    </g>
  ),
  milktea: (
    <g>
      <path d="M7.5 5.5h9L15.4 21a1 1 0 0 1-1 .9H9.6a1 1 0 0 1-1-.9z" />
      <path d="M6.5 5.5h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M11.5 3.2c-1 1.6-1.5 2.5 0 4.3" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <circle cx="10.5" cy="18" r=".9" fill="rgb(247,243,223)" opacity=".75" />
      <circle cx="13" cy="19" r=".9" fill="rgb(247,243,223)" opacity=".75" />
      <circle cx="11.5" cy="20.4" r=".75" fill="rgb(247,243,223)" opacity=".75" />
      <circle cx="13.5" cy="16.5" r=".75" fill="rgb(247,243,223)" opacity=".55" />
    </g>
  ),
  megaphone: (
    <g>
      <path d="M3 9.5l9.5-3.7V18L3 14.3z" />
      <path d="M12.5 8.4l6-2.2v12.4l-6-2.2z" />
      <path d="M5 14.3v4.2a2 2 0 0 0 4 0V15.8z" />
    </g>
  ),
  wifi: (
    <g>
      <path d="M3 9a14 14 0 0 1 18 0" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M6 13a9 9 0 0 1 12 0" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M9 17a4 4 0 0 1 6 0" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="12" cy="20" r="1.3" />
    </g>
  ),
  pin: (
    <g>
      <path d="M12 2.2a7.2 7.2 0 0 1 7.2 7.2c0 5.1-7.2 12.6-7.2 12.6S4.8 14.5 4.8 9.4A7.2 7.2 0 0 1 12 2.2z" />
      <circle cx="12" cy="9.2" r="2.5" fill="rgb(247,243,223)" />
    </g>
  ),
  refresh: (
    <g>
      <path d="M4.5 12a7.5 7.5 0 0 1 13-5.1V5a.6.6 0 0 1 1-.4l3 3a.6.6 0 0 1 0 .9l-3 3a.6.6 0 0 1-1-.4V9.5a5 5 0 0 0-8.5 2.5z" />
      <path d="M19.5 12a7.5 7.5 0 0 1-13 5.1V19a.6.6 0 0 1-1 .4l-3-3a.6.6 0 0 1 0-.9l3-3a.6.6 0 0 1 1 .4v1.6a5 5 0 0 0 8.5-2.5z" />
    </g>
  ),
  eye: (
    <g>
      <path d="M2 12c2.2-5 5.5-7.8 10-7.8s7.8 2.8 10 7.8c-2.2 5-5.5 7.8-10 7.8S4.2 17 2 12z" />
      <circle cx="12" cy="12" r="3.3" fill="rgb(247,243,223)" />
      <circle cx="12" cy="12" r="1.6" />
    </g>
  ),
  bean: (
    <path d="M8.6 3.6C5 4.2 4 8 6 12c-2 4 .5 8 6 8 5.6 0 8-4.1 6-8 2-4 .5-8-3-8.4-2-.2-2 1.8-3 1.8-1 0-1-2-3.4-1.8z" />
  ),
  shell: (
    <g>
      <path d="M12 4L4.5 18.5C9 21 15 21 19.5 18.5z" />
      <path d="M8 8.5L12 19M12 5.5V19M16 8.5L12 19" stroke="rgb(247,243,223)" strokeWidth="1" opacity=".55" fill="none" />
    </g>
  ),
  boat: (
    <g>
      <path d="M3 16.5h18l-2 4H5z" />
      <path d="M11 3.5l6 11h-6z" />
      <rect x="10.2" y="3.5" width="1.6" height="12" />
    </g>
  ),
  wave: <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0v3c-2-3-4-3-6 0s-4 3-6 0-4-3-6 0z" />,
  hash: (
    <path d="M9.4 3l-.7 5H4l-.4 2.6h4.7l-.7 4.8H2.9l-.4 2.6h5.2L7 22.5h2.6l.7-4.5h4.8l-.7 4.5h2.6l.7-4.5h4.6l.4-2.6h-4.6l.7-4.8h4.7l.4-2.6h-4.7l.7-5h-2.6l-.7 5H10.7l.7-5zm.9 7.6h4.8l-.7 4.8h-4.8z" />
  ),
  check: <path d="M9.5 17.5L3.5 11.5l2.2-2.2 3.8 3.8 9-9 2.2 2.2z" />,
  close: (
    <path d="M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z" />
  ),
  search: (
    <g>
      <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),
};

// 运行时图标目录(对应库的 ICON_LIST 导出)
export const ICON_LIST = [
  { name: 'icon-camera', label: 'Camera' },
  { name: 'icon-chat', label: 'Chat' },
  { name: 'icon-critterpedia', label: 'Critterpedia' },
  { name: 'icon-design', label: 'Design' },
  { name: 'icon-diy', label: 'DIY' },
  { name: 'icon-helicopter', label: 'Helicopter' },
  { name: 'icon-map', label: 'Map' },
  { name: 'icon-miles', label: 'Miles' },
  { name: 'icon-shopping', label: 'Shopping' },
  { name: 'icon-variant', label: 'Variant' },
];
