function wb_ulrs() {
  let dr1 = "https://www.wildberries.ru/catalog/0/search.aspx?page=1&sort=popular&search=%D0%BF%D1%80%D0%BE%D1%87%D0%B5%D1%81%D1%81%D0%BE%D1%80&";
  let AM4 = "f143281=143286&";
  const AM5 = "f143281=29286127&";
  const LGA1200 = "f143281=267884&";
  const LGA1700 = "f143281=10850389&";
  const Intel = "fbrand=21223&";
  const AMD = "fbrand=28933&";


  var mas_CPU = ["AM4", "AM5", "LGA 1200", "LGA 1700", "Intel", "AMD"];
  var mas_CPU1 = [AM4, AM5, LGA1200, LGA1700, Intel, AMD];

  let mas_options1 = document.querySelectorAll('.cpu_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let a = "";
    mas_options1.forEach(function(item, i, arr) {
      let number = mas_CPU.indexOf(mas_options1[i].value, 0);
      if (number != -1)
        a = a + mas_CPU1[number];
    });

    let poistr1;
    poistr1 = dr1 + a;

  if (a != "")
    open(poistr1);



  });


  const dr2 = "https://www.wildberries.ru/catalog/0/search.aspx?page=1&sort=popular&search=%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BA%D0%B0%D1%80%D1%82%D0%B0&"
  const ASUS = "fbrand=5786&";
  const Asrock = "fbrand=54438&";
  const GIGABYTE = "fbrand=28928&";
  const MSI = "fbrand=27445&";
  const O = "f74650=80582&";
  const D = "f74650=80583&";
  const H = "f74650=80585&";
  const S = "f74650=125971&";
  const E = "f74650=80586&";
  const T = "f74650=384933&";
  const W = "f74650=608963&";
  const X = "f74650=545784&";
  const RadeonRX6700XT = "f4665=3651090&";
  const GeForceRTX4060TI = "f4665=709871687&";
  const GDDR3 = "f125810=125814&";
  const GDDR5 = "f125810=125817&";
  const GDDR6 = "f125810=125819&";

  var mas_GPU = ["ASUS", "Asrock", "GIGABYTE", "MSI", "1", "2", "4", "6", "8", "10", "12", "16", "Radeon RX 6700 XT", "GeForce RTX 4060 TI", "GDDR3", "GDDR5", "GDDR6"];
  var mas_GPU1 = [ASUS, Asrock, GIGABYTE, MSI, O, D, H, S, E, T, W, X, RadeonRX6700XT, GeForceRTX4060TI, GDDR3, GDDR5, GDDR6];

  let mas_options2 = document.querySelectorAll('.gpu_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let b = "";
    mas_options2.forEach(function(item, i, arr) {
      let number1 = mas_GPU.indexOf(mas_options2[i].value, 0);
      if (number1 != -1)
        b = b + mas_GPU1[number1];
    });

    let poistr2;
    poistr2 = dr2 + b;

  if (b != "")
    open(poistr2);
  })




  const dr3 = "https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BF%D0%BB%D0%B0%D1%82%D0%B0"
  const ASUS1 = "&fbrand=5786&";
  const Asrock1 = "&fbrand=54438&";
  const GIGABYTE1 = "&fbrand=28928&";
  const MSI1 = "&fbrand=27445&";
  const AM41 = "&f143281=143286&";
  const AM51 = "&f143281=29286127&";
  const LGA17001 = "&f143281=10850389&";
  const LGA12001 = "&f143281=267884&";
  const DDR41 = "&f143479=764274072&";
  const DDR51 = "&f143479=764274091&";
  const DDR31 = "&f143479=5775623&";
  const MicroATX1 = "&f143264=2142400&";
  const MiniITX1 = "&f143264=143271&";
  const G1 = "&f208518=228248&";
  const H1 = "&f208518=5164472&";
  const T1 = "&f208518=5164458&";

  var mas_MAT = ["ASUS", "Asrock", "GIGABYTE", "MSI", "AM4", "AM5", "LGA 1700", "LGA 1200", "DDR4", "DDR5", "DDR3", "Micro-ATX", "Mini-ITX", "8", "4", "2"];
  var mas_MAT1 = [ASUS1, Asrock1, GIGABYTE1, MSI1, AM41, AM51, LGA17001, LGA12001, DDR41, DDR51, DDR31, MicroATX1, MiniITX1, G1, H1, T1];

  let mas_options3 = document.querySelectorAll('.mat_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let c = "";
    mas_options3.forEach(function(item, i, arr) {
      let number2 = mas_MAT.indexOf(mas_options3[i].value, 0);
      if (number2 != -1)
        c = c + mas_MAT1[number2];
    });

    let poistr3;
    poistr3 = dr3 + c;

  if (c != "")
    open(poistr3);
  })



  let dr4 = "https://www.wildberries.ru/catalog/0/search.aspx?page=1&sort=popular&search=%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%B0%D1%8F+%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D1%8C"
  let Kingston = "&fbrand=8435&";
  let Samsung = "&fbrand=5772&";
  let ADATA = "&fbrand=63789&";
  let DDR42 = "&f94583=98558&";
  let DDR52 = "&f94583=155048&";
  let DDR32 = "&f94583=98557&";
  let EH = "&f4710=13279&";
  let HEX = "&f4710=98508&";
  let FT = "&f4710=125969&";
  let OM = "&f179792=179794&";
  let TM = "&f179792=179867&";
  let FM = "&f179792=179913&";
  let Yeah = "&f208508=208509&";
  let No = "&f208508=208510&";

  var mas_PAM = ["Kingston", "Samsung", "ADATA", "DDR4", "DDR5", "DDR3", "8", "16", "32", "1", "2", "4", "Yeah", "No"];
  var mas_PAM1 = [Kingston, Samsung, ADATA, DDR42, DDR52, DDR32, EH, HEX, FT, OM, TM, FM, Yeah, No];

  let mas_options4 = document.querySelectorAll('.pam_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let d = "";
    mas_options4.forEach(function(item, i, arr) {
      let number3 = mas_PAM.indexOf(mas_options4[i].value, 0);
      if (number3 != -1)
        d = d + mas_PAM1[number3];
    });

    let poistr4;
    poistr4 = dr4 + d;

  if (d != "")
    open(poistr4);
  })



  let dr5 = "https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%B1%D0%BB%D0%BE%D0%BA%20%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BA"
  let AeroCool = "&fbrand=59203&";
  let Cougar = "fbrand=14392&";
  let Chieftec = "&fbrand=69561&";
  let m500v = "&f173642=177398&";
  let o500d1000v = "&f173642=177464&";
  let b1000v = "&f173642=173645&";
  let Bronze = "&f211651=211653&";
  let Standart = "&f211651=211652&";
  let Gold = "&f211651=211655&";
  let Platinum = "&f211651=211656&";
  let ATX = "&f211642=211643&";
  let SFX = "&f211642=211644&";
  let TFX = "&f211642=211645&";

  var mas_BLOCK = ["AeroCool", "Cougar", "Chieftec", "Менее 500", "501 - 1000", "1001 - 1500", "Bronze", "Standart", "Gold", "Platinum", "ATX", "SFX", "TFX"];
  var mas_BLOCK1 = [AeroCool, Cougar, Chieftec, m500v, o500d1000v, b1000v, Bronze, Standart, Gold, Platinum, ATX, SFX, TFX];

  let mas_options5 = document.querySelectorAll('.block_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let e = "";
    mas_options5.forEach(function(item, i, arr) {
      let number4 = mas_BLOCK.indexOf(mas_options5[i].value, 0);
      if (number4 != -1)
        e = e + mas_BLOCK1[number4];
    });

    let poistr5;
    poistr5 = dr5 + e;

  if (e != "")
    open(poistr5);
  })



  dr6 = "https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BA"
  AeroCool1 = "&fbrand=59203&";
  Cougar1 = "&fbrand=14392&";
  DEEPCOOL1 = "&fbrand=63434&";
  ZALMAN = "&fbrand=34008&";
  EATX = "&f143264=143266&";
  MicroATX3 = "&f143264=2142400&";
  MINIITX3 = "&f143264=143271&";
  MIDTOWER = "&f167301=4258255&";
  MINITOWER = "&f167301=6111854&";
  FULLTOWER = "&f167301=6110772&";
  WHITE = "&fcolor=16777215&";
  BLACK = "&fcolor=0&";
  GRAY = "&fcolor=8421504&";
  BIRUZ = "&fcolor=11393254&";
  NIZ = "&f167313=4318595&";
  VVERH = "&f167313=4318600&";


  var mas_CORP = ["AeroCool", "Cougar", "DEEPCOOL", "ZALMAN", "E-ATX", "Micro-ATX", "MINI-ITX", "Mid-Tower", "Mini-Tower", "Full-Tower", "чёрный", "белый", "серый", "бирюзовый", "нижнее", "вверхнее"];
  var mas_CORP1 = [AeroCool1, Cougar1, DEEPCOOL1, ZALMAN, EATX, MicroATX3, MINIITX3, MIDTOWER, MINITOWER, FULLTOWER, BLACK, WHITE, GRAY, BIRUZ, NIZ, VVERH];

  let mas_options6 = document.querySelectorAll('.corp_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let f = "";
    mas_options6.forEach(function(item, i, arr) {
      let number5 = mas_CORP.indexOf(mas_options6[i].value, 0);
      if (number5 != -1)
        f = f + mas_CORP1[number5];
    });

    let poistr6;
    poistr6 = dr6 + f;

  if (f != "")
    open(poistr6);
  })



  let dr7 = "https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%BA%D1%83%D0%BB%D0%B5%D1%80%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BA"
  let CoolerMaster4 = "&fbrand=19181&";
  let DEEPCOOL4 = "&fbrand=63434&";
  let AeroCool4 = "&fbrand=59203&";
  let no = "&f170893=170895&";
  let yeah = "&f170893=170894&";


  var mas_FREZ = ["CoolerMaster", "DEEPCOOL", "AeroCool", "нет", "ARGB", "RGB", "FRGB"];
  var mas_FREZ1 = [CoolerMaster4, DEEPCOOL4, AeroCool4, no, yeah, yeah, yeah];

  let mas_options7 = document.querySelectorAll('.frez_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let g = "";
    mas_options7.forEach(function(item, i, arr) {
      let number6 = mas_FREZ.indexOf(mas_options7[i].value, 0);
      if (number6 != -1)
        g = g + mas_FREZ1[number6];
    });

    let poistr7;
    poistr7 = dr7 + g;

  if (g != "")
    open(poistr7);
  })



  let dr8 = "https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%BD%D0%B0%D0%BA%D0%BE%D0%BF%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%BA"
  let Samsung6 = "&fbrand=5772&";
  let Kingston6 = "&fbrand=8435&";
  let ADATA53 = "&fbrand=63789&";
  let p120 = "&f210329=210335&";
  let p500 = "&f210329=210335&";
  let p960 = "&f210329=210348&";



  var mas_NAK = ["Samsung", "Kingston", "ADATA", "120-239", "240-479", "480-959"];
  var mas_NAK1 = [Samsung6, Kingston6, ADATA53, p120, p500, p960];

  let mas_options8 = document.querySelectorAll('.nak_filters select');

  //console.log(mas_options[0].innerHTML);

  document.getElementById("assets/wb.png").addEventListener('click', event => {
    let p = "";
    mas_options8.forEach(function(item, i, arr) {
      let number7 = mas_NAK.indexOf(mas_options8[i].value, 0);
      if (number7 != -1)
        p = p + mas_NAK1[number7];
    });

    let poistr8;
    poistr8 = dr8 + p;

  if (p != "")
    open(poistr8);
  })
}

wb_ulrs();