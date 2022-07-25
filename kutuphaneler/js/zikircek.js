// eval(atob("aWYod2luZG93LmxvY2F0aW9uLmhvc3QgIT0gInppa2lyY2VrLmNvbSIgJiYgd2luZG93LmxvY2F0aW9uLmhvc3QgIT0gImxvY2FsaG9zdCIpIHt3aW5kb3cubG9jYXRpb24uaHJlZj0iaHR0cHM6Ly96aWtpcmNlay5jb20iO30="));
var menuAcikmi = false;
function menuyuAyarla() {
    if (menuAcikmi == false) {
        document.getElementById("menuyu-acma-butonu").innerText = "Menüyü kapat";
        menuAcikmi = true;
    } else {
        document.getElementById("menuyu-acma-butonu").innerText = "Menüyü aç";
        menuAcikmi = false;
    }
}
function uygulamayiIndir(tur) {
    if (tur == "debian") {
        document.getElementById("debian-zikir-cekme-uygulamasi-indir").hidden = true;
        document.getElementById("debian-zikir-cekme-uygulamasi-indirme-islemi-baslatiliyor").hidden = false;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var base64 = xhr.responseText;
                console.log(xhr.responseText);
                var a = document.createElement("a");
                a.href = "data:;base64," + base64;
                a.download = "Zikir Çek.out";
                a.click();
                document.getElementById("debian-zikir-cekme-uygulamasi-indir").hidden = false;
                document.getElementById("debian-zikir-cekme-uygulamasi-indirme-islemi-baslatiliyor").hidden = true;
            }
        }
        xhr.open('GET', 'https://linux.zikircek.workers.dev/', true);
        xhr.send(null);
    }
    else if (tur == "windows") {
        document.getElementById("windows-zikir-cekme-uygulamasi-indir").hidden = true;
        document.getElementById("windows-zikir-cekme-uygulamasi-indirme-islemi-baslatiliyor").hidden = false;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var base64 = xhr.responseText;
                console.log(xhr.responseText);
                var a = document.createElement("a");
                a.href = "data:;base64," + base64;
                a.download = "zikircek.com.rar";
                a.click();
                document.getElementById("windows-zikir-cekme-uygulamasi-indir").hidden = false;
                document.getElementById("windows-zikir-cekme-uygulamasi-indirme-islemi-baslatiliyor").hidden = true;
            }
        }
        xhr.open('GET', 'https://windows.zikircek.workers.dev/', true);
        xhr.send(null);
    }
    else if (tur == "kısayol") {
        document.getElementById("zikir-cekme-uygulamasi-kisayol-indir").hidden = true;
        document.getElementById("zikir-cekme-uygulamasi-kisayol-indirme-islemi-baslatiliyor").hidden = false;
        var a = document.createElement("a");
        a.href = "data:;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9InRyIj4KPGhlYWQ+CiAgICA8c2NyaXB0PndpbmRvdy5sb2NhdGlvbi5ocmVmPSJodHRwczovL3ppa2lyY2VrLmNvbS8iOzwvc2NyaXB0PgogICAgPG1ldGEgY2hhcnNldD0iVVRGLTgiPgogICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wIj4KICAgIDx0aXRsZT56aWtpcmNlay5jb20gecO8a2xlbml5b3IuLi48L3RpdGxlPgo8L2hlYWQ+Cjxib2R5PgogICAgPHA+emlraXJjZWsuY29tIHnDvGtsZW5peW9yLi4uPC9wPgo8L2JvZHk+CjwvaHRtbD4=";
        a.download = "Zikir Çek.html";
        a.click();
        document.getElementById("zikir-cekme-uygulamasi-kisayol-indir").hidden = false;
        document.getElementById("zikir-cekme-uygulamasi-kisayol-indirme-islemi-baslatiliyor").hidden = true;
    }
}
function siteLinkiniKopyala() {
    navigator.clipboard.writeText(window.location.href);
    alert("Site linki başarıyla kopyalandı.");
}
var json = "";
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        json = JSON.parse(xhr.responseText);
        // var jsonLocalStorageVeriler = "[";
        // for (var i = 1; i <= 99; i++) {
        //     jsonLocalStorageVeriler += "{";
        //     jsonLocalStorageVeriler += '"cekilmesiGerekenZikirSayisi":' + json[i - 1]["sayi"] + ',';
        //     jsonLocalStorageVeriler += '"cekilenZikirSayisi":' + 0 + ',';
        //     jsonLocalStorageVeriler += '"favori":' + false;
        //     if (i < 99) {
        //         jsonLocalStorageVeriler += "},";
        //     } else {
        //         jsonLocalStorageVeriler += "}";
        //     }

        // }
        // jsonLocalStorageVeriler += "]";
        // console.log(jsonLocalStorageVeriler);
        // degistir();
        // console.log(json)
        var uretilenVeriler = "";
        for (var i = 0; i < 99; i++) {
            // combobox optionlar
            // uretilenVeriler += '<option value="' + (i + 1) + '">' + (i + 1) + '. ' + json[i]["isim"] + ' ( ' + json[i]["arapcaYazilisi"] + ' )' + '</option>';
            // isimler
            // uretilenVeriler += '<p hidden id="isimNo-' + (i + 1) + '" class="fs-3">' + json[i]["isim"] + ' ( ' + json[i]["arapcaYazilisi"] + ' )' + '</p>'
            // isim açıklamaları
            // uretilenVeriler += '<p hidden id="isimNo-' + (i + 1) + '-aciklama' + '" class="fs-4">' + json[i]["aciklama"] + '</p>'
            // tablo verileri
            cekilenZikirSayisi = veriler[i]["cekilenZikirSayisi"];
            uretilenVeriler += '<tr><th id="tablo-isim-no-' + (i + 1) + '" scope="row">' + (i + 1) + '</th><td><span id="tablo-isim-no-' + (i + 1) + '-isim">' + json[i]["isim"] + '</span><br><span id="tablo-isim-no-' + (i + 1) + '-arapca-yazilisi">( ' + json[i]["arapcaYazilisi"] + ' )</span>' + '</td><td id="tablo-isim-no-' + (i + 1) + '-aciklama">' + json[i]["aciklama"] + '</td><td><span id="tablo-isim-no-' + (i + 1) + '-cekilen-zikir-sayisi">' + cekilenZikirSayisi + '</span>/' + json[i]["cekilmesiGerekenZikirSayisi"] + '</td><td><img id="tablo-isim-no-' + (i + 1) + '-favori-svg' + '" onclick="favorileriGuncelle(' + (i + 1) + ')" style="cursor: pointer;" class="img-fluid" src="/gorseller/svg/gunduzModu/bosKalp.svg"></td><td><button onclick="zikreGit(' + (i + 1) + ')" type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Zikre Gitmek İçin Tıklayınız</button></td></tr>'
            // arama cubugu listesi
            // uretilenVeriler += '<option value="' + (i + 1) + '. ' + json[i]["sapkasizIsim"] + ' ( ' + json[i]["arapcaYazilisi"] + ' )' + '">';
        }
        console.log(uretilenVeriler)
    }
}
xhr.open('GET', 'tumVeriler.json', true);
xhr.send(null);

