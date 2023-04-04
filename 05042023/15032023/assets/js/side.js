document.getElementsByTagName('i')[0].onclick=()=>{
    const bar= document.querySelector("#side")
    
    if(bar.className==="sidebar-close"){
        bar.className="sidebar-open";
    }
    
    else{
        bar.className="sidebar-close";
    }
}

// document.getElementsByTagName('i')[1].onclick=()=>{
//     const bar= document.querySelector("#side")
    
//     if(bar.className==="sidebar-close"){
//         bar.className="sidebar-open";
//     }
    
//     else{
//         bar.className="sidebar-close";
//     }
// }