let res=document.getElementById("output");
let btn1=document.getElementById("searchbtn");
let img1=document.getElementById('img1');
let btn2=document.getElementById('switch')
let key="467d24a2f3234731948221928241803"

img1.src="./icons/clear.svg";

res.innerHTML="<h3>&emsp;&emsp;please select a city</h3>";

let tempcf=false;
btn2.addEventListener("click",function(){
    if(tempcf===true){
        btn2.textContent="°C"
        tempcf=false
    }else{
        btn2.textContent="°F"
        tempcf=true
    }
    hallo()
})

function hallo(){
    let city=document.getElementById('inpt1').value;
    let url='https://api.weatherapi.com/v1/current.json?key='+key+'&q='+city;
    res.innerHTML="<h3>&emsp;&emsp;&emsp;&ensp;fetching data.</h3>"
    fetch(url)
    .then(rs=>{
        if(rs.ok){
            console.log('succ')
            return rs.json()
        }else{
            alert('fetch failed!')
        }
    })
    .then(data=>{
        let name =data.location.name;
        let temp1 = data.current.temp_c;
        let cond = data.current.condition.text;
        let country = data.location.country;
        let temp2 = data.current.temp_f;

        let tempf=temp2+"°F";
        let tempc=temp1+"°C";
        // 
        let temp=tempc
        /////////
        if(tempcf===false){
            temp=tempc
        }else{
            btn2.textContent="°F"
            temp=tempf
        }
        ////////
        res.innerHTML="<h1>"+name+"</h1>"+'Temperature:'+temp+
        '<br>Condition:'+cond+'<br>country:'+country;
        console.log(data)
        // ////////
    });
};
btn1.addEventListener("click",function(){
    hallo()
})