if (localStorage.getItem("geceModu") == null) {
    localStorage.setItem("geceModu", 0);
}
if (localStorage.getItem("tiklamaSesi") == null) {
    localStorage.setItem("tiklamaSesi", 1);
}
if (localStorage.getItem("veriler") == null) {
    localStorage.setItem("veriler", '[{"cekilmesiGerekenZikirSayisi":66,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":298,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":258,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":91,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":170,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":131,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":137,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":145,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":94,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":206,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":662,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":731,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":214,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":336,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1281,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":306,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":196,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":308,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":489,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":150,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":903,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":72,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1481,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":351,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":117,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":770,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":180,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":112,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":68,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":104,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":129,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":812,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":88,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1020,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1286,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":526,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":110,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":232,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":998,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":550,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":80,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":5329,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":270,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":312,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":3025,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":137,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":6084,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":400,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":3249,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":573,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":319,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":108,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":66,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":116,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":500,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":2116,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":3844,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":148,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":57,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":124,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":68,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":490,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":324,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":156,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":196,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":2304,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":3669,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":134,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":305,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":774,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":184,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":847,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":37,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":801,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1106,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":62,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":47,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":551,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":202,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":409,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":630,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":156,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":287,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":212,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1155,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":209,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":114,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1060,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1100,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":161,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":1001,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":201,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":256,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":400,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":86,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":113,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":514,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":514,"cekilenZikirSayisi":0,"favori":false},{"cekilmesiGerekenZikirSayisi":298,"cekilenZikirSayisi":0,"favori":false}]');
}
if (localStorage.getItem("geceModu") == 0) {
    document.getElementById("checkBoxGeceModu").checked = false;
    gunduzModu();
} else {
    document.getElementById("checkBoxGeceModu").checked = true;
    geceModu();
}
if (localStorage.getItem("tiklamaSesi") == 0) {
    document.getElementById("checkBoxTiklamaSesi").checked = false;
} else {
    document.getElementById("checkBoxTiklamaSesi").checked = true;
}
if (localStorage.getItem("ekranTitretme") == 0) {
    document.getElementById("checkBoxTiklamaSesi").checked = false;
} else {
    document.getElementById("checkBoxTiklamaSesi").checked = true;
}
var veriler = JSON.parse(localStorage.getItem("veriler"));
// alert(veriler)
function ekranTitretmeyiAyarla() {
    if (document.getElementById("checkBoxEkranTitretme").checked == true) {
        localStorage.setItem("ekranTitretme", 1);
        localStorage.setItem("tiklamaSesi", 0);
        document.getElementById("checkBoxTiklamaSesi").checked = false;
    } else {
        localStorage.setItem("ekranTitretme", 0);
    }
}
function tiklamaSesiniAyarla() {
    if (document.getElementById("checkBoxTiklamaSesi").checked == true) {
        localStorage.setItem("tiklamaSesi", 1);
        localStorage.setItem("ekranTitretme", 0);
        document.getElementById("checkBoxEkranTitretme").checked = false;
    } else {
        localStorage.setItem("tiklamaSesi", 0);
    }
}
async function sesVer() {
    var audio = new Audio('ses.mp3');
    audio.type = 'audio/mpeg';
    if (localStorage.getItem("tiklamaSesi") == true) {
        try {
            await audio.play();
        } catch (err) {
            console.log('Ses oynatılmak istenirken hata oluştu: ' + err);
        }
    }
}
function favorileriGuncelle(isimNo) {
    if (veriler[isimNo - 1]["favori"] == true) {
        veriler[isimNo - 1]["favori"] = false;
    } else {
        veriler[isimNo - 1]["favori"] = true;
    }
    localStorage.setItem("veriler", JSON.stringify(veriler));
    tabloyuGuncelle();
    favorilerimiGostert();
}
function zikreGit(isimNo) {
    document.getElementById("esmaulHusna").focus();
    document.getElementById("esmaulHusna").selectedIndex = isimNo - 1;
    degistir();
}
function arananVeriyiDuzenle() {
    setTimeout(() => {
        if (document.getElementById("isim-arama-cubugu").value[document.getElementById("isim-arama-cubugu").value.length - 1] == "i") {
            var arananIsim = "";
            for (var i = 0; i < document.getElementById("isim-arama-cubugu").value.length; i++) {
                if (i + 1 == document.getElementById("isim-arama-cubugu").value.length) {
                    arananIsim += "İ";
                } else {
                    arananIsim += document.getElementById("isim-arama-cubugu").value[i];
                }
            }
            document.getElementById("isim-arama-cubugu").value = arananIsim;
        } else {
            document.getElementById("isim-arama-cubugu").value = document.getElementById("isim-arama-cubugu").value.toUpperCase();
        }
    }, 10);
}
function aramaYap() {
    if (document.getElementById("isim-arama-cubugu").value != "" && document.getElementById("isim-arama-cubugu").value.split('.')[0] != "") {
        var isimNo = document.getElementById("isim-arama-cubugu").value.split('.')[0];
        document.getElementById("esmaulHusna").selectedIndex = isimNo - 1;
        degistir();
    }
}
function tabloyuGuncelle() {
    var tabloVerileri = "";
    for (var i = 0; i < 99; i++) {
        cekilenZikirSayisi = veriler[i]["cekilenZikirSayisi"];
        document.getElementById('tablo-isim-no-' + (i + 1) + '-cekilen-zikir-sayisi').innerText = cekilenZikirSayisi;
        if (veriler[i]["favori"] == true) {
            if (localStorage.getItem("geceModu") == 0) {
                document.getElementById('tablo-isim-no-' + (i + 1) + '-favori-svg').src = "/gorseller/svg/gunduzModu/doluKalp.svg";
            } else {
                document.getElementById('tablo-isim-no-' + (i + 1) + '-favori-svg').src = "/gorseller/svg/geceModu/doluKalp.svg";
            }
        } else {
            if (localStorage.getItem("geceModu") == 0) {
                document.getElementById('tablo-isim-no-' + (i + 1) + '-favori-svg').src = "/gorseller/svg/gunduzModu/bosKalp.svg";
            } else {
                document.getElementById('tablo-isim-no-' + (i + 1) + '-favori-svg').src = "/gorseller/svg/geceModu/bosKalp.svg";
            }
        }
        if (cekilenZikirSayisi >= veriler[i]["cekilmesiGerekenZikirSayisi"]) {
            if (document.getElementById('tablo-isim-no-' + (i + 1)).classList.value.includes("table-warning") == true) {
                document.getElementById('tablo-isim-no-' + (i + 1)).classList.remove("table-warning");
            }
            if (document.getElementById('tablo-isim-no-' + (i + 1)).classList.value.includes("table-success") == false) {
                document.getElementById('tablo-isim-no-' + (i + 1)).classList.add("table-success");
            }
        } else if (cekilenZikirSayisi > 0) {
            if (document.getElementById('tablo-isim-no-' + (i + 1)).classList.value.includes("table-success") == true) {
                document.getElementById('tablo-isim-no-' + (i + 1)).classList.remove("table-success");
            }
            if (document.getElementById('tablo-isim-no-' + (i + 1)).classList.value.includes("table-warning") == false) {
                document.getElementById('tablo-isim-no-' + (i + 1)).classList.add("table-warning");
            }
            // document.getElemekntById('tablo-isim-no-' + (i + 1) + '-favori-svg').src = "/gorseller/svg/gunduzModu/doluKalp.svg";
        }
        else {
            if (document.getElementById('tablo-isim-no-' + (i + 1)).classList.value.includes("table-success") == true) {
                document.getElementById('tablo-isim-no-' + (i + 1)).classList.remove("table-success");
            }
        }
    }
}
tabloyuGuncelle();
function arttirmaButonunuAyarla() {
    document.getElementById("focuslanilacakButon").focus();
    document.getElementById("arttir").classList.remove("border-1");
    document.getElementById("arttir").classList.add("border-3");
    if (localStorage.getItem("geceModu") == 0) {
        document.getElementById("arttir").classList.remove("border-success");
        document.getElementById("arttir").classList.add("border-secondary");
        document.getElementById("arttir").style = "background-color:#f8f9fa;color:#198754;";
    } else {
        document.getElementById("arttir").classList.add("border-secondary");
        document.getElementById("arttir").classList.remove("border-success");
        document.getElementById("arttir").style = "background-color:#212529;color:#6c757d;";
    }
    setTimeout(() => {
        document.getElementById("arttir").classList.remove("border-3");
        document.getElementById("arttir").classList.add("border-1");
        if (localStorage.getItem("geceModu") == 0) {
            document.getElementById("arttir").style = "background-color:#f8f9fa;color:#198754;";
        } else {
            document.getElementById("arttir").style = "background-color:#212529;color:#6c757d;";
        }
    }, 200);
}
function temayiAyarla() {
    if (document.getElementById("checkBoxGeceModu").checked == true) {
        localStorage.setItem("geceModu", 1);
        geceModu();
    } else {
        localStorage.setItem("geceModu", 0);
        gunduzModu();
    }
    tabloyuGuncelle();
}
function sinifDegistir(eski, yeni) {
    var uzunluk = document.getElementsByClassName(eski).length;
    for (var i = 0; i < uzunluk; i++) {
        var eleman = document.getElementsByClassName(eski)[0];
        eleman.classList.remove(eski);
        eleman.classList.add(yeni);
    }
}
function geceModu() {
    document.getElementById("arttir").classList.add("border-secondary");
    document.getElementById("arttir").classList.remove("border-success");
    document.getElementById("arttir").style = "background-color:#212529;color:#6c757d;";
    document.getElementById("arttir").style = "background-color:#212529";
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#212529");
    sinifDegistir("table-light", "table-dark");
    sinifDegistir("bg-light", "bg-dark");
    sinifDegistir("text-dark", "text-light");
    sinifDegistir("btn-outline-success", "btn-outline-secondary");
    // for (var i = 0; i < 99; i++) {
    //     cekilenZikirSayisi = veriler[i]["cekilenZikirSayisi"];
    //     if (cekilenZikirSayisi > 0) {
    //         document.getElementById('tablo-isim-no-' + (i + 1) + '-favori-svg').src = "/gorseller/svg/gunduzModu/doluKalp.svg";
    //     }
    // }
}
function gunduzModu() {
    document.getElementById("arttir").classList.remove("border-success");
    document.getElementById("arttir").classList.add("border-secondary");
    document.getElementById("arttir").style = "background-color:#f8f9fa;color:#198754;";
    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#f8f9fa");
    sinifDegistir("table-dark", "table-light");
    sinifDegistir("bg-dark", "bg-light");
    sinifDegistir("text-light", "text-dark");
    sinifDegistir("btn-outline-secondary", "btn-outline-success");
}

