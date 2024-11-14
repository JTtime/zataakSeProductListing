(()=>{var e={};e.id=500,e.ids=[500],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},243:(e,i,t)=>{"use strict";t.r(i),t.d(i,{patchFetch:()=>g,routeModule:()=>p,serverHooks:()=>h,workAsyncStorage:()=>f,workUnitAsyncStorage:()=>m});var r={};t.r(r),t.d(r,{GET:()=>b,POST:()=>w});var o=t(8797),n=t(42),a=t(8492),s=t(5377);let u=require("mongodb"),c=process.env.MONGODB_URI;if(!c)throw Error("MONGODB_URI is not defined in .env.local");let l=new u.MongoClient(c),d=(e,i,t)=>e.limit(i).skip(t);async function b(e){let i=new URL(e.url),t=parseInt(i.searchParams.get("limit")||"10",10),r=parseInt(i.searchParams.get("skip")||"0",10);try{await l.connect();let e=l.db("productAll").collection("productListDummy").find({}),i=await d(e,t,r).toArray();return s.NextResponse.json({products:i})}catch(e){return console.error(e),s.NextResponse.json({error:e},{status:500})}finally{await l.close()}}async function w(e){try{let{selectedCategories:i,availability:t,priceRange:r,limit:o=10,skip:n=0}=await e.json();if(!Array.isArray(i))return s.NextResponse.json({error:"selectedCategories must be an array of strings"},{status:400});let a={};if(i.length>0&&(a.category={$in:i}),t?.length&&(a.availabilityStatus={$in:t},console.log("query",a)),r&&2===r.length){let[e,i]=r;a.price={$gte:e,$lte:i}}await l.connect();let u=l.db("productAll").collection("productdummy"),c=await d(u.find(a),o,n).toArray();return s.NextResponse.json({products:c})}catch(e){return console.error(e),s.NextResponse.json({error:e},{status:500})}finally{await l.close()}}let p=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/product/route",pathname:"/api/product",filename:"route",bundlePath:"app/api/product/route"},resolvedPagePath:"D:\\Jeevraj\\projects\\zataakse\\product-listing\\src\\app\\api\\product\\route.ts",nextConfigOutput:"",userland:r}),{workAsyncStorage:f,workUnitAsyncStorage:m,serverHooks:h}=p;function g(){return(0,a.patchFetch)({workAsyncStorage:f,workUnitAsyncStorage:m})}},8031:()=>{},5303:()=>{},2784:(e,i,t)=>{var r;(()=>{var o={226:function(o,n){!function(a,s){"use strict";var u="function",c="undefined",l="object",d="string",b="major",w="model",p="name",f="type",m="vendor",h="version",g="architecture",v="console",x="mobile",y="tablet",k="smarttv",_="wearable",R="embedded",j="Amazon",S="Apple",P="ASUS",q="BlackBerry",O="Browser",A="Chrome",T="Firefox",N="Google",U="Huawei",E="Microsoft",M="Motorola",C="Opera",z="Samsung",B="Sharp",I="Sony",D="Xiaomi",L="Zebra",G="Facebook",H="Chromium OS",$="Mac OS",F=function(e,i){var t={};for(var r in e)i[r]&&i[r].length%2==0?t[r]=i[r].concat(e[r]):t[r]=e[r];return t},V=function(e){for(var i={},t=0;t<e.length;t++)i[e[t].toUpperCase()]=e[t];return i},W=function(e,i){return typeof e===d&&-1!==Z(i).indexOf(Z(e))},Z=function(e){return e.toLowerCase()},X=function(e,i){if(typeof e===d)return e=e.replace(/^\s\s*/,""),typeof i===c?e:e.substring(0,350)},K=function(e,i){for(var t,r,o,n,a,c,d=0;d<i.length&&!a;){var b=i[d],w=i[d+1];for(t=r=0;t<b.length&&!a&&b[t];)if(a=b[t++].exec(e))for(o=0;o<w.length;o++)c=a[++r],typeof(n=w[o])===l&&n.length>0?2===n.length?typeof n[1]==u?this[n[0]]=n[1].call(this,c):this[n[0]]=n[1]:3===n.length?typeof n[1]!==u||n[1].exec&&n[1].test?this[n[0]]=c?c.replace(n[1],n[2]):void 0:this[n[0]]=c?n[1].call(this,c,n[2]):void 0:4===n.length&&(this[n[0]]=c?n[3].call(this,c.replace(n[1],n[2])):void 0):this[n]=c||s;d+=2}},J=function(e,i){for(var t in i)if(typeof i[t]===l&&i[t].length>0){for(var r=0;r<i[t].length;r++)if(W(i[t][r],e))return"?"===t?s:t}else if(W(i[t],e))return"?"===t?s:t;return e},Q={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Y={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[p,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[p,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[p,h],[/opios[\/ ]+([\w\.]+)/i],[h,[p,C+" Mini"]],[/\bopr\/([\w\.]+)/i],[h,[p,C]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[p,h],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[p,"UC"+O]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[h,[p,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[h,[p,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[p,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[p,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[h,[p,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[p,/(.+)/,"$1 Secure "+O],h],[/\bfocus\/([\w\.]+)/i],[h,[p,T+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[p,C+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[p,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[p,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[p,C+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[p,"MIUI "+O]],[/fxios\/([-\w\.]+)/i],[h,[p,T]],[/\bqihu|(qi?ho?o?|360)browser/i],[[p,"360 "+O]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[p,/(.+)/,"$1 "+O],h],[/(comodo_dragon)\/([\w\.]+)/i],[[p,/_/g," "],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[p,h],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[p],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[p,G],h],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[p,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[p,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[h,[p,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[p,A+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[p,A+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[p,"Android "+O]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[p,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[p,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,p],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[p,[h,J,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[p,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[p,"Netscape"],h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[p,T+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[p,h],[/(cobalt)\/([\w\.]+)/i],[p,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,Z]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,"",Z]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,Z]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[w,[m,z],[f,y]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[w,[m,z],[f,x]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[w,[m,S],[f,x]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[w,[m,S],[f,y]],[/(macintosh);/i],[w,[m,S]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[w,[m,B],[f,x]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[w,[m,U],[f,y]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[w,[m,U],[f,x]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[w,/_/g," "],[m,D],[f,x]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[w,/_/g," "],[m,D],[f,y]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[w,[m,"OPPO"],[f,x]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[w,[m,"Vivo"],[f,x]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[w,[m,"Realme"],[f,x]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[w,[m,M],[f,x]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[w,[m,M],[f,y]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[w,[m,"LG"],[f,y]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[w,[m,"LG"],[f,x]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[w,[m,"Lenovo"],[f,y]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[w,/_/g," "],[m,"Nokia"],[f,x]],[/(pixel c)\b/i],[w,[m,N],[f,y]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[w,[m,N],[f,x]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[w,[m,I],[f,x]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[w,"Xperia Tablet"],[m,I],[f,y]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[w,[m,"OnePlus"],[f,x]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[w,[m,j],[f,y]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[w,/(.+)/g,"Fire Phone $1"],[m,j],[f,x]],[/(playbook);[-\w\),; ]+(rim)/i],[w,m,[f,y]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[w,[m,q],[f,x]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[w,[m,P],[f,y]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[w,[m,P],[f,x]],[/(nexus 9)/i],[w,[m,"HTC"],[f,y]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[m,[w,/_/g," "],[f,x]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[w,[m,"Acer"],[f,y]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[w,[m,"Meizu"],[f,x]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[m,w,[f,x]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[m,w,[f,y]],[/(surface duo)/i],[w,[m,E],[f,y]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[w,[m,"Fairphone"],[f,x]],[/(u304aa)/i],[w,[m,"AT&T"],[f,x]],[/\bsie-(\w*)/i],[w,[m,"Siemens"],[f,x]],[/\b(rct\w+) b/i],[w,[m,"RCA"],[f,y]],[/\b(venue[\d ]{2,7}) b/i],[w,[m,"Dell"],[f,y]],[/\b(q(?:mv|ta)\w+) b/i],[w,[m,"Verizon"],[f,y]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[w,[m,"Barnes & Noble"],[f,y]],[/\b(tm\d{3}\w+) b/i],[w,[m,"NuVision"],[f,y]],[/\b(k88) b/i],[w,[m,"ZTE"],[f,y]],[/\b(nx\d{3}j) b/i],[w,[m,"ZTE"],[f,x]],[/\b(gen\d{3}) b.+49h/i],[w,[m,"Swiss"],[f,x]],[/\b(zur\d{3}) b/i],[w,[m,"Swiss"],[f,y]],[/\b((zeki)?tb.*\b) b/i],[w,[m,"Zeki"],[f,y]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[m,"Dragon Touch"],w,[f,y]],[/\b(ns-?\w{0,9}) b/i],[w,[m,"Insignia"],[f,y]],[/\b((nxa|next)-?\w{0,9}) b/i],[w,[m,"NextBook"],[f,y]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[m,"Voice"],w,[f,x]],[/\b(lvtel\-)?(v1[12]) b/i],[[m,"LvTel"],w,[f,x]],[/\b(ph-1) /i],[w,[m,"Essential"],[f,x]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[w,[m,"Envizen"],[f,y]],[/\b(trio[-\w\. ]+) b/i],[w,[m,"MachSpeed"],[f,y]],[/\btu_(1491) b/i],[w,[m,"Rotor"],[f,y]],[/(shield[\w ]+) b/i],[w,[m,"Nvidia"],[f,y]],[/(sprint) (\w+)/i],[m,w,[f,x]],[/(kin\.[onetw]{3})/i],[[w,/\./g," "],[m,E],[f,x]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[w,[m,L],[f,y]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[w,[m,L],[f,x]],[/smart-tv.+(samsung)/i],[m,[f,k]],[/hbbtv.+maple;(\d+)/i],[[w,/^/,"SmartTV"],[m,z],[f,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[m,"LG"],[f,k]],[/(apple) ?tv/i],[m,[w,S+" TV"],[f,k]],[/crkey/i],[[w,A+"cast"],[m,N],[f,k]],[/droid.+aft(\w)( bui|\))/i],[w,[m,j],[f,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[w,[m,B],[f,k]],[/(bravia[\w ]+)( bui|\))/i],[w,[m,I],[f,k]],[/(mitv-\w{5}) bui/i],[w,[m,D],[f,k]],[/Hbbtv.*(technisat) (.*);/i],[m,w,[f,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[m,X],[w,X],[f,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[f,k]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[m,w,[f,v]],[/droid.+; (shield) bui/i],[w,[m,"Nvidia"],[f,v]],[/(playstation [345portablevi]+)/i],[w,[m,I],[f,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[w,[m,E],[f,v]],[/((pebble))app/i],[m,w,[f,_]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[w,[m,S],[f,_]],[/droid.+; (glass) \d/i],[w,[m,N],[f,_]],[/droid.+; (wt63?0{2,3})\)/i],[w,[m,L],[f,_]],[/(quest( 2| pro)?)/i],[w,[m,G],[f,_]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[m,[f,R]],[/(aeobc)\b/i],[w,[m,j],[f,R]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[w,[f,x]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[w,[f,y]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,y]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[f,x]],[/(android[-\w\. ]{0,9});.+buil/i],[w,[m,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[p,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[p,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[p,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,h],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[p,[h,J,Q]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,"Windows"],[h,J,Q]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[p,$],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[p,h],[/\(bb(10);/i],[h,[p,q]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[p,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[p,T+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[p,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[h,[p,"watchOS"]],[/crkey\/([\d\.]+)/i],[h,[p,A+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[p,H],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[p,h],[/(sunos) ?([\w\.\d]*)/i],[[p,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[p,h]]},ee=function(e,i){if(typeof e===l&&(i=e,e=s),!(this instanceof ee))return new ee(e,i).getResult();var t=typeof a!==c&&a.navigator?a.navigator:s,r=e||(t&&t.userAgent?t.userAgent:""),o=t&&t.userAgentData?t.userAgentData:s,n=i?F(Y,i):Y,v=t&&t.userAgent==r;return this.getBrowser=function(){var e,i={};return i[p]=s,i[h]=s,K.call(i,r,n.browser),i[b]=typeof(e=i[h])===d?e.replace(/[^\d\.]/g,"").split(".")[0]:s,v&&t&&t.brave&&typeof t.brave.isBrave==u&&(i[p]="Brave"),i},this.getCPU=function(){var e={};return e[g]=s,K.call(e,r,n.cpu),e},this.getDevice=function(){var e={};return e[m]=s,e[w]=s,e[f]=s,K.call(e,r,n.device),v&&!e[f]&&o&&o.mobile&&(e[f]=x),v&&"Macintosh"==e[w]&&t&&typeof t.standalone!==c&&t.maxTouchPoints&&t.maxTouchPoints>2&&(e[w]="iPad",e[f]=y),e},this.getEngine=function(){var e={};return e[p]=s,e[h]=s,K.call(e,r,n.engine),e},this.getOS=function(){var e={};return e[p]=s,e[h]=s,K.call(e,r,n.os),v&&!e[p]&&o&&"Unknown"!=o.platform&&(e[p]=o.platform.replace(/chrome os/i,H).replace(/macos/i,$)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=typeof e===d&&e.length>350?X(e,350):e,this},this.setUA(r),this};ee.VERSION="1.0.35",ee.BROWSER=V([p,h,b]),ee.CPU=V([g]),ee.DEVICE=V([w,m,f,v,x,k,y,_,R]),ee.ENGINE=ee.OS=V([p,h]),typeof n!==c?(o.exports&&(n=o.exports=ee),n.UAParser=ee):t.amdO?void 0!==(r=(function(){return ee}).call(i,t,i,e))&&(e.exports=r):typeof a!==c&&(a.UAParser=ee);var ei=typeof a!==c&&(a.jQuery||a.Zepto);if(ei&&!ei.ua){var et=new ee;ei.ua=et.getResult(),ei.ua.get=function(){return et.getUA()},ei.ua.set=function(e){et.setUA(e);var i=et.getResult();for(var t in i)ei.ua[t]=i[t]}}}("object"==typeof window?window:this)}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var t=n[e]={exports:{}},r=!0;try{o[e].call(t.exports,t,t.exports,a),r=!1}finally{r&&delete n[e]}return t.exports}a.ab=__dirname+"/";var s=a(226);e.exports=s})()},950:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"unstable_after",{enumerable:!0,get:function(){return o}});let r=t(9348);function o(e){let i=r.workAsyncStorage.getStore();if(!i)throw Error("`unstable_after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context");let{afterContext:t}=i;if(!t)throw Error("`unstable_after` must be explicitly enabled by setting `experimental.after: true` in your next.config.js.");return t.after(e)}},8732:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){Object.keys(e).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:function(){return e[t]}})})}(t(950),i)},4364:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"connection",{enumerable:!0,get:function(){return u}});let r=t(9348),o=t(412),n=t(4375),a=t(3122),s=t(2010);function u(){let e=r.workAsyncStorage.getStore(),i=o.workUnitAsyncStorage.getStore();if(e){if(e.forceStatic)return Promise.resolve(void 0);if(i){if("cache"===i.type)throw Error(`Route ${e.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`);if("unstable-cache"===i.type)throw Error(`Route ${e.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`);if("after"===i.phase)throw Error(`Route ${e.route} used "connection" inside "unstable_after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "unstable_after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/unstable_after`)}if(e.dynamicShouldError)throw new a.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);if(i){if("prerender"===i.type)return(0,s.makeHangingPromise)(i.renderSignal,"`connection()`");"prerender-ppr"===i.type?(0,n.postponeWithTracking)(e.route,"connection",i.dynamicTracking):"prerender-legacy"===i.type&&(0,n.throwToInterruptStaticGeneration)("connection",e,i)}(0,n.trackDynamicDataInDynamicRender)(e,i)}return Promise.resolve(void 0)}},8797:(e,i,t)=>{"use strict";e.exports=t(517)},5377:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{ImageResponse:function(){return r.ImageResponse},NextRequest:function(){return o.NextRequest},NextResponse:function(){return n.NextResponse},URLPattern:function(){return s.URLPattern},connection:function(){return c.connection},unstable_after:function(){return u.unstable_after},userAgent:function(){return a.userAgent},userAgentFromString:function(){return a.userAgentFromString}});let r=t(9593),o=t(8775),n=t(9205),a=t(6324),s=t(6764),u=t(8732),c=t(4364)},4437:(e,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ReflectAdapter",{enumerable:!0,get:function(){return t}});class t{static get(e,i,t){let r=Reflect.get(e,i,t);return"function"==typeof r?r.bind(e):r}static set(e,i,t,r){return Reflect.set(e,i,t,r)}static has(e,i){return Reflect.has(e,i)}static deleteProperty(e,i){return Reflect.deleteProperty(e,i)}}},9593:(e,i)=>{"use strict";function t(){throw Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead')}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageResponse",{enumerable:!0,get:function(){return t}})},9205:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"NextResponse",{enumerable:!0,get:function(){return d}});let r=t(3830),o=t(6658),n=t(6636),a=t(4437),s=t(3830),u=Symbol("internal response"),c=new Set([301,302,303,307,308]);function l(e,i){var t;if(null==e?void 0:null==(t=e.request)?void 0:t.headers){if(!(e.request.headers instanceof Headers))throw Error("request.headers must be an instance of Headers");let t=[];for(let[r,o]of e.request.headers)i.set("x-middleware-request-"+r,o),t.push(r);i.set("x-middleware-override-headers",t.join(","))}}class d extends Response{constructor(e,i={}){super(e,i);let t=this.headers,c=new Proxy(new s.ResponseCookies(t),{get(e,o,n){switch(o){case"delete":case"set":return(...n)=>{let a=Reflect.apply(e[o],e,n),u=new Headers(t);return a instanceof s.ResponseCookies&&t.set("x-middleware-set-cookie",a.getAll().map(e=>(0,r.stringifyCookie)(e)).join(",")),l(i,u),a};default:return a.ReflectAdapter.get(e,o,n)}}});this[u]={cookies:c,url:i.url?new o.NextURL(i.url,{headers:(0,n.toNodeOutgoingHttpHeaders)(t),nextConfig:i.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[u].cookies}static json(e,i){let t=Response.json(e,i);return new d(t.body,t)}static redirect(e,i){let t="number"==typeof i?i:(null==i?void 0:i.status)??307;if(!c.has(t))throw RangeError('Failed to execute "redirect" on "response": Invalid status code');let r="object"==typeof i?i:{},o=new Headers(null==r?void 0:r.headers);return o.set("Location",(0,n.validateURL)(e)),new d(null,{...r,headers:o,status:t})}static rewrite(e,i){let t=new Headers(null==i?void 0:i.headers);return t.set("x-middleware-rewrite",(0,n.validateURL)(e)),l(i,t),new d(null,{...i,headers:t})}static next(e){let i=new Headers(null==e?void 0:e.headers);return i.set("x-middleware-next","1"),l(e,i),new d(null,{...e,headers:i})}}},6764:(e,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"URLPattern",{enumerable:!0,get:function(){return t}});let t="undefined"==typeof URLPattern?void 0:URLPattern},6324:(e,i,t)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var t in i)Object.defineProperty(e,t,{enumerable:!0,get:i[t]})}(i,{isBot:function(){return o},userAgent:function(){return a},userAgentFromString:function(){return n}});let r=function(e){return e&&e.__esModule?e:{default:e}}(t(2784));function o(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}function n(e){return{...(0,r.default)(e),isBot:void 0!==e&&o(e)}}function a({headers:e}){return n(e.get("user-agent")||void 0)}}};var i=require("../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),r=i.X(0,[492],()=>t(243));module.exports=r})();