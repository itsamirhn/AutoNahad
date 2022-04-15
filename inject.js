function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkAll() {
    for (const input of document.querySelectorAll(`input[type="radio"]`)) {
        if (submittedAnswers.includes(input.name)) { continue }
        input.click()
        input.style.accentColor = "red"
        await sleep(randomIntFromInterval(1000, 2000));
    }
}

async function answer(id, sleepTime) {
    const input = document.querySelector(`input[type="radio"][value="${id}"]`)
    input.click()
    input.style.accentColor = "green"
    await sleep(sleepTime);
}

const submittedAnswers = []

const origXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
    const xhr = new origXHR();
    xhr.open = (method, url) => {
        xhr.addEventListener('load', async function (event) {
            if (url.indexOf('update-answers') > -1) {
                const data = JSON.parse(event.target.responseText).data;
                const option = data.option[0]
                if (option.is_correct) {
                    submittedAnswers.push("q-" + option.question_id)
                    await answer(option.id)
                }
            }
        });
        origXHR.prototype.open.call(xhr, method, url);
    }
    return xhr;
};
