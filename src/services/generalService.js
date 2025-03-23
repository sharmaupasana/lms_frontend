export function removeItemFromList(item, givenList) {
    var newList = []
    givenList.forEach(element => {
        if (element !== item) {
            newList.push(element)
        }
    });
    return newList
}