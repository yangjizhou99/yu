const $ = (s)=>document.querySelector(s); const $$=(s)=>Array.from(document.querySelectorAll(s));
function clamp(v,a,b){return Math.max(a,Math.min(b,v));} function lerp(a,b,t){return a+(b-a)*t;} function rand(a,b){return Math.random()*(b-a)+a;}

// Editor improvements
const MAX_STROKES = 200;
let DEV_VIEW = false;

// Path processing utilities
function simplifyPath(points, minDist=2) {
  if (points.length < 2) return points;
  const simplified = [points[0]];
  for (let i = 1; i < points.length; i++) {
    const last = simplified[simplified.length-1];
    const dx = points[i].x - last.x;
    const dy = points[i].y - last.y;
    if (Math.sqrt(dx*dx + dy*dy) >= minDist) {
      simplified.push(points[i]);
    }
  }
  return simplified;
}

function smoothPath(points, k=3) {
  if (points.length < 3) return points;
  const smoothed = [];
  for (let i = 0; i < points.length; i++) {
    let sumX = 0, sumY = 0, count = 0;
    for (let j = Math.max(0, i-k); j <= Math.min(points.length-1, i+k); j++) {
      sumX += points[j].x;
      sumY += points[j].y;
      count++;
    }
    smoothed.push({x: sumX/count, y: sumY/count});
  }
  return smoothed;
}

// DEV mode key binding
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'd') DEV_VIEW = !DEV_VIEW;
});

const SPECIES=[
  {id:'goldfish',name:'Goldfish',color:'#ffb347',swim:{baseSpeed:40,turnRate:1.8,tailFreq:2.2,tailAmp:10,vision:140,vChase:85},shape:{bodyRx:120,bodyRy:70,tailLen:80,tailWidth:60}},
  {id:'carp',name:'Carp',color:'#f0e68c',swim:{baseSpeed:55,turnRate:1.2,tailFreq:2.0,tailAmp:8,vision:160,vChase:95},shape:{bodyRx:150,bodyRy:55,tailLen:90,tailWidth:50}},
  {id:'koi',name:'Koi',color:'#ffffff',swim:{baseSpeed:48,turnRate:1.5,tailFreq:1.7,tailAmp:9,vision:150,vChase:88},shape:{bodyRx:140,bodyRy:60,tailLen:85,tailWidth:70}},
];
function buildFishPath2D(cx,cy,scale,sp){const p=new Path2D();const rx=sp.shape.bodyRx*scale,ry=sp.shape.bodyRy*scale;p.ellipse(cx,cy,rx,ry,0,0,Math.PI*2);const tailLen=sp.shape.tailLen*scale,tailWidth=sp.shape.tailWidth*scale;const tailX=cx-rx*0.95,topY=cy-tailWidth/2,botY=cy+tailWidth/2;p.moveTo(tailX,cy);p.lineTo(tailX-tailLen,topY);p.lineTo(tailX-tailLen,botY);p.closePath();return p;}
function drawSpeciesOutline(ctx,cx,cy,scale,sp,stroke='#6aa6c9'){const path=buildFishPath2D(cx,cy,scale,sp);ctx.save();ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.fillStyle='#0b1f2e';ctx.fill(path);ctx.stroke(path);ctx.restore();}

