// MYSEED — mockup website. Không cần build; dữ liệu mẫu lấy từ proposal chính thức (09/2026).

/* ---------- Menu trên điện thoại ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
}

/* ---------- Dữ liệu Vườn Ươm ---------- */
const STATES = {
  'bo-quen':  'Hạt Giống Bỏ Quên',
  'dang-uom': 'Hạt Giống Đang Ươm',
  'thanh-cay': 'Phát Triển Thành Cây',
};
const FIELDS = {
  'nong-san': 'Nông sản & dược liệu bản địa',
  'lang-nghe': 'Thủ công & làng nghề',
  'tai-che': 'Tái chế & môi trường',
  'du-lich': 'Du lịch trải nghiệm bản địa',
  'cong-nghe': 'Công nghệ & giáo dục cộng đồng',
};
const REGIONS = { bac: 'Miền Bắc', trung: 'Miền Trung', nam: 'Miền Nam', 'toan-quoc': 'Toàn quốc' };

// Thêm hạt giống mới vào mảng này.
const SEEDS = [
  {
    id: 'hat-giong-001',
    code: 'Hạt giống 001',
    title: 'Sâm và dược liệu bản địa — Đắk Nông',
    owner: 'Công ty TNHH MTV đầu tư phát triển Đại Thành',
    place: 'Xã Thuận An, tỉnh Lâm Đồng (trước là tỉnh Đắk Nông)',
    region: 'trung',
    fields: ['nong-san', 'du-lich'],
    state: 'dang-uom',
    summary: 'Hai trục phát triển song song: trồng và chế biến sâm, dược liệu dưới tán rừng tự nhiên; và du lịch sinh thái trải nghiệm rừng tại Điểm du lịch Đắk Ken.',
    why: 'Thiếu vốn đầu tư, năng lực vận hành và truyền thông còn yếu; sâm Bố chính ít người biết nên đầu ra bế tắc; rượu sâm chịu áp lực thuế tiêu thụ đặc biệt.',
    local: 'Lâm phần 17.254,46 ha rừng tự nhiên; hơn 300 loài cây dược liệu; mô hình trồng sâm Bố chính đã thử nghiệm thành công; Điểm du lịch Đắk Ken đã được công nhận.',
    needs: ['Vốn đầu tư', 'Truyền thông – marketing', 'Chế biến sâu', 'Pháp lý – thuế', 'Đối tác đầu ra', 'Vận hành du lịch'],
    featured: true,
  },
  {
    id: 'cam-sanh-vinh-long',
    code: 'Hạt giống',
    title: 'Cam sành Vĩnh Long — bán trực tiếp cho sinh viên đồng hương',
    owner: 'Sinh viên quê Trà Ôn (nhóm MYSEED ghi nhận)',
    place: 'Trà Ôn, Vĩnh Long',
    region: 'nam',
    fields: ['nong-san'],
    state: 'bo-quen',
    summary: 'Bán cam trực tiếp cho mạng lưới sinh viên đồng hương tại TP.HCM, cắt bớt khâu trung gian. Hạt giống điển hình của nhóm “đầu ra và kênh phân phối”.',
    why: 'Thiếu kỹ thuật đóng gói giữ độ tươi, thiếu kênh bán và thiếu vốn thuê vận chuyển lạnh.',
    local: 'Khoảng 24.790 ha cam, sản lượng gần 1,2 triệu tấn (01/2026); giá cam sành dao động 1.500–3.500 đồng/kg trong khoảng ba năm gần nhất.',
    needs: ['Đóng gói – bảo quản', 'Kênh phân phối', 'Vốn vận chuyển lạnh'],
  },
  {
    id: 'thoi-trang-nu',
    code: 'Hạt giống',
    title: 'Thời trang nữ Việt — dòng chảy hàng hóa Quảng Châu ↔ Việt Nam',
    owner: 'Quan sát thị trường của nhóm MYSEED',
    place: 'Chưa gắn địa phương cụ thể',
    region: 'toan-quoc',
    fields: [],
    fieldNote: 'Thời trang (chưa phân loại)',
    state: 'bo-quen',
    summary: 'Nhiều cửa hàng thời trang nữ nhập hàng từ Quảng Châu về bán, trong khi khách nước ngoài lại tìm đến Việt Nam để mua thời trang nữ. Nhà thiết kế và xưởng may Việt đang thiếu gì để phục vụ chính nhu cầu đó?',
    why: 'Ý tưởng đang ở giai đoạn quan sát, cần được kiểm chứng bằng nghiên cứu thị trường.',
    local: 'Nhà thiết kế và xưởng may trong nước.',
    needs: ['Nhà thiết kế', 'Xưởng may', 'Logistics', 'Marketing', 'Nghiên cứu thị trường'],
  },
];

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fieldLabels = s => s.fields.length ? s.fields.map(f => FIELDS[f]) : [s.fieldNote || 'Chưa phân loại'];

