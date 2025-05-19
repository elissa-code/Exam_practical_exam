const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');
const mysql = require('mysql2');
app.use(express.json());

const db = mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'epms2'
});

db.connect((err)=>{
if(err){
console.error("failed to connected to database:", err)
}
else{
    console.log('connected to database')
}
});

app.use(cors());

app.listen(PORT, ()=>{
    console.log(`server is listening on ${PORT}`);
});

app.post('/insert', (req, res) => {
    const {gols, totald, net, moth}= req.body;
    const sql ="insert into salary(GlossSalary, TotalDeduction, NetSalary, Month) VALUES(?, ?, ?, ?)";
    db.query(sql, [gols, totald, net, moth], (err, result)=>{
    if(err) res.json({Message: err});
    return res.json(result);
    });
});

app.get('/get', (req, res) => {
    const sql = 'SELECT * FROM salary';
    db.query(sql, (err, result) => {
        if (err) res.json({ message: err });
        return res.json(result);
    });
});

app.get('/get/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM salary WHERE GlossSalary=?';
    db.query(sql, [id], (err, result) => {
        if (err) res.json({ message: err });
        return res.json(result[0]);
    });
});

app.put('/put/:id', (req, res) => {
    const { id } = req.params;
    const { glos, totald, net,moth } = req.body;
    const sql = "UPDATE salary SET GlossSalary = ?, TotalDeduction= ?, NetSalary =?, Month =? WHERE GlossSalary=?";
    db.query(sql, [glos, totald, net, moth, id], (err, result) => {
        if (err) res.json({ message: err });
        return res.json(result);
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM salary WHERE GlossSalary = ?";
    db.query(sql, [id], (err, result) => {
        if (err) res.json({ message: err });
        return res.json(result);
    });
});

