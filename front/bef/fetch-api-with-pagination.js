// fetchList is provided for you
// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>
// https://bigfrontend.dev/problem/call-APIs-with-pagination


// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
    // your code here
    let lastItemId = undefined;
    const items = [];
    while (items.length < amount) {
        const fetchedItems = await fetchList(lastItemId);
        console.log(fetchedItems);
        if (!fetchedItems.items.length) break;
        for (let item of fetchedItems.items) {
            items.push(item);
            lastItemId = item.id;
        }
    };

    return items.slice(0, amount);
}
