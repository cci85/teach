// 共用小工具與模組註冊表
const $ = id => document.getElementById(id);
const v = id => $(id).value.trim();
const blank = s => !s || !s.trim();
function esc(s) { return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

// 公式一律寫成 LaTeX；NotebookLM 複製後會變成 \( \)，由工具箱「公式轉換」（latex/）轉成 noeqtion 格式，再於 Notion 按 Ctrl+Alt+M
const NOTION_MATH = "公式格式：所有數學公式、統計符號與希臘字母（例如 χ²、α、ω、λ、β、p、N、R²，以及比較符號）一律以 LaTeX 公式撰寫，語法必須完整正確（括號成對、分式有分子與分母）；公式不要放進程式碼區塊。";
const NOTION_HINT = "　完成後：複製 NotebookLM 的回答 → 貼進工具箱「公式轉換」→ 複製結果貼到 Notion 網頁版 → 按 Ctrl+Alt+M。";

// 每個模組檔把自己登記到這裡：{ build, note?, next, empty?, init? }
const MODULES = {};
