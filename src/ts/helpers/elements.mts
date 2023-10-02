export function createListItem(contents: any) {
    const listItem = document.createElement('li');
    listItem.textContent = contents;
    return listItem;
};