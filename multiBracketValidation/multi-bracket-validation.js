
function peek(stack) {
    let top = stack[stack.length - 1];
    return top
  }
  
 module.exports= function multiBracketValidation(string) {
    let leftCharacterStack = [];
    let splitString = string.split('');
    const leftChar = ['{','[','('];
    const rightChar = ['}',']',')'];
    for (let i = 0; i < splitString.length; i++) {
      if (leftChar.includes(splitString[i])) {
        leftCharacterStack.push(splitString[i]);
  
      }
      else
        if (rightChar.includes(splitString[i]))
        {
        if (splitString[i] === ')' && peek(leftCharacterStack) != '(' ||
            splitString[i] === '}' && peek(leftCharacterStack) != '{' ||
            splitString[i] === ']' && peek(leftCharacterStack) != '[') {
         
          return false
        }
        leftCharacterStack.pop();
      }
    }
    if (leftCharacterStack.length === 0) {
      //console.log('true');
      return true
    }
  }
 

 