import { useEffect, useState } from 'react';

import { Icon } from '../icons/Icon';

const p2 = (n: number) => String(n).padStart(2, '0');

// 每个 App 对应一份许愿奖励
export interface Reward {
  from: string;
  name: string;
  flavor: string;
  icon: string;
  iconColor: string;
  discBg: string;
}

export interface PhoneApp {
  key: string;
  cls: string;
  title: string;
  icon: string;
  iconName: string;
  iconColor: string;
  badge?: boolean;
  reward: Reward;
}

const APPS: PhoneApp[] = [
  {
    key: 'cam',
    cls: 'cam',
    title: '拍立得',
    iconName: 'icon-camera',
    iconColor: '#fff',
    icon: 'icon-camera',
    badge: true,
    reward: {
      from: '水水大王',
      name: '拍立得 50 张相纸',
      flavor: '一整盒拍立得相纸，把每个开心瞬间都印出来收藏。',
      icon: 'icon-camera',
      iconColor: '#fff',
      discBg: '#b77dee',
    },
  },
  {
    key: 'app',
    cls: 'app',
    title: '奶茶',
    iconName: 'icon-chat',
    iconColor: '#fff',
    icon: 'icon-chat',
    reward: {
      from: '水水大王',
      name: '一周奶茶自由',
      flavor: '每天一杯，三分糖去冰多珍珠，已记下你的口味。',
      icon: 'milktea',
      iconColor: '#fff',
      discBg: '#889df0',
    },
  },
  {
    key: 'crit',
    cls: 'crit',
    title: '鲜花',
    iconName: 'icon-critterpedia',
    iconColor: '#725d42',
    icon: 'icon-critterpedia',
    reward: {
      from: '水水大王',
      name: '一大束当季鲜花',
      flavor: '挑了你最爱的颜色，愿你天天像花一样新鲜好看。',
      icon: 'leaf',
      iconColor: '#fff',
      discBg: '#f7cd67',
    },
  },
  {
    key: 'diy',
    cls: 'diy',
    title: '香薰',
    iconName: 'icon-diy',
    iconColor: '#fff',
    icon: 'icon-diy',
    badge: true,
    reward: {
      from: '水水大王',
      name: '助眠香薰蜡烛',
      flavor: '点上它，今晚好好睡一觉，明天又是元气满满的你。',
      icon: 'flame',
      iconColor: '#fff',
      discBg: '#e59266',
    },
  },
  {
    key: 'shop',
    cls: 'shop',
    title: '蛋糕',
    iconName: 'milktea',
    iconColor: '#fff',
    icon: 'milktea',
    reward: {
      from: '水水大王',
      name: '手作小蛋糕',
      flavor: '不为什么，就想让你尝点甜的，今天也要开心呀。',
      icon: 'heart',
      iconColor: '#fff',
      discBg: '#f8a6b2',
    },
  },
  {
    key: 'var',
    cls: 'var',
    title: '新衣',
    iconName: 'icon-variant',
    iconColor: '#fff',
    icon: 'icon-variant',
    reward: {
      from: '水水大王',
      name: '一套漂亮新衣',
      flavor: '换上它，今天走路都自带 BGM，美美地出门吧。',
      icon: 'star',
      iconColor: '#fff',
      discBg: '#82d5bb',
    },
  },
  {
    key: 'des',
    cls: 'des',
    title: '护手霜',
    iconName: 'icon-design',
    iconColor: '#fff',
    icon: 'icon-design',
    reward: {
      from: '水水大王',
      name: '滋润护手霜',
      flavor: '天冷了，记得涂手手；照顾好自己这件事，我很认真。',
      icon: 'drop',
      iconColor: '#fff',
      discBg: '#8ac68a',
    },
  },
  {
    key: 'map',
    cls: 'map',
    title: '电影票',
    iconName: 'icon-map',
    iconColor: '#fff',
    icon: 'icon-map',
    badge: true,
    reward: {
      from: '水水大王',
      name: '两张电影票',
      flavor: '挑部你想看的，找个人一起，好好放松一个晚上。',
      icon: 'pin',
      iconColor: '#fff',
      discBg: '#fc736d',
    },
  },
  {
    key: 'chat',
    cls: 'chat',
    title: '手写信',
    iconName: 'megaphone',
    iconColor: '#3d5a1a',
    icon: 'megaphone',
    reward: {
      from: '水水大王',
      name: '一封手写信',
      flavor: '把想对你说的话都写下来了，慢慢拆、慢慢看。',
      icon: 'heart',
      iconColor: '#fff',
      discBg: '#d1da49',
    },
  },
];

export interface PhoneProps {
  onAppClick?: (reward: Reward) => void;
}

export function Phone({ onAppClick }: PhoneProps) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="kphone-slot">
      <div className="kphone">
        <div className="grass" />
        <div className="topbar">
          <Icon name="wifi" size={20} />
          <span className="clock">
            {p2(now.getHours())}
            <span className="c-colon">:</span>
            {p2(now.getMinutes())}
          </span>
          <Icon name="pin" size={20} />
        </div>
        <div className="welcome">水水大王 · WaterPhone</div>
        <div className="grid">
          {APPS.map((a) => (
            <button
              key={a.key}
              type="button"
              className={'tile ' + a.cls}
              title={a.title}
              onClick={() => onAppClick && onAppClick(a.reward)}
            >
              {a.badge && <span className="badge" />}
              <Icon name={a.iconName} size={32} color={a.iconColor} bounce />
            </button>
          ))}
        </div>
        <div className="pageind">
          <span className="dot active" />
          <span className="dot" />
        </div>
      </div>
    </div>
  );
}
