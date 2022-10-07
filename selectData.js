let createtable = function(data){

    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table).setAttribute("id","table");   
    let row_1 =document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "年度/月份";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "當月營收";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "月增率%";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "去年同月營收";
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "年增率%";
    let heading_6 = document.createElement('th');
    heading_6.innerHTML = "當月累計營收";
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "去年累計營收";
    let heading_8 = document.createElement('th');    
    heading_8.innerHTML = "年增率%";
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    row_1.appendChild(heading_6);
    row_1.appendChild(heading_7);
    row_1.appendChild(heading_8);
    thead.appendChild(row_1);
    let list = data["data"];
    for (const i in list) {
        let row_next =document.createElement('tr');
        let body_1 = document.createElement('th');
        body_1.innerHTML = list[i]["ym"];
        let body_2 = document.createElement('th');
        if(list[i]["mRev"] !=null)
        body_2.innerHTML = list[i]["mRev"].toLocaleString();
        else
        body_2.innerHTML = "-";
        let body_3 = document.createElement('th');
        body_3.innerHTML = list[i]["mg"]+"%";
        if(list[i]["mg"]>=0){
            body_3.classList.add("up")
        }
        else{
            body_3.classList.add("down")
        }
        let body_4 = document.createElement('th');
        if(list[i]["lsRev"] !=null)
        body_4.innerHTML = list[i]["lsRev"].toLocaleString();
        else
        body_4.innerHTML = "-";
        let body_5 = document.createElement('th');
        body_5.innerHTML = list[i]["yg"]+"%";
        if(list[i]["mg"]>=0){
            body_5.classList.add("up")
        }
        else{
            body_5.classList.add("down")
        }
        let body_6 = document.createElement('th');
        if(list[i]["tmRev"] !=null)
        body_6.innerHTML = list[i]["tmRev"].toLocaleString();
        else
        body_6.innerHTML = "-";
        let body_7 = document.createElement('th');
        if(list[i]["ltRev"] !=null)
        body_7.innerHTML = list[i]["ltRev"].toLocaleString();
        else
        body_7.innerHTML = "-";
        let body_8 = document.createElement('th');
        body_8.innerHTML = list[i]["tyg"]+"%";
        if(list[i]["mg"]>=0){
            body_8.classList.add("up")
        }
        else{
            body_8.classList.add("down")
        }
        row_next.appendChild(body_1);
        row_next.appendChild(body_2);
        row_next.appendChild(body_3);
        row_next.appendChild(body_4);
        row_next.appendChild(body_5);
        row_next.appendChild(body_6);
        row_next.appendChild(body_7);
        row_next.appendChild(body_8);
        tbody.appendChild(row_next);
    }
}

    // let url = "https://localhost:7214/api/CodeReviewDb";
// let url = "https://stocksserver20220929144022.azurewebsites.net/Revenue";
 let url ="https://codereview06.azurewebsites.net/api/CodeReviewDb";

document.getElementById("btn1").onclick =async function(){
    document.getElementById("btn1").disabled = true;
    let oldtable = document.getElementById("table");
    if(oldtable != null){
        oldtable.remove();
    }
     let txtValue=document.getElementById("txt1").value;
     let title = document.getElementById("h1");
     title.textContent = "讀取中";
      await fetch(url,{
            method:"POST",
            headers: {"Content-Type": "application/json",
                      "Accept": "application/json"},
             body:`{"symbol":"${txtValue}"}`
        }).then(response => response.json())
        .then(json => {
                if(typeof(json)=="string"){
                console.log(typeof(json));
                json = JSON.parse(json)
                }
                createtable(json);
                title.textContent = `${json["symbol"]}-${json["name"]}`;
            }); 
            document.getElementById("btn1").disabled = false;
}