function seedCard(s) {
  return `
  <article class="seed">
    <div class="seed-top"><span class="seed-id">${esc(s.code)}</span><span class="state state-${s.state}">${STATES[s.state]}</span></div>
    <h3><a href="du-an.html#${s.id}">${esc(s.title)}</a></h3>
    <div class="meta"><span>📍 ${esc(s.place)}</span><span>${REGIONS[s.region]}</span></div>
    <p>${esc(s.summary)}</p>
    <p class="why"><b>Vì sao dừng lại:</b> ${esc(s.why)}</p>
    <div class="tags">${fieldLabels(s).map(f => `<span class="tag">${esc(f)}</span>`).join('')}</div>
    <a class="btn btn-sm" href="du-an.html#${s.id}">Xem hồ sơ</a>
  </article>`;
}

/* ---------- Trang chủ: lưới dự án mới nhất ---------- */
const latest = document.getElementById('latestSeeds');
if (latest) latest.innerHTML = SEEDS.map(seedCard).join('');

/* ---------- Vườn Ươm ---------- */
const garden = document.getElementById('garden');
if (garden) {
  let state = 'all';
  const fieldSel = document.getElementById('fField');
  const regionSel = document.getElementById('fRegion');
  const search = document.getElementById('fSearch');
  const empty = document.getElementById('gardenEmpty');
  const tabs = document.querySelectorAll('.states button');

  tabs.forEach(t => {
    const n = t.dataset.state === 'all' ? SEEDS.length : SEEDS.filter(s => s.state === t.dataset.state).length;
    t.querySelector('small').textContent = `(${n})`;
    t.addEventListener('click', () => {
      tabs.forEach(x => x.setAttribute('aria-selected', x === t));
      state = t.dataset.state;
      render();
    });
  });
  [fieldSel, regionSel].forEach(el => el.addEventListener('change', render));
  search.addEventListener('input', render);

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = SEEDS.filter(s =>
      (state === 'all' || s.state === state) &&
      (!fieldSel.value || s.fields.includes(fieldSel.value)) &&
      (!regionSel.value || s.region === regionSel.value) &&
      (!q || [s.title, s.place, s.summary, s.why, ...s.needs].join(' ').toLowerCase().includes(q)));
    garden.innerHTML = list.map(seedCard).join('');
    empty.hidden = list.length > 0;
    empty.querySelector('h3').textContent = state === 'thanh-cay'
      ? 'Chưa có hạt giống nào phát triển thành cây'
      : 'Không có hạt giống nào khớp bộ lọc';
    empty.querySelector('p').textContent = state === 'thanh-cay'
      ? 'Hạt giống 001 đang được ươm. Khi một dự án được kết nối và triển khai thành công, “câu chuyện bén rễ” của nó sẽ xuất hiện tại đây.'
      : 'Thử bỏ bớt bộ lọc lĩnh vực hoặc khu vực.';
  }
  const pre = location.hash.slice(1);
  const preTab = [...tabs].find(t => t.dataset.state === pre);
  if (preTab) preTab.click(); else render();
}

/* ---------- Trang chi tiết dự án ---------- */
const detail = document.getElementById('detail');
if (detail) {
  const showSeed = () => {
    const id = location.hash.slice(1) || 'hat-giong-001';
    const s = SEEDS.find(x => x.id === id) || SEEDS[0];
    document.title = `${s.code === 'Hạt giống' ? '' : s.code + ' · '}${s.title} · MYSEED`;
    document.getElementById('dCode').textContent = s.code;
    document.getElementById('dTitle').textContent = s.title;
    document.getElementById('dCrumb').textContent = s.title;
    document.getElementById('dState').textContent = STATES[s.state];
    document.getElementById('dState').className = `state state-${s.state}`;
    document.getElementById('dMeta').innerHTML = `<span>📍 ${esc(s.place)}</span><span>${REGIONS[s.region]}</span><span>Người khởi nguồn: ${esc(s.owner)}</span>`;
    document.getElementById('dSummary').textContent = s.summary;
    document.getElementById('dWhy').textContent = s.why;
    document.getElementById('dLocal').textContent = s.local;
    document.getElementById('dFields').innerHTML = fieldLabels(s).map(f => `<span class="tag">${esc(f)}</span>`).join('');
    document.getElementById('dNeeds').innerHTML = s.needs.map(n => `<span class="need">${esc(n)}</span>`).join('');
    document.querySelectorAll('[data-only="hat-giong-001"]').forEach(el => { el.hidden = s.id !== 'hat-giong-001'; });
    window.__seed = s;
    window.scrollTo(0, 0);
  };
  window.addEventListener('hashchange', showSeed);
  showSeed();
}

