# AutoNahad
![Chrome](https://badgen.net/badge/icon/chrome?icon=chrome&label&color=cyan)
![Lastest Tag](https://badgen.net/github/tag/itsamirhn/AutoNahad?color=orange)

<div dir="rtl">

برای توضیحات فارسی به [اینجا](README.fa.md) مراجعه کنید.

</div>

AutoNahad is a tool that helps you to solve [maaref.ecnahad.ir](https://maaref.ecnahad.ir) exams.
It will solve all problems automatically or if you choose manually, it will show you the correctness of your answer (with red or green color).

### Sample
![Sample gif](https://raw.githubusercontent.com/itsamirhn/AutoNahad/master/sample.gif)

## Install Chrome Extension
- Clone project or Download the latest release from [here](https://github.com/itsamirhn/AutoNahad/archive/refs/tags/v1.0.zip)
- Unzip the file
- Open Chrome and go to **Extensions** > **Manage Extensions**
- Turn on **Developer mode** (top right corner)
- Click **Load unpacked** and select the folder you just unzipped

## Usage for Chrome Extension
- Go to the exam page when the timer is running
- Click on the **AutoNahad** extension
- Click **Solve** button
- Wait for the "Done!" alert, then finish the exam

### Usage for other browsers (not recommended)
- Go to the exam page when the timer is running
- Open up the console tab in your browser
- Copy & Paste the following code:

  ``` js
  const inject = document.createElement('script');
  inject.setAttribute('src','https://cdn.jsdelivr.net/gh/itsamirhn/AutoNahad@latest/inject.js');
  inject.onload = () => {
    const script = document.createElement('script');
    script.innerHTML = 'checkAll().then(() => { alert("Done!") })'
    document.body.appendChild(script);
    }
  document.head.appendChild(inject);
    ```
  
- Wait for the "Done!" alert, then finish the exam

## License
AutoNahad is licensed under the [MIT license](LICENSE).
