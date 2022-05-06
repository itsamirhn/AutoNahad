# AutoNahad
![Chrome](https://badgen.net/badge/icon/chrome?icon=chrome&label&color=cyan)
![Lastest Tag](https://badgen.net/github/tag/itsamirhn/AutoNahad?color=orange)


Tired of solving [maaref.ecnahad.ir](https://maaref.ecnahad.ir) exams? Use **AutoNahad** to solve it automatically...

## Usage for Chrome
- Install this project as Chrome Extension in your Chrome.
- In the exam page, when the questions are shown, press **Solve** button in **AutoNahad** chrome extension.
- Wait for the "Done!" alert, then finish the exam.

## Usage for Other Browsers (Or Chrome without extenstion)
- Open up the console tab in your browser while you are in the exam page.
- When the questions are shown, Copy & Paste the following code:


	``` js
  const inject = document.createElement('script');
	inject.setAttribute('src','https://cdn.jsdelivr.net/gh/itsamirhn/AutoNahad@v0.1/inject.js');
	inject.onload = () => {
    const script = document.createElement('script');
    script.innerHTML = 'checkAll().then(() => { alert("Done!") })'
    document.body.appendChild(script);
	}
  document.head.appendChild(inject);
	```
  
- Wait for the "Done!" alert, then finish the exam.
