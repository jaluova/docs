import{_ as p,c as d,a as i,f as s,b as e,e as a,r as t,o as g}from"./app-COI5I2_t.js";const y={};function c(B,l){const k=t("VPIcon"),r=t("CodeTabs");return g(),d("div",null,[l[4]||(l[4]=i("h2",{id:"概念",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#概念"},[i("span",null,"概念")])],-1)),l[5]||(l[5]=i("p",null,[i("code",null,"POP"),s("（Property-Oriented Programing，面向属性编程）用于上层语言构造特定调用链的方法，与二进制利用中的面向返回编程（Return-Oriented Programing）的原理相似，都是从现有运行环境中寻找一系列的代码或者指令调用，然后根据需求构成一组连续的调用链。在控制代码或者程序的执行流程后就能够使用这一组调用链来执行一些操作。")],-1)),l[6]||(l[6]=i("p",null,"ROP 链构造中是寻找当前系统环境中或者内存环境里已经存在的、具有固定地址且带有返回操作的指令集 POP 链的构造则是寻找程序当前环境中已经定义了或者能够动态加载的对象中的属性（函数方法），将一些可能的调用组合在一起形成一个完整的、具有目的性的操作。 二进制中通常是由于内存溢出控制了指令执行流程，而反序列化过程就是控制代码执行流程的方法之一，前提：进行反序列化的数据能够被用户输入所控制。",-1)),l[7]||(l[7]=i("h2",{id:"漏洞利用",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#漏洞利用"},[i("span",null,"漏洞利用")])],-1)),e(r,{id:"12",data:[{id:"test.php"},{id:"crack.php"}]},{title0:a(({value:n,isActive:h})=>[e(k,{name:"vscode-icons:file-type-php"}),l[0]||(l[0]=i("span",null,"test.php",-1))]),title1:a(({value:n,isActive:h})=>[e(k,{name:"vscode-icons:file-type-php"}),l[1]||(l[1]=i("span",null,"crack.php",-1))]),tab0:a(({value:n,isActive:h})=>l[2]||(l[2]=[i("div",{class:"language-php line-numbers-mode","data-ext":"php","data-title":"php"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"<?"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"php")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"class"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," lemon"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    protected"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," $"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ClassObj"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    function"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," __construct"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        $"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"this"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"->"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ClassObj"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," new"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," normal"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    function"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," __destruct"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        $"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"this"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"->"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ClassObj"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"->"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"action"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"class"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," normal"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," action"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"        echo"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},' "'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"hello"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"class"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," evil"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    private"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," $"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"data"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    function"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," action"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"        eval"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"($"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"this"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"->"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"data"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"unserialize"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"($"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"_GET"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"["),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"d"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"]);")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:n,isActive:h})=>l[3]||(l[3]=[i("div",{class:"language-php line-numbers-mode","data-ext":"php","data-title":"php"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"<?"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"php"),i("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"class"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," lemon"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    protected"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," $"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ClassObj"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    function"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," __construct"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"        $"),i("span",{style:{"--shiki-light":"#A65E2B","--shiki-dark":"#C99076"}},"this"),i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"->"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"ClassObj"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," ="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," new"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," evil"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"class"),i("span",{style:{"--shiki-light":"#2E8F82","--shiki-dark":"#5DA994"}}," evil"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"    private"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," $"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"data"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"phpinfo();"),i("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},'"'),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"$"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"a"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"="),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"new"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," lemon"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"echo"),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}}," urlencode"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"serialize"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"($"),i("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}},"a"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"));")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#AB5959","--shiki-dark":"#CB7676"}},"?>")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),l[8]||(l[8]=i("p",null,"未完待续...",-1))])}const o=p(y,[["render",c],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/security/POP-chain/","title":"POP链","lang":"zh-CN","frontmatter":{"title":"POP链","createTime":"2025/02/04 17:03:22","permalink":"/security/POP-chain/"},"headers":[],"readingTime":{"minutes":1.28,"words":385},"git":{},"filePathRelative":"notes/安全/POP链.md"}');export{o as comp,A as data};
