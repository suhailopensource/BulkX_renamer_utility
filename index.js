const fs = require('fs');
const path = require('path');
const replaceThis = "suhail"
const replaceWith = "bob"
const preview = false
const folder = __dirname
fs.readdir(folder,  (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  for (let index = 0; index < data.length; index++) {
    const item = data[index];   
    let oldFile = path.join(folder, item)
    let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
    if(!preview){
        fs.rename(oldFile, newFile, ()=>{
            console.log("rename succesful");
        })
    }else{
        if("data/" + item !== newFile){
          console.log("data/" + item + " will be renamed to " + newFile)
        }
    }
  }
  // console.log(data);
});
