#!/bin/sh
python -c "
import io,re
s=io.open('laluan-oksigen.html',encoding='utf-8').read()
io.open('_app.js','w',encoding='utf-8',newline='\n').write(re.findall(r'<script>\n(.*?)\n</script>',s,re.S)[-1])
"
node --check _app.js && node --check bank-t3b2.js && echo "SINTAKS OK"
