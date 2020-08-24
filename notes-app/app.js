const chalk= require('chalk')
const yargs= require('yargs')
const notes = require('./notes')

yargs.command({
        command:'add',
        describe:'adding a note',
        builder:{
            title:{
                describe:"Buy",
                type:'string',
                demandOption: 'true'
            },
            body:{
                describe:"note body",
                type:'string',
                demandOption: 'true'
            }
        },
        handler:function(argv){
            console.log('Body: ', argv.body)
        },

})
yargs.command({
    command:'remove',
    describe:'removing a note',
    handler:function(){
        console.log('removing a note')
    },
})
yargs.command({
        command:'list',
        describe:'listing a note',
        handler:function(){
            console.log('listing a note')
        },
})
yargs.command({
    command:'read',
    describe:'reading a note',
    handler: function(){
        console.log('reading a note')
    },
})
console.log(yargs.argv)
// const fs= require('fs')

// // const book={
// //     title:'ego is the enemy',
// //     author:'Ryan Holiday'
// // }
// // const bookJSON= JSON.stringify(book)
// // // const bookstring=JSON.parse(bookJSON)
// // // console.log(bookstring)
// // fs.writeFileSync('1-json.json n',bookJSON)
// const asd = fs.readFileSync('1-json.json n')
// console.log(asd.toString)