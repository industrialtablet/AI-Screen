// Regenerate README artwork: npm install sharp && node Documents/brand/generate.cjs
// Chinese artwork: node Documents/brand/generate.cjs --zh
// Product photographs are embedded unchanged; all typography and decoration are SVG.
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
const out = __dirname;
const chinese = process.argv.includes('--zh');
const translations = {
  'HYY  /  SMART DISPLAY SOLUTIONS': 'HYY  /  智能显示解决方案',
  'Hardware for': '智能硬件，', 'connected': '连接每一种', 'experiences.': '交互体验。',
  'Digital signage. Touch interaction. Edge computing.': '数字标牌 · 触控交互 · 边缘计算',
  'From your first prototype to your next deployment.': '从创意原型到项目部署，为应用选择合适的硬件。',
  'TOUCH DISPLAYS': '触控显示设备', 'BUILT TO CONNECT': '为连接而生',
  'Displays + compact computing': '智能显示 + 紧凑型计算设备',
  'EXPLORE WHAT’S POSSIBLE  ↗': '探索更多可能  ↗',
  'YEARS IN DIGITAL SIGNAGE': '深耕数字标牌行业',
  'OPERATING SYSTEM FAMILIES': '操作系统平台', 'CORE PRODUCT FAMILIES': '核心产品系列',
  'PRODUCT / 01': '产品系列 / 01', 'PRODUCT / 02': '产品系列 / 02', 'PRODUCT / 03': '产品系列 / 03',
  'PRODUCT / 04': '产品系列 / 04', 'PRODUCT / 05': '产品系列 / 05', 'PRODUCT / 06': '产品系列 / 06',
  'Desktop touch displays': '桌面触控一体机', 'Interaction at the counter.': '让每一次柜台交互更直观。',
  'L-type all-in-one hardware': 'L 型桌面一体机', 'Raspberry Pi displays': '树莓派显示屏',
  'Bring your ideas to the screen.': '让创意在屏幕上实现。', 'Hardware for Pi integrations': '面向树莓派项目与系统集成',
  'Commercial signage': '商用数字标牌', 'Make every space communicate.': '让每个空间传递信息。',
  'Wall, floor & specialty displays': '壁挂、立式及专用显示设备', 'Healthcare displays': '医疗健康显示屏',
  'Connected care environments.': '连接医疗与健康服务场景。', 'Touch hardware for healthcare': '医疗健康场景触控硬件',
  'Meeting room displays': '会议室显示屏', 'A smarter welcome to every room.': '让会议空间更智能。',
  'RGB indicators · NFC/RFID options': 'RGB 状态灯 · 可选 NFC/RFID', 'AI boxes & Mini PCs': 'AI 盒子与迷你电脑',
  'Compact hardware. More possibilities.': '紧凑硬件，释放更多可能。', 'Signage & edge computing': '数字标牌与边缘计算',
  'LET’S BUILD YOUR NEXT PROJECT': '一起打造您的下一个项目', 'Your application. Our hardware.': '您的应用，我们的硬件。',
  'Tell us your screen size, platform and integration requirements.': '告诉我们所需的屏幕尺寸、系统平台与集成需求。',
  'EXPLORE PRODUCTS  →': '探索产品  →', 'TALK TO OUR TEAM  ↗': '联系团队  ↗', 'WATCH PRODUCT DEMOS  ↗': '观看产品演示  ↗'
};
const img = path.resolve(out, '../img');
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const text = (x,y,s,size=24,color='#ffffff',weight=400,extra='') => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" font-weight="${weight}" ${extra}>${esc(chinese ? (translations[s] || s) : s)}</text>`;
const photo = (file,x,y,w,h) => { const bytes=fs.readFileSync(path.join(img,file)); const type=bytes[0]===0x89?'png':'jpeg'; return `<image x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet" href="data:image/${type};base64,${bytes.toString('base64')}"/>`; };
function svg(w,h,body){return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img"><defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#0b1428"/><stop offset="1" stop-color="#122c48"/></linearGradient><linearGradient id="accent"><stop stop-color="#67e8f9"/><stop offset="1" stop-color="#60a5fa"/></linearGradient><radialGradient id="glow"><stop stop-color="#0891b2" stop-opacity=".35"/><stop offset="1" stop-color="#0891b2" stop-opacity="0"/></radialGradient></defs><g font-family="Arial, PingFang SC, Noto Sans CJK SC, Microsoft YaHei, sans-serif">${body}</g></svg>`;}
async function save(name,w,h,body){if(chinese) name += '-zh'; const source=svg(w,h,body);fs.writeFileSync(path.join(out,name+'.svg'),source);await sharp(Buffer.from(source)).png().toFile(path.join(out,name+'.png'));}
const panel=(w,h)=>`<rect width="${w}" height="${h}" rx="24" fill="url(#bg)"/><rect x="1" y="1" width="${w-2}" height="${h-2}" rx="23" fill="none" stroke="#294660"/>`;
(async()=>{
let hero=panel(1440,650)+`<ellipse cx="1140" cy="220" rx="540" ry="420" fill="url(#glow)"/>`;
for(let x=780;x<1440;x+=48)hero+=`<path d="M${x} 0V650" stroke="#67e8f9" opacity=".045"/>`;
for(let y=0;y<650;y+=48)hero+=`<path d="M780 ${y}H1440" stroke="#67e8f9" opacity=".045"/>`;
hero+=`<rect x="64" y="54" width="42" height="32" rx="6" fill="none" stroke="#67e8f9" stroke-width="3"/><path d="M76 94H94M85 86V94" stroke="#67e8f9" stroke-width="3"/>`+text(122,83,'AI SCREEN',26,'#fff',700)+text(64,150,'HYY  /  SMART DISPLAY SOLUTIONS',16,'#67e8f9',600,'letter-spacing="3"');
hero+=text(64,248,'Hardware for',66,'#fff',700)+text(64,329,'connected',76,'#fff',700)+text(64,410,'experiences.',76,'#67e8f9',700)+text(67,469,'Digital signage. Touch interaction. Edge computing.',23,'#b7c9de')+text(67,506,'From your first prototype to your next deployment.',23,'#b7c9de');
hero+=`<rect x="66" y="552" width="92" height="4" rx="2" fill="url(#accent)"/>`+text(66,604,'ANDROID   /   WINDOWS   /   LINUX',15,'#a3bbd4',600,'letter-spacing="2"');
hero+=`<rect x="815" y="118" width="545" height="380" rx="20" fill="#fff"/><rect x="834" y="137" width="124" height="28" rx="14" fill="#eef5fb"/>`+text(849,156,'TOUCH DISPLAYS',11,'#1767b3',700)+photo('main_p_1.jpg',833,170,350,308)+photo('main_p_6.png',1164,327,180,146);
hero+=`<rect x="785" y="477" width="265" height="71" rx="14" fill="#102a42" stroke="#34556f"/><circle cx="812" cy="513" r="5" fill="#67e8f9"/>`+text(829,508,'BUILT TO CONNECT',13,'#67e8f9',700)+text(829,530,'Displays + compact computing',13,'#b7c9de');
hero+=text(1076,589,'EXPLORE WHAT’S POSSIBLE  ↗',14,'#a3bbd4',600);
await save('hero',1440,650,hero);
let stats=panel(1440,154);
[['10+','YEARS IN DIGITAL SIGNAGE'],['03','OPERATING SYSTEM FAMILIES'],['06','CORE PRODUCT FAMILIES']].forEach(([n,label],i)=>{let x=55+i*470;stats+=text(x,75,n,44,'#67e8f9',700)+text(x,115,label,14,'#b7c9de',600,'letter-spacing="1.5"');if(i<2)stats+=`<path d="M${x+420} 36V118" stroke="#34506a"/>`;});
await save('platform',1440,154,stats);
const cards=[['desktop','01','Desktop touch displays','Interaction at the counter.','L-type all-in-one hardware','main_p_1.jpg'],['raspberry-pi','02','Raspberry Pi displays','Bring your ideas to the screen.','Hardware for Pi integrations','main_p_2.jpg'],['commercial','03','Commercial signage','Make every space communicate.','Wall, floor & specialty displays','main_p_3.jpg'],['healthcare','04','Healthcare displays','Connected care environments.','Touch hardware for healthcare','main_p_4.jpg'],['meeting-room','05','Meeting room displays','A smarter welcome to every room.','RGB indicators · NFC/RFID options','main_p_5.jpg'],['ai-box','06','AI boxes & Mini PCs','Compact hardware. More possibilities.','Signage & edge computing','main_p_6.png']];
for(const [name,n,title,line,desc,file] of cards){let b=panel(700,530)+text(32,49,'PRODUCT / '+n,13,'#67e8f9',600,'letter-spacing="2"')+text(32,99,title,31,'#fff',700)+text(32,136,line,18,'#b7c9de');b+=`<rect x="24" y="164" width="652" height="284" rx="15" fill="#fff"/>`+photo(file,44,174,612,264)+text(32,495,desc,16,'#b7c9de')+text(667,497,'↗',27,'#67e8f9',400,'text-anchor="end"');await save(name,700,530,b);}
let c=panel(1440,270)+`<ellipse cx="1210" cy="140" rx="450" ry="280" fill="url(#glow)"/>`+text(56,58,'LET’S BUILD YOUR NEXT PROJECT',14,'#67e8f9',600,'letter-spacing="3"')+text(56,126,'Your application. Our hardware.',48,'#fff',700)+text(56,176,'Tell us your screen size, platform and integration requirements.',22,'#b7c9de')+text(56,227,'dennis@we-signage.com',21,'#67e8f9',600)+text(1369,162,'↗',100,'#67e8f9',400,'text-anchor="end"');await save('contact',1440,270,c);
for(const [name,label,primary] of [['button-products','EXPLORE PRODUCTS  →',true],['button-contact','TALK TO OUR TEAM  ↗',false],['button-demo','WATCH PRODUCT DEMOS  ↗',false]]){
  const demo = name === 'button-demo';
  const iconX = chinese ? 110 : 42;
  const icon = demo ? `<rect x="${iconX}" y="25" width="36" height="26" rx="7" fill="#ff0033"/><path d="M${iconX+14} 31 L${iconX+14} 45 L${iconX+26} 38 Z" fill="#ffffff"/>` : '';
  await save(name,420,76,`<rect x="1" y="1" width="418" height="74" rx="12" fill="${primary?'#67e8f9':'#11253b'}" stroke="${primary?'#67e8f9':'#3d5b75'}"/>` + icon + text(demo ? iconX+50 : 210,46,label,17,primary?'#071426':'#e2edf8',700,`text-anchor="${demo?'start':'middle'}" letter-spacing="1"`));
}
})();
