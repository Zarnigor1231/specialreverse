function specialreverse(str , arr){
    let count = str.split(' ')
    let str1 = ''
    for(let i=0; i<count.length; i++){
        // console.log(count[i])
        if(count[i].includes(arr)){
           str1+='  '+(count[i].split('').reverse()).join('')
        //    console.log(count[i].split('').reverse())
        }
        else(
            str1+=' ' +count[i]
        )
    }
    // console.log(str1.split(' '))

    return str1
}

console.log(specialreverse("word searches are super sun" , "s"))

// let arr = ['salom','sal']

// console.log(arr.reverse())