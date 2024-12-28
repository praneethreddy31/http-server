const express = require("express");
const app = express();

const users = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]   
}];

app.get("/praneeth", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;

    // Loop through the kidneys array and check if each kidney object is valid
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i] && johnKidneys[i].healthy !== undefined) {
            if (johnKidneys[i].healthy) {
                numberOfHealthyKidneys += 1;
            }
        } else {
            console.log(`Invalid data at index ${i}:`, johnKidneys[i]);
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post("/praneeth", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json ({
        msg : "done!"
    })
})

app.put("/praneeth", function(req,res){
    for( let i= 0; i<users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

app.delete("/praneeth", function(req,res){
    const newKidney = [];
    for(let i = 0; i<=user[0].kidneys.length; i++){
        if(uses[0].kidneys[i].healthy){
            newkidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res,json({
        msg : "Done!"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
