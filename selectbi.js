let getUrlString = window.location.href;
let winurl = new URL(getUrlString);
let symbolID = winurl.searchParams.get('text1')
console.log(symbolID);
let url ="https://codereview06.azurewebsites.net/api/CodeReviewDb";
// let url = "https://localhost:7214/api/CodeReviewDb";
console.log(url+"?value="+symbolID);
$.ajax({
    url:url+"?value="+symbolID,
    type:'Get',
    success: function(data){
        $("#h1").textContent = "讀取中";
        console.log(data);
        
        if(data == undefined)
            $("#h1").text(`${symbolID}-查無基本資料`);
        else if(data[0]==undefined)
            $("#h1").text(`${symbolID}-是ETF`);
        else
            addinformation(data);
    },
    error: function(){
        $("#h1").text(`${symbolID}-查無基本資料`);
    },
    datatype: JSON
})
let addinformation = function(data){
    sessionStorage.setItem(`${symbolID}`,data);
    $("#h1").text(`${data[0]["symbolId"]}-${data[0]["comName"]}`);
    $("#td1").text(data[0]["comName"]);
    $("#td2").text(data[0]["engAdd"]);
    $("#td3").text(data[0]["estab"]); 
    $("#td4").text(data[0]["ld"]);
    $("#td5").text(data[0]["lc"]);
    $("#td6").text(data[0]["chairman"]);
    $("#td7").text(data[0]["gm"]);
    $("#td8").text(data[0]["sc"]);
    $("#td9").text(data[0]["nooso"]);
    $("#td10").text(data[0]["mcm"]);
    $("#td11").text(data[0]["srodas"]);
    $("#td12").text(data[0]["mb"]);
    $("#td13").text(data[0]["spokesman"]);
    $("#td14").text(data[0]["actsp"]);
    $("#td15").text(data[0]["tephsw"]);
    $("#td16").text(data[0]["fxn"]);
    $("#td17").text(data[0]["cWebsite"]);
    $("#td18").text(data[0]["email"]);
    $("#td19").text(data[0]["sa"]);
    $("#td20").text(data[0]["va"]);
    $("#td21").text(data[0]["comAdd"]);
    $("#td22").text(data[0]["market"]);
    $("#td23").text(data[0]["grp"]);
}