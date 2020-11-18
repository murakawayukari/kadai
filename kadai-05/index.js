const profile = {
    名前:'Yukari',
    年齢:20,
    趣味:'cooking',
    専攻:'literature',
    出身:'hiroshima',
    推し:'mamamoo'
}
const keys = Object.keys(profile)
console.log(keys)
for(let index =0; index<keys.length;index=index+1){
    const key = keys[index];
    console.log('私の'+ key+'は'+profile[key]+'です')
}