const editor={canvas:null,ctx:null,currentSpecies:SPECIES[0],brushSize:8,mode:'brush',color:'#ff7f50',strokeHistory:[],redoStack:[],maskPath:null,ownerName:'',fishName:''};
function initEditor(){editor.canvas=$('#editorCanvas');editor.ctx=editor.canvas.getContext('2d');setSpecies(SPECIES[0].id);bindEditorUI();drawEditor();}
function setSpecies(id){const sp=SPECIES.find(s=>s.id===id)||SPECIES[0];editor.currentSpecies=sp;editor.strokeHistory=[];editor.redoStack=[];editor.maskPath=buildFishPath2D(380,240,1.0,sp);drawEditor();$$('#species-list .species-item').forEach(el=>{el.classList.toggle('active',el.dataset.id===sp.id);});}
function drawEditor(){const ctx=editor.ctx;ctx.clearRect(0,0,editor.canvas.width,editor.canvas.height);drawSpeciesOutline(ctx,380,240,1.0,editor.currentSpecies,'#417c9e');ctx.save();ctx.clip(editor.maskPath);for(const s of editor.strokeHistory){if(s.type==='fill'){ctx.fillStyle=s.color;ctx.fill(editor.maskPath);}else{ctx.globalAlpha = s.type==='erase' ? 0.6 : 1.0;ctx.strokeStyle=(s.type==='erase')?'#0b1f2e':s.color;ctx.lineWidth=s.size;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(s.points[0].x,s.points[0].y);for(let i=1;i<s.points.length;i++){const a=s.points[i-1],b=s.points[i];const mx=(a.x+b.x)/2,my=(a.y+b.y)/2;ctx.quadraticCurveTo(a.x,a.y,mx,my);}ctx.stroke();ctx.globalAlpha = 1.0;}}ctx.restore();editor.ctx.save();editor.ctx.strokeStyle='#6aa6c9';editor.ctx.lineWidth=2;editor.ctx.stroke(editor.maskPath);editor.ctx.restore();$('#modeLabel').textContent=`模式：${editor.mode==='brush'?'画笔':editor.mode==='fill'?'填充':editor.mode==='eraser'?'橡皮':'吸管'}`;}
function bindEditorUI(){const list=$('#species-list');list.innerHTML='';SPECIES.forEach(sp=>{const div=document.createElement('div');div.className='species-item';div.dataset.id=sp.id;div.innerHTML=`<div><strong>${sp.name}</strong></div>`;div.onclick=()=>setSpecies(sp.id);list.appendChild(div);});$('#colorPicker').addEventListener('input',e=>{editor.color=e.target.value;});$('#brushSmall').onclick=()=>editor.brushSize=5;$('#brushMed').onclick=()=>editor.brushSize=12;$('#brushLarge').onclick=()=>editor.brushSize=24;$('#fillBtn').onclick=()=>editor.mode='fill';$('#eraserBtn').onclick=()=>editor.mode='eraser';$('#eyedropBtn').onclick=()=>editor.mode='eyedrop';document.addEventListener('keydown',(e)=>{if(e.key==='1')editor.brushSize=5;if(e.key==='2')editor.brushSize=12;if(e.key==='3')editor.brushSize=24;if(e.key.toLowerCase()==='f')editor.mode='fill';if(e.key.toLowerCase()==='e')editor.mode='eraser';if(e.key.toLowerCase()==='i')editor.mode='eyedrop';if(e.key.toLowerCase()==='z')undo();if(e.key.toLowerCase()==='y')redo();});$('#undoBtn').onclick=undo;$('#redoBtn').onclick=redo;$('#ownerName').addEventListener('input',e=>editor.ownerName=e.target.value);$('#fishName').addEventListener('input',e=>editor.fishName=e.target.value);$('#saveFish').onclick=saveCurrentFish;let drawing=false;let currentStroke=null;editor.canvas.addEventListener('mousedown',(e)=>{const pos=getMousePos(editor.canvas,e);if(editor.mode==='fill'){editor.strokeHistory.push({type:'fill',color:editor.color});editor.redoStack=[];drawEditor();return;}if(editor.mode==='eyedrop'){const col=pickColorAt(pos.x,pos.y);if(col)$('#colorPicker').value=col,editor.color=col;return;}drawing=true;currentStroke={type:editor.mode==='eraser'?'erase':'stroke',color:editor.color,size:editor.brushSize,points:[pos]};});editor.canvas.addEventListener('mousemove',(e)=>{if(!drawing)return;const pos=getMousePos(editor.canvas,e);currentStroke.points.push(pos);drawEditor();const ctx=editor.ctx;ctx.save();ctx.clip(editor.maskPath);ctx.globalAlpha = currentStroke.type==='erase' ? 0.6 : 1.0;ctx.strokeStyle=currentStroke.type==='erase'?'#0b1f2e':currentStroke.color;ctx.lineWidth=currentStroke.size;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();const pts=currentStroke.points;ctx.moveTo(pts[0].x,pts[0].y);for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i];const mx=(a.x+b.x)/2,my=(a.y+b.y)/2;ctx.quadraticCurveTo(a.x,a.y,mx,my);}ctx.stroke();ctx.globalAlpha = 1.0;ctx.restore();});window.addEventListener('mouseup',()=>{if(drawing&&currentStroke){currentStroke.points = smoothPath(simplifyPath(currentStroke.points));editor.strokeHistory.push(currentStroke);if(editor.strokeHistory.length > MAX_STROKES){editor.strokeHistory.shift();}editor.redoStack=[];currentStroke=null;drawing=false;drawEditor();}});}
function getMousePos(canvas,evt){const r=canvas.getBoundingClientRect();return{x:(evt.clientX-r.left)*(canvas.width/r.width),y:(evt.clientY-r.top)*(canvas.height/r.height)};}
function undo(){if(editor.strokeHistory.length){editor.redoStack.push(editor.strokeHistory.pop());drawEditor();}} function redo(){if(editor.redoStack.length){editor.strokeHistory.push(editor.redoStack.pop());drawEditor();}}
function pickColorAt(x,y){const ctx=editor.ctx;if(!ctx.isPointInPath(editor.maskPath,x,y))return null;const d=ctx.getImageData(Math.floor(x),Math.floor(y),1,1).data;const col=`#${[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,'0')).join('')}`;return col;}
function saveCurrentFish(){const owner=editor.ownerName?.trim()||'Guest';const name=editor.fishName?.trim()||('Fish-'+Math.floor(Math.random()*1000));const off=document.createElement('canvas');off.width=256;off.height=160;const oc=off.getContext('2d');oc.clearRect(0,0,off.width,off.height);oc.save();oc.translate(off.width*0.55,off.height*0.5);const scale=0.8*Math.min(off.width/(editor.currentSpecies.shape.bodyRx*2+editor.currentSpecies.shape.tailLen),off.height/(editor.currentSpecies.shape.bodyRy*2));oc.save();const mask=buildFishPath2D(0,0,scale,editor.currentSpecies);oc.clip(mask);oc.fillStyle='#ffffff';oc.fillRect(-off.width,-off.height,off.width*2,off.height*2);for(const s of editor.strokeHistory){if(s.type==='fill'){oc.fillStyle=s.color;oc.fill(mask);}else{oc.strokeStyle=s.type==='erase'?'#ffffff':s.color;oc.lineWidth=s.size*0.6;oc.lineCap='round';oc.lineJoin='round';oc.beginPath();let first=true;for(const pt of s.points){const px=(pt.x-380)*scale,py=(pt.y-240)*scale;if(first){oc.moveTo(px,py);first=false;}else{oc.lineTo(px,py);}}oc.stroke();}}oc.restore();oc.strokeStyle='#1e2d40';oc.lineWidth=2;oc.stroke(buildFishPath2D(0,0,scale,editor.currentSpecies));oc.restore();const img=new Image();img.src=off.toDataURL('image/png');img.onload=()=>{const fish={id:'f'+Math.random().toString(36).slice(2,9),species:editor.currentSpecies.id,owner,name,sizeScale:1.0,sprite:img,swim:JSON.parse(JSON.stringify(editor.currentSpecies.swim)),width:off.width,height:off.height,x:rand(200,800),y:rand(180,420),dir:rand(-Math.PI,Math.PI),v:editor.currentSpecies.swim.baseSpeed,tailPhase:0};POND.allFish.push(fish);refreshMineList();switchTab('pond');};}

