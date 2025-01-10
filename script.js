const express = require('express')

const app = express()

app.get("/users", (req, res) => {
    const users = [
        {
            name: "John",
            password: 123
        },
        {
            name: "Carl",
            password: 321
        }
    ]

    res.status(200).json(users)
})

const port = 8080;

app.listen(port, () => console.log(`Porta: http://localhost:${port}/users`))
