// 共用小工具與模組註冊表
const $ = id => document.getElementById(id);
const v = id => $(id).value.trim();
const blank = s => !s || !s.trim();
function esc(s) { return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

// 輸出貼到 Notion 後以 noeqtion 擴充功能（Ctrl+Alt+M）一鍵轉成公式，故採 $…$ / $$…$$ 寫法
const NOTION_MATH = "公式格式：所有數學公式、統計符號與希臘字母（例如 χ²、α、ω、λ、β、p、N、R²，以及 <、>、≤、≥ 等比較符號）一律以 LaTeX 撰寫。行內公式以單一錢號包住，寫成 $\\chi^2/df < 3$ 的形式，緊接在中文文字中，且不得跨行；需要獨立成行的公式，以雙錢號包住並單獨成一行，寫成 $$CR = \\frac{(\\sum \\lambda)^2}{(\\sum \\lambda)^2 + \\sum \\theta}$$ 的形式。LaTeX 語法必須完整正確（括號成對、分式有分子與分母）。不得使用 \\( \\) 或 \\[ \\] 的寫法，也不要把公式放進程式碼區塊；文中若需要表示金額，錢號寫成 \\$。";
const NOTION_HINT = "　貼到 Notion 網頁版後，按 Ctrl+Alt+M 將公式一鍵轉換。";

// 每個模組檔把自己登記到這裡：{ build, note?, next, empty?, init? }
const MODULES = {};
