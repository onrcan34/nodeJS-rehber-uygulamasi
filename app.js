
/* 
    Rehber projesi için gerekli npm paketleri projeye dahil edildi
*/
const yargs = require('yargs');
const chalk = require('chalk');

/* 
    ekle, kisisil, goster, listele, temizle, sil gibi işlemleri yapan fonksiyonlara sahip modül
    app.js dosyamıza dahil edildi.
*/
const myModule = require('./functions');

// isim ve tel bilgilerini tutacak dizi oluşturuldu
const rehber = []
mypath = __dirname + "\\rehber.json"; // rehber.json dosyasının dizinini mypath isimli değişkene atarız.


// Kisiyi Ekle
yargs.command({
    command: 'ekle',
    description: chalk.black.bgGreen('isim eklemeye yarar'),
    builder: {
        isim: {
            description: chalk.cyan('eklenecek kişi adı'),
            demandOption: true,
            type: 'string',
        },
        tel: {
            description: chalk.cyan('eklenecek kişi telefonu'),
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        if (argv.isim !== "" && argv.tel !== "") {
            
            myObject = {
                isim: argv.isim,
                tel: argv.tel,
            }
            
            try {
                const jsData = myModule.dosyayiOkuJsObjesineCevir();
                jsData.push(myObject);
                myModule.dosyayaYaz(jsData);

                console.log(chalk.underline(`Dosyaya yazdırma işlemi ${chalk.green("başarılı")}`));
                console.log(`${chalk.cyan(argv.isim)} kişisi ve ${chalk.cyan(argv.tel)} telefonu eklendi`);

            } catch (e) {
                rehber.push(myObject);
                myModule.dosyayaYaz(rehber);

                console.log(chalk.bold.underline.green("REHBER OLUŞTURULDU"));
                console.log(`${chalk.cyan(argv.isim)} kişisi ve ${chalk.cyan(argv.tel)} telefonu ${chalk.green("eklendi")}`);
            }
        } else {
            console.log(chalk.bold.bgRed("Boş isim ve tel girmeyiniz!!!"));
        }
    }
})

// Kisiyi Sil
yargs.command({
    command: 'kisisil',
    description: chalk.black.bgCyan('isim silmeye yarar'),
    builder: {
        isim: {
            description: chalk.red('silinecek kişi adı'),
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        if (argv.isim !== "") {
            const jsData = myModule.dosyayiOkuJsObjesineCevir();

            const tumData = myModule.dosyadanKisiyiBulveSil(argv.isim, jsData);

            myModule.dosyayaYaz(tumData);

            
        } else {
            console.log(chalk.bold.bgRed("Boş isim girmeyiniz!!!"));
        }
    }
})

// Kisiyi Goster
yargs.command({
    command: 'goster',
    description: chalk.black.bgGreen('isim gostermeye yarar'),
    builder: {
        isim: {
            description: chalk.cyan('gosterilecek kişi adı'),
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        if (argv.isim !== "") {
            const jsData = myModule.dosyayiOkuJsObjesineCevir();

            myModule.kisiBul(argv.isim, jsData);
        } else {
            console.log(chalk.bold.bgRed("Boş isim girmeyiniz!!!"));
        }
    }
})

// Rehberi Listele
yargs.command({
    command: 'listele',
    description: chalk.black.bgCyan('tüm rehberi listeler'),
    handler(argv){
        console.log(chalk.bold.bgGreen(`Tüm rehber listelendi`));    
        
        const rehber = myModule.dosyayiOkuJsObjesineCevir();
        console.log(rehber);
    }
})

// Tüm Rehberi Sil
yargs.command({
    command: 'temizle',
    description: chalk.black.bgGreen('tüm rehberi silmeye yarar'),

    handler(argv){

        myModule.dosyayaYaz([]);
        console.log(chalk.bold.bgGreen("Rehber temizlendi."));
    }
})

// rehber.json Dosyasini Sil
yargs.command({
    command: 'sil',
    description: chalk.black.bgCyan('rehber dosyasini siler'),

    handler(argv){
        myModule.rehberDosyasiniSil(mypath);
    }
})

yargs.parse();