/* ---------- Modal đầu tư / tham gia ---------- */
const modal = document.getElementById('joinModal');
if (modal) {
  const panes = modal.querySelectorAll('.step-pane');
  const bars = modal.querySelectorAll('.progress span');
  const back = document.getElementById('mBack');
  const next = document.getElementById('mNext');
  const msg = document.getElementById('mMsg');
  let step = 0;

  const go = i => {
    step = i;
    panes.forEach((p, k) => { p.hidden = k !== i; });
    bars.forEach((b, k) => b.classList.toggle('on', k <= i));
    back.hidden = i === 0 || i === panes.length - 1;
    next.textContent = i === 3 ? 'Gửi yêu cầu kết nối' : i === panes.length - 1 ? 'Đóng' : 'Tiếp tục';
    msg.textContent = '';
    if (i === 3) buildChat();
  };

  function buildChat() {
    const s = window.__seed;
    const role = modal.querySelector('input[name="role"]:checked');
    const name = document.getElementById('mName').value.trim() || 'Bạn';
    const invites = document.getElementById('mInvite').value.split(/[\s,;]+/).filter(Boolean);
    const offers = [...modal.querySelectorAll('input[name="offer"]:checked')].map(i => i.value);
    document.getElementById('chatName').textContent = `Nhóm: ${s.code === 'Hạt giống' ? s.title.split('—')[0].trim() : s.code} × ${name}`;
    document.getElementById('chatMembers').innerHTML = [
      `${esc(s.owner)} (người khởi nguồn)`,
      `${esc(name)} — ${esc(role ? role.value : '')}`,
      ...invites.map(e => `${esc(e)} (được mời)`),
      'Đội vận hành MYSEED',
    ].map(x => `<li>${x}</li>`).join('');
    document.getElementById('chatOffer').textContent = offers.length ? offers.join(', ') : '—';
  }

  function validate() {
    if (step === 0) {
      if (!modal.querySelector('input[name="role"]:checked')) return 'Hãy chọn tư cách bạn tham gia.';
      if (!document.getElementById('mName').value.trim() || !document.getElementById('mContact').value.trim()) return 'Hãy nhập họ tên và email hoặc số điện thoại.';
    }
    if (step === 1 && !modal.querySelector('input[name="offer"]:checked')) return 'Chọn ít nhất một nguồn lực bạn có thể đóng góp.';
    return '';
  }

  document.querySelectorAll('[data-open-modal]').forEach(b => b.addEventListener('click', () => {
    const s = window.__seed;
    document.getElementById('mSeed').textContent = s.title;
    document.getElementById('mOffers').innerHTML = s.needs.map(n =>
      `<label class="opt"><input type="checkbox" name="offer" value="${esc(n)}"> ${esc(n)}</label>`).join('');
    modal.querySelector('form').reset();
    go(0);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-close').focus();
  }));
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };
  modal.querySelector('.modal-close').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) close(); });
  back.addEventListener('click', () => go(step - 1));
  next.addEventListener('click', () => {
    if (step === panes.length - 1) return close();
    const err = validate();
    if (err) { msg.textContent = err; return; }
    go(step + 1);
  });
}

/* ---------- Biểu mẫu Gửi hạt giống ---------- */
const seedForm = document.getElementById('seedForm');
if (seedForm) {
  seedForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(seedForm);
    document.getElementById('okTitle').textContent = f.get('title');
    seedForm.hidden = true;
    document.getElementById('seedOk').hidden = false;
    document.getElementById('seedOk').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  const again = document.getElementById('seedAgain');
  again && again.addEventListener('click', () => {
    seedForm.reset(); seedForm.hidden = false; document.getElementById('seedOk').hidden = true;
  });
}

/* ---------- Tin tức / Cẩm nang: tab ---------- */
const newsTabs = document.querySelectorAll('.tabs button');
if (newsTabs.length) {
  const show = id => {
    newsTabs.forEach(b => b.setAttribute('aria-selected', b.dataset.tab === id));
    document.querySelectorAll('.tab-pane').forEach(p => { p.hidden = p.id !== id; });
  };
  newsTabs.forEach(b => b.addEventListener('click', () => { show(b.dataset.tab); history.replaceState(null, '', '#' + b.dataset.tab); }));
  const h = location.hash.slice(1);
  show([...newsTabs].some(b => b.dataset.tab === h) ? h : newsTabs[0].dataset.tab);
}

/* ---------- Liên hệ ---------- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    contactForm.hidden = true;
    document.getElementById('contactOk').hidden = false;
  });
}
