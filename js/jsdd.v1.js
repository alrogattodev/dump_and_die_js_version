/******************
Dump & Die for Javascript
Version: 0.01.B - Always Beta
By Al Rogatto - al@rticons.com
Based and Inspired by Binny V A(binnyva (at) hotmail (dot) com
Date: 20/09/2024 - 1:13AM - Just managed to put my baby daughter to sleep
Objective: Dump all the content of an array, object or variable
******************************************************************************/
function dd(theArray,level) {
    let ddText = "";
    if(!level) level = 0;

    var levelPadding = "";
    for (let j=0; j<level+1; j++) levelPadding += "     ";
    if(typeof(theArray) == 'object') {
        for(let item in theArray) {
            let value = theArray[item];
            if(typeof(value) == 'object') {
                ddText += levelPadding + "'" + item + "'___\n";
                ddText += dd(value,level+1);
            } else {
                ddText += levelPadding  + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { 
        ddText = "====>"+ theArray+"<===("+typeof(arr)+")";
    }
    return ddText;
}
