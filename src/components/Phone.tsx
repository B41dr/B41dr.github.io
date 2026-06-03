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
    title: '自拍夸自己',
    iconName: 'icon-camera',
    iconColor: '#fff',
    icon: 'icon-camera',
    badge: true,
    reward: {
      from: '自拍夸自己',
      name: '限定款美颜滤镜',
      flavor: '咔嚓一下，今天的你比昨天还好看 200%。',
      icon: 'sparkle',
      iconColor: '#f5c31c',
      discBg: '#b77dee',
    },
  },
  {
    key: 'app',
    cls: 'app',
    title: '夸人 App',
    iconName: 'icon-chat',
    iconColor: '#fff',
    icon: 'icon-chat',
    reward: {
      from: '夸人 App',
      name: '一句走心彩虹屁',
      flavor: '“你今天的存在本身，就很值得庆祝。”',
      icon: 'rainbow',
      iconColor: '#fff',
      discBg: '#889df0',
    },
  },
  {
    key: 'crit',
    cls: 'crit',
    title: '水生图鉴',
    iconName: 'icon-critterpedia',
    iconColor: '#725d42',
    icon: 'icon-critterpedia',
    reward: {
      from: '水生图鉴',
      name: '稀有摸鱼小鱼干',
      flavor: '收集进度 +1，离「摸鱼大师」称号又近一步。',
      icon: 'fish',
      iconColor: '#fff',
      discBg: '#f7cd67',
    },
  },
  {
    key: 'diy',
    cls: 'diy',
    title: '夸夸 DIY',
    iconName: 'icon-diy',
    iconColor: '#fff',
    icon: 'icon-diy',
    badge: true,
    reward: {
      from: '夸夸 DIY',
      name: '亮闪闪手工拼图',
      flavor: '亲手拼出一句「我超棒」，治愈值拉满。',
      icon: 'wand',
      iconColor: '#fff',
      discBg: '#e59266',
    },
  },
  {
    key: 'shop',
    cls: 'shop',
    title: '奶茶外送',
    iconName: 'milktea',
    iconColor: '#fff',
    icon: 'milktea',
    reward: {
      from: '奶茶外送',
      name: '霸王餐·超大杯奶茶',
      flavor: '三分糖去冰多珍珠，已悄悄记下你的口味。',
      icon: 'milktea',
      iconColor: '#fff',
      discBg: '#f8a6b2',
    },
  },
  {
    key: 'var',
    cls: 'var',
    title: '水滴变装',
    iconName: 'icon-variant',
    iconColor: '#fff',
    icon: 'icon-variant',
    reward: {
      from: '水滴变装',
      name: '一整套漂亮新衣',
      flavor: '换上它，今天走路都自带 BGM。',
      icon: 'heart',
      iconColor: '#fff',
      discBg: '#82d5bb',
    },
  },
  {
    key: 'des',
    cls: 'des',
    title: '心情打卡',
    iconName: 'icon-design',
    iconColor: '#fff',
    icon: 'icon-design',
    reward: {
      from: '心情打卡',
      name: '今日好心情徽章',
      flavor: '已记录：心情指数爆表，建议继续保持。',
      icon: 'star',
      iconColor: '#fff',
      discBg: '#8ac68a',
    },
  },
  {
    key: 'map',
    cls: 'map',
    title: '摸鱼地图',
    iconName: 'icon-map',
    iconColor: '#fff',
    icon: 'icon-map',
    badge: true,
    reward: {
      from: '摸鱼地图',
      name: '隐藏摸鱼点门票',
      flavor: '解锁一处无人打扰的快乐角落，仅你可见。',
      icon: 'pin',
      iconColor: '#fff',
      discBg: '#fc736d',
    },
  },
  {
    key: 'chat',
    cls: 'chat',
    title: '语录广场',
    iconName: 'megaphone',
    iconColor: '#3d5a1a',
    icon: 'megaphone',
    reward: {
      from: '语录广场',
      name: '限量水水大王手办',
      flavor: '会发光的迷你大王，摆在桌上随时给你打气。',
      icon: 'crown',
      iconColor: '#f5c31c',
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
