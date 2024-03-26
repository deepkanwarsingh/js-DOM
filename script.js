var rec=document.getElementById('center');

rec.addEventListener('mousemove',function(detais){
    var location=rec.getBoundingClientRect();
    var insideRec=detais.clientX-location.left;

    if(insideRec<location.width/2){
        var redcolour=gsap.utils.mapRange(
            0,
            location.width/2,
            255,
            0,
            insideRec
            );
        gsap.to(rec,{
            backgroundColor: `rgb(${redcolour},0,0)`,
            
        })
    }
    else{
        var bluecolour=gsap.utils.mapRange(location.width/2,
        location.width,
        0,
        255,
        insideRec
        );
        gsap.to(rec,{
            backgroundColor: `rgb(0,0,${bluecolour})`,
            
        })
    }
});

rec.addEventListener("mouseleave",function(){
    gsap.to(rec,{
        backgroundColor:"white",
    });
});