function degistir() {
    var id = document.getElementById("esmaulHusna").value;
    cekilenZikirSayisi = veriler[id - 1]["cekilenZikirSayisi"];
    cekilmesiGerekenZikirSayisi = veriler[id - 1]["cekilmesiGerekenZikirSayisi"];
    var ilerlemeYuzdesi = parseInt(cekilenZikirSayisi * 100 / cekilmesiGerekenZikirSayisi);
    document.getElementById("ilerleme-cubugu").attributes["style"].value = "width: " + ilerlemeYuzdesi + "%";
    document.getElementById("cekilenZikirSayisi").innerText = cekilenZikirSayisi + "/" + cekilmesiGerekenZikirSayisi;
    var isimNo = document.getElementById("esmaulHusna").value
    document.getElementById("bilgilendirme-isim").innerText = document.getElementById('tablo-isim-no-' + id + '-isim').innerText + " " + document.getElementById('tablo-isim-no-' + id + '-arapca-yazilisi').innerText;
    document.getElementById("bilgilendirme-isim").innerHTML = document.getElementById("bilgilendirme-isim").innerHTML.replace(/(?:&nbsp;|<br>)/g, '');
    document.getElementById("bilgilendirme-isim-aciklamasi").innerText = document.getElementById('tablo-isim-no-' + id + '-aciklama').innerText;
    document.getElementById("bilgilendirme-isim-aciklamasi").innerHTML = document.getElementById("bilgilendirme-isim-aciklamasi").innerHTML.replace(/(?:&nbsp;&nbsp;|<br>)/g, '');
    document.getElementById("esmaul-husna-source").src = "/esmaul-husna-seslendirme/" + id + ".m4a";
    document.getElementById("esmaul-husna-audio").load();
}
degistir();
function ekraniTitret() {
    if (localStorage.getItem("ekranTitretme") == true) {
        window.navigator.vibrate([300]);
    }
}
function arttir() {
    var id = document.getElementById("esmaulHusna").value;
    cekilenZikirSayisi = veriler[id - 1]["cekilenZikirSayisi"];
    cekilmesiGerekenZikirSayisi = veriler[id - 1]["cekilmesiGerekenZikirSayisi"];
    if (cekilenZikirSayisi != cekilmesiGerekenZikirSayisi) {
        cekilenZikirSayisi++;
        sesVer();
        ekraniTitret();
    }
    if (cekilenZikirSayisi > cekilmesiGerekenZikirSayisi) {
        cekilenZikirSayisi = cekilmesiGerekenZikirSayisi;
    }
    veriler[id - 1]["cekilenZikirSayisi"] = cekilenZikirSayisi;
    localStorage.setItem("veriler", JSON.stringify(veriler));
    var ilerlemeYuzdesi = parseInt(cekilenZikirSayisi * 100 / cekilmesiGerekenZikirSayisi);
    document.getElementById("ilerleme-cubugu").attributes["style"].value = "width: " + ilerlemeYuzdesi + "%";
    document.getElementById("cekilenZikirSayisi").innerText = cekilenZikirSayisi + "/" + cekilmesiGerekenZikirSayisi;
    tabloyuGuncelle();
}
function azalt() {
    document.getElementById("ilerleme-cubugu").attributes["style"].value = "width: " + ilerlemeYuzdesi + "%";
    var id = document.getElementById("esmaulHusna").value;
    cekilenZikirSayisi = veriler[id - 1]["cekilenZikirSayisi"];
    if (cekilenZikirSayisi > 0) {
        cekilenZikirSayisi--;
        veriler[id - 1]["cekilenZikirSayisi"] = cekilenZikirSayisi;
        localStorage.setItem("veriler", JSON.stringify(veriler));
        cekilmesiGerekenZikirSayisi = veriler[id - 1]["cekilmesiGerekenZikirSayisi"];
        var ilerlemeYuzdesi = parseInt(cekilenZikirSayisi * 100 / cekilmesiGerekenZikirSayisi);
        document.getElementById("ilerleme-cubugu").attributes["style"].value = "width: " + ilerlemeYuzdesi + "%";
        document.getElementById("cekilenZikirSayisi").innerText = cekilenZikirSayisi + "/" + cekilmesiGerekenZikirSayisi;
    }
    tabloyuGuncelle();
}
function sifirla() {
    document.getElementById("ilerleme-cubugu").attributes["style"].value = "width: 0%";
    var id = document.getElementById("esmaulHusna").value;
    veriler[id - 1]["cekilenZikirSayisi"] = 0;
    localStorage.setItem("veriler", JSON.stringify(veriler));
    cekilmesiGerekenZikirSayisi = veriler[id - 1]["cekilmesiGerekenZikirSayisi"];
    document.getElementById("cekilenZikirSayisi").innerText = "0/" + cekilmesiGerekenZikirSayisi;
    tabloyuGuncelle();
}
function eminMisinizModeliniAyarla() {
    var isim = document.getElementById("esmaulHusna")[document.getElementById("esmaulHusna").value - 1].innerText
    isim = isim.slice(isim.split(" ")[0].length)
    document.getElementsByName("seciliZikir")[0].innerText = isim;
    document.getElementsByName("seciliZikir")[1].innerText = isim;
}
function favorilerimiGostert() {
    document.getElementById("favorilerim-tablosu").innerHTML = "";
    for (var i = 0; i < 99; i++) {
        if (veriler[i]["favori"] == true) {
            var isim = document.getElementById("tablo-isim-no-" + (i + 1) + "-isim").innerText;
            var arapcaYazilisi = document.getElementById("tablo-isim-no-" + (i + 1) + "-arapca-yazilisi").innerText;
            var tabloRengi = "";
            var cekilenZikirSayisi = veriler[i]["cekilenZikirSayisi"];
            var cekilmesiGerekenZikirSayisi = veriler[i]["cekilmesiGerekenZikirSayisi"];
            var aciklama = document.getElementById("tablo-isim-no-" + (i + 1) + "-aciklama").innerText;
            if (cekilenZikirSayisi >= cekilmesiGerekenZikirSayisi) {
                tabloRengi = "table-success";
            } else if (cekilenZikirSayisi > 0) {
                tabloRengi = "table-warning";
            }
            var resim = "";
            if (veriler[i]["favori"] == true) {
                if (localStorage.getItem("geceModu") == 0) {
                    resim = '/gorseller/svg/gunduzModu/doluKalp.svg';
                } else {
                    resim = '/gorseller/svg/geceModu/doluKalp.svg';
                }
            } else {
                if (localStorage.getItem("geceModu") == 0) {
                    resim = '/gorseller/svg/gunduzModu/bosKalp.svg';
                } else {
                    resim = '/gorseller/svg/geceModu/bosKalp.svg';
                }
            }
            document.getElementById("favorilerim-tablosu").innerHTML += '<tr><td class="' + tabloRengi + '" scope="row">' + (i + 1) + '</td><td>' + isim + ' ' + arapcaYazilisi + '</td><td>'+aciklama+'</td><td>' + cekilenZikirSayisi + '/' + cekilmesiGerekenZikirSayisi + '</td><td><img onclick="favorileriGuncelle(' + (i + 1) + ')" style="cursor: pointer;" class="img-fluid" src="' + resim + '"></td></tr>';
        }
    }
}
favorilerimiGostert();