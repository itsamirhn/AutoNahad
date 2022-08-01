function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const solvedQuestions = []

async function onUpdateAnswers(data) {
    const option = data.option[0]
    const answerId = option.id
    const input = document.querySelector(`input[type="radio"][value="${answerId}"]`)
    if (option.is_correct) {
        solvedQuestions.push("q-" + option.question_id)
        input.click()
        input.style.accentColor = "green"
    } else {
        input.style.accentColor = "red"
    }
}

async function checkAll() {
    for (const input of document.querySelectorAll(`input[type="radio"]`)) {
        if (solvedQuestions.includes(input.name)) { continue }
        input.click()
        await sleep(randomIntFromInterval(1000, 2000));
    }
}

const origXHR = window.XMLHttpRequest;
window.XMLHttpRequest = function() {
    const xhr = new origXHR();
    xhr.open = (method, url) => {
        xhr.addEventListener('load', async function (event) {
            if (url.indexOf('update-answers') > -1) {
                const data = JSON.parse(event.target.responseText).data;
                await onUpdateAnswers(data);
            }
        });
        origXHR.prototype.open.call(xhr, method, url);
    }
    return xhr;
};
