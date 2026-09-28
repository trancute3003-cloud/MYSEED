// MYSEED · Hạt Giống Bỏ Quên — client-side script (no build step needed)

// ---------- Mobile nav ----------
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('open'); });

// ---------- Seed garden (demo data + browser storage) ----------
const STAGES = {
  'gui':     { label: '🌰 Mới gửi' },
  'uom':     { label: '🤝 Đang ươm' },
  'nay-mam': { label: '🌱 Nảy mầm' },
  'ben-re':  { label: '🌾 Bén rễ' },
};

// Hạt giống từ bản đề xuất (mục 5.1) — thêm hạt giống thật tại đây
const SAMPLE_SEEDS = [
  { id: 's1', title: 'Bán cam sành trực tiếp cho sinh viên đồng hương', place: 'Trà Ôn, Vĩnh Long', topic: 'Cam sành',
    idea: 'Thu mua cam tại vườn với giá công bằng, đóng gói và bán cho hội sinh viên đồng hương tại TP.HCM, cắt khâu thương lái.',
    why: 'Không biết đóng gói giữ tươi, không có kênh bán, không có vốn thuê xe lạnh.',
    skills: ['Logistics', 'Marketing', 'Công nghệ thực phẩm'], stage: 'uom', sample: true },
];

const STORE_KEY = 'myseed-seeds-v1';
const ADOPT_KEY = 'myseed-adopted-v1';
const load = (k, fallback) => { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } };

let userSeeds = load(STORE_KEY, []);
let adopted = new Set(load(ADOPT_KEY, []));
let filter = 'all';
let query = '';

const grid = document.getElementById('seedGrid');
const empty = document.getElementById('seedEmpty');

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function stageOf(seed) {
  return adopted.has(seed.id) && seed.stage === 'gui' ? 'uom' : seed.stage;
}

function render() {
  const all = [...userSeeds, ...SAMPLE_SEEDS];
  const q = query.trim().toLowerCase();
  const list = all.filter(s => {
    if (filter !== 'all' && stageOf(s) !== filter) return false;
    if (!q) return true;
    return [s.title, s.place, s.topic, s.idea, s.why, ...(s.skills || [])].join(' ').toLowerCase().includes(q);
  });
  grid.innerHTML = list.map(s => {
    const st = stageOf(s);
    const canAdopt = st === 'gui';
    const mine = adopted.has(s.id);
    return `
      <article class="seed">
        <div class="seed-top"><span>📍 ${esc(s.place)}${s.topic ? ' · ' + esc(s.topic) : ''}</span><span class="stage ${st}">${STAGES[st].label}</span></div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.idea)}</p>
        <p class="why">Vì sao dừng lại: ${esc(s.why)}</p>
        <div class="tags">${(s.skills || []).map(k => `<span class="tag">${esc(k)}</span>`).join('')}</div>
        ${canAdopt
          ? `<button class="btn btn-sm" data-adopt="${s.id}">🤝 Nhận ươm</button>`
          : `<button class="btn btn-sm" disabled>${mine ? '✓ Bạn đang ươm hạt giống này' : 'Đã có đội ươm'}</button>`}
      </article>`;
  }).join('');
  empty.hidden = list.length > 0;
}

grid.addEventListener('click', e => {
  const id = e.target.dataset.adopt;
  if (!id) return;
  adopted.add(id);
  save(ADOPT_KEY, [...adopted]);
  render();
});

document.querySelectorAll('.chip').forEach(chip => chip.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('is-on'));
  chip.classList.add('is-on');
  filter = chip.dataset.filter;
  render();
}));
document.querySelector('.search').addEventListener('input', e => { query = e.target.value; render(); });

document.getElementById('seedForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const seed = {
    id: 'u' + Date.now(),
    title: f.get('title').trim(), place: f.get('place').trim(), topic: f.get('topic').trim(),
    idea: f.get('idea').trim(), why: f.get('why').trim(),
    skills: f.get('skills').split(',').map(s => s.trim()).filter(Boolean),
    stage: 'gui',
  };
  userSeeds.unshift(seed);
  save(STORE_KEY, userSeeds);
  e.target.reset();
  document.getElementById('formMsg').textContent = '🌱 Hạt giống của bạn đã được gieo vào vườn ươm!';
  filter = 'all';
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-on', c.dataset.filter === 'all'));
  render();
  grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

render();

// ---------- Farmer income calculator ----------
const fmt = n => (n > 0 ? '+' : n < 0 ? '−' : '') + Math.abs(Math.round(n)).toLocaleString('vi-VN') + 'đ';
const kgEl = document.getElementById('kg');
const priceEl = document.getElementById('price');
const TRADER_PRICE = 1500, HARVEST_COST = 2000;