const POND={canvas:null,ctx:null,w:1024,h:576,allFish:[],foods:[],lastT:0,feedCooldown:0,maxScale:2.0};
function initPond(){POND.canvas=$('#pondCanvas');POND.ctx=POND.canvas.getContext('2d');POND.w=POND.canvas.width;POND.h=POND.canvas.height;$('#feedBtn').onclick=tryFeed;requestAnimationFrame(loop);updateHud();}
function tryFeed(){const now=performance.now();if(now<POND.feedCooldown)return;POND.feedCooldown=now+1200;spawnFood();}
function spawnFood(){const food={id:'fd'+Math.random().toString(36).slice(2,9),x:rand(120,POND.w-120),y:0,vy:0,status:'falling',eatenBy:null,born:performance.now()};POND.foods.push(food);}
function loop(t){const dt=Math.min(0.033,(t-(POND.lastT||t))/1000);POND.lastT=t;updateFoods(dt);updateFish(dt);renderPond();requestAnimationFrame(loop);}
function updateFoods(dt){const g=400;const floor=POND.h-40;for(const f of POND.foods){if(f.status!=='falling')continue;f.vy+=g*dt;f.y+=f.vy*dt;if(f.y>=floor){f.y=floor;f.vy=0;f.status='fallen';}if(performance.now()-f.born>15000&&f.status!=='eaten'){f.status='expired';}}POND.foods=POND.foods.filter(f=>f.status!=='expired');}
function updateFish(dt) {
  for(const fish of POND.allFish) {
    const target = nearestFoodInVision(fish);
    let speedTarget = fish.swim.baseSpeed;
    let turn = fish.swim.turnRate;
    
    if(target) {
      const ang = Math.atan2(target.y-fish.y, target.x-fish.x);
      let diff = normalizeAngle(ang-fish.dir);
      fish.dir += clamp(diff, -turn*dt, turn*dt);
      speedTarget = fish.swim.vChase;
    } else {
      fish.dir += rand(-0.5, 0.5)*dt;
    }

    // Apply movement constraints
    fish.v = clamp(fish.v, 20, 160);
    fish.x += Math.cos(fish.dir) * fish.v * dt;
    fish.y += Math.sin(fish.dir) * fish.v * dt;
    
    // Boundary checks with position correction
    if(fish.x < 80) {
      fish.dir = Math.PI - fish.dir;
      fish.x = 80;
    } else if(fish.x > POND.w-80) {
      fish.dir = Math.PI - fish.dir;
      fish.x = POND.w-80;
    }
    
    if(fish.y < 60) {
      fish.dir = -fish.dir;
      fish.y = 60;
    } else if(fish.y > POND.h-60) {
      fish.dir = -fish.dir;
      fish.y = POND.h-60;
    }

    if(target && distance(fish.x, fish.y, target.x, target.y) < 28) {
      if(target.status !== 'eaten') {
        target.status = 'eaten';
        target.eatenBy = fish.id;
        fish.sizeScale = Math.min(POND.maxScale, fish.sizeScale * 1.01);
        toast(`${fish.name} 成长了 +1%`);
      }
    }
    fish.tailPhase += (1 + fish.v/100) * fish.swim.tailFreq * dt;
  }
}
function nearestFoodInVision(fish){let best=null,bd=1e9;for(const f of POND.foods){if(f.status==='expired'||f.status==='eaten')continue;const d=distance(fish.x,fish.y,f.x,f.y);if(d<fish.swim.vision&&d<bd){bd=d;best=f;}}return best;}
function renderPond() {
  const ctx = POND.ctx;
  ctx.clearRect(0, 0, POND.w, POND.h);
  drawBubbles(ctx);
  
  for(const f of POND.foods) {
    if(f.status === 'expired') continue;
    ctx.save();
    ctx.translate(f.x, f.y);
    drawPellet(ctx);
    ctx.restore();
  }
  
  for(const fish of POND.allFish) {
    ctx.save();
    ctx.translate(fish.x, fish.y);
    ctx.rotate(fish.dir);
    const s = fish.sizeScale * 0.8;
    ctx.scale(s, s);
    ctx.drawImage(fish.sprite, -fish.width*0.4, -fish.height*0.5);
    ctx.restore();
    
    ctx.save();
    ctx.font = '12px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.textAlign = 'center';
    ctx.fillText(`${fish.name}｜${fish.owner}`, fish.x, fish.y-50*fish.sizeScale);
    ctx.restore();

    // DEV_VIEW visualization
    if (DEV_VIEW) {
      ctx.save();
      ctx.translate(fish.x, fish.y);
      ctx.beginPath();
      ctx.arc(0, 0, fish.swim.vision, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      const target = nearestFoodInVision(fish);
      if (target) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(target.x - fish.x, target.y - fish.y);
        ctx.strokeStyle = 'rgba(255, 100, 100, 0.6)';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 3]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
      ctx.restore();
    }
  }
}
