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
```
git clone https://github.com/onrcan34/nodeJS-rehber-uygulamasi.git
```
![image](https://user-images.githubusercontent.com/64845818/178816787-07591610-cf2e-4cd8-b956-05c1fe5266fe.png)

### Proje dizinine geçmek için
```
cd nodeJS-rehber-uygulamasi
```
![image](https://user-images.githubusercontent.com/64845818/178817711-46b3dd79-b1ea-4c9b-8d1a-7885642178e4.png)

### npm paketini kurmak için
```
npm init -y
```
![image](https://user-images.githubusercontent.com/64845818/178818201-0196c3a0-caf5-4f52-b850-937a466946e5.png)
### yargs paketini kurmak için
```
npm install yargs
```
![image](https://user-images.githubusercontent.com/64845818/178818664-2cdd1314-a0c2-4e25-8bce-3442a4b493db.png)

### chalk paketini kurmak için (Lütfen 4.1.2 versiyonunu kurunuz yoksa hata alırsınız.)
```
npm install chalk@4.1.2
```
![image](https://user-images.githubusercontent.com/64845818/178819036-d23b3aab-4d25-401c-84ff-4a82285d86ff.png)
### Rehber projesi hakkında bilgi almak için
```
node app.js help
```
![image](https://user-images.githubusercontent.com/64845818/178819255-294af9b2-132b-486f-ab2a-75670280771e.png)
### Rehber projesi ekle komutunu çalıştırmak için
```
node app.js ekle --isim="aras" --tel="21412412"
```
![image](https://user-images.githubusercontent.com/64845818/178820116-44509c69-ffd2-4ace-a8c6-002f57247649.png)
### Rehber projesi listele komutunu çalıştırmak için
```
node app.js listele
```
![image](https://user-images.githubusercontent.com/64845818/178820694-29168715-4be9-4163-9af6-370aeebf0fbd.png)