function calc() {
  const kg = +kgEl.value, price = +priceEl.value;
  const before = kg * (TRADER_PRICE - HARVEST_COST);
  const after = kg * (price - HARVEST_COST);
  document.getElementById('kgOut').textContent = kg.toLocaleString('vi-VN');
  document.getElementById('priceOut').textContent = price.toLocaleString('vi-VN');
  const set = (id, v) => { const el = document.getElementById(id); el.textContent = fmt(v); el.className = v < 0 ? 'neg-txt' : 'pos-txt'; };
  set('resBefore', before);
  set('resAfter', after);
  set('resDiff', after - before);
}
kgEl.addEventListener('input', calc);
priceEl.addEventListener('input', calc);
calc();

// ---------- SDG grid ----------
const SDGS = [
  [1, 'Xóa nghèo', 'core', 'Thu mua trực tiếp, giá công bằng; tăng khả năng chống chịu trước cú sốc giá (Target 1.4, 1.5).'],
  [2, 'Không còn nạn đói', 'ind', 'Giảm tổn thất nông sản (thực phẩm) tại chuỗi sản xuất, dù cam không phải lương thực chính.'],
  [3, 'Sức khỏe và cuộc sống tốt', 'ind', 'Thu nhập ổn định hơn giúp nông dân có điều kiện chăm sóc sức khỏe tốt hơn.'],
  [4, 'Giáo dục có chất lượng', 'ind', 'Sinh viên học kỹ năng thực chiến liên ngành (logistics, marketing, tài chính) qua việc vận hành pilot.'],
  [5, 'Bình đẳng giới', 'ind', 'Cơ chế mở cho mọi giới tham gia vai trò người ươm/người khởi nguồn.'],
  [6, 'Nước sạch và vệ sinh', 'none', 'Dự án không tác động trực tiếp đến lĩnh vực này.'],
  [7, 'Năng lượng sạch', 'none', 'Dự án không tác động trực tiếp đến lĩnh vực này.'],
  [8, 'Việc làm bền vững', 'core', 'Doanh nghiệp siêu nhỏ do sinh viên và nông dân cùng điều hành; giảm NEET (Target 8.3, 8.6).'],
  [9, 'Công nghiệp, sáng tạo & hạ tầng', 'core', 'Kênh phân phối thay thế giúp hộ sản xuất nhỏ tiếp cận thị trường (Target 9.3).'],
  [10, 'Giảm bất bình đẳng', 'ind', 'Thu hẹp khoảng cách thu nhập nông thôn–thành thị bằng kênh phân phối công bằng hơn.'],
  [11, 'Đô thị và cộng đồng bền vững', 'ind', 'Giảm áp lực di cư ra đô thị, giữ chân lao động trẻ tại địa phương.'],
  [12, 'Tiêu dùng & sản xuất có trách nhiệm', 'core', 'Giảm cam bị bỏ không hái hoặc hư hỏng tại vườn (Target 12.3).'],
  [13, 'Hành động về khí hậu', 'ind', 'Giảm lãng phí nông sản góp phần giảm phát thải từ thực phẩm bị bỏ phí.'],
  [14, 'Tài nguyên biển', 'none', 'Dự án không tác động trực tiếp đến lĩnh vực này.'],
  [15, 'Tài nguyên trên đất liền', 'ind', 'Khuyến khích canh tác có kế hoạch, giảm mở rộng diện tích vượt quy hoạch.'],
  [16, 'Hòa bình, công lý & thể chế', 'none', 'Dự án không tác động trực tiếp đến lĩnh vực này.'],
  [17, 'Quan hệ đối tác', 'ind', 'Hợp tác đa bên: sinh viên – nông dân/HTX – đơn vị logistics – mạng lưới đồng hương.'],
];
const LEVEL = { core: 'Trọng tâm', ind: 'Gián tiếp', none: 'Không trực tiếp' };
const sdgGrid = document.getElementById('sdgGrid');
const sdgNote = document.getElementById('sdgNote');
sdgGrid.innerHTML = SDGS.map(([n, name, lv]) =>
  `<button class="sdg-cell ${lv}" data-n="${n}" title="SDG ${n}: ${name}" aria-label="SDG ${n}: ${name} — ${LEVEL[lv]}">${n}</button>`).join('');
sdgGrid.addEventListener('click', e => {
  const btn = e.target.closest('.sdg-cell');
  if (!btn) return;
  const [n, name, lv, note] = SDGS[btn.dataset.n - 1];
  sdgGrid.querySelectorAll('.sdg-cell').forEach(c => c.classList.toggle('sel', c === btn));
  sdgNote.innerHTML = `<b>SDG ${n} · ${name}</b> — <i>${LEVEL[lv]}</i>. ${note}`;
});
