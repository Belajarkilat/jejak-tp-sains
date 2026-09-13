"""Alat menyunting pilihan jawapan dalam fail sumber bab.

Guna:  python _ganti.py <fail sumber> <fail pembetulan .json>

Fail pembetulan ialah senarai {cari, p, t?, u?}. `cari` ialah permulaan
teks soalan yang unik. Hanya medan yang diberi akan ditukar.
"""
import io, json, re, sys


def cari_objek(s, awal):
    i = s.find('t:"' + awal)
    if i < 0:
        i = s.find('"t":"' + awal)
    if i < 0:
        raise SystemExit("tak jumpa soalan: " + awal)
    if s.find('t:"' + awal, i + 1) >= 0 or s.find('"t":"' + awal, i + 1) >= 0:
        raise SystemExit("teks carian tidak unik: " + awal)
    mula = max(s.rfind('{j:', 0, i), s.rfind('{"j":', 0, i))
    d = 0
    j = mula
    while True:
        c = s[j]
        if c == '"':
            j += 1
            while s[j] != '"':
                if s[j] == '\\':
                    j += 1
                j += 1
        elif c == '{':
            d += 1
        elif c == '}':
            d -= 1
            if d == 0:
                return mula, j + 1
        j += 1


def rentetan(x):
    return json.dumps(x, ensure_ascii=False)


def main():
    fail, pembetulan = sys.argv[1], sys.argv[2]
    s = io.open(fail, encoding="utf-8").read()
    senarai = json.load(io.open(pembetulan, encoding="utf-8"))
    for item in senarai:
        mula, akhir = cari_objek(s, item["cari"])
        obj = s[mula:akhir]
        kunci = '"p":' if obj.startswith('{"j"') else 'p:'
        kunci_t = '"t":' if obj.startswith('{"j"') else 't:'
        kunci_u = '"u":' if obj.startswith('{"j"') else 'u:'
        if "p" in item:
            obj = re.sub(re.escape(kunci) + r'\[(?:[^\[\]"]|"(?:[^"\\]|\\.)*")*\]',
                         lambda m: kunci + "[" + ",".join(rentetan(x) for x in item["p"]) + "]", obj, count=1)
        if "t" in item:
            obj = re.sub(re.escape(kunci_t) + r'"(?:[^"\\]|\\.)*"',
                         lambda m: kunci_t + rentetan(item["t"]), obj, count=1)
        if "b" in item:
            kunci_b = '"b":' if obj.startswith('{"j"') else 'b:'
            obj = re.sub(re.escape(kunci_b) + r'(\[[^\]]*\]|-?\d+(?:\.\d+)?)',
                         lambda m: kunci_b + json.dumps(item["b"]), obj, count=1)
        if "u" in item:
            obj = re.sub(re.escape(kunci_u) + r'"(?:[^"\\]|\\.)*"',
                         lambda m: kunci_u + rentetan(item["u"]), obj, count=1)
        s = s[:mula] + obj + s[akhir:]
    io.open(fail, "w", encoding="utf-8", newline="\n").write(s)
    print(f"{fail}: {len(senarai)} soalan dikemas kini")


main()
