import{_ as i,c as a,d as n,o as l}from"./app-COI5I2_t.js";const h={};function k(p,s){return l(),a("div",null,s[0]||(s[0]=[n(`<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"># BabyRSA</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">from </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Crypto</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">number</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> import </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">from secret import flag</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> q </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> getPrime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">512</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> getPrime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">512</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">n </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> q</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> 0x</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> pow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">bytes_to_long</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">flag</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> n</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    f</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{p=}</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{q=}</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">{c=}</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">p=12378167698204685918646557412411524522066680571694759229746620084788777117768031300598933087357615357043132777342093093021847322934326727042453840828875143</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">q=10931648352230312579027787675415763167593715198326935540933830947826673132860023189296292566561680484410720148906575606020957769782299988856793344932491417</span></span>
<span class="line"><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">c=123988699358222708143066132876239464730978678005828425934002960216869470678147836293022851596510559188033634820389843867729896227211954977199498471911877575194325878270178338587187540787433588651248990812027895206931793731455270351073627569292859785654095071728817049964067167174293731728088800971391102252181</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;&quot;&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-py line-numbers-mode" data-ext="py" data-title="py"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># exp.py</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Crypto</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Util</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">number </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> math</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 12378167698204685918646557412411524522066680571694759229746620084788777117768031300598933087357615357043132777342093093021847322934326727042453840828875143</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">q </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10931648352230312579027787675415763167593715198326935540933830947826673132860023189296292566561680484410720148906575606020957769782299988856793344932491417</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 123988699358222708143066132876239464730978678005828425934002960216869470678147836293022851596510559188033634820389843867729896227211954977199498471911877575194325878270178338587187540787433588651248990812027895206931793731455270351073627569292859785654095071728817049964067167174293731728088800971391102252181</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> 0x</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">10001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">phi </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">p </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> *</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">q </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">d </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> inverse</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> phi</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">m </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> pow</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> q</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">print</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">long_to_bytes</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">m</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)]))}const e=i(h,[["render",k],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/security/3osjmk7y/","title":"BabyRSA","lang":"zh-CN","frontmatter":{"title":"BabyRSA","tag":"crypto","createTime":"2025/03/14 14:45:00","permalink":"/security/3osjmk7y/"},"headers":[],"readingTime":{"minutes":0.27,"words":81},"git":{},"filePathRelative":"notes/安全/BabyRSA.md"}');export{e as comp,d as data};
