export function isYes(word){
    //return true or false
    word = word.toLowerCase();

    if (word === 'yes' || word === 'y' || word === 'yepp' || word === 'yeah') {
        return true;
    } else {
        return false;
    }
}