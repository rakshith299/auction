const div = document.getElementById("main-cont");

const color = {
    "COMPLETED": "completed",
    "PENDING": "pending",
    "APPROVED": "approved",
    "CANCELLED": "cancelled"
}





function addData(each){
    const card = document.createElement("div");
    card.classList.add("card");
    let col = color[each.status];

     function navigate(){
        const a = document.createElement("a");
        a.href = "./auction.html";
        document.cookie = `caseNumber=${each.caseNumber}; path=/auction.html`
        a.click();
    }


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


    card.addEventListener("click", navigate);

    

    div.appendChild(card);

    
}

async function getData(){
    try{
        const received = await fetch("https://gauravgitacc.github.io/postAppData/auctionData.json", {method: "GET"});
        const res = await received.json();
        for(let i = 0; i < res.length; i++){
            addData(res[i]);
        }
    }

    catch(e){
        console.log(e);
    }
    

}


getData();



/*

<div class = "card">
            <div class = "top-cont">
                <div class = "app-cno-cont">
                    <span class = "status">APPROVED</span>
                    <span class = "cno">S230SKAN</span>
                </div>
                <div class = "date-cont">
                    <span class = "date">Mar 24, 2023, 5:03:24 PM</span>
                </div>
            </div>
            <hr class = "hr">
            <div class = "lm-add-cont">
                <span class = "lm">Bellenduru spike lake</span>
                <span class = "add">KHB Colony, Basaveshwar Nagar, Bengaluru, Karnataka, India</span>
            </div>
            <div class = "price-cont">
                <span class = "price">₹ 0</span>
            </div>
        </div>


*/