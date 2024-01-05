async function fetchProfleData() {
    const url = '';
    const fetching = await fetch(url);
    return await fetching.json()
}