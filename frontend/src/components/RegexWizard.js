function conStartRegex(str){
    if (str.charAt(0) === str.charAt(0).toUpperCase() && str.slice(1) === str.slice(1).toLowerCase()){
      let arr = str.replace(/\b([^aeiou]+)([a-z]*)\b/gi, "$2$1ay").toLowerCase().split("")
      arr[0] = arr[0].toUpperCase()
      return arr.join("")
    } else if (str === str.toUpperCase()) {
      return str.replace(/\b([^aeiou]+)([a-z]*)\b/gi, "$2$1AY")
    } else {
      return str.replace(/\b([^aeiou]+)([a-z]*)\b/gi, "$2$1ay")
    }
  }
  
  function vowStartRegex(str){
    if (str === str.toUpperCase()) {
      return (str.replace(/[aeiou]\b/gi, "$&Y")).replace(/[a-z]\b/gi, "$&AY")
    } else {
      return (str.replace(/[aeiou]\b/gi, "$&y")).replace(/[a-z]\b/gi, "$&ay")
    }
  }
  
  function piglatin(str){
    let arr = str.split(" ")
    for(let i=0;i<arr.length;i++){
      if (arr[i].length < 3){
      } else if (["a","e","i","o","u"].includes(arr[i].charAt(0).toLowerCase())){
        arr[i] = vowStartRegex(arr[i])
      } else {
        arr[i] = conStartRegex(arr[i].split("").filter(a => ![`'`,`-`].includes(a)).join(""))
      }
    }
    return arr.join(" ")
  }
  
  function slothRegex(str){
    return str.replace(/([aeiou])\1|([aeiou])|([fhmnrswy])/gi,"$1$1$1$2$2$3$3")
  }
  
  function catmeow(str){
    return str.toLowerCase().replace(/(wr)|([rl])/g,"w").replace(/([:=;])(.{0,}?)\)/g,"$1$23").replace(/eow|(ow)/g,"eow").replace(/\bn\B/g,"ny")
  }
  
  function batRegex(str){
    return str.replace(/([Ee])/g,"$1$1").replace(/(W)/g,"V").replace(/(w)/g,"v").replace(/([!?]+)/g,"$1 EEK$1").replace(/i/g,"ee").replace(/I/g,"EE")
  }
  
  function llamaRegex(str){
    return str.replace(/(^|[^Ll])l(?=[^Ll]|$)/g,"$1ll").replace(/(^|[^Ll])L(?=[^Ll]|$)/g,"$1Ll").replace(/n/g,"ñ").replace(/N/g,"Ñ").replace(/s/g,"sp").replace(/S/g,"Sp")
  } 
  
  function llamaSpit(str){
    let newstr = llamaRegex(str)
    if (["?","!","."].includes(newstr.charAt(newstr.length - 1))){newstr += " P"}else{newstr += ", p"}
    return newstr + "tooey!"
  }
  
  function kenCaps(str){
    let arr = str.toLowerCase().split(" ")
    for(let i = 0; i<arr.length; i++){
      arr[i] = arr[i].split("")
      for(let j = 1; j<arr[i].length; j+=2){
        arr[i][j] = arr[i][j].toUpperCase()
      }
      arr[i] = arr[i].join("")
    }
    return arr.join(" ")
  }
  
  function kenRegex(str){
    return str.replace(/x/gi,"ks").replace(/oo/gi,"u")
  }
  
  function VVdo(str,v1,v2){
    let arr = str.toLowerCase().split(v1 + v2)
    let newstr = arr[0]
    for (let i = 1; i<arr.length; i++){
      newstr += [v1,v2][Math.floor(Math.random() * 2)]
      newstr += arr[i]
    }
    return newstr
  }
  
  function kenVVhandler(str){
    let newstr = VVdo(str,"o","u")
    newstr = VVdo(newstr,"e","a")
    newstr = VVdo(newstr,"i","o")
    newstr = VVdo(newstr,"g","h")
    newstr = VVdo(newstr,"e","i") //maybe
    newstr = VVdo(newstr,"i","e") //maybe
    return newstr
  }
  
  function chickenScratch(str){
    return kenCaps(kenVVhandler(kenRegex(str)))
  }
  
  // function ferretFlip(str){
  //   if (str.length < 2){return str}
  //   if (/[^a-z\d -]/gi.test(str)){
  //     return "" + str.charAt(0) + str.slice(1,fRegCount(str)).split("").reverse().join("") + str.slice(fRegCount(str))
  //   } else {
  //     return "" + str.charAt(0) + str.slice(1, str.length - 1).split("").reverse().join("") + str.slice(str.length - 1)
  //   }
  // }
  
  function ferretFlip(str){
    if (str.length < 2){return str}
    return "" + str.charAt(0) + str.slice(1,str.length-1).split("").reverse().join("") + str.slice(str.length-1)
  }
  
  function ferretSpace(str){
    return str.replace(/([^a-z\d -]+)(?! )/gi,"$1 ")
  }
  
  // function fRegCount(str){
  //   return str.search(/[^a-z\d -]+/gi)
  // }
  
  function ferretWheel(str){
    let arr = ferretSpace(str).split(" ")
    for (let i = 0; i <arr.length; i++){
      if (/[^a-z\d -]/gi.test(arr[i])){
        arr[i] = ferretFlip(arr[i].slice(0,arr[i].search(/[^a-z\d -]+/gi))) + /[^a-z\d -]+/gi.exec(arr[i])
      } else {
        arr[i] = ferretFlip(arr[i])
      }
    }
    return arr.join(" ").replace(/ $/,"")
  }
  
  function horseRegex(str){
    return str.toUpperCase().replace(/AGE?\b|E\b/g,"EIGH").replace(/(?<![OU])O(?![OU])/g,"OU").replace(/(?<![OU])U(?![OU])/g,"UO").replace(/G(?=Y)/,"GH")
  }
  
  