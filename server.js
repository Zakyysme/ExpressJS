const express = require('express')
const supabase = require('@supabase/supabase-js')

const app = express();
app.use((express.json()))
const PORT = 3211 || process.env.PORT

const SUPABASE_URL = "";
const SUPABASE_SERVICE_ROLE =
  "";
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
