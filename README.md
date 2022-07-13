# nodeJS-rehber-uygulamasi
NodeJS ve npm paketlerinden yargs ile chalk paketi kullanılarak rehber uygulaması oluşturmak.

# Getting Started - Proje Hakkında
Bu proje nodeJS kullanılarak geliştirmiştir. Projemizde npm paketlerinden chalk ve yargs kullanılarak bir rehber uygulaması oluşturulmuştur. Bu rehber uygulamasında ekle, kisisil, goster, listele, temizle ve sil komutları ile bir rehber uygulaması tasarlanmaktadır. Bu komutları yargs paketi ile renklendirmeleri ise chalk paketi ile 
kodlanmıştır.

# Prerequisites - Gereklilikler
| Gerekli Paket ve Modüller | İndirme İşlemi |
| ------ | ------ |
| node module | https://nodejs.org/en/download/ |
| npm file | npm init -y |
| yargs package | npm install yargs |
| chalk package | npm install chalk@4.1.2 | 

# Installing - Kurulum
### Projeyi terminal üzerinden indirmek için
git clone https://github.com/onrcan34/nodeJS-rehber-uygulamasi.git
### npm paketini kurmak için
npm init -y
### yargs paketini kurmak için
npm install yargs
### chalk paketini kurmak için (Lütfen 4.1.2 versiyonunu kurunuz yoksa hata alırsınız.)
npm install chalk@4.1.2
### Rehber projesi hakkında bilgi almak için
node app.js help
### Rehber projesi ekle komutunu çalıştırmak için
node app.js ekle --isim="ahmet" --tel="12512521"
### Rehber projesi listele komutunu çalıştırmak için
node app.js listele
