// Desk-header

document.addEventListener('scroll', () => {
    const headerDesk = document.querySelector('.head');
    if (window.scrollY > 30){
        headerDesk.classList.add('scrolled');
    }
    else{
        headerDesk.classList.remove('scrolled');
    }
});


//text slide

const text = document.querySelector(".txt4");
const stngText = text.textContent;
const splitText = stngText.split("");
            
text.textContent="";

for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
    //console.log( splitText[i])            
}

let char=0;
let timer = setInterval(onTick, 50);

    function onTick(){
        const span = text.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
                
        if(char === splitText.length){
            complete();
            return;
        }

        function complete(){
            clearInterval(timer);
            timer=null;
        }
}

// Sentence Slide-desk

var ss = document.getElementById("ss");

s=1;
function senChange1(){
    if(s==1){
        ss.innerHTML="“Havenly — offering services that were affordable for everyone.”";
        s=2;
    }
    else if(s==2)
            {
                ss.innerHTML="If you’ve always dreamed of a glamorous home makeover experience but haven’t had the interior designer budget to go along with it, then you’re in luck.”";
                s=3;
            }
            else if(s==3)
                    {
                        ss.innerHTML="These Havenly interior designers nailed it.";
                        s=4;
                    }
                    else if(s==4)
                            {
                                ss.innerHTML="“Unlike [another design service] though, we actually loved everything we saw from Havenly.]”";
                                s=5;
                            }
                            else if(s==5)
                                    {
                                        ss.innerHTML="“Imagine if you could hire someone to scour your Pinterest boards and translate your pins into a perfectly decorated room in your home.”";
                                        s=1;
                                    }
}

setInterval("senChange1()",2000 );

// Mob-menu

var menu = document.getElementById("menu");
var menuDropDown =  document.getElementById("sideBar");
var mainHeader = document.getElementById("mainHeader");
var logoMob = document.getElementById("logoA")
menu.onclick = function(){
    menu.classList.toggle("openmenu");
    menuDropDown.classList.toggle("active");
    mainHeader.classList.toggle("active");
    logoMob.classList.toggle("active");
}

//Mob-header


document.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header-mob');
    if (window.scrollY > 30){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

document.addEventListener('scroll', () => {
    const header = document.querySelector('.menu');
    if (window.scrollY > 30){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

var ss1 = document.getElementById("ss1");
s=1;
function senChange(){
    if(s==1){
        ss1.innerHTML="“Havenly — offering services that were affordable for everyone.”";
        s=2;
    }
    else if(s==2)
            {
                ss1.innerHTML="If you’ve always dreamed of a glamorous home makeover experience but haven’t had the interior designer budget to go along with it, then you’re in luck.”";
                s=3;
            }
            else if(s==3)
                    {
                        ss1.innerHTML="These Havenly interior designers nailed it.";
                        s=4;
                    }
                    else if(s==4)
                            {
                                ss1.innerHTML="“Unlike [another design service] though, we actually loved everything we saw from Havenly.]”";
                                s=5;
                            }
                            else if(s==5)
                                    {
                                        ss1.innerHTML="“Imagine if you could hire someone to scour your Pinterest boards and translate your pins into a perfectly decorated room in your home.”";
                                        s=1;
                                    }
}

setInterval("senChange()",2000 );

//change-pic-mob
r=1;
function picChange(){
    
    var vog2 = document.getElementById("vog1");

    if(r==1){
        vog2.src="./Images/New-York-Times-logo-1.png";
        vog2.style.width="150px";
        r=2;
    }
    else if(r==2)
            {
                vog2.src="./Images/bazzar-2.png";
                vog2.style.width="100px";
                r=3;
            }
            else if(r==3)
                    {
                        vog2.src="./Images/Popsugar-1.png";
                        vog2.style.width="150px";
                        vog2.style.height="auto";
                        r=4;
                    }
                    else if(r==4)
                            {
                                vog2.src="./Images/Apartment_Therapy_1.png";
                                vog2.style.width="100px";
                                vog2.style.height="auto";
                                r=5;
                            }
                            else if(r==5)
                                    {
                                        vog2.src="./Images/vogue-2.png";
                                        r=1;
                                    }
}

setInterval("picChange()",2000);