// 共用小工具與模組註冊表
const $ = id => document.getElementById(id);
const v = id => $(id).value.trim();
const blank = s => !s || !s.trim();
function esc(s) { return s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

// 輸出要直接貼到 Notion：公式與符號一律用 Notion 可渲染的 LaTeX 寫法
const NOTION_MATH = "Notion 公式格式：輸出內容將直接貼到 Notion。所有數學公式、統計符號與希臘字母（例如 χ²、α、ω、λ、β、p、N、R²，以及 <、>、≤、≥ 等比較符號）一律以 LaTeX 撰寫並以雙錢號包住：行內公式寫成 $$\\chi^2/df < 3$$ 的形式，緊接在中文文字中；需要獨立成行的公式，上下各以一行 $$ 包住。不得使用 \\( \\)、\\[ \\] 或單一錢號 $ 的寫法，也不要把公式放進程式碼區塊。";

// 每個模組檔把自己登記到這裡：{ build, note?, next, empty?, init? }
const MODULES = {};
