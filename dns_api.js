function dns_urls() {
  dr1 = "https://www.dns-shop.ru/catalog/17a899cd16404e77/processory/?order=6&stock=now-today-tomorrow-later";
  const AM4a = "&f[ykgd]=1ii0zc&";
  const AM5a = "&f[ykgd]=1oufa9&";
  const LGA1200a = "&f[ykgd]=1ii0zi&";
  const LGA1700a = "&f[ykgd]=1ii0zj&";
  const Intela = "&brand=intel&";
  const AMDa = "&brand=amd&";
  const tDDR4 = "&f[ykgf]=1ii11a&";
  const TDDR3 = "&f[ykgf]=1ii118&";
  const mp4 = "&fr[mp]=4.4-4.7&";
  const mp3 = "&fr[mp]=3.4-4.7&";
  const mp2 = "&fr[mp]=2.4-4.7&";
  const mp1 = "&fr[mp]=1.8-4.7&";
  const pok10 = "&f[ykhn]=1ii1o7&";
  const pok11 = "&f[ykhn]=1ii1o9&";
  const esta = "&f[ykgj]=1ii1lj&";
  const neta = "&f[ykgj]=1ii1lk&";


  var mas_CPUa = ["AM4", "AM5", "LGA 1200", "LGA 1700", "Intel", "AMD", "DDR4", "DDR3", "4.4", "3.4", "2.4", "1.8", "Intel 10-ое поколение", "Intel 11-ое поколение", "Есть", "Нет"];
  var mas_CPU1a = [AM4a, AM5a, LGA1200a, LGA1700a, Intela, AMDa, tDDR4, TDDR3, mp4, mp3, mp2, mp1, pok10, pok11, esta, neta];

  let mas_options1a = document.querySelectorAll('.cpu_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    let aa = "";
    mas_options1a.forEach(function(item, i, arr) {
      let numbera = mas_CPUa.indexOf(mas_options1a[i].value, 0);
      if (numbera != -1)
        aa = aa + mas_CPU1a[numbera];
    });

    let poistr1a;
    poistr1a = dr1 + aa;

  if (aa != "")
    open(poistr1a);



  });


  const dr2a = "https://www.dns-shop.ru/catalog/17a89aab16404e77/videokarty/?order=6&stock=now-today-tomorrow-later"
  const ASUSa = "&brand=asus&";
  const Asrocka = "&brand=asrock&";
  const GIGABYTEa = "&brand=gigabyte&";
  const MSIa = "&brand=msi&";
  const Oa = "&f[mx]=2f7&";
  const Da = "&f[mx]=2f8&";
  const Ha = "&f[mx]=2f6&";
  const Sa = "&f[mx]=2ff&";
  const Ea = "&f[mx]=2fi&";
  const Ta = "&f[mx]=udtfd&";
  const Wa = "&f[mx]=2fh&";
  const Xa = "&f[mx]=dbbc&";
  const nvid = "&f[19n]=c0k";
  const amdd = "&f[19n]=c0l&";
  const intell = "&f[19n]=1pim29&";
  const GeForceGTX1650a = "&f[mv]=ldmod&";
  const GeForceGTX1660SUPERa = "&f[mv]=n20i4&";
  const GeForceRTX3050a = "&f[mv]=1cwhi2&";
  const GeForceRTX4060a = "&f[mv]=1ycg6x&";
  const GeForceRTX4060TIa = "&f[mv]=1w4hia&";
  const GeForceGt730a = "&f[mv]=2et&";
  const RadeonRX6900XTa = "&f[mv]=xv2j6&";
  const RadeonRX6700XTa = "&f[mv]=11xign&";
  const GDDR3a = "&f[mz]=d5ms&";
  const GDDR5a = "&f[mz]=2fj&";
  const GDDR6a = "&f[mz]=el42z&";

  var mas_GPUa = ["ASUS", "Asrock", "GIGABYTE", "MSI", "1", "2", "4", "6", "8", "10", "12", "16", "GeForce GTX 1650", "GeForce GTX 1660 SUPER", "GeForce RTX 3050", "GeForce RTX 4060", "GeForce RTX 4060 TI", "GeForce GT 730", "Radeon RX 6900 XT", "Radeon RX 6700 XT", "GDDR3", "GDDR5", "GDDR6"];
  var mas_GPU1a = [ASUSa, Asrocka, GIGABYTEa, MSIa, Oa, Da, Ha, Sa, Ea, Ta, Wa, Xa, GeForceGTX1650a, GeForceGTX1660SUPERa, GeForceRTX3050a, GeForceRTX4060a, GeForceRTX4060TIa, GeForceGt730a, RadeonRX6900XTa, RadeonRX6700XTa, GDDR3a, GDDR5a, GDDR6a];

  let mas_options2a = document.querySelectorAll('.gpu_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    let ba = "";
    mas_options2a.forEach(function(item, i, arr) {
      let number1a = mas_GPUa.indexOf(mas_options2a[i].value, 0);
      if (number1a != -1)
        ba = ba + mas_GPU1a[number1a];
    });

    let poistr2a;
    poistr2a = dr2a + ba;

  if (ba != "")
    open(poistr2a);
  })




  const dr3a = "https://www.dns-shop.ru/search/?q=%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%BF%D0%BB%D0%B0%D1%82%D0%B0&category=17a89a0416404e77"
  const ASUS1a = "&brand=asus&";
  const Asrock1a = "&brand=asrock&";
  const GIGABYTE1a = "&brand=gigabyte&";
  const MSI1a = "&brand=msi&";
  const AM41a = "&f[rv2z]=13iyb1&";
  const AM51a = "&f[rv2z]=1obzp7&";
  const LGA17001a = "&f[rv2z]=19m8s3&";
  const LGA12001a = "&f[rv2z]=13j0y6&";
  const DDR41a = "&f[rv35]=13j3sp&";
  const DDR51a = "&f[rv35]=19m8s5&";
  const DDR31a = "&f[rv35]=13j27m&";
  const MicroATX1a = "&f[rv2y]=13iyal&";
  const MiniITX1a = "&f[rv2y]=13iyas&";
  const StandartATX1a = "&f[rv2y]=13iyav&";
  const G1a = "&f[rv36]=13j4uo&";
  const H1a = "&f[rv36]=13j4ul&";
  const T1a = "&f[rv36]=13j4b6&";
  const m21a = "&f[rv3r]=13j4v2&";
  const m22a = "&f[rv3r]=13j4v3&";
  const m23a = "&f[rv3r]=13j4v4&";
  const m24a = "&f[rv3r]=13j4v5&";

  var mas_MATa = ["ASUS", "Asrock", "GIGABYTE", "MSI", "AM4", "AM5", "LGA 1700", "LGA 1200", "DDR4", "DDR5", "DDR3", "Micro-ATX", "Mini-ITX", "Standart-ATX", "8", "4", "2", "1", "2", "3", "4"];
  var mas_MAT1a = [ASUS1a, Asrock1a, GIGABYTEa, MSI1a, AM41a, AM51a, LGA17001a, LGA12001a, DDR41a, DDR51a, DDR31a, MicroATX1a, MiniITX1a, StandartATX1a, G1a, H1a, T1a, m21a, m22a, m23a, m24a];

  let mas_options3a = document.querySelectorAll('.mat_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    let ca = "";
    mas_options3a.forEach(function(item, i, arr) {
      let number2a = mas_MATa.indexOf(mas_options3a[i].value, 0);
      if (number2a != -1)
        ca = ca + mas_MAT1a[number2a];
    });

    let poistr3a;
    poistr3a = dr3a + ca;

  if (ca != "")
    open(poistr3a);
  })



  let dr4 = "https://www.dns-shop.ru/search/?q=%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F+%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D1%8C&category=17a89a3916404e77"
  let Kingston = "&brand=kingstonfury&";
  let Samsung = "&brand=samsung&";
  let ADATA = "&brand=xpgadata&";
  let DDR42 = "&f[z0mm]=1jdava&";
  let DDR52 = "&f[z0mm]=1jdavb&";
  let DDR32 = "&f[z0mm]=1jdav3&";
  let EH = "&f[ms]=2ba&";
  let HEX = "&f[ms]=2bd&";
  let FT = "&f[ms]=eb03&";
  let tch3200 = "&f[wc]=b6l1&";
  let tch2666 = "&f[wc]=9do&";
  let tch3600 = "&f[wc]=b6mc&";
  let OM = "&f[z1h2]=1jdaxn&";
  let TM = "&f[z1h2]=1jdaxs&";
  let FM = "&f[z1h2]=1jdaxt&";
  let Yeah = "&f[z1h2]=1jdaxt&";
  let No = "&f[wj]=9ey&";

  var mas_PAM = ["Kingston", "Samsung", "ADATA", "DDR4", "DDR5", "DDR3", "8", "16", "32", "3200", "2666", "3600", "1", "2", "4", "Есть", "Нет"];
  var mas_PAM1 = [Kingston, Samsung, ADATA, DDR42, DDR52, DDR32, EH, HEX, FT, tch3200, tch2666, tch3600, OM, TM, FM, Yeah, No];

  mas_options4 = document.querySelectorAll('.pam_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    d = "";
    mas_options4.forEach(function(item, i, arr) {
      number3 = mas_PAM.indexOf(mas_options4[i].value, 0);
      if (number3 != -1)
      d = d + mas_PAM1[number3];
    });

  let poistr4;
  poistr4 = dr4 + d;

  if (d != "")
    open(poistr4);
  })



  let dr5 = "https://www.dns-shop.ru/search/?q=%D0%B1%D0%BB%D0%BE%D0%BA+%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F&category=17a89c2216404e77"
  let AeroCool = "&brand=aerocool&";
  let Cougar = "&brand=cougar&";
  let Chieftec = "&brand=chieftec&";
  let m500v = "&fr[wts5]=200-500&";
  let o500d1000v = "&fr[wts5]=501-1000&";
  let b1000v = "&fr[wts5]=1001-1500&";
  let Bronze = "&f[w6]=9cm&";
  let Standart = "&f[w6]=7grf&";
  let Gold = "&f[w6]=9cn&";
  let Platinum = "&f[w6]=9cq&";
  let spolu = "&f[wq]=dbl1&";
  let spas = "&f[wq]=9h1&";
  let sact = "&f[wq]=9h0&";
  let ATX = "&f[wts1]=1envp2&";
  let SFX = "&f[wts1]=1envpn&";
  let TFX = "&f[wts1]=1envpo&";

  var mas_BLOCK = ["AeroCool", "Cougar", "Chieftec", "Менее 500", "501 - 1000", "1001 - 1500", "Bronze", "Standart", "Gold", "Platinum", "полупасивная", "пасивная", "активная", "ATX", "SFX", "TFX"];
  var mas_BLOCK1 = [AeroCool, Cougar, Chieftec, m500v, o500d1000v, b1000v, Bronze, Standart, Gold, Platinum, spolu, spas, sact, ATX, SFX, TFX];

  mas_options5 = document.querySelectorAll('.block_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    e = "";
    mas_options5.forEach(function(item, i, arr) {
      number4 = mas_BLOCK.indexOf(mas_options5[i].value, 0);
      if (number4 != -1)
        e = e + mas_BLOCK1[number4];
    });
    let poistr5
    poistr5 = dr5 + e;

  if (e != "")
    open(poistr5);
  })



  let dr6 = "https://www.dns-shop.ru/catalog/17a89c5616404e77/korpusa/?order=6&stock=now-today-tomorrow-later"
  let AeroCool1 = "&brand=aerocool&";
  let Cougar1 = "&brand=cougar&";
  let DEEPCOOL1 = "&brand=deepcool&";
  let ZALMAN = "&brand=zalman&";
  let EATX = "&f[rk4l]=12s3xw&";
  let MicroATX3 = "&f[rk4l]=12s3y0&";
  let MINIITX3 = "&f[rk4l]=12s3y3&";
  let MIDTOWER = "&f[nn]=2if&";
  let MINITOWER = "&f[nn]=2if&";
  let FULLTOWER = "&f[nn]=2ic&";
  let WHITE = "&f[ltf]=85r6&";
  let BLACK = "&f[ltf]=85r2&";
  let GRAY = "&f[ltf]=85r8&";
  let BIRUZ = "&f[ltf]=17slsb&";
  let NIZ = "&f[rk47]=12sade&";
  let VVERH = "&f[rk47]=12sad9&";
  let ACRIL = "&f[5g4a]=3dt4g&";
  let ZACAL = "&f[5g4a]=266bg&";


  var mas_CORP = ["AeroCool", "Cougar", "DEEPCOOL", "ZALMAN", "E-ATX", "Micro-ATX", "MINI-ITX", "Mid-Tower", "Mini-Tower", "Full-Tower", "чёрный", "белый", "акрил", "закалённое стекло", "нижнее", "вверхнее", "нижнее", "вверхнее"];
  var mas_CORP1 = [AeroCool1, Cougar1, DEEPCOOL1, ZALMAN, EATX, MicroATX3, MINIITX3, MIDTOWER, MINITOWER, FULLTOWER, BLACK, WHITE, GRAY, BIRUZ, NIZ, VVERH, ACRIL, ZACAL];

  mas_options6 = document.querySelectorAll('.corp_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    f = "";
    mas_options6.forEach(function(item, i, arr) {
      number5 = mas_CORP.indexOf(mas_options6[i].value, 0);
      if (number5 != -1)
        f = f + mas_CORP1[number5];
    });

    poistr6 = dr6 + f;

  if (f != "")
    open(poistr6);
  })



  let dr7 = "https://www.dns-shop.ru/catalog/17a9cc2d16404e77/kulery-dlya-processorov/?q=%D0%BA%D1%83%D0%BB%D0%BB%D0%B5%D1%80&order=6&stock=now-today-tomorrow-later-out_of_stock"
  let CoolerMaster4 = "&brand=coolermaster&";
  let DEEPCOOL4 = "&brand=deepcool&";
  let AeroCool4 = "&brand=aerocool&";
  let GORIZ = "&f[laa]=uwpwf&";
  let BASH = "&f[laa]=uwpwa&";
  let GORIZBASH = "&f[laa]=uwpwg&";
  let PIN3 = "&f[lar]=6z19&";
  let PIN4 = "&f[lar]=6z1a&";
  let PIN4X2 = "&f[lar]=1lw6uc&";
  let M60 = "&fr[zajb]=17-60&";
  let O60D20 = "&fr[zajb]=60.01-120&";
  let O120D160 = "&fr[zajb]=120.01-160&";
  let NOTOT = "&f[nzbp]=uwshm&";
  let ARGB = "&f[nzbp]=uwpwv&";
  let RGB = "&f[nzbp]=yi1qy&";
  let FRGB = "&f[nzbp]=uwpww&";



  var mas_FREZ = ["CoolerMaster", "DEEPCOOL", "AeroCool", "горизонтальный", "башенный", "горизонтально-башенный(Top-Flow)", "3 pin", "4 pin x2", "Менее 60", "60.01-120", "120.01-160", "нет", "ARGB", "RGB", "FRGB"];
  var mas_FREZ1 = [CoolerMaster4, DEEPCOOL4, AeroCool4, GORIZ, BASH, GORIZBASH, PIN3, PIN4, PIN4X2, M60, O60D20, O120D160, NOTOT, ARGB, RGB, FRGB];

  mas_options7 = document.querySelectorAll('.frez_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    g = "";
    mas_options7.forEach(function(item, i, arr) {
      number6 = mas_FREZ.indexOf(mas_options7[i].value, 0);
      if (number6 != -1)
        g = g + mas_FREZ1[number6];
    });


    poistr7 = dr7 + g;

  if (g != "")
    open(poistr7);
  })



  let dr8 = "https://www.dns-shop.ru/catalog/8a9ddfba20724e77/ssd-nakopiteli/?q=%D0%BD%D0%B0%D0%BA%D0%BE%D0%BF%D0%B8%D1%82%D0%B5%D0%BB%D1%8C+%D0%B4%D0%BB%D1%8F+%D0%BF%D0%BA&order=6&stock=now-today-tomorrow-later-out_of_stock"
  let Samsung6 = "&brand=samsung&";
  let Kingston6 = "&brand=kingston&";
  let ADATA53 = "&brand=adata&";
  let DEXP = "&brand=dexp&";
  let p120 = "&fr[c03]=120-239&";
  let p500 = "&fr[c03]=240-479&";
  let p960 = "&fr[c03]=480-959&";
  let M515 = "&fr[c09]=450-515&";
  let O515D549 = "&fr[c09]=516-549&";
  let O550D559 = "&fr[c09]=550-559&";
  let O560IB = "&fr[c09]=560-7000&";
  let M450 = "&fr[c0a]=170-450&";
  let O451D500 = "&fr[c0a]=451-500&";
  let O501D529 = "&fr[c0a]=501-529&";
  let O520IB = "&fr[c0a]=530-6000&";


  var mas_NAK = ["Samsung", "Kingston", "ADATA", "DEXP", "120-239", "240-479", "480-959", "Менее 515", "516-549", "550-559", "560 и более", "Менее 450", "451-500", "501-529", "530 и более"];
  var mas_NAK1 = [Samsung6, Kingston6, ADATA53, DEXP, p120, p500, p960, M515, O515D549, O550D559, O560IB, M450, O451D500, O501D529, O520IB];

  mas_options8 = document.querySelectorAll('.nak_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/dns.png").addEventListener('click', event => {
    p = "";
    mas_options8.forEach(function(item, i, arr) {
      number7 = mas_NAK.indexOf(mas_options8[i].value, 0);
      if (number7 != -1)
        p = p + mas_NAK1[number7];
    });

    poistr8 = dr8 + p;

  if (p != "")
    open(poistr8);
  })
}

dns_urls();