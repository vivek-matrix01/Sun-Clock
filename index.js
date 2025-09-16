

const dayDate=document.querySelector(".dayDate");
const place=document.querySelector(".place");
const temp=document.querySelector(".temp");
const status=document.querySelector(".status");
const air=document.querySelector(".air");
const sun=document.querySelector('.sun');
const moon=document.querySelector('.moon');
let input=document.querySelector('#time');
let height=document.querySelector('.parent').offsetHeight;
let width=document.querySelector('.parent').offsetWidth;
let centreX=width/2;
let centreY=height;
let radius=centreX;
let angle=0;
let time=0;

const pie=Math.PI;
window.addEventListener('resize',()=>{

    height=document.querySelector('.parent').offsetHeight;
    width=document.querySelector('.parent').offsetWidth;
    centreX=width/2;
    centreY=height;
    radius=centreX;
});



function sunAnimate(maxAngle){
   
    sun.style.display='block';
    moon.style.display='block';
    const x1=centreX-radius*Math.cos(angle);
    const y1=centreY-(radius-Math.max(45, Math.min(sun.offsetHeight, 70)))*Math.sin(angle);
    const x2=centreX+radius*Math.cos(angle);
    const y2=centreY+(radius-Math.max(45, Math.min(moon.offsetHeight, 70)))*Math.sin(angle);

    sun.style.left=`${x1-sun.offsetWidth/2}px`;
    sun.style.top=`${y1}px`;
    moon.style.left=`${x2-moon.offsetWidth/2}px`;
    moon.style.top=`${y2}px`;


    sun.style.width = `${window.innerWidth * 0.1}px`; 
sun.style.height = `${window.innerWidth * 0.1}px`;
    moon.style.width = `${window.innerWidth * 0.1}px`; 
moon.style.height = `${window.innerWidth * 0.1}px`;

       if(angle%(2*pie)<=pie && angle%(2*pie)>0){
        document.body.classList.add("change");
       }
       else{
         document.body.classList.remove("change");
       }


    if(angle<=maxAngle){
        angle+=0.008;
        requestAnimationFrame(()=>sunAnimate(maxAngle));
    }

}



const startAnimation=(dateandtime,city,state,country,temp_c,condition,airquality)=>{
    angle=0;
    time=parseInt(dateandtime.split(" ")[1].split(":")[0]);
    const date=parseInt(dateandtime.split(" ")[0]);
  
    
    dayDate.innerHTML=`${time}${time>=12?' PM':' AM'}`;
    place.innerHTML=`${country} <br>${city}`;
    temp.innerHTML=`${temp_c} *C`
    status.innerHTML=`${condition}`
    let airstatus=``;
    if(parseInt(airquality)<=2){airstatus=`Good`}
    else if(parseInt(airquality<=4)){airstatus=`Moderate`}
    else{airstatus=`Poor`}
    air.innerHTML=`Air Quality=${airquality} ${airstatus}`;


    const maxAngle=(pie/12)*time;
    if(time<=0){return ;}
    sunAnimate(maxAngle);

    
 
};
