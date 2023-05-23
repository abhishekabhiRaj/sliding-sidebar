var sidebar = document.getElementById('sidebar');
var sidebarSm = document.getElementById('sidebar-sm');

    sidebar.style.marginLeft = '40px'


function mouseEnter(){
   
    if(sidebar.style.marginLeft == '-500px'){
        sidebar.style.marginLeft = '40px'
        console.log(sidebar.style, sidebarSm.style)
    }
}


function mouseLeave(){
   
    if(sidebar.style.marginLeft == '40px'){
        sidebar.style.marginLeft = '-500px'
        sidebarSm.style.marginLeft = "0px"
        console.log(sidebar.style, sidebarSm.style)
    }
}