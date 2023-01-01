<div dir="rtl">

# اتو نهاد

![Chrome](https://badgen.net/badge/icon/chrome?icon=chrome&label&color=cyan)
![Lastest Tag](https://badgen.net/github/tag/itsamirhn/AutoNahad?color=orange)

<div dir="ltr">

For English documentation, see [here](README.md).

</div>

«اتو نهاد» یه ابزاره که بهتون کمک میکنه سوالای امتحان سایت [maaref.ecnahad.ir](https://maaref.ecnahad.ir) رو حل کنید.
این برنامه به صورت خودکار همه سوال‌هارو حل میکنه ولی اگه میخواین به صورت دستی از این ابزار استفاده کنین، هنگام وارد گزینه‌ها در امتحان، درست یا غلط بودن اون رو با رنگ سبزو قرمز نشون میده.

  # متاسفانه این کد دیگر کار نمیکند!
  
### نمونه
![Sample gif](https://raw.githubusercontent.com/itsamirhn/AutoNahad/master/sample.gif)

## نصب اکستنشن کروم
- پروژه را کلون (clone) کنین یا آخرین نسخه را از [اینجا](https://github.com/itsamirhn/AutoNahad/archive/refs/tags/v1.0.zip) دانلود کنید.
- فایل دانلود شده رو حالت فشرده خارج کنین.
- کروم را باز کرده و به بخش **Extensions** و سپس **Manage Extensions** بروید.
- دکمه **Developer mode** (بالا راست صفحه) را روشن کنید. 
- بر روی **Load unpacked** کلیک کنید و سپس فولدر از حالت فشرده خارج شده را انتخاب کنید.

## نحوه استفاده از اکستنشن کروم
- وارد صفحه آزمون شوید و مطمئن شوید که تایمر آزمون در حال اجرا می‌باشد.
- روی اکستنشن **AutoNahad** کلیک کنید.
- روی دکمه **Solve** کلیک کنید.
- منتظر پیغام "Done !" بمانید و سپس آزمون را به اتمام برسانید.

### نحوه استفاده برای بقیه مرورگر (پیشنهاد نمیشود)
- وارد صفحه آزمون شوید و مطمئن شوید که تایمر آزمون در حال اجرا می‌باشد.
- بخش کنسول (console) مرورگر خود را باز کنید.
- کد زیر را در محیط کنسول کپی و پیست کنید.

</div>

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
  
<div dir="rtl">

- منتظر پیغام "Done !" بمانید و سپس آزمون را به اتمام برسانید.

## لایسنس 
نرم‌افزار «اتو نهاد» تحت لایسنس [MIT](LICENSE) منتشر شده است و رایگان می‌باشد.
</div>
