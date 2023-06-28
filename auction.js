let recCaseNo = document.cookie;
const spArr = recCaseNo.split("=");
const gotCaseNo = spArr[1];
const eachDiv = document.querySelector(".single-cont");

const color = {
    "COMPLETED": "completed",
    "PENDING": "pending",
    "APPROVED": "approved",
    "CANCELLED": "cancelled"
}



function formACard(each){
    const card = document.createElement("div");
    card.classList.add("card");
    let col = color[each.status];



    card.innerHTML = `
            <div class = "top-cont">
                <div class = "app-cno-cont">
                    <span class = ${col}>${each.status}</span>
                    <span class = "cno">${each.caseNumber}</span>
                </div>
                <div class = "date-cont">
                    <span class = "date">${each.date}</span>
                </div>
            </div>
            <hr class = "hr">
            <div class = "lm-add-cont">
                <span class = "lm">${each.fromLocation}</span>
                <span class = "add">${each.toLocation}</span>
            </div>
            <div class = "price-cont">
                <span class = "price">${each.fare}</span>
            </div>`

    

    eachDiv.appendChild(card);
}

async function getDataSec(){
    try{
        const receivedSec = await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json", {method: "GET"});
        const resSec = await receivedSec.json();
        console.log(resSec);
        const arr = resSec.filter((each) => {
            if(each.caseNumber === gotCaseNo){
                    return each;
            }
        })

        formACard(arr[0]);

        
    }

    catch(e){
        console.log(e);
    }


}


getDataSec();