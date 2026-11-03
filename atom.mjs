import * as THREE from './vendor/three.module.js';

export function mountAtom(stage) {
  const canvas = stage.querySelector('canvas');
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true, powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.35;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-4.5,4.5,4.5,-4.5,.1,30);
  camera.position.set(0,0,12);
  scene.add(new THREE.AmbientLight(0xffffff, 1.7));
  const key = new THREE.DirectionalLight(0xffffff, 4.5); key.position.set(-3,5,6); scene.add(key);
  const fill = new THREE.DirectionalLight(0x9db6ff, 2.5); fill.position.set(4,-2,3); scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 3); rim.position.set(-2,-3,-4); scene.add(rim);
  const atom = new THREE.Group(); scene.add(atom);
  const nucleus = new THREE.Group(); atom.add(nucleus);
  const sphereGeometry = new THREE.SphereGeometry(1,40,32);
  const coreMaterial = new THREE.MeshPhysicalMaterial({color:0x4168dc,roughness:.23,metalness:.28,clearcoat:1,clearcoatRoughness:.14});
  const corePositions = [[0,0,.45,.48],[-.42,.23,.12,.43],[.37,.32,.08,.45],[.38,-.3,.16,.44],[-.34,-.36,.1,.46],[0,.02,-.35,.5]];
  corePositions.forEach(([x,y,z,s])=>{const m=new THREE.Mesh(sphereGeometry,coreMaterial);m.position.set(x,y,z);m.scale.setScalar(s);nucleus.add(m);});
  const orbitDefinitions = [
    {id:'projects',rotation:.64,theta:.07,color:0xb19adf},
    {id:'activities',rotation:-.64,theta:3.26,color:0x74b9a8},
    {id:'experience',rotation:1.55,theta:3.58,color:0x99a9bd}
  ];
  function orbitPoint(t,rotation){
    const v=new THREE.Vector3(3.18*Math.cos(t),1.02*Math.sin(t),1.48*Math.sin(t));
    return v.applyAxisAngle(new THREE.Vector3(0,0,1),rotation);
  }
  const orbitMaterial = new THREE.LineBasicMaterial({color:0x9eacc4,transparent:true,opacity:.36});
  const electrons = orbitDefinitions.map(def=>{
    const pts=Array.from({length:257},(_,i)=>orbitPoint(i/256*Math.PI*2,def.rotation));
    const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),orbitMaterial);atom.add(line);
    const material=new THREE.MeshPhysicalMaterial({color:def.color,roughness:.22,metalness:.19,clearcoat:1,clearcoatRoughness:.15});
    const mesh=new THREE.Mesh(sphereGeometry,material);mesh.scale.setScalar(.29);atom.add(mesh);
    return {...def,mesh,button:stage.querySelector(`[data-node="${def.id}"]`)};
  });
  let width=1,height=1,frame=0,disposed=false,time=0,last=performance.now(),hovered='',inside=false,focused=false;
  let tiltX=0,tiltY=0;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const vector=new THREE.Vector3();
  const coreButton=stage.querySelector('[data-node="cv"]');
  function resize(){
    width=stage.clientWidth;height=stage.clientHeight;
    renderer.setSize(width,height,false);
    const viewHeight=Math.max(8.2,8*height/width);
    camera.left=-viewHeight*width/height/2;camera.right=-camera.left;camera.top=viewHeight/2;camera.bottom=-viewHeight/2;camera.updateProjectionMatrix();
    draw();
  }
  function position(button,point){
    vector.copy(point).project(camera);
    const x=(vector.x*.5+.5)*width,y=(-vector.y*.5+.5)*height;
    button.style.left=`${x}px`;button.style.top=`${y}px`;
    if(button===coreButton)return;
    const label=button.querySelector('.node-label'),dx=x-width/2,dy=y-height/2;
    const distance=Math.hypot(dx,dy)||1,radius=Math.max(distance+65,Math.min(width,height)*.42);
    const halfWidth=label.offsetWidth/2+8,halfHeight=label.offsetHeight/2+8;
    const labelX=Math.max(halfWidth,Math.min(width-halfWidth,width/2+dx/distance*radius));
    const labelY=Math.max(halfHeight,Math.min(height-halfHeight,height/2+dy/distance*radius));
    label.style.top='50%';
    label.style.transform=`translate(calc(-50% + ${labelX-x}px),calc(-50% + ${labelY-y}px))`;
  }
  function draw(){
    const easing = reduced.matches ? 1 : .1;
    atom.rotation.x += ((reduced.matches ? 0 : tiltX) - atom.rotation.x) * easing;
    atom.rotation.y += ((reduced.matches ? 0 : tiltY) - atom.rotation.y) * easing;
    const target=hovered==='cv'?1.1:1;nucleus.scale.lerp(new THREE.Vector3(target,target,target),reduced.matches?1:.16);
    electrons.forEach((e,i)=>{
      const p=orbitPoint(e.theta+time*.16,e.rotation);
      e.mesh.position.copy(p);
      const s=hovered===e.id?.35:.29;e.mesh.scale.lerp(new THREE.Vector3(s,s,s),reduced.matches?1:.17);

    });
    atom.updateMatrixWorld(true);
    electrons.forEach(e=>position(e.button,e.mesh.getWorldPosition(new THREE.Vector3())));
    position(coreButton,nucleus.getWorldPosition(new THREE.Vector3()));
    renderer.render(scene,camera);
  }
  function animate(now){
    if(disposed)return;
    if(!document.hidden&&!inside&&!focused&&!reduced.matches)time+=Math.min((now-last)/1000,.05);
    last=now;if(!document.hidden)draw();frame=requestAnimationFrame(animate);
  }
  function pointerMove(event){
    if(event.pointerType === 'touch' || reduced.matches)return;
    const rect=stage.getBoundingClientRect();
    tiltY=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1))*.18;
    tiltX=-Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1))*.14;
  }
  function pointerEnter(event){if(event.pointerType !== 'touch')inside=true;}
  function pointerLeave(){inside=false;tiltX=0;tiltY=0;}
  function focusIn(){focused=true;tiltX=0;tiltY=0;}
  function focusOut(event){focused=stage.contains(event.relatedTarget);}
  stage.addEventListener('pointermove',pointerMove);
  stage.addEventListener('pointerenter',pointerEnter);
  stage.addEventListener('pointerleave',pointerLeave);
  stage.addEventListener('focusin',focusIn);
  stage.addEventListener('focusout',focusOut);
  const hoverListeners=[];
  [...electrons.map(e=>e.button),coreButton].forEach(button=>{
    const on=()=>{hovered=button.dataset.node;};const off=()=>{hovered='';};
    ['pointerenter','focus'].forEach(event=>{button.addEventListener(event,on);hoverListeners.push([button,event,on]);});
    ['pointerleave','blur'].forEach(event=>{button.addEventListener(event,off);hoverListeners.push([button,event,off]);});
  });
  const observer=new ResizeObserver(resize);observer.observe(stage);
  stage.classList.add('webgl-ready');resize();frame=requestAnimationFrame(animate);
  return ()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();stage.removeEventListener('pointermove',pointerMove);stage.removeEventListener('pointerenter',pointerEnter);stage.removeEventListener('pointerleave',pointerLeave);stage.removeEventListener('focusin',focusIn);stage.removeEventListener('focusout',focusOut);hoverListeners.forEach(([el,event,fn])=>el.removeEventListener(event,fn));scene.traverse(object=>{if(object.geometry)object.geometry.dispose();if(object.material)object.material.dispose();});renderer.dispose();};
}
