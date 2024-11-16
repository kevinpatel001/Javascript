try {

    setTimeout(() => {
        try { console.log(number) }
   catch(err){
    console.log(err+" internal error has been found")
   }
}, 4000)

}

catch (error) {
    console.log(error + "  outer error has been found")
}