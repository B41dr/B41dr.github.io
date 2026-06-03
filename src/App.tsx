import { useState } from 'react';

import {
  Button,
  Card,
  Checkbox,
  Divider,
  Footer,
  Modal,
  Phone,
  Radio,
  Switch,
  Tabs,
  Time,
  Title,
  WeddingInvitation,
} from 'animal-island-ui';

import { Icon } from './icons/Icon';

const QUOTES = [
  (
    <>
      做不完今天就明天，明天做不完就后天，反正你已经超棒了
      <Icon name="drop" size={14} color="#5a92d0" style={{ marginLeft: 4, verticalAlign: '-0.22em' }} />
    </>
  ),
  '你今天的进度条肉眼可见地在涨，了不起！',
  (
    <>
      工作可以拖，水必须先喝。水水大王盖章
      <Icon name="check" size={14} color="#6fba2c" style={{ marginLeft: 4, verticalAlign: '-0.22em' }} />
    </>
  ),
  (
    <>
      你不是在摸鱼，你是在让灵感发酵，懂的都懂
      <Icon name="fish" size={16} color="#e59266" style={{ marginLeft: 4, verticalAlign: '-0.25em' }} />
    </>
  ),
  '别人 996 是因为他们没有你这么稀有，慢一点也是限定款。',
];

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [punch, setPunch] = useState<Array<string | number>>(['water', 'smile']);
  const [unlimited, setUnlimited] = useState(true);
  const [mood, setMood] = useState<string | number>('hyper');

  const nextQuote = () => setQuoteIdx((i) => (i + 1) % QUOTES.length);

  return (
    <div className="stage">
      <div className="floating-dots" aria-hidden="true" />

      {/* HEADER */}
      <div className="header-row">
        <Time />
        <span className="badge">VIP</span>
      </div>

      {/* HERO TITLE */}
      <div className="section-title" style={{ marginTop: 16 }}>
        <Title size="large" color="app-teal">
          夸夸水水大王
        </Title>
      </div>
      <div className="section-sub">· WATER · KING · OF · KUAKUA ·</div>

      {/* 夸夸邀请函 */}
      <WeddingInvitation
        groomName="水水大王"
        brideName="你 (是滴就是你)"
        date="2026.06.03"
        weekday="星期三"
        time="全 · 天 · 候"
        venue="彩虹屁工坊 · 三号鼓掌台"
        address="宇宙·摸鱼岛·夸夸大本营东侧 7m"
        title="夸夸邀请函"
        subtitle="WATER · KING · KUAKUA · INVITATION"
        message={
          <>
            <span style={{ color: '#794f27', fontWeight: 700 }}>本王水水大王</span>{' '}
            谨以一整桶冰凉气泡水之名，
            <br />
            郑重邀请 <span style={{ color: '#794f27', fontWeight: 700 }}>您</span> 出席今日份 ——
            <br />
            「24h 不打烊·彩虹屁连发·摸鱼合法化」夸夸宴。
            <br />
            到场即领专属彩虹屁套餐
            <Icon name="rainbow" size={16} style={{ verticalAlign: '-0.3em', margin: '0 4px' }} />
            ，迟到也不扣分。
          </>
        }
        lotteryNumber="0603"
        lotteryLabel="LUCKY NUMBER"
        lotteryHint={
          <>
            凭此号码可向水水大王兑换无限夸夸豆
            <Icon name="sparkle" size={12} color="#d4a030" style={{ margin: '0 3px' }} />
            <br />
            一日有效，过期作废（其实不会，本王说话最算话啦）
          </>
        }
      />

      {/* STATS */}
      <div className="section">
        <div className="section-title">
          <Title size="middle" color="app-blue">
            · 今日属性 ·
          </Title>
        </div>
        <div className="stats-row">
          <Card pattern="app-teal">
            <div className="stat">
              <div className="num">∞</div>
              <div className="lbl">夸 夸 值</div>
              <div className="bar">
                <i style={{ width: '98%' }} />
              </div>
            </div>
          </Card>
          <Card color="app-blue">
            <div className="stat warm">
              <div className="num">9999+</div>
              <div className="lbl">水 力</div>
              <div className="bar">
                <i style={{ width: '100%' }} />
              </div>
            </div>
          </Card>
          <Card color="app-yellow">
            <div className="stat warm" style={{ color: '#725d42' }}>
              <div className="num">MAX</div>
              <div className="lbl">摸 鱼 力</div>
              <div className="bar">
                <i style={{ width: '92%', background: 'rgba(114,93,66,0.55)' }} />
              </div>
            </div>
          </Card>
        </div>
        <div className="pill-row" style={{ marginTop: 14, justifyContent: 'center' }}>
          <span className="pill">#无限续杯</span>
          <span className="pill pink">#彩虹屁制造机</span>
          <span className="pill yellow">#摸鱼界扛把子</span>
          <span className="pill blue">#在线发糖</span>
        </div>
      </div>

      {/* QUOTE */}
      <div className="section">
        <div className="section-title">
          <Title size="middle" color="app-pink">
            · 今日水水语录 ·
          </Title>
        </div>
        <Card pattern="app-pink" className="quote-card">
          <span className="quotemark">“</span>
          <div className="quote">{QUOTES[quoteIdx]}</div>
          <span className="quotemark r">“</span>
          <div className="sig">—— 水水大王 · 写于摸鱼时刻</div>
          <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center' }}>
            <Button type="default" size="small" icon={<Icon name="refresh" size={14} />} onClick={nextQuote}>
              再来一句
            </Button>
          </div>
        </Card>
      </div>

      {/* TABS */}
      <div className="section">
        <div className="section-title">
          <Title size="middle" color="app-orange">
            · 大王图鉴 ·
          </Title>
        </div>
        <Tabs
          defaultActiveKey="skill"
          items={[
            {
              key: 'skill',
              label: '技能',
              children: (
                <div className="cb-group vertical" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <span className="pill">
                      <Icon name="bolt" size={14} /> 一秒夸人 Lv99
                    </span>
                  </div>
                  <div>
                    <span className="pill blue">
                      <Icon name="drop" size={14} /> 永不脱水 Lv88
                    </span>
                  </div>
                  <div>
                    <span className="pill pink">
                      <Icon name="rainbow" size={14} /> 彩虹屁制造 Lv77
                    </span>
                  </div>
                  <div>
                    <span className="pill yellow">
                      <Icon name="fish" size={14} /> 隐身摸鱼 Lv66
                    </span>
                  </div>
                </div>
              ),
            },
            {
              key: 'title',
              label: '称号',
              children: (
                <div className="pill-row">
                  <span className="pill">宇宙第一夸夸官</span>
                  <span className="pill blue">摸鱼水水联盟会长</span>
                  <span className="pill pink">气泡水代言人</span>
                  <span className="pill yellow">奶茶续命大使</span>
                  <span className="pill">睡眠保护协会理事</span>
                </div>
              ),
            },
            {
              key: 'gear',
              label: '装备',
              children: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="gear-row">
                    <Icon name="bottle" size={18} color="#5a92d0" />
                    <span>1L 大容量复古水壶 · +500% 水力</span>
                  </div>
                  <div className="gear-row">
                    <Icon name="crown" size={18} color="#d4a030" />
                    <span>镶水钻夸夸冠冕 · 彩虹屁暴击 +30%</span>
                  </div>
                  <div className="gear-row">
                    <Icon name="headphone" size={18} color="#9050d0" />
                    <span>ASMR 摸鱼降噪耳机 · 摸鱼隐身</span>
                  </div>
                  <div className="gear-row">
                    <Icon name="wand" size={18} color="#c44a64" />
                    <span>一夸即中魔法杖 · 命中率 100%</span>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* 每日打卡 */}
      <div className="section">
        <div className="section-title">
          <Title size="middle" color="app-green">
            · 大王今日打卡 ·
          </Title>
        </div>
        <Card pattern="app-green">
          <Checkbox
            direction="vertical"
            value={punch}
            onChange={setPunch}
            options={[
              {
                value: 'water',
                label: (
                  <span className="ck-row">
                    <Icon name="drop" size={16} color="#5a92d0" /> 喝够 8 杯水
                  </span>
                ),
              },
              {
                value: 'smile',
                label: (
                  <span className="ck-row">
                    <Icon name="heart" size={16} color="#fc736d" /> 对着镜子夸自己 3 次
                  </span>
                ),
              },
              {
                value: 'stretch',
                label: (
                  <span className="ck-row">
                    <Icon name="turtle" size={16} color="#2c6e2c" /> 起身扭一扭脖子
                  </span>
                ),
              },
              {
                value: 'sleep',
                label: (
                  <span className="ck-row">
                    <Icon name="moon" size={16} color="#9050d0" /> 今晚 11 点前躺平
                  </span>
                ),
              },
              {
                value: 'praise',
                label: (
                  <span className="ck-row">
                    <Icon name="rainbow" size={16} /> 随机夸一位同事
                  </span>
                ),
              },
            ]}
          />
          <Divider type="line-teal" />
          <div className="preference-card" style={{ padding: 0 }}>
            <div className="label-block">
              <div className="l1">无限夸夸模式</div>
              <div className="l2">遇事不决，先夸一通再说</div>
            </div>
            <Switch
              checked={unlimited}
              onChange={setUnlimited}
              checkedChildren="ON"
              unCheckedChildren="OFF"
            />
          </div>
          <div className="hr-soft" />
          <div
            className="preference-card"
            style={{ padding: 0, alignItems: 'flex-start', flexDirection: 'column', gap: 10 }}
          >
            <div className="label-block">
              <div className="l1">今日心情</div>
              <div className="l2">大王今天准备用哪一档火力夸你？</div>
            </div>
            <Radio
              value={mood}
              onChange={setMood}
              options={[
                {
                  value: 'hyper',
                  label: (
                    <span className="ck-row">
                      <Icon name="flame" size={16} color="#e05a5a" /> 燃爆模式
                    </span>
                  ),
                },
                {
                  value: 'gentle',
                  label: (
                    <span className="ck-row">
                      <Icon name="tea" size={16} color="#2c6e2c" /> 温柔续命
                    </span>
                  ),
                },
                {
                  value: 'salty',
                  label: (
                    <span className="ck-row">
                      <Icon name="salt" size={16} color="#8a7b66" /> 阴阳怪气 (慎选)
                    </span>
                  ),
                },
              ]}
            />
          </div>
        </Card>
      </div>

      {/* PHONE SHOWCASE */}
      <div className="section">
        <div className="section-title">
          <Title size="middle" color="purple">
            · 大王的 NookPhone ·
          </Title>
        </div>
        <Card pattern="purple" style={{ padding: '18px 12px 14px' }}>
          <div
            style={{
              textAlign: 'center',
              color: '#5a2c9a',
              fontSize: 12,
              marginBottom: 10,
              letterSpacing: '0.08em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <Icon name="sparkle" size={14} color="#9050d0" />
            全是夸夸 App，一个都不准卸载
            <Icon name="sparkle" size={14} color="#9050d0" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Phone />
          </div>
          <div
            style={{
              textAlign: 'center',
              color: '#5a2c9a',
              fontSize: 11,
              marginTop: 8,
              letterSpacing: '0.06em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5,
            }}
          >
            长按图标即可向水水大王投喂夸夸豆
            <Icon name="bean" size={13} color="#b77dee" />
          </div>
        </Card>
      </div>

      {/* ACTIONS */}
      <div className="action-row">
        <Button
          type="default"
          size="middle"
          block
          icon={<Icon name="milktea" size={16} color="#c44a64" />}
        >
          投喂奶茶
        </Button>
        <Button
          type="primary"
          size="middle"
          block
          icon={<Icon name="drop" size={16} color="#5a92d0" />}
          onClick={() => setModalOpen(true)}
        >
          召唤大王
        </Button>
      </div>

      <Divider type="line-teal" />

      <div className="signature">
        <Icon name="drop" size={11} color="#5a92d0" style={{ verticalAlign: '-0.1em', marginRight: 4 }} />
        made with WaterPower by 水水大王本王
        <Icon name="drop" size={11} color="#5a92d0" style={{ verticalAlign: '-0.1em', marginLeft: 4 }} />
      </div>

      <Footer type="sea" />

      <Modal
        open={modalOpen}
        title={
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
            <Icon name="sparkle" size={18} color="#f5c31c" />
            水水大王闪现登场
            <Icon name="sparkle" size={18} color="#f5c31c" />
          </span>
        }
        onClose={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
        footer={
          <>
            <Button type="default" size="middle" onClick={() => setModalOpen(false)}>
              再夸亿点
            </Button>
            <Button type="primary" size="middle" onClick={() => setModalOpen(false)}>
              谢谢大王！
            </Button>
          </>
        }
      >
        老大！今天的你 ——<br />
        <br />
        <strong style={{ color: '#11a89b' }}>
          眼睛是亮的、想法是炸裂的、节奏是稳的、人是可爱的。
        </strong>
        <br />
        <br />
        不开玩笑，水水大王宇宙观察了 0.3 秒就给你颁发了今日「最值得被宠」奖。
        <br />
        <span style={{ color: '#9f927d', display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 6 }}>
          （记得喝水。本大王在看着呢
          <Icon name="eye" size={14} color="#11a89b" />）
        </span>
      </Modal>
    </div>
  );
}
