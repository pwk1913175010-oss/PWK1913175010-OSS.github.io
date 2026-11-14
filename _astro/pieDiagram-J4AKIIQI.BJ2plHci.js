import{t as et}from"./chunk-JWPE2WC7.B73i2ts8.js";import{a as at}from"./mermaid.core.CXIFLtE_.js";import{i as rt,m as it}from"./chunk-6MUBBAK2.Dj9a9FFu.js";import{C as nt,H as ot,U as st,_ as lt,a as ct,b as dt,c as pt,f as gt,q as ht,v as ft}from"./chunk-BG4553SI.BASynoco.js";import{n as z}from"./d3-selection.BrDiixFX.js";import{n}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{n as mt}from"./mermaid-parser.core.DgFHCI6H.js";import{n as N,x as ut}from"./dist.Dkt41yTs.js";import{r as St}from"./d3-scale.Bw6WWFcY.js";var I=gt.pie,H={sections:new Map,showData:!1,config:I},x=H.sections,E=H.showData,vt=structuredClone(I),B={getConfig:n(()=>structuredClone(vt),"getConfig"),clear:n(()=>{x=new Map,E=H.showData,ct()},"clear"),setDiagramTitle:ht,getDiagramTitle:nt,setAccTitle:st,getAccTitle:ft,setAccDescription:ot,getAccDescription:lt,addSection:n(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);x.has(t)||(x.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),getSections:n(()=>x,"getSections"),setShowData:n(t=>{E=t},"setShowData"),getShowData:n(()=>E,"getShowData")},xt=n((t,a)=>{et(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),wt={parse:n(async t=>{const a=await mt("pie",t);z.debug(a),xt(a,B)},"parse")},Ct=n(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),$t=n(t=>{const a=[...t.values()].reduce((s,l)=>s+l,0),L=[...t.entries()].map(([s,l])=>({label:s,value:l})).filter(s=>s.value/a*100>=1);return ut().value(s=>s.value).sort(null)(L)},"createPieArcs"),Ht={parser:wt,db:B,renderer:{draw:n((t,a,L,s)=>{z.debug(`rendering pie chart
`+t);const l=s.db,W=dt(),c=rt(l.getConfig(),W.pie),U=40,w=18,q=4,C=450,$=C,D=at(a),u=D.append("g");u.attr("transform","translate(225,225)");const{themeVariables:i}=W;let[F]=it(i.pieOuterStrokeWidth);F??=2;const V=c.legendPosition,M=c.textPosition,X=c.donutHole>0&&c.donutHole<=.9?c.donutHole:0,g=Math.min($,C)/2-U,Z=N().innerRadius(X*g).outerRadius(g),j=N().innerRadius(g*M).outerRadius(g*M),f=u.append("g");f.append("circle").attr("cx",0).attr("cy",0).attr("r",g+F/2).attr("class","pieOuterCircle");const S=l.getSections(),J=$t(S),K=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let y=0;S.forEach(e=>{y+=e});const O=J.filter(e=>(e.data.value/y*100).toFixed(0)!=="0"),T=St(K).domain([...S.keys()]);f.selectAll("mySlices").data(O).enter().append("path").attr("d",Z).attr("fill",e=>T(e.data.label)).attr("class",e=>{let r="pieCircle";return c.highlightSlice==="hover"?r+=" highlightedOnHover":c.highlightSlice===e.data.label&&(r+=" highlighted"),r}),f.selectAll("mySlices").data(O).enter().append("text").text(e=>(e.data.value/y*100).toFixed(0)+"%").attr("transform",e=>"translate("+j.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const Q=u.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),m=[...S.entries()].map(([e,r])=>({label:e,value:r})),d=u.selectAll(".legend").data(m).enter().append("g").attr("class","legend");d.append("rect").attr("width",w).attr("height",w).style("fill",e=>T(e.label)).style("stroke",e=>T(e.label)),d.append("text").attr("x",22).attr("y",14).text(e=>l.getShowData()?`${e.label} [${e.value}]`:e.label);const h=Math.max(...d.selectAll("text").nodes().map(e=>e?.getBoundingClientRect().width??0));let v=C,b=490;const o=22,A=m.length*o;switch(V){case"center":d.attr("transform",(e,r)=>{const p=o*m.length/2,_=-h/2-22,k=r*o-p;return"translate("+_+","+k+")"});break;case"top":v+=A,d.attr("transform",(e,r)=>{const p=g;return`translate(${-h/2-22}, ${r*o-p})`}),f.attr("transform",()=>`translate(0, ${A+o})`);break;case"bottom":v+=A,d.attr("transform",(e,r)=>{const _=-h/2-22,k=r*o- -207;return"translate("+_+","+k+")"});break;case"left":b+=22+h,d.attr("transform",(e,r)=>{const p=o*m.length/2;return"translate(-207,"+(r*o-p)+")"}),f.attr("transform",()=>`translate(${h+w+q}, 0)`);break;default:b+=22+h,d.attr("transform",(e,r)=>{const p=o*m.length/2;return"translate(216,"+(r*o-p)+")"})}const P=Q.node()?.getBoundingClientRect().width??0,Y=$/2-P/2,tt=$/2+P/2,R=Math.min(0,Y),G=Math.max(b,tt)-R;D.attr("viewBox",`${R} 0 ${G} ${v}`),pt(D,v,G,c.useMaxWidth)},"draw")},styles:Ct};export{Ht as diagram};
