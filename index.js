const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("ESTA ES LA VERSION NUEVA");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Juan" },
        { id: 2, name: "Maria" }
    ]);
});

app.post("/users", (req, res) => {
    const { name } =req.body;
    
    res.json({
        message: "Usuario creado",
        user: { id: Date.now(), name }
    });
});

app.listen(3000, () => {
    console.log("Servidor en puerto 3000")
})

