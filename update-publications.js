// 批量更新publicationsData.js文件的脚本
// 为所有论文添加 pdf_link 和 web_link 字段

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src", "data", "publicationsData.js");

// 读取文件
let content = fs.readFileSync(filePath, "utf8");

// 正则表达式匹配每个论文对象
// 匹配模式：authors: "...",\n  },
const pattern = /(authors:\s*"[^"]*",)\s*\n(\s*)(},?)/g;

// 替换函数 - 在 authors 后添加 pdf_link 和 web_link
const replacement = '$1\n$2pdf_link: "",\n$2web_link: "",\n$2$3';

// 执行替换
const updatedContent = content.replace(pattern, replacement);

// 写回文件
fs.writeFileSync(filePath, updatedContent, "utf8");

console.log("✅ 成功为所有论文添加 pdf_link 和 web_link 字段！");
console.log(
  "📝 请手动编辑 src/data/publicationsData.js 文件，为需要的论文填充真实链接。"
);
console.log("💡 提示：只有字段不为空时，才会显示对应的图标。");
