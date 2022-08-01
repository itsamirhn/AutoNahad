# AutoNahad
![Chrome](https://badgen.net/badge/icon/chrome?icon=chrome&label&color=cyan)
![Lastest Tag](https://badgen.net/github/tag/itsamirhn/AutoNahad?color=orange)
![Manual Usage Count](https://badgen.net/jsdelivr/hits/gh/itsamirhn/AutoNahad?color=yellow)

Tired of solving [maaref.ecnahad.ir](https://maaref.ecnahad.ir) exams? Use **AutoNahad** to solve it automatically...

### Sample
![Sample gif](https://raw.githubusercontent.com/itsamirhn/AutoNahad/master/sample.gif)

## Usage for Chrome Extension
- Install the extension with [this](#install-chrome-extension) instructions
- Go to the exam page when the timer is running
- Click on the **AutoNahad** extension
- Click **Solve** button
- Wait for the "Done!" alert, then finish the exam

## Usage for other browsers (Or Chrome without extension)
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

## Install Chrome Extension
- Clone project or Download the latest release from [here](https://github.com/itsamirhn/AutoNahad/archive/refs/tags/v1.0.zip)
- Unzip the file
- Open Chrome and go to **Extensions** > **Manage Extensions**
- Turn on **Developer mode** (top right corner)
- Click **Load unpacked** and select the folder you just unzipped

## License
[MIT](LICENSE)
