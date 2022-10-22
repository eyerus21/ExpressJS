const express = require('express');
const path=require('path');
const app = express();
app.use(express.urlencoded());
app.get('/', (req, res) => {
let content=`<hr/><form action="http://localhost:3000/result" method="post">
<label for="name">Name :</label>
        <input type="text" name="name" id="name" placeholder="Name"/>
        <label for="age"> Age: </label>
        <input type="number" name="age" id="age" min="18"/> 
        <input type="submit" name="submit">
</form>`
 res.send(content);
});
app.post("/result",(req,res)=>{
    let name=req.body.name;
    let age=req.body.age;
    console.log(name+" "+age);
    res.send("welcome "+name+ " age"+age);
})
app.listen(3000);
console.log("servier is runnig at "+3000);