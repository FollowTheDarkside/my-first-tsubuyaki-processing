//#初めての #つぶやきProcessing #AltEdu2022
f=0
w=500
setup=_=>{createLoop({duration:15, gif:true})}
draw=_=>{f++||createCanvas(w,w)
c=circle
n=noise
background(0)
fill("#55acee")
c(w/2,w/2,w)
noFill()
s=0.0001
for(i=0;i<50;i++)v=3*s*i*f*n(s*i*f),x=w*n(1-v),y=w*n(v),r=i*n(v),
c(x,y,r),
i>48?(rect(x-r,y-r,r*2),fill(0),text("missing",x+r+2,y-r)):0
}

function keyTyped() {
    switch (key) {
        case 'f':
            let fs = fullscreen();
            fullscreen(!fs);
            break;
        default:
            break;
    }
}