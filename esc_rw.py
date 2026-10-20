import io

p = 'src/i18n/rw.ts'
text = io.open(p, encoding='utf-8').read()

out = []
in_str = False
i = 0
n = len(text)
while i < n:
    c = text[i]
    if c == "'":
        if in_str:
            out.append("\\'")
            i += 1
            continue
        else:
            in_str = True
            out.append(c)
            i += 1
            continue
    if c == "\\" and in_str:
        out.append(c)
        i += 1
        if i < n:
            out.append(text[i])
            i += 1
        continue
    out.append(c)
    i += 1

new = ''.join(out)
print('changed:', new != text)
io.open(p, 'w', encoding='utf-8').write(new)
