/******************
Dump & Die for Javascript
<<<<<<< HEAD
Version: 0.03 - Enhanced with Die
By Al Rogatto - al@rticons.com
Based and Inspired by Binny V A (binnyva (at) hotmail (dot) com)
Created On: 18/05/2024 - 1:13AM - Just managed to put my baby daughter to sleep
Last Update: 30/10/2024
Objective: Dump all the content of an array, object or variable and halt execution
=======
Version: 0.02.B - Always Beta
By Al Rogatto - al@rticons.com
Based and Inspired by Binny V A(binnyva (at) hotmail (dot) com
Crated On: 18/05/2024 - 1:13AM - Just managed to put my baby daughter to sleep
Last Update: 20/09/2024
Objective: Dump all the content of an array, object or variable
>>>>>>> dev
******************************************************************************/
function dd(theArray, level = 0) {
    let result = [];
    const levelPadding = ' '.repeat((level + 1) * 5);

    if (typeof theArray === 'object') {
        for (let item in theArray) {
            if (theArray.hasOwnProperty(item)) {
                let value = theArray[item];
                if (typeof value === 'object') {
<<<<<<< HEAD
                    result.push(`${levelPadding}'${item}' {\n`);
                    result.push(dd(value, level + 1));
                    result.push(`${levelPadding}}\n`);
=======
                    result.push(`${levelPadding}'${item}'{\n`);
                    result.push(dd(value, level + 1));
>>>>>>> dev
                } else {
                    result.push(`${levelPadding}'${item}' => "${value}"\n`);
                }
            }
        }
    } else {
<<<<<<< HEAD
        result.push(`====> ${theArray} <=== (${typeof theArray})`);
    }

    console.log(result.join(''));
    throw new Error('Execution halted by dd()');
=======
        return `====>${theArray}<===(${typeof theArray})`;
    }

    return result.join('');
>>>>>>> dev
}

