#!/bin/sh
python -c "
import io,re
s=io.open('index.html',encoding='utf-8').read()
io.open('_app.js','w',encoding='utf-8',newline='\n').write(re.findall(r'<script>\n(.*?)\n</script>',s,re.S)[-1])
"
node --check _app.js || exit 1
for b in bank-*.js; do node --check "$b" || exit 1; done
echo "SINTAKS OK"
