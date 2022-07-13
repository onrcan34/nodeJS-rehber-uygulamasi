
const fs = require('fs');
const chalk = require('chalk');

/* 
    dosyayiOkuJsObjesineCevir fonksiyonu sayesinde, dosyadan okuma işlemi yapıldığında gelen değerler buffer türünde olur. 
    Bunu okunabilir veri haline getirmek için yani javascript objesine dönüştürme işlemi yapar.
*/
const dosyayiOkuJsObjesineCevir = () => {
    const myJsData = fs.readFileSync('rehber.json');
    const jsData = JSON.parse(myJsData);
    return jsData;
}

/* 
    dosyayaYaz fonksiyonu ile rehber.json dosyasına yazma işlemi yapılır.
*/
const dosyayaYaz = (jsData) => {
    fs.writeFile('rehber.json',JSON.stringify(jsData),(err) => {
        if (err) console.log(chalk.bgRed("Dosyaya yazdırılırken hata oluştu!"));
    })
}

/* 
    dosyadanKisiyiBulveSil fonksiyonu ile kisisil işlemi yapılırken rehber.json dosyası kontrol edilir
    içerisinde isim olarak verdiğimiz değer listede varsa silme işlemi yapılır yoksa uyarı mesajı verir
*/
const dosyadanKisiyiBulveSil = (isim, jsData) => {
    const donenDeger = jsData.find(function(elem) {
        return elem.isim === isim;
    })

    const yeniArray = jsData.filter(function(elem) {
        return elem.isim !== isim;
    })

    if (donenDeger) {
        console.log(chalk.bold.bgGreen("Dosya güncellendi"));
        console.log(`${chalk.cyan(isim)} rehberden ${chalk.green("bulundu")} ve ${chalk.green("silindi")}`);
        return yeniArray;
    } else {
        console.log(`${chalk.cyan(isim)} rehberde ${chalk.underline.red("bulunamadı")}.`);
        return jsData;
    }
}

/* 
    kisiBul fonksiyonu ile rehber.json dosyasında parametre olarak verdiğimiz isim değeri bulunuyor mu diye kontrol işlemi yapılır.
*/
const kisiBul = (isim, jsData) => {
    const kisiVarMi = jsData.find( elem => elem.isim === isim);

    if (kisiVarMi) {
        console.log(`${chalk.cyan(isim)} rehberden ${chalk.green("bulundu")}`);
        console.log(kisiVarMi);
    } else {
        console.log(`${chalk.cyan(isim)} rehberde ${chalk.underline.red("bulunamadı")}.`);
    }
}

/* 
    rehber.json dosyasını silmek için kullanılan fonksiyondur.
*/
const rehberDosyasiniSil = (myPath) => {
    try {
        fs.unlinkSync(myPath) // fs (file system) modülünün ilgili fonksiyonu kullanılarak dosya silme işlemi yapar
        console.log(chalk.bgGreen("rehber.json dosyasi silindi"));
    } catch {
        console.log(chalk.red("Dosya silinemedi"));
    }
}

/* 
    export edilecek fonksiyonlar yani main dosyası tarafından kullanılacak fonksiyonlar app.js dosyasının
    kullanabileceği hale getirilir.
*/
exports.dosyayaYaz = dosyayaYaz;
exports.dosyayiOkuJsObjesineCevir = dosyayiOkuJsObjesineCevir;
exports.dosyadanKisiyiBulveSil = dosyadanKisiyiBulveSil;
exports.kisiBul = kisiBul;
exports.rehberDosyasiniSil = rehberDosyasiniSil;

