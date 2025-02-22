(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{49556:(e,a,r)=>{Promise.resolve().then(r.bind(r,62846)),Promise.resolve().then(r.bind(r,63010)),Promise.resolve().then(r.bind(r,59426))},62846:(e,a,r)=>{"use strict";r.d(a,{DateRangeBarChart:()=>d});var s=r(51047);r(76847);var l=r(58931),t=r(968),n=r(41419),c=r(74041),i=r(800),o=r(28300);let d=e=>{let{title:a,description:r,data:d,valueLabel:x}=e,m=d.reduce((e,a)=>{let{value:r}=a;return e+r},0);return(0,s.jsxs)(i.Zp,{className:"w-full border-background-secondary",children:[(0,s.jsxs)(i.aR,{className:"flex flex-row items-stretch space-y-0 border-background-secondary border-b p-0 sm:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6",children:[(0,s.jsx)(i.ZB,{children:a}),(0,s.jsx)(i.BT,{children:r})]}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsxs)("div",{className:"relative z-30 flex flex-1 flex-col justify-center gap-1 px-6 py-4 text-left border-background-secondary even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6",children:[(0,s.jsx)("span",{className:"text-xs text-muted-foreground",children:"Totalt"}),(0,s.jsx)("span",{className:"text-lg font-bold leading-none sm:text-3xl",children:m})]})})]}),(0,s.jsx)(i.Wu,{className:"p-0",children:(0,s.jsx)(o.at,{config:{value:{label:x}},className:"aspect-auto h-[250px] w-full",children:(0,s.jsxs)(l.E,{accessibilityLayer:!0,data:d,margin:{left:24,right:24},children:[(0,s.jsx)(t.d,{vertical:!1,stroke:"var(--color-background-secondary)"}),(0,s.jsx)(n.W,{dataKey:"date",tickLine:!1,axisLine:!1,tickMargin:4,minTickGap:32,stroke:"var(--color-foreground)",tickFormatter:e=>new Date(e).toLocaleDateString("sv-SE",{month:"short",day:"numeric"})}),(0,s.jsx)(o.II,{content:(0,s.jsx)(o.Nt,{className:"w-[150px] bg-background",nameKey:"value",labelFormatter:e=>new Date(e).toLocaleDateString("sv-SE",{month:"short",day:"numeric",year:"numeric"})})}),(0,s.jsx)(c.y,{dataKey:"value",fill:"var(--color-foreground)"})]})})})]})}},63010:(e,a,r)=>{"use strict";r.d(a,{PercentagePieChart:()=>o});var s=r(51047),l=r(95436),t=r(70726),n=r(90961),c=r(800),i=r(28300);let o=e=>{let{title:a,href:r,description:o,numerator:d,denominator:x,numeratorLabel:m,complementLabel:f,percentSuffix:u}=e,h=Math.round(d/x*100);return(0,s.jsxs)(c.Zp,{className:"flex flex-col border-background-secondary",children:[(0,s.jsx)(c.aR,{className:"flex flex-row items-stretch space-y-0 border-background-secondary border-b p-0 sm:flex-row",children:(0,s.jsxs)("div",{className:"flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6",children:[(0,s.jsx)(c.ZB,{children:r?(0,s.jsx)("a",{className:"text-link underline",href:r,children:a}):a}),(0,s.jsx)(c.BT,{children:o})]})}),(0,s.jsx)(c.Wu,{className:"flex-1 pb-0",children:(0,s.jsx)(i.at,{config:{},className:"mx-auto aspect-square max-h-[250px]",children:(0,s.jsxs)(l.r,{children:[(0,s.jsx)(i.II,{cursor:!1,content:(0,s.jsx)(i.Nt,{className:"w-[150px] bg-background",hideLabel:!0})}),(0,s.jsx)(t.F,{data:[{name:m,data:d,fill:"var(--color-foreground)"},{name:f,data:x-d,fill:"var(--color-background-secondary)"}],dataKey:"data",nameKey:"name",innerRadius:60,strokeWidth:5,children:(0,s.jsx)(n.J,{content:e=>{let{viewBox:a}=e;if(a&&"cx"in a&&"cy"in a)return(0,s.jsxs)("text",{x:a.cx,y:a.cy,textAnchor:"middle",dominantBaseline:"middle",children:[(0,s.jsx)("tspan",{x:a.cx,y:a.cy,className:"fill-foreground text-3xl font-bold",children:"".concat(h,"%")}),(0,s.jsx)("tspan",{x:a.cx,y:(a.cy||0)+24,className:"fill-foreground",children:u})]})}})})]})})})]})}},59426:(e,a,r)=>{"use strict";r.d(a,{SeasonBarChart:()=>f});var s=r(51047),l=r(58931),t=r(968),n=r(46456),c=r(41419),i=r(74041),o=r(41945),d=r(800),x=r(28300);let m=e=>"spring"===e?"V\xe5r":"summer"===e?"Sommar":"autumn"===e?"H\xf6st":"winter"===e?"Vinter":e,f=e=>{let{title:a,href:r,description:f,data:u}=e;return(0,s.jsxs)(d.Zp,{className:"flex flex-col border-background-secondary",children:[(0,s.jsx)(d.aR,{className:"flex flex-row items-stretch space-y-0 border-background-secondary border-b p-0 sm:flex-row",children:(0,s.jsxs)("div",{className:"flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6",children:[(0,s.jsx)(d.ZB,{children:r?(0,s.jsx)("a",{className:"text-link underline",href:r,children:a}):a}),(0,s.jsx)(d.BT,{children:f})]})}),(0,s.jsx)(d.Wu,{className:"flex-1 py-2 flex items-center",children:(0,s.jsx)(x.at,{config:{},className:"aspect-auto h-[250px] w-full",children:(0,s.jsxs)(l.E,{accessibilityLayer:!0,data:u,layout:"vertical",margin:{right:16},children:[(0,s.jsx)(t.d,{vertical:!1,horizontal:!1}),(0,s.jsx)(n.h,{dataKey:"season",type:"category",tickLine:!1,tickMargin:0,axisLine:!1,hide:!0}),(0,s.jsx)(c.W,{dataKey:"count",type:"number",hide:!0}),(0,s.jsxs)(i.y,{dataKey:"count",layout:"vertical",radius:4,fill:"var(--color-foreground)",children:[(0,s.jsx)(o.Z,{dataKey:"season",position:"insideLeft",offset:8,className:"fill-background",fontSize:16,formatter:e=>m(e)}),(0,s.jsx)(o.Z,{dataKey:"count",position:"right",offset:8,className:"fill-foreground",fontSize:16})]})]})})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[260,436,721,59,358],()=>a(49556)),_N_E=e.O()}]);