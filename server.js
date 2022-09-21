const exp = require("express");
const app = exp();
const path = require("path");

const bodyparser = require("body-parser"); // body-parser is used to take text from the body or post() while we can have value from get easily.  
app.use(bodyparser.urlencoded({extended: true}));
//app.use(bodyparser.json()); 

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/about_us", function(req,res){
    res.sendFile(path.join(__dirname,"about_us.html"));
});

/*app.get("/", function(req,res){
    res.send("text message");
})
*/
/*app.get("/admin_dashboard" , function(req,res){
    //res.send("text message from admin ")
    var obj = {username: "Fenil"}
    res.json()
})*/
app.get("/login" , function(req,res){
    res.sendFile(path.join(__dirname,"login.html"));
});
app.get("/user_login" , function(req,res){
    var username= req.query.username;
    var password = req.query.password;
    res.send("Username: " + username + ", password : " + password);
});
app.post("/user_login" , function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    //res.redirect("/admin_dashboard");
    res.send("POST -> Username: " + username + ", password : " + password);
    //res.send("POST: login");  
}); 
app.get("/admin_dashboard" , function(req,res){
    //res.send("text message from admin ")
    var obj = {username: "Fenil" , password: "545"};
    res.json(obj);
});
//localhost:3000/product/ 14578
app.get("/product/:id",function(req,res){
    var product_id = req.params.id;
    res.send("Product ID : " + product_id);
});

// we can do it like a both ways.

/*app.route("/login")
    .get(function(req,res){
        res.sendFile(path.join(__dirname,"login.html"));
    })
    .post(function(req,res){
        res.send("login post");
    });

*/

/*app.use("/about_us", function(req,res){
    res.send("about_us ");
})*/
//app.engine(ext,callback) to use the template 
var port = process.env.PORT || 3000; // return default setting for the environment 
app.listen(port);
