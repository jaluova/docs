import{_ as p,c,a as s,b as t,d as h,e as n,r as k,o,f as a}from"./app-COI5I2_t.js";const u={};function A(g,i){const d=k("VideoBilibili"),r=k("CodeTabs");return o(),c("div",null,[i[4]||(i[4]=s("h2",{id:"参考视频",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考视频"},[s("span",null,"参考视频")])],-1)),t(d,{src:"https://player.bilibili.com/player.html?bvid=BV1MR4y1Q738&autoplay=0",width:"100%",height:"",ratio:"",title:"undefined"}),i[5]||(i[5]=h(`<h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装Docker</span></a></h2><p>参考<a href="https://www.cnblogs.com/lqqgis/p/18276118" target="_blank" rel="noopener noreferrer">ubuntu 20.04 国内源安装docker</a></p><p>在Ubuntu 20.04上使用国内源安装Docker，可以使用清华大学源或阿里云源，具体如下。</p><p>先更新软件包，安装备要apt软件</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 更新软件包索引</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 安装需要的软件包以使apt能够通过HTTPS使用仓库</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ca-certificates</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> curl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> gnupg</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> lsb-release</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加官方密钥，并设置仓库地址</p>`,6)),t(r,{id:"20",data:[{id:"清华源"},{id:"阿里源"}]},{title0:n(({value:e,isActive:l})=>i[0]||(i[0]=[s("span",null,"清华源",-1)])),title1:n(({value:e,isActive:l})=>i[1]||(i[1]=[s("span",null,"阿里源",-1)])),tab0:n(({value:e,isActive:l})=>i[2]||(i[2]=[s("div",{class:"language-bash line-numbers-mode","data-ext":"bash","data-title":"bash"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 添加Docker官方的GPG密钥")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"curl"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -fsSL"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu/gpg"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," |"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," sudo"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," gpg"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --dearmor"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -o"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," /usr/share/keyrings/docker-archive-keyring.gpg")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 设置稳定版仓库")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"echo"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"deb [arch="),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$("),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"dpkg"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," --print-architecture"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$("),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"lsb_release"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -cs"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," stable"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," |"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," sudo"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," tee"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," /etc/apt/sources.list.d/docker.list"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," >"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," /dev/null")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:n(({value:e,isActive:l})=>i[3]||(i[3]=[s("div",{class:"language-bash line-numbers-mode","data-ext":"bash","data-title":"bash"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 添加阿里云官方GPG密钥")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"curl"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -fsSL"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg"),s("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}}," |"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," sudo"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," apt-key"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," add"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," -")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"# 写入阿里云Docker仓库地址")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"sudo"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," sh"),s("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}}," -c"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},'echo "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list'),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),i[6]||(i[6]=h(`<p>更新源并安装Docker</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> update</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> apt-get</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> install</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker-ce</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker-ce-cli</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> containerd.io</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 验证是否成功安装了docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> status</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">docker</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;"> --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改docker的<code>/etc/docker/daemon.json</code>配置文件，如果在不存在则手动创建，文件内容如下。</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 修改daemon.json文件，</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">vim</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /etc/docker/daemon.json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># daemon.json内容如下：</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    &quot;registry-mirrors&quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> [</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://dockerproxy.com&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://docker.m.daocloud.io&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://cr.console.aliyun.com&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://ccr.ccs.tencentyun.com&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://hub-mirror.c.163.com&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://mirror.baidubce.com&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://docker.nju.edu.cn&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://docker.mirrors.sjtug.sjtu.edu.cn&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://github.com/ustclug/mirrorrequest&quot;</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">        &quot;https://registry.docker-cn.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 重载配置文件，并重启 docker</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> systemctl</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> restart</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 查看 Registry Mirrors 配置是否成功</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sudo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> docker</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> info</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="安装docker-desktop-可选" tabindex="-1"><a class="header-anchor" href="#安装docker-desktop-可选"><span>安装Docker Desktop（可选）</span></a></h4><p>参考<a href="https://docs.docker.com/desktop/setup/install/linux/ubuntu" target="_blank" rel="noopener noreferrer">Install Docker Desktop on Ubuntu</a></p><h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建"><span>环境搭建</span></a></h2>`,7))])}const v=p(u,[["render",A],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/article/62jh4ytv/","title":"使用Docker配置网站搭建环境","lang":"zh-CN","frontmatter":{"title":"使用Docker配置网站搭建环境","tags":["Docker"],"createTime":"2025/02/12 14:34:35","permalink":"/article/62jh4ytv/"},"headers":[],"readingTime":{"minutes":1.32,"words":396},"git":{},"filePathRelative":"前端/使用Docker配置网站搭建环境.md","categoryList":[{"id":"9abfe4","sort":10000,"name":"前端"}]}');export{v as comp,b as data};
