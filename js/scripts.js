window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})



let tabLink = document.getElementById("tabs").querySelectorAll("a");
let tabContents = document.getElementById("tab-inner").querySelectorAll('.form-content');
let tabLink2 = document.getElementById("tabs2").querySelectorAll("a");
let tabContents2 = document.getElementById("tab-inner2").querySelectorAll('.form-content');

window.onload = function (){

    // 啟動第一個panel
     panelDisplay(tabLink2[0]);
     //點擊  tab a連結
     for(let i = 0; i < tabLink2.length; i++){
       tabLink2[i].addEventListener('click',function(e){
        e.preventDefault();
         panelDisplay(this);
         // return false;
       });
       
       };
   
       function panelDisplay(activePanel){
          // Do something...
          for(let i =0;i<tabLink2.length;i++){
                
            //設定條件tabLink2 ==activePanel 
            //將tablink2代入for循環中並利用 if ...else 進行條件 classList.add增加class="active" ，就是每執行一次function的時候就進行全部tablink2s增加class
           
              if(tabLink2[i] == activePanel){
                tabLink2[i].classList.add("active");
                tabContents2[i].style.display="block";
                
              }else{
                tabLink2[i].classList.remove("active");
                tabContents2[i].style.display="none";
              }
          }
       };

           // 啟動第一個panel
     panelDisplay2(tabLink[0]);
     //點擊  tab a連結
     for(let i = 0; i < tabLink.length; i++){
       tabLink[i].addEventListener('click',function(e){
        e.preventDefault();
         panelDisplay2(this);
         // return false;
       });
       
       };
   
       function panelDisplay2(activePanel){
          // Do something...
          for(let i =0;i<tabLink.length;i++){
                
            //設定條件tabLink ==activePanel 
            //將tablink代入for循環中並利用 if ...else 進行條件 classList.add增加class="active" ，就是每執行一次function的時候就進行全部tablinks增加class
           
              if(tabLink[i] == activePanel){
                tabLink[i].classList.add("active");
                tabContents[i].style.display="block";
                
              }else{
                tabLink[i].classList.remove("active");
                tabContents[i].style.display="none";
              }
          }
       }
  
     };





