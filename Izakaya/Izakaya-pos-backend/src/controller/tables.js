exports.getAlltables = async (req , res) => {

    try{
        res.send('hello getAlltables')
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
    
}


exports.getTableById = async (req , res) => {
    try{
        res.send('hello getTableById')
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
    
}

exports.walkInTable = async (req , res) => {
    try{
        res.send('hello walkInTable')
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
    
}

exports.reserveTable = async (req , res) => {
    try{
        res.send('hello reserveTable')
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
    
}

exports.updateTable = async (req , res) => {
    try{
        res.send('hello updateTable')
    }catch(err){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
    
}