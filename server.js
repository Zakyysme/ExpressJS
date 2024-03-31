const express = require('express')
const supabase = require('@supabase/supabase-js')

const app = express();
app.use((express.json()))
const PORT = 3211 || process.env.PORT

const SUPABASE_URL = "https://twkqtivsuyffancyevsl.supabase.co";
const SUPABASE_SERVICE_ROLE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3a3F0aXZzdXlmZmFuY3lldnNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMTgzMzUwNCwiZXhwIjoyMDI3NDA5NTA0fQ.jOW0BWL8OK0zIu0dclnwNKw0vv0zLRQ5ZPas9CMM0e8";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

app.get("/", async(request, response) => {
    const getData = await db.from("blog").select()
    response.json({
        getData
    }) 
})

app.post("/", async (request, response) => {
    const {title, description} = request.body
    const createData = await db.from("blog").insert({ title, description })
    console.log(createData)

    response.json({ createData })
})

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})