import re

# 读取文件
file_path = r'd:\project\me\homepage\src\data\publicationsData.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 定义正则表达式模式 - 匹配还没有 pdf_link 和 web_link 的记录
# 匹配 authors: "...", 后面直接跟 },
pattern = r'(authors:\s*"[^"]*",)\s*\n(\s*)(},?)'

# 替换函数
def add_links(match):
    authors_line = match.group(1)
    indent = match.group(2)
    closing = match.group(3)
    
    # 添加 pdf_link 和 web_link
    return f'{authors_line}\n{indent}pdf_link: "",\n{indent}web_link: "",\n{indent}{closing}'

# 执行替换
updated_content = re.sub(pattern, add_links, content)

# 写回文件
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print('✅ 成功为所有论文添加 pdf_link 和 web_link 字段！')
print('📝 已更新文件:', file_path)
print('💡 提示：只有字段不为空时，才会显示对应的图标。')
