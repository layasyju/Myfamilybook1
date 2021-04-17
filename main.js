var reasons=[
    Father,
    Mother,
    Grandad,
    Grandmom,
    Sister,
    Coco,
    Polo,
    ];
    var images=[
    "x.png",
    "mother.png",
    "grandfather.png",
    "grandmom.png",
    "puppu.png"
    ];
    
    var i=0;
    function nextslide(){
    document.getElementById("p3").innerHTML=reasons[i];
    document.getElementById("i1").src=images[i];
    i++;
    }