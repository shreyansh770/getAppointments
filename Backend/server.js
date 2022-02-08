const express = require('express');
const authRouter = require('./routers/auth');
const cookieParser = require('cookie-parser');
const docRouter = require('./routers/docFun');
const appRouter = require('./routers/appointmentFun');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors())

// Routers

app.use('/auth',authRouter)
app.use("/docfun",docRouter)
app.use("/appFun",appRouter)



app.listen(8080,()=>{
    console.log('Server running on port 8080');
})