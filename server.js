const exp = require("express");
const app = exp();

app.get("/", function(req,res){
    res.send("text message");
})

app.get("/admin_dashboard" , function(req,res){
    res.send("text message from admin ")
})

/*app.get("/login" , function(req,res){

})
app.post("/login" , function(req,res){
    
})*/ 

// we can do it like a both ways.

app.route("/login")
    .get(function(req,res){

    })
    .post(function(req,res){

    });


app.use("/about_us", function(req,res){
    res.send("about us ")
})
//app.engine(ext,callback) to use the template 
var port = process.env.PORT || 3000; // return default setting for the environment 
app.listen(port);
