/* ═══ 墨梦轩 · 解梦手账 ═══
   现代心理学视角的梦境词典 + 手账 + 每日梦签 */

(() => {
  "use strict";

  /* ---------- 梦境词典（心理学视角） ---------- */
  const DREAMS = [
    { t: "掉牙", tag: "焦虑 · 成长", txt: "梦里牙齿松动、脱落甚至一颗颗掉光——这几乎是最普遍的梦境之一。心理学上它通常与「失控感」和「转变期」有关：对外貌、健康、话语权的担忧，或正处在身份切换的关口。青春期、换工作、关系变动时尤其高发。", ask: "最近有什么事让你觉得「抓不住」了？" },
    { t: "飞行", tag: "自由 · 超越", txt: "梦见自己飞起来，或滑翔、跳跃到高空。多被解读为「摆脱束缚」的愿望：现实中压力骤减、终于完成某件大事，或渴望逃离当前的处境。飞得吃力、越飞越低，则可能对应现实中力不从心。", ask: "此刻的你，是想逃离什么，还是想抵达什么？" },
    { t: "被追赶", tag: "回避 · 压力", txt: "被什么东西追赶，怎么跑都跑不快——典型的「回避型」梦境。追赶者往往是你拖延着不愿面对的事：一场对话、一个决定、一段该结束的关系。有趣的是，梦里回头看清追赶者的脸，常被视作准备直面问题的信号。", ask: "那件你一直绕着走的事，是什么？" },
    { t: "迟到", tag: "自我要求", txt: "考试铃响了没进考场、火车开走、重要场合迟到——与社会性焦虑高度相关：怕辜负期待、怕错过机会、对当下表现的自我审判。越是在意「按时、达标」的人越容易梦到。", ask: "你正在赶赴的，是谁给你定的时间表？" },
    { t: "蛇", tag: "直觉 · 蜕变", txt: "梦中出现蛇，反应两极。荣格学派视之为原始能量与直觉的化身；若蛇在蜕皮，常与自我更新的阶段吻合。若梦中被蛇咬而惊醒，则更多与近期具体的「被刺痛」经历有关，而非预兆。", ask: "你的身体最近在提醒你什么？" },
    { t: "坠落", tag: "失稳 · 释放", txt: "从高处坠落的失重感，常发生在入睡初期，医学上叫「入睡抽动」，与疲劳相关。作为完整梦境出现时，多对应现实中安全感的地基晃动：财务、关系、职业的动荡期。少数理论认为它反而是深度放松的表现。", ask: "最近哪个支柱让你觉得不那么稳了？" },
    { t: "考试", tag: "自我检验", txt: "多年不上学，仍梦见回到考场：卷子没答完、找不到笔、复习的全不考。研究者称之为「检验梦」，在面临评估、汇报、面试的前夜高发——大脑在夜间预演压力场景，帮你排练。", ask: "你觉得自己正在被谁打分？" },
    { t: "故人", tag: "未完成", txt: "梦见已不再联系或已离世的人。普遍的解释是「未完成事件」浮上来：一句没说的话、一个没道的别。这类梦与其说是对方来看你，不如说是你心里有一页还没翻过去。", ask: "如果还能说一句话，你想说什么？" },
    { t: "洪水", tag: "情绪过载", txt: "大水漫过街道、房屋被淹——情绪容器的经典意象。水面上涨对应积压情绪逼近临界：长期没哭出来的委屈、没吵出来的怒气。梦里若你镇定地看着水，说明你已开始学会与情绪共处。", ask: "有什么情绪，你已经憋了太久了？" },
    { t: "迷路", tag: "方向感", txt: "在陌生城市、老宅或森林里怎么都走不出去。多发生在人生的「岔路口阶段」：选择太多或没有选择，大脑用迷宫具象化了这种方向焦虑。梦里若出现向导或路灯，值得留意——那是你自己的经验在带路。", ask: "你真正想去的方向，说得出三个词吗？" },
    { t: "赤身", tag: "暴露焦虑", txt: "梦见在大庭广众下一丝不挂，想找东西遮却找不到——与「社交暴露焦虑」相关：怕真实的自己被看见、被评判。若梦中旁人毫无反应，往往暗示你的担忧被放大了。", ask: "你在怕别人看见的，是哪个部分的自己？" },
    { t: "怀孕", tag: "孕育新事", txt: "梦见自己或伴侣怀孕（不分性别），常与「新事物正在孕育」有关：一个计划、一门手艺、一段新身份。孕晚期女性做此梦是正常身体映射；非孕期出现，多为创造期的心理写照。", ask: "你生活里，有什么正在悄悄发芽？" },
    { t: "鬼屋", tag: "旧事 revisit", txt: "走进老宅、地下室，知道里面「有什么」。老房子在梦里几乎总是「过去的自己」：没打扫的房间是没处理的心事。敢开灯、敢下地下室，在解梦记录里常被视为心理能量回升的标志。", ask: "哪间屋子，你已经很久没进去过了？" },
    { t: "寻厕所", tag: "需求压抑", txt: "梦里疯狂找厕所，找到的却个个不能用——与「现实中的需求被持续压抑」高度相关：想休息不能休息、想说不行不行。醒来常真的想去厕所，但梦的剧本早已写好了那份「憋屈」。", ask: "你最基本的需求，被排到了第几位？" },
    { t: "死亡", tag: "阶段终结", txt: "梦见死亡（自己或亲人）往往惊醒后余悸难消。但解梦记录中，它极少指向字面意义，而多对应「某个阶段的落幕」：习惯、身份、关系的自然死亡。梦里的告别常常是心理上终于「放下了」。", ask: "有什么事，其实早该让它翻篇了？" },
    { t: "飞鸟", tag: "信使", txt: "梦见群鸟、白鸟或被鸟引领。鸟在跨文化里都是「信使」意象，心理学多将其解读为消息、机会或灵感冒泡。若鸟撞窗坠落，常与错失感、遗憾相关。", ask: "最近有没有一条你忽略的「信号」？" }
  ];

  /* ---------- 每日梦签 ---------- */
  const LOTS = [
    { text: "梦是夜晚写给你的信，不必急着回。", note: "今日宜：早睡半小时" },
    { text: "记不住的梦，本来就不打算让你看懂。", note: "今日宜：放过自己" },
    { text: "梦里跑不快，是因为醒着的你太累了。", note: "今日宜：歇一歇" },
    { text: "反复出现的梦，是没送达的加急件。", note: "今日宜：直面一件事" },
    { text: "白日做梦不算虚度，那叫预演。", note: "今日宜：认真幻想一次" },
    { text: "梦里哭出来的人，白天往往最会笑。", note: "今日宜：承认累" },
    { text: "噩梦是心理免疫在加班，别怪它。", note: "今日宜：早点上床" }
  ];

  const $ = (id) => document.getElementById(id);
  const lexInput = $("lexInput"), entries = $("entries"), emptyTip = $("emptyTip");
  const jrInput = $("jrInput"), jrMood = $("jrMood"), jrList = $("jrList"), jrEmpty = $("jrEmpty");
  const LS_KEY = "dreamink-journal-v1";

  /* ---------- 每日梦签（按日期取模，全天不变） ---------- */
  (function drawLot() {
    const day = Math.floor(Date.now() / 864e5);
    const lot = LOTS[day % LOTS.length];
    $("lotText").textContent = "「" + lot.text + "」";
    $("lotNote").textContent = lot.note + " · 农历心历同源";
  })();

  /* ---------- 词典渲染 ---------- */
  function renderLexicon(q) {
    const kw = (q || "").trim();
    const list = kw
      ? DREAMS.filter((d) => d.t.includes(kw) || d.tag.includes(kw) || d.txt.includes(kw))
      : DREAMS;
    entries.innerHTML = "";
    emptyTip.hidden = list.length > 0;
    list.forEach((d) => {
      const el = document.createElement("article");
      el.className = "entry";
      const term = document.createElement("h3");
      term.className = "entry-term";
      term.textContent = d.t;
      const tag = document.createElement("small");
      tag.textContent = "〔 " + d.tag + " 〕";
      term.appendChild(tag);
      const txt = document.createElement("p");
      txt.className = "entry-text";
      txt.textContent = d.txt;
      const ask = document.createElement("p");
      ask.className = "entry-ask";
      ask.textContent = d.ask;
      el.append(term, txt, ask);
      entries.appendChild(el);
    });
  }

  lexInput.addEventListener("input", () => renderLexicon(lexInput.value));

  /* ---------- 手账 ---------- */
  let journal = [];
  try { journal = JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch (e) {}

  function save() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(journal)); } catch (e) {}
  }

  function renderJournal() {
    jrList.innerHTML = "";
    jrEmpty.hidden = journal.length > 0;
    journal.forEach((item, idx) => {
      const el = document.createElement("div");
      el.className = "jr-item";
      const date = document.createElement("span");
      date.className = "jr-date";
      date.textContent = item.date;
      const mood = document.createElement("span");
      mood.className = "jr-mood";
      mood.textContent = "醒 · " + item.mood;
      const p = document.createElement("p");
      p.textContent = item.text;
      const del = document.createElement("button");
      del.className = "jr-del";
      del.textContent = "焚 ✕";
      del.title = "烧掉这一页";
      del.addEventListener("click", () => {
        journal.splice(idx, 1);
        save(); renderJournal(); toast("已焚 · 一页散去");
      });
      el.append(date, mood, p, del);
      jrList.appendChild(el);
    });
  }

  $("jrSave").addEventListener("click", () => {
    const text = jrInput.value.trim();
    if (!text) { toast("墨未沾纸 · 先写几句"); return; }
    const d = new Date();
    const p = (n) => String(n).padStart(2, "0");
    journal.unshift({
      text,
      mood: jrMood.value,
      date: (d.getMonth() + 1) + "月" + d.getDate() + "日"
    });
    jrInput.value = "";
    save(); renderJournal();
    toast("落墨已成 · 此梦有主");
  });

  /* ---------- toast ---------- */
  function toast(msg) {
    let t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove("show"), 2000);
  }

  /* ---------- 启动 ---------- */
  renderLexicon();
  renderJournal();
})();
