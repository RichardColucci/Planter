let db = require('./models')
db.sync({force: true})
.then(()=>{
    db.close()
})
.catch((err)=>{
    db.close()
})