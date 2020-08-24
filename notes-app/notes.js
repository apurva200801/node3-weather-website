const addnote = functiom(title,body){
    const = loadnotes( )

}

const loadnotes= function(){
    cont databuffer = fs.readFileSync ('notes.json')
    const dataJSON = databuffer.tostring()
    return JSON.parse(dataJSON)
}
module.exports={
    addnote: addnote
    
}