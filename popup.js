async function runFunc(func) {
     await chrome.scripting.executeScript({
        func: func,
        target: {
            tabId: (await chrome.tabs.query({active: true, currentWindow: true}))[0].id
        },
        world: 'MAIN',
    });
}
document.getElementById("run").addEventListener('click', async () => {
    await runFunc(() => {
        checkAll().then(() => {
            alert("Done!")
        });
    });
})
