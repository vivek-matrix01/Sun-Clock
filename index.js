
const timeLabel=document.querySelector('.time-label');
const sun=document.querySelector('.sun');
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

console.log("Vishal");

function sunAnimate(maxAngle){
    let days=0;
    sun.style.display='block';
    const x=centreX+radius*Math.cos(angle%pie);
    const y=centreY-(radius-Math.max(45, Math.min(sun.offsetHeight, 70)))*Math.sin(angle%pie);
    sun.style.left=`${x-sun.offsetWidth/2}px`;
    sun.style.top=`${y}px`;
    sun.style.width = `${window.innerWidth * 0.1}px`; 
sun.style.height = `${window.innerWidth * 0.1}px`;
    if(angle%pie>=0 && angle%pie<=pie/3) 
        {sun.backgroundColor='#FDECA7';
             sun.boxShadow= '0 0 20px 10px #FFD700';
             timeLabel.innerText='Good Morning !';
        }
    if(angle%pie>pie/3 && angle%pie<=pie/2) 
        {sun.backgroundColor='#FDECA7';
             sun.boxShadow= '0 0 20px 10px #d1c375ff';
             timeLabel.innerText='Good Afternoon !';
        }
    if(angle%pie>pie/2 && angle%pie<=3*pie/4) 
        {sun.backgroundColor='#FDECA7';
             sun.boxShadow= '0 0 20px 10px #2c2c2bff';
             timeLabel.innerText='Good Evening !';
        }

        days=time/24;
        timeLabel.innerText+=`${days.toFixed(2)} day`;
    if(angle<=maxAngle){
        angle+=0.009;
        requestAnimationFrame(()=>sunAnimate(maxAngle));
    }

}

document.addEventListener('input',()=>{
    angle=0;
     time=parseInt(input.value);
    
    const maxAngle=(pie/24)*time;
    if(time<=0){return ;}
    sunAnimate(maxAngle);

    
 
});
