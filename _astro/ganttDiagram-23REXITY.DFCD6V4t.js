import{i as gt,t as Ct}from"./rolldown-runtime.BEbyAHrr.js";import{_ as ye}from"./chunk-6MUBBAK2.Dj9a9FFu.js";import{C as ge,H as pe,U as ve,_ as Te,a as xe,b as dt,c as be,q as we,s as _e,v as De}from"./chunk-BG4553SI.BASynoco.js";import{i as Se,n as it,t as xt}from"./d3-selection.BrDiixFX.js";import{n as f}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{t as Me}from"./dist.Dkt41yTs.js";import{E as Ce,T as Ee,_ as Ie,a as Ut,c as Xt,d as Zt,f as Ye,g as $e,h as Ae,i as Le,l as Fe,m as Oe,n as We,o as Qt,p as Jt,s as Kt,u as te,v as Ve,x as ze}from"./d3-scale.Bw6WWFcY.js";function Pe(t){return t}var wt=1,It=2,$t=3,bt=4,ee=1e-6;function Ne(t){return"translate("+t+",0)"}function Re(t){return"translate(0,"+t+")"}function He(t){return e=>+t(e)}function Be(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),r=>+t(r)+e}function je(){return!this.__axis}function re(t,e){var r=[],n=null,i=null,k=6,p=6,F=3,w=typeof window<"u"&&window.devicePixelRatio>1?0:.5,M=t===wt||t===bt?-1:1,I=t===bt||t===It?"x":"y",A=t===wt||t===$t?Ne:Re;function _(x){var P=n??(e.ticks?e.ticks.apply(e,r):e.domain()),H=i??(e.tickFormat?e.tickFormat.apply(e,r):Pe),Y=Math.max(k,0)+F,D=e.range(),C=+D[0]+w,z=+D[D.length-1]+w,O=(e.bandwidth?Be:He)(e.copy(),w),N=x.selection?x.selection():x,R=N.selectAll(".domain").data([null]),E=N.selectAll(".tick").data(P,e).order(),v=E.exit(),y=E.enter().append("g").attr("class","tick"),h=E.select("line"),g=E.select("text");R=R.merge(R.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),E=E.merge(y),h=h.merge(y.append("line").attr("stroke","currentColor").attr(I+"2",M*k)),g=g.merge(y.append("text").attr("fill","currentColor").attr(I,M*Y).attr("dy",t===wt?"0em":t===$t?"0.71em":"0.32em")),x!==N&&(R=R.transition(x),E=E.transition(x),h=h.transition(x),g=g.transition(x),v=v.transition(x).attr("opacity",ee).attr("transform",function(s){return isFinite(s=O(s))?A(s+w):this.getAttribute("transform")}),y.attr("opacity",ee).attr("transform",function(s){var o=this.parentNode.__axis;return A((o&&isFinite(o=o(s))?o:O(s))+w)})),v.remove(),R.attr("d",t===bt||t===It?p?"M"+M*p+","+C+"H"+w+"V"+z+"H"+M*p:"M"+w+","+C+"V"+z:p?"M"+C+","+M*p+"V"+w+"H"+z+"V"+M*p:"M"+C+","+w+"H"+z),E.attr("opacity",1).attr("transform",function(s){return A(O(s)+w)}),h.attr(I+"2",M*k),g.attr(I,M*Y).text(H),N.filter(je).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===It?"start":t===bt?"end":"middle"),N.each(function(){this.__axis=O})}return _.scale=function(x){return arguments.length?(e=x,_):e},_.ticks=function(){return r=Array.from(arguments),_},_.tickArguments=function(x){return arguments.length?(r=x==null?[]:Array.from(x),_):r.slice()},_.tickValues=function(x){return arguments.length?(n=x==null?null:Array.from(x),_):n&&n.slice()},_.tickFormat=function(x){return arguments.length?(i=x,_):i},_.tickSize=function(x){return arguments.length?(k=p=+x,_):k},_.tickSizeInner=function(x){return arguments.length?(k=+x,_):k},_.tickSizeOuter=function(x){return arguments.length?(p=+x,_):p},_.tickPadding=function(x){return arguments.length?(F=+x,_):F},_.offset=function(x){return arguments.length?(w=+x,_):w},_}function Ge(t){return re(wt,t)}function qe(t){return re($t,t)}var Ue=Ct(((t,e,r)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_isoWeek=i()})(r,(function(){"use strict";var n="day";return function(i,k,p){var F=function(I){return I.add(4-I.isoWeekday(),n)},w=k.prototype;w.isoWeekYear=function(){return F(this).year()},w.isoWeek=function(I){if(!this.$utils().u(I))return this.add(7*(I-this.isoWeek()),n);var A,_,x,P,H=F(this),Y=(A=this.isoWeekYear(),_=this.$u,x=(_?p.utc:p)().year(A).startOf("year"),P=4-x.isoWeekday(),x.isoWeekday()>4&&(P+=7),x.add(P,n));return H.diff(Y,"week")+1},w.isoWeekday=function(I){return this.$utils().u(I)?this.day()||7:this.day(this.day()%7?I:I-7)};var M=w.startOf;w.startOf=function(I,A){var _=this.$utils(),x=!!_.u(A)||A;return _.p(I)==="isoweek"?x?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):M.bind(this)(I,A)}}}))})),Xe=Ct(((t,e,r)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_customParseFormat=i()})(r,(function(){"use strict";var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},i=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,k=/\d/,p=/\d\d/,F=/\d\d?/,w=/\d*[^-_:/,()\s\d]+/,M={},I=function(D){return(D=+D)+(D>68?1900:2e3)},A=function(D){return function(C){this[D]=+C}},_=[/[+-]\d\d:?(\d\d)?|Z/,function(D){(this.zone||(this.zone={})).offset=(function(C){if(!C||C==="Z")return 0;var z=C.match(/([+-]|\d\d)/g),O=60*z[1]+(+z[2]||0);return O===0?0:z[0]==="+"?-O:O})(D)}],x=function(D){var C=M[D];return C&&(C.indexOf?C:C.s.concat(C.f))},P=function(D,C){var z,O=M.meridiem;if(O){for(var N=1;N<=24;N+=1)if(D.indexOf(O(N,0,C))>-1){z=N>12;break}}else z=D===(C?"pm":"PM");return z},H={A:[w,function(D){this.afternoon=P(D,!1)}],a:[w,function(D){this.afternoon=P(D,!0)}],Q:[k,function(D){this.month=3*(D-1)+1}],S:[k,function(D){this.milliseconds=100*+D}],SS:[p,function(D){this.milliseconds=10*+D}],SSS:[/\d{3}/,function(D){this.milliseconds=+D}],s:[F,A("seconds")],ss:[F,A("seconds")],m:[F,A("minutes")],mm:[F,A("minutes")],H:[F,A("hours")],h:[F,A("hours")],HH:[F,A("hours")],hh:[F,A("hours")],D:[F,A("day")],DD:[p,A("day")],Do:[w,function(D){var C=M.ordinal,z=D.match(/\d+/);if(this.day=z[0],C)for(var O=1;O<=31;O+=1)C(O).replace(/\[|\]/g,"")===D&&(this.day=O)}],w:[F,A("week")],ww:[p,A("week")],M:[F,A("month")],MM:[p,A("month")],MMM:[w,function(D){var C=x("months"),z=(x("monthsShort")||C.map((function(O){return O.slice(0,3)}))).indexOf(D)+1;if(z<1)throw new Error;this.month=z%12||z}],MMMM:[w,function(D){var C=x("months").indexOf(D)+1;if(C<1)throw new Error;this.month=C%12||C}],Y:[/[+-]?\d+/,A("year")],YY:[p,function(D){this.year=I(D)}],YYYY:[/\d{4}/,A("year")],Z:_,ZZ:_};function Y(D){for(var C=D,z=M&&M.formats,O=(D=C.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(g,s,o){var u=o&&o.toUpperCase();return s||z[o]||n[o]||z[u].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(m,d,b){return d||b.slice(1)}))}))).match(i),N=O.length,R=0;R<N;R+=1){var E=O[R],v=H[E],y=v&&v[0],h=v&&v[1];O[R]=h?{regex:y,parser:h}:E.replace(/^\[|\]$/g,"")}return function(g){for(var s={},o=0,u=0;o<N;o+=1){var m=O[o];if(typeof m=="string")u+=m.length;else{var d=m.regex,b=m.parser,a=g.slice(u),S=d.exec(a)[0];b.call(s,S),g=g.replace(S,"")}}return(function(c){var l=c.afternoon;if(l!==void 0){var T=c.hours;l?T<12&&(c.hours+=12):T===12&&(c.hours=0),delete c.afternoon}})(s),s}}return function(D,C,z){z.p.customParseFormat=!0,D&&D.parseTwoDigitYear&&(I=D.parseTwoDigitYear);var O=C.prototype,N=O.parse;O.parse=function(R){var E=R.date,v=R.utc,y=R.args;this.$u=v;var h=y[1];if(typeof h=="string"){var g=y[2]===!0,s=y[3]===!0,o=g||s,u=y[2];s&&(u=y[2]),M=this.$locale(),!g&&u&&(M=z.Ls[u]),this.$d=(function(a,S,c,l){try{if(["x","X"].indexOf(S)>-1)return new Date((S==="X"?1e3:1)*a);var T=Y(S)(a),L=T.year,W=T.month,V=T.day,G=T.hours,$=T.minutes,Q=T.seconds,rt=T.milliseconds,ct=T.zone,vt=T.week,yt=new Date,lt=V||(L||W?1:yt.getDate()),B=L||yt.getFullYear(),nt=0;L&&!W||(nt=W>0?W-1:yt.getMonth());var X,U=G||0,at=$||0,J=Q||0,st=rt||0;return ct?new Date(Date.UTC(B,nt,lt,U,at,J,st+60*ct.offset*1e3)):c?new Date(Date.UTC(B,nt,lt,U,at,J,st)):(X=new Date(B,nt,lt,U,at,J,st),vt&&(X=l(X).week(vt).toDate()),X)}catch{return new Date("")}})(E,h,v,z),this.init(),u&&u!==!0&&(this.$L=this.locale(u).$L),o&&E!=this.format(h)&&(this.$d=new Date("")),M={}}else if(h instanceof Array)for(var m=h.length,d=1;d<=m;d+=1){y[1]=h[d-1];var b=z.apply(this,y);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}d===m&&(this.$d=new Date(""))}else N.call(this,R)}}}))})),Ze=Ct(((t,e,r)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_advancedFormat=i()})(r,(function(){"use strict";return function(n,i){var k=i.prototype,p=k.format;k.format=function(F){var w=this,M=this.$locale();if(!this.isValid())return p.bind(this)(F);var I=this.$utils(),A=(F||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(_){switch(_){case"Q":return Math.ceil((w.$M+1)/3);case"Do":return M.ordinal(w.$D);case"gggg":return w.weekYear();case"GGGG":return w.isoWeekYear();case"wo":return M.ordinal(w.week(),"W");case"w":case"ww":return I.s(w.week(),_==="w"?1:2,"0");case"W":case"WW":return I.s(w.isoWeek(),_==="W"?1:2,"0");case"k":case"kk":return I.s(String(w.$H===0?24:w.$H),_==="k"?1:2,"0");case"X":return Math.floor(w.$d.getTime()/1e3);case"x":return w.$d.getTime();case"z":return"["+w.offsetName()+"]";case"zzz":return"["+w.offsetName("long")+"]";default:return _}}));return p.bind(this)(A)}}}))})),Qe=Ct(((t,e,r)=>{(function(n,i){typeof t=="object"&&typeof e<"u"?e.exports=i():typeof define=="function"&&define.amd?define(i):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_duration=i()})(r,(function(){"use strict";var n,i,k=1e3,p=6e4,F=36e5,w=864e5,M=31536e6,I=2628e6,A=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,_=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,x={years:M,months:I,days:w,hours:F,minutes:p,seconds:k,milliseconds:1,weeks:6048e5},P=function(E){return E instanceof N},H=function(E,v,y){return new N(E,y,v.$l)},Y=function(E){return i.p(E)+"s"},D=function(E){return E<0},C=function(E){return D(E)?Math.ceil(E):Math.floor(E)},z=function(E){return Math.abs(E)},O=function(E,v){return E?D(E)?{negative:!0,format:""+z(E)+v}:{negative:!1,format:""+E+v}:{negative:!1,format:""}},N=(function(){function E(y,h,g){var s=this;if(this.$d={},this.$l=g,y===void 0&&(this.$ms=0,this.parseFromMilliseconds()),h)return H(y*x[Y(h)],this);if(typeof y=="number")return this.$ms=y,this.parseFromMilliseconds(),this;if(typeof y=="object")return Object.keys(y).forEach((function(m){s.$d[Y(m)]=y[m]})),this.calMilliseconds(),this;if(typeof y=="string"){var o=y.match(A);if(o){var u=o.slice(2).map((function(m){return m!=null?Number(m):0}));return this.$d.years=u[0],this.$d.months=u[1],this.$d.weeks=u[2],this.$d.days=u[3],this.$d.hours=u[4],this.$d.minutes=u[5],this.$d.seconds=u[6],this.calMilliseconds(),this}}return this}var v=E.prototype;return v.calMilliseconds=function(){var y=this;this.$ms=Object.keys(this.$d).reduce((function(h,g){return h+(y.$d[g]||0)*x[g]}),0)},v.parseFromMilliseconds=function(){var y=this.$ms;this.$d.years=C(y/M),y%=M,this.$d.months=C(y/I),y%=I,this.$d.days=C(y/w),y%=w,this.$d.hours=C(y/F),y%=F,this.$d.minutes=C(y/p),y%=p,this.$d.seconds=C(y/k),y%=k,this.$d.milliseconds=y},v.toISOString=function(){var y=O(this.$d.years,"Y"),h=O(this.$d.months,"M"),g=+this.$d.days||0;this.$d.weeks&&(g+=7*this.$d.weeks);var s=O(g,"D"),o=O(this.$d.hours,"H"),u=O(this.$d.minutes,"M"),m=this.$d.seconds||0;this.$d.milliseconds&&(m+=this.$d.milliseconds/1e3,m=Math.round(1e3*m)/1e3);var d=O(m,"S"),b=y.negative||h.negative||s.negative||o.negative||u.negative||d.negative,a=o.format||u.format||d.format?"T":"",S=(b?"-":"")+"P"+y.format+h.format+s.format+a+o.format+u.format+d.format;return S==="P"||S==="-P"?"P0D":S},v.toJSON=function(){return this.toISOString()},v.format=function(y){var h=y||"YYYY-MM-DDTHH:mm:ss",g={Y:this.$d.years,YY:i.s(this.$d.years,2,"0"),YYYY:i.s(this.$d.years,4,"0"),M:this.$d.months,MM:i.s(this.$d.months,2,"0"),D:this.$d.days,DD:i.s(this.$d.days,2,"0"),H:this.$d.hours,HH:i.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:i.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:i.s(this.$d.seconds,2,"0"),SSS:i.s(this.$d.milliseconds,3,"0")};return h.replace(_,(function(s,o){return o||String(g[s])}))},v.as=function(y){return this.$ms/x[Y(y)]},v.get=function(y){var h=this.$ms,g=Y(y);return g==="milliseconds"?h%=1e3:h=g==="weeks"?C(h/x[g]):this.$d[g],h||0},v.add=function(y,h,g){var s=h?y*x[Y(h)]:P(y)?y.$ms:H(y,this).$ms;return H(this.$ms+s*(g?-1:1),this)},v.subtract=function(y,h){return this.add(y,h,!0)},v.locale=function(y){var h=this.clone();return h.$l=y,h},v.clone=function(){return H(this.$ms,this)},v.humanize=function(y){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!y)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},E})(),R=function(E,v,y){return E.add(v.years()*y,"y").add(v.months()*y,"M").add(v.days()*y,"d").add(v.hours()*y,"h").add(v.minutes()*y,"m").add(v.seconds()*y,"s").add(v.milliseconds()*y,"ms")};return function(E,v,y){n=y,i=y().$utils(),y.duration=function(s,o){return H(s,{$l:y.locale()},o)},y.isDuration=P;var h=v.prototype.add,g=v.prototype.subtract;v.prototype.add=function(s,o){return P(s)?R(this,s,1):h.bind(this)(s,o)},v.prototype.subtract=function(s,o){return P(s)?R(this,s,-1):g.bind(this)(s,o)}}}))})),Je=Me(),q=gt(Se(),1),Ke=gt(Ue(),1),ti=gt(Xe(),1),ei=gt(Ze(),1),ii=gt(Qe(),1),At=(function(){var t=f(function(s,o,u,m){for(u=u||{},m=s.length;m--;u[s[m]]=o);return u},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],n=[1,27],i=[1,28],k=[1,29],p=[1,30],F=[1,31],w=[1,32],M=[1,33],I=[1,34],A=[1,9],_=[1,10],x=[1,11],P=[1,12],H=[1,13],Y=[1,14],D=[1,15],C=[1,16],z=[1,19],O=[1,20],N=[1,21],R=[1,22],E=[1,23],v=[1,25],y=[1,35],h={trace:f(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:f(function(o,u,m,d,b,a,S){var c=a.length-1;switch(b){case 1:return a[c-1];case 2:this.$=[];break;case 3:a[c-1].push(a[c]),this.$=a[c-1];break;case 4:case 5:this.$=a[c];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(a[c].substr(11)),this.$=a[c].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=a[c].substr(18);break;case 19:d.TopAxis(),this.$=a[c].substr(8);break;case 20:d.setAxisFormat(a[c].substr(11)),this.$=a[c].substr(11);break;case 21:d.setTickInterval(a[c].substr(13)),this.$=a[c].substr(13);break;case 22:d.setExcludes(a[c].substr(9)),this.$=a[c].substr(9);break;case 23:d.setIncludes(a[c].substr(9)),this.$=a[c].substr(9);break;case 24:d.setTodayMarker(a[c].substr(12)),this.$=a[c].substr(12);break;case 27:d.setDiagramTitle(a[c].substr(6)),this.$=a[c].substr(6);break;case 28:this.$=a[c].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=a[c].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(a[c].substr(8)),this.$=a[c].substr(8);break;case 33:d.addTask(a[c-1],a[c]),this.$="task";break;case 34:this.$=a[c-1],d.setClickEvent(a[c-1],a[c],null);break;case 35:this.$=a[c-2],d.setClickEvent(a[c-2],a[c-1],a[c]);break;case 36:this.$=a[c-2],d.setClickEvent(a[c-2],a[c-1],null),d.setLink(a[c-2],a[c]);break;case 37:this.$=a[c-3],d.setClickEvent(a[c-3],a[c-2],a[c-1]),d.setLink(a[c-3],a[c]);break;case 38:this.$=a[c-2],d.setClickEvent(a[c-2],a[c],null),d.setLink(a[c-2],a[c-1]);break;case 39:this.$=a[c-3],d.setClickEvent(a[c-3],a[c-1],a[c]),d.setLink(a[c-3],a[c-2]);break;case 40:this.$=a[c-1],d.setLink(a[c-1],a[c]);break;case 41:case 47:this.$=a[c-1]+" "+a[c];break;case 42:case 43:case 45:this.$=a[c-2]+" "+a[c-1]+" "+a[c];break;case 44:case 46:this.$=a[c-3]+" "+a[c-2]+" "+a[c-1]+" "+a[c]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:n,14:i,15:k,16:p,17:F,18:w,19:18,20:M,21:I,22:A,23:_,24:x,25:P,26:H,27:Y,28:D,29:C,30:z,31:O,33:N,35:R,36:E,37:24,38:v,40:y},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:r,13:n,14:i,15:k,16:p,17:F,18:w,19:18,20:M,21:I,22:A,23:_,24:x,25:P,26:H,27:Y,28:D,29:C,30:z,31:O,33:N,35:R,36:E,37:24,38:v,40:y},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:f(function(o,u){if(u.recoverable)this.trace(o);else{var m=new Error(o);throw m.hash=u,m}},"parseError"),parse:f(function(o){var u=this,m=[0],d=[],b=[null],a=[],S=this.table,c="",l=0,T=0,L=0,W=2,V=1,G=a.slice.call(arguments,1),$=Object.create(this.lexer),Q={yy:{}};for(var rt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,rt)&&(Q.yy[rt]=this.yy[rt]);$.setInput(o,Q.yy),Q.yy.lexer=$,Q.yy.parser=this,typeof $.yylloc>"u"&&($.yylloc={});var ct=$.yylloc;a.push(ct);var vt=$.options&&$.options.ranges;typeof Q.yy.parseError=="function"?this.parseError=Q.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function yt(Z){m.length=m.length-2*Z,b.length=b.length-Z,a.length=a.length-Z}f(yt,"popStack");function lt(){var Z=d.pop()||$.lex()||V;return typeof Z!="number"&&(Z instanceof Array&&(d=Z,Z=d.pop()),Z=u.symbols_[Z]||Z),Z}f(lt,"lex");for(var B,nt,X,U,at,J={},st,K,qt,Tt;;){if(X=m[m.length-1],this.defaultActions[X]?U=this.defaultActions[X]:((B===null||typeof B>"u")&&(B=lt()),U=S[X]&&S[X][B]),typeof U>"u"||!U.length||!U[0]){var Et="";Tt=[];for(st in S[X])this.terminals_[st]&&st>W&&Tt.push("'"+this.terminals_[st]+"'");$.showPosition?Et="Parse error on line "+(l+1)+`:
`+$.showPosition()+`
Expecting `+Tt.join(", ")+", got '"+(this.terminals_[B]||B)+"'":Et="Parse error on line "+(l+1)+": Unexpected "+(B==V?"end of input":"'"+(this.terminals_[B]||B)+"'"),this.parseError(Et,{text:$.match,token:this.terminals_[B]||B,line:$.yylineno,loc:ct,expected:Tt})}if(U[0]instanceof Array&&U.length>1)throw new Error("Parse Error: multiple actions possible at state: "+X+", token: "+B);switch(U[0]){case 1:m.push(B),b.push($.yytext),a.push($.yylloc),m.push(U[1]),B=null,nt?(B=nt,nt=null):(T=$.yyleng,c=$.yytext,l=$.yylineno,ct=$.yylloc,L>0&&L--);break;case 2:if(K=this.productions_[U[1]][1],J.$=b[b.length-K],J._$={first_line:a[a.length-(K||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(K||1)].first_column,last_column:a[a.length-1].last_column},vt&&(J._$.range=[a[a.length-(K||1)].range[0],a[a.length-1].range[1]]),at=this.performAction.apply(J,[c,T,l,Q.yy,U[1],b,a].concat(G)),typeof at<"u")return at;K&&(m=m.slice(0,-1*K*2),b=b.slice(0,-1*K),a=a.slice(0,-1*K)),m.push(this.productions_[U[1]][0]),b.push(J.$),a.push(J._$),qt=S[m[m.length-2]][m[m.length-1]],m.push(qt);break;case 3:return!0}}return!0},"parse")};h.lexer=(function(){return{EOF:1,parseError:f(function(o,u){if(this.yy.parser)this.yy.parser.parseError(o,u);else throw new Error(o)},"parseError"),setInput:f(function(s,o){return this.yy=o||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:f(function(){var s=this._input[0];return this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s,s.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},"input"),unput:f(function(s){var o=s.length,u=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var m=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),u.length-1&&(this.yylineno-=u.length-1);var d=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:u?(u.length===m.length?this.yylloc.first_column:0)+m[m.length-u.length].length-u[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[d[0],d[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:f(function(){return this._more=!0,this},"more"),reject:f(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:f(function(s){this.unput(this.match.slice(s))},"less"),pastInput:f(function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:f(function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:f(function(){var s=this.pastInput(),o=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:f(function(s,o){var u,m,d;if(this.options.backtrack_lexer&&(d={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(d.yylloc.range=this.yylloc.range.slice(0))),m=s[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],u=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),u)return u;if(this._backtrack){for(var b in d)this[b]=d[b];return!1}return!1},"test_match"),next:f(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,o,u,m;this._more||(this.yytext="",this.match="");for(var d=this._currentRules(),b=0;b<d.length;b++)if(u=this._input.match(this.rules[d[b]]),u&&(!o||u[0].length>o[0].length)){if(o=u,m=b,this.options.backtrack_lexer){if(s=this.test_match(u,d[b]),s!==!1)return s;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(s=this.test_match(o,d[m]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:f(function(){var o=this.next();return o||this.lex()},"lex"),begin:f(function(o){this.conditionStack.push(o)},"begin"),popState:f(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:f(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:f(function(o){return o=this.conditionStack.length-1-Math.abs(o||0),o>=0?this.conditionStack[o]:"INITIAL"},"topState"),pushState:f(function(o){this.begin(o)},"pushState"),stateStackSize:f(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:f(function(o,u,m,d){switch(m){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}})();function g(){this.yy={}}return f(g,"Parser"),g.prototype=h,h.Parser=g,new g})();At.parser=At;var ni=At;q.default.extend(Ke.default);q.default.extend(ti.default);q.default.extend(ei.default);var ie={friday:5,saturday:6},tt="",Wt="",Vt=void 0,zt="",ht=[],mt=[],Pt=new Map,Nt=[],St=[],kt="",Rt="",ae=["active","done","crit","milestone","vert"],Ht=[],ut="",pt=!1,Bt=!1,jt="sunday",Mt="saturday",Lt=0,si=f(function(){Nt=[],St=[],kt="",Ht=[],_t=0,Ot=void 0,Dt=void 0,j=[],tt="",Wt="",Rt="",Vt=void 0,zt="",ht=[],mt=[],pt=!1,Bt=!1,Lt=0,Pt=new Map,ut="",xe(),jt="sunday",Mt="saturday"},"clear"),ri=f(function(t){ut=t},"setDiagramId"),ai=f(function(t){Wt=t},"setAxisFormat"),oi=f(function(){return Wt},"getAxisFormat"),ci=f(function(t){Vt=t},"setTickInterval"),li=f(function(){return Vt},"getTickInterval"),ui=f(function(t){zt=t},"setTodayMarker"),di=f(function(){return zt},"getTodayMarker"),fi=f(function(t){tt=t},"setDateFormat"),hi=f(function(){pt=!0},"enableInclusiveEndDates"),mi=f(function(){return pt},"endDatesAreInclusive"),ki=f(function(){Bt=!0},"enableTopAxis"),yi=f(function(){return Bt},"topAxisEnabled"),gi=f(function(t){Rt=t},"setDisplayMode"),pi=f(function(){return Rt},"getDisplayMode"),vi=f(function(){return tt},"getDateFormat"),oe=f((t,e)=>{const r=e.toLowerCase().split(/[\s,]+/).filter(n=>n!=="");return[...new Set([...t,...r])]},"mergeTokens"),Ti=f(function(t){ht=oe(ht,t)},"setIncludes"),xi=f(function(){return ht},"getIncludes"),bi=f(function(t){mt=oe(mt,t)},"setExcludes"),wi=f(function(){return mt},"getExcludes"),_i=f(function(){return Pt},"getLinks"),Di=f(function(t){kt=t,Nt.push(t)},"addSection"),Si=f(function(){return Nt},"getSections"),Mi=f(function(){let t=ne();const e=10;let r=0;for(;!t&&r<e;)t=ne(),r++;return St=j,St},"getTasks"),ce=f(function(t,e,r,n){const i=t.format(e.trim()),k=t.format("YYYY-MM-DD");return n.includes(i)||n.includes(k)?!1:r.includes("weekends")&&(t.isoWeekday()===ie[Mt]||t.isoWeekday()===ie[Mt]+1)||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(i)||r.includes(k)},"isInvalidDate"),Ci=f(function(t){jt=t},"setWeekday"),Ei=f(function(){return jt},"getWeekday"),Ii=f(function(t){Mt=t},"setWeekend"),le=f(function(t,e,r,n){if(!r.length||t.manualEndTime)return;let i;t.startTime instanceof Date?i=(0,q.default)(t.startTime):i=(0,q.default)(t.startTime,e,!0),i=i.add(1,"d");let k;t.endTime instanceof Date?k=(0,q.default)(t.endTime):k=(0,q.default)(t.endTime,e,!0);const[p,F]=Yi(i,k,e,r,n);t.endTime=p.toDate(),t.renderEndTime=F},"checkTaskDates"),Yi=f(function(t,e,r,n,i){let k=!1,p=null;const F=e.add(1e4,"d");for(;t<=e;){if(k||(p=e.toDate()),k=ce(t,r,n,i),k&&(e=e.add(1,"d"),e>F))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,p]},"fixTaskDates"),ue=f(function(t,e){it.warn(`Gantt: the "${t}" statement references unknown task id(s): ${e.join(", ")}. Make sure the referenced tasks exist and declare an id. Milestones need both an id and a duration, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`)},"warnAboutUnknownTaskIds"),Ft=f(function(t,e,r){if(r=r.trim(),f(k=>{const p=k.trim();return p==="x"||p==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(r))return new Date(Number(r));const n=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(n!==null){let k=null;const p=[],F=n.groups.ids.split(" ").filter(M=>M!=="");for(const M of F){const I=ot(M);if(I===void 0){p.push(M);continue}(!k||I.endTime>k.endTime)&&(k=I)}if(p.length>0&&ue("after",p),k)return k.endTime;const w=new Date;return w.setHours(0,0,0,0),w}let i=(0,q.default)(r,e.trim(),!0);if(i.isValid())return i.toDate();{it.debug("Invalid date:"+r),it.debug("With date format:"+e.trim());const k=new Date(r);if(k===void 0||isNaN(k.getTime())||k.getFullYear()<-1e4||k.getFullYear()>1e4)throw new Error("Invalid date:"+r);return k}},"getStartDate"),de=f(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),fe=f(function(t,e,r,n=!1){r=r.trim();const i=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(i!==null){let M=null;const I=[],A=i.groups.ids.split(" ").filter(x=>x!=="");for(const x of A){const P=ot(x);if(P===void 0){I.push(x);continue}(!M||P.startTime<M.startTime)&&(M=P)}if(I.length>0&&ue("until",I),M)return M.startTime;const _=new Date;return _.setHours(0,0,0,0),_}let k=(0,q.default)(r,e.trim(),!0);if(k.isValid())return n&&(k=k.add(1,"d")),k.toDate();let p=(0,q.default)(t);const[F,w]=de(r);if(Number.isNaN(F))it.warn(`Gantt: "${r}" is neither a valid date for the "${e.trim()}" date format nor a valid duration (e.g. "3d"), so it is ignored and the task gets a zero duration. Milestones need a duration too, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`);else{const M=p.add(F,w);M.isValid()&&(p=M)}return p.toDate()},"getEndDate"),_t=0,ft=f(function(t){return t===void 0?(_t=_t+1,"task"+_t):t},"parseId"),$i=f(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const n=r.split(","),i={};Gt(n,i,ae);for(let p=0;p<n.length;p++)n[p]=n[p].trim();let k="";switch(n.length){case 1:i.id=ft(),i.startTime=t.endTime,k=n[0];break;case 2:i.id=ft(),i.startTime=Ft(void 0,tt,n[0]),k=n[1];break;case 3:i.id=ft(n[0]),i.startTime=Ft(void 0,tt,n[1]),k=n[2]}return k&&(i.endTime=fe(i.startTime,tt,k,pt),i.manualEndTime=(0,q.default)(k,"YYYY-MM-DD",!0).isValid(),le(i,tt,mt,ht)),i},"compileData"),Ai=f(function(t,e){let r;e.substr(0,1)===":"?r=e.substr(1,e.length):r=e;const n=r.split(","),i={};Gt(n,i,ae);for(let k=0;k<n.length;k++)n[k]=n[k].trim();switch(n.length){case 1:i.id=ft(),i.startTime={type:"prevTaskEnd",id:t},i.endTime={data:n[0]};break;case 2:i.id=ft(),i.startTime={type:"getStartDate",startData:n[0]},i.endTime={data:n[1]};break;case 3:i.id=ft(n[0]),i.startTime={type:"getStartDate",startData:n[1]},i.endTime={data:n[2]}}return i},"parseData"),Ot,Dt,j=[],he={},Li=f(function(t,e){const r={section:kt,type:kt,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},n=Ai(Dt,e);r.raw.startTime=n.startTime,r.raw.endTime=n.endTime,r.id=n.id,r.prevTaskId=Dt,r.active=n.active,r.done=n.done,r.crit=n.crit,r.milestone=n.milestone,r.vert=n.vert,r.vert?r.order=-1:(r.order=Lt,Lt++);const i=j.push(r);Dt=r.id,he[r.id]=i-1},"addTask"),ot=f(function(t){const e=he[t];return j[e]},"findTaskById"),Fi=f(function(t,e){const r={section:kt,type:kt,description:t,task:t,classes:[]},n=$i(Ot,e);r.startTime=n.startTime,r.endTime=n.endTime,r.id=n.id,r.active=n.active,r.done=n.done,r.crit=n.crit,r.milestone=n.milestone,r.vert=n.vert,Ot=r,St.push(r)},"addTaskOrg"),ne=f(function(){const t=f(function(r){const n=j[r];let i="";switch(j[r].raw.startTime.type){case"prevTaskEnd":n.startTime=ot(n.prevTaskId).endTime;break;case"getStartDate":i=Ft(void 0,tt,j[r].raw.startTime.startData),i&&(j[r].startTime=i)}return j[r].startTime&&(j[r].endTime=fe(j[r].startTime,tt,j[r].raw.endTime.data,pt),j[r].endTime&&(j[r].processed=!0,j[r].manualEndTime=(0,q.default)(j[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),le(j[r],tt,mt,ht))),j[r].processed},"compileTask");let e=!0;for(const[r,n]of j.entries())t(r),e=e&&n.processed;return e},"compileTasks"),Oi=f(function(t,e){let r=e;dt().securityLevel!=="loose"&&(r=(0,Je.sanitizeUrl)(e)),t.split(",").forEach(function(n){ot(n)!==void 0&&(ke(n,()=>{window.open(r,"_self")}),Pt.set(n,r))}),me(t,"clickable")},"setLink"),me=f(function(t,e){t.split(",").forEach(function(r){let n=ot(r);n!==void 0&&n.classes.push(e)})},"setClass"),Wi=f(function(t,e,r){if(dt().securityLevel!=="loose"||e===void 0)return;let n=[];if(typeof r=="string"){n=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let i=0;i<n.length;i++){let k=n[i].trim();k.startsWith('"')&&k.endsWith('"')&&(k=k.substr(1,k.length-2)),n[i]=k}}n.length===0&&n.push(t),ot(t)!==void 0&&ke(t,()=>{ye.runFunc(e,...n)})},"setClickFun"),ke=f(function(t,e){Ht.push(function(){const r=ut?`${ut}-${t}`:t,n=document.querySelector(`[id="${r}"]`);n!==null&&n.addEventListener("click",function(){e()})},function(){const r=ut?`${ut}-${t}`:t,n=document.querySelector(`[id="${r}-text"]`);n!==null&&n.addEventListener("click",function(){e()})})},"pushFun"),Vi={getConfig:f(()=>dt().gantt,"getConfig"),clear:si,setDateFormat:fi,getDateFormat:vi,enableInclusiveEndDates:hi,endDatesAreInclusive:mi,enableTopAxis:ki,topAxisEnabled:yi,setAxisFormat:ai,getAxisFormat:oi,setTickInterval:ci,getTickInterval:li,setTodayMarker:ui,getTodayMarker:di,setAccTitle:ve,getAccTitle:De,setDiagramTitle:we,getDiagramTitle:ge,setDiagramId:ri,setDisplayMode:gi,getDisplayMode:pi,setAccDescription:pe,getAccDescription:Te,addSection:Di,getSections:Si,getTasks:Mi,addTask:Li,findTaskById:ot,addTaskOrg:Fi,setIncludes:Ti,getIncludes:xi,setExcludes:bi,getExcludes:wi,setClickEvent:f(function(t,e,r){t.split(",").forEach(function(n){Wi(n,e,r)}),me(t,"clickable")},"setClickEvent"),setLink:Oi,getLinks:_i,bindFunctions:f(function(t){Ht.forEach(function(e){e(t)})},"bindFunctions"),parseDuration:de,isInvalidDate:ce,setWeekday:Ci,getWeekday:Ei,setWeekend:Ii};function Gt(t,e,r){let n=!0;for(;n;)n=!1,r.forEach(function(i){const k="^\\s*"+i+"\\s*$",p=new RegExp(k);t[0].match(p)&&(e[i]=!0,t.shift(1),n=!0)})}f(Gt,"getTaskTags");q.default.extend(ii.default);var zi=f(function(){it.debug("Something is calling, setConf, remove the call")},"setConf"),se={monday:Ye,tuesday:Ie,wednesday:Ve,thursday:$e,friday:Fe,saturday:Oe,sunday:Ae},Pi=f((t,e)=>{let r=[...t].map(()=>-1/0),n=[...t].sort((k,p)=>k.startTime-p.startTime||k.order-p.order),i=0;for(const k of n)for(let p=0;p<r.length;p++)if(k.startTime>=r[p]){r[p]=k.endTime,k.order=p+e,p>i&&(i=p);break}return i},"getMaxIntersections"),et,Yt=1e4,Ui={parser:ni,db:Vi,renderer:{setConf:zi,draw:f(function(t,e,r,n){const i=dt().gantt;n.db.setDiagramId(e);const k=dt().securityLevel;let p;k==="sandbox"&&(p=xt("#i"+e));const F=k==="sandbox"?xt(p.nodes()[0].contentDocument.body):xt("body"),w=k==="sandbox"?p.nodes()[0].contentDocument:document,M=w.getElementById(e);et=M.parentElement.offsetWidth,et===void 0&&(et=1200),i.useWidth!==void 0&&(et=i.useWidth);const I=n.db.getTasks(),A=I.filter(h=>!h.vert);let _=[];for(const h of A)_.push(h.type);_=y(_);const x={};let P=2*i.topPadding;if(n.db.getDisplayMode()==="compact"||i.displayMode==="compact"){const h={};for(const s of A)h[s.section]===void 0?h[s.section]=[s]:h[s.section].push(s);let g=0;for(const s of Object.keys(h)){const o=Pi(h[s],g)+1;g+=o,P+=o*(i.barHeight+i.barGap),x[s]=o}}else{P+=A.length*(i.barHeight+i.barGap);for(const h of _)x[h]=A.filter(g=>g.type===h).length}M.setAttribute("viewBox","0 0 "+et+" "+P);const H=F.select(`[id="${e}"]`),Y=Le().domain([Ce(I,function(h){return h.startTime}),Ee(I,function(h){return h.endTime})]).rangeRound([0,et-i.leftPadding-i.rightPadding]);function D(h,g){const s=h.startTime,o=g.startTime;let u=0;return s>o?u=1:s<o&&(u=-1),u}f(D,"taskCompare"),I.sort(D),C(I,et,P),be(H,P,et,i.useMaxWidth),H.append("text").text(n.db.getDiagramTitle()).attr("x",et/2).attr("y",i.titleTopMargin).attr("class","titleText");function C(h,g,s){const o=i.barHeight,u=o+i.barGap,m=i.topPadding,d=i.leftPadding,b=We().domain([0,_.length]).range(["#00B9FA","#F95002"]).interpolate(ze);O(u,m,d,g,s,h,n.db.getExcludes(),n.db.getIncludes()),R(d,m,g,s),z(h,u,m,d,o,b,g,s),E(u,m,d,o,b),v(d,m,g,s)}f(C,"makeGantt");function z(h,g,s,o,u,m,d){h.sort((l,T)=>l.vert===T.vert?0:l.vert?1:-1);const b=h.filter(l=>!l.vert),a=[...new Set(b.map(l=>l.order))].map(l=>b.find(T=>T.order===l));H.append("g").selectAll("rect").data(a).enter().append("rect").attr("x",0).attr("y",function(l,T){return T=l.order,T*g+s-2}).attr("width",function(){return d-i.rightPadding/2}).attr("height",g).attr("class",function(l){for(const[T,L]of _.entries())if(l.type===L)return"section section"+T%i.numberSectionStyles;return"section section0"}).enter();const S=H.append("g").selectAll("rect").data(h).enter(),c=n.db.getLinks();if(S.append("rect").attr("id",function(l){return e+"-"+l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?Y(l.startTime)+o+.5*(Y(l.endTime)-Y(l.startTime))-.5*u:Y(l.startTime)+o}).attr("y",function(l,T){return T=l.order,l.vert?i.gridLineStartPadding:T*g+s}).attr("width",function(l){return l.milestone?u:l.vert?.08*u:Y(l.renderEndTime||l.endTime)-Y(l.startTime)}).attr("height",function(l){return l.vert?b.length*(i.barHeight+i.barGap)+i.barHeight*2:u}).attr("transform-origin",function(l,T){return T=l.order,(Y(l.startTime)+o+.5*(Y(l.endTime)-Y(l.startTime))).toString()+"px "+(T*g+s+.5*u).toString()+"px"}).attr("class",function(l){const T="task";let L="";l.classes.length>0&&(L=l.classes.join(" "));let W=0;for(const[G,$]of _.entries())l.type===$&&(W=G%i.numberSectionStyles);let V="";return l.active?l.crit?V+=" activeCrit":V=" active":l.done?l.crit?V=" doneCrit":V=" done":l.crit&&(V+=" crit"),V.length===0&&(V=" task"),l.milestone&&(V=" milestone "+V),l.vert&&(V=" vert "+V),V+=W,V+=" "+L,T+V}),S.append("text").attr("id",function(l){return e+"-"+l.id+"-text"}).text(function(l){return l.task}).attr("font-size",i.fontSize).attr("x",function(l){let T=Y(l.startTime),L=Y(l.renderEndTime||l.endTime);if(l.milestone&&(T+=.5*(Y(l.endTime)-Y(l.startTime))-.5*u,L=T+u),l.vert)return Y(l.startTime)+o;const W=this.getBBox().width;return W>L-T?L+W+1.5*i.leftPadding>d?T+o-5:L+o+5:(L-T)/2+T+o}).attr("y",function(l,T){return l.vert?i.gridLineStartPadding+b.length*(i.barHeight+i.barGap)+60:(T=l.order,T*g+i.barHeight/2+(i.fontSize/2-2)+s)}).attr("text-height",u).attr("class",function(l){const T=Y(l.startTime);let L=Y(l.endTime);l.milestone&&(L=T+u);const W=this.getBBox().width;let V="";l.classes.length>0&&(V=l.classes.join(" "));let G=0;for(const[Q,rt]of _.entries())l.type===rt&&(G=Q%i.numberSectionStyles);let $="";return l.active&&(l.crit?$="activeCritText"+G:$="activeText"+G),l.done?l.crit?$=$+" doneCritText"+G:$=$+" doneText"+G:l.crit&&($=$+" critText"+G),l.milestone&&($+=" milestoneText"),l.vert&&($+=" vertText"),W>L-T?L+W+1.5*i.leftPadding>d?V+" taskTextOutsideLeft taskTextOutside"+G+" "+$:V+" taskTextOutsideRight taskTextOutside"+G+" "+$+" width-"+W:V+" taskText taskText"+G+" "+$+" width-"+W}),dt().securityLevel==="sandbox"){let l;l=xt("#i"+e);const T=l.nodes()[0].contentDocument;S.filter(function(L){return c.has(L.id)}).each(function(L){var W=T.querySelector("#"+CSS.escape(e+"-"+L.id)),V=T.querySelector("#"+CSS.escape(e+"-"+L.id+"-text"));const G=W.parentNode;var $=T.createElement("a");$.setAttribute("xlink:href",c.get(L.id)),$.setAttribute("target","_top"),G.appendChild($),$.appendChild(W),$.appendChild(V)})}}f(z,"drawRects");function O(h,g,s,o,u,m,d,b){if(d.length===0&&b.length===0)return;let a,S;for(const{startTime:W,endTime:V}of m)(a===void 0||W<a)&&(a=W),(S===void 0||V>S)&&(S=V);if(!a||!S)return;if((0,q.default)(S).diff((0,q.default)(a),"year")>5){it.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const c=n.db.getDateFormat(),l=[];let T=null,L=(0,q.default)(a);for(;L.valueOf()<=S;)n.db.isInvalidDate(L,c,d,b)?T?T.end=L:T={start:L,end:L}:T&&(l.push(T),T=null),L=L.add(1,"d");H.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",W=>e+"-exclude-"+W.start.format("YYYY-MM-DD")).attr("x",W=>Y(W.start.startOf("day"))+s).attr("y",i.gridLineStartPadding).attr("width",W=>Y(W.end.endOf("day"))-Y(W.start.startOf("day"))).attr("height",u-g-i.gridLineStartPadding).attr("transform-origin",function(W,V){return(Y(W.start)+s+.5*(Y(W.end)-Y(W.start))).toString()+"px "+(V*h+.5*u).toString()+"px"}).attr("class","exclude-range")}f(O,"drawExcludeDays");function N(h,g,s,o){if(s<=0||h>g)return 1/0;const u=g-h,m=q.default.duration({[o??"day"]:s}).asMilliseconds();return m<=0?1/0:Math.ceil(u/m)}f(N,"getEstimatedTickCount");function R(h,g,s,o){const u=n.db.getDateFormat(),m=n.db.getAxisFormat();let d;m?d=m:u==="D"?d="%d":d=i.axisFormat??"%Y-%m-%d";let b=qe(Y).tickSize(-o+g+i.gridLineStartPadding).tickFormat(Ut(d));const a=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||i.tickInterval);if(a!==null){const S=parseInt(a[1],10);if(isNaN(S)||S<=0)it.warn(`Invalid tick interval value: "${a[1]}". Skipping custom tick interval.`);else{const c=a[2],l=n.db.getWeekday()||i.weekday,T=Y.domain(),L=T[0],W=T[1],V=N(L,W,S,c);if(V>Yt)it.warn(`The tick interval "${S}${c}" would generate ${V} ticks, which exceeds the maximum allowed (${Yt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(c){case"millisecond":b.ticks(Qt.every(S));break;case"second":b.ticks(Kt.every(S));break;case"minute":b.ticks(Zt.every(S));break;case"hour":b.ticks(te.every(S));break;case"day":b.ticks(Xt.every(S));break;case"week":b.ticks(se[l].every(S));break;case"month":b.ticks(Jt.every(S))}}}if(H.append("g").attr("class","grid").attr("transform","translate("+h+", "+(o-50)+")").call(b).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||i.topAxis){let S=Ge(Y).tickSize(-o+g+i.gridLineStartPadding).tickFormat(Ut(d));if(a!==null){const c=parseInt(a[1],10);if(isNaN(c)||c<=0)it.warn(`Invalid tick interval value: "${a[1]}". Skipping custom tick interval.`);else{const l=a[2],T=n.db.getWeekday()||i.weekday,L=Y.domain(),W=L[0],V=L[1];if(N(W,V,c,l)<=Yt)switch(l){case"millisecond":S.ticks(Qt.every(c));break;case"second":S.ticks(Kt.every(c));break;case"minute":S.ticks(Zt.every(c));break;case"hour":S.ticks(te.every(c));break;case"day":S.ticks(Xt.every(c));break;case"week":S.ticks(se[T].every(c));break;case"month":S.ticks(Jt.every(c))}}}H.append("g").attr("class","grid").attr("transform","translate("+h+", "+g+")").call(S).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}f(R,"makeGrid");function E(h,g){let s=0;const o=Object.keys(x).map(u=>[u,x[u]]);H.append("g").selectAll("text").data(o).enter().append(function(u){const m=u[0].split(_e.lineBreakRegex),d=-(m.length-1)/2,b=w.createElementNS("http://www.w3.org/2000/svg","text");b.setAttribute("dy",d+"em");for(const[a,S]of m.entries()){const c=w.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttribute("alignment-baseline","central"),c.setAttribute("x","10"),a>0&&c.setAttribute("dy","1em"),c.textContent=S,b.appendChild(c)}return b}).attr("x",10).attr("y",function(u,m){if(m>0)for(let d=0;d<m;d++)return s+=o[m-1][1],u[1]*h/2+s*h+g;else return u[1]*h/2+g}).attr("font-size",i.sectionFontSize).attr("class",function(u){for(const[m,d]of _.entries())if(u[0]===d)return"sectionTitle sectionTitle"+m%i.numberSectionStyles;return"sectionTitle"})}f(E,"vertLabels");function v(h,g,s,o){const u=n.db.getTodayMarker();if(u==="off")return;const m=H.append("g").attr("class","today"),d=new Date,b=m.append("line");b.attr("x1",Y(d)+h).attr("x2",Y(d)+h).attr("y1",i.titleTopMargin).attr("y2",o-i.titleTopMargin).attr("class","today"),u!==""&&b.attr("style",u.replace(/,/g,";"))}f(v,"drawToday");function y(h){const g={},s=[];for(let o=0,u=h.length;o<u;++o)Object.prototype.hasOwnProperty.call(g,h[o])||(g[h[o]]=!0,s.push(h[o]));return s}f(y,"checkUnique")},"draw")},styles:f(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")};export{Ui as diagram};
