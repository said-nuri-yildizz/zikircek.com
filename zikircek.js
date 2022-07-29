// eval(atob("aWYod2luZG93LmxvY2F0aW9uLmhvc3QgIT0gInppa2lyY2VrLmNvbSIgJiYgd2luZG93LmxvY2F0aW9uLmhvc3QgIT0gImxvY2FsaG9zdCIpIHt3aW5kb3cubG9jYXRpb24uaHJlZj0iaHR0cHM6Ly96aWtpcmNlay5jb20iO30="));
var veritabani = JSON.parse(localStorage.getItem("veritabani"));

function uygulamadanCik() {
    history.back();
}

// history.pushState(null, document.title, location.href);
// window.addEventListener('popstate', function (event) {
//     document.getElementById("modelAcUygulamadanCikmakIstediginizeEminMisiniz").click();
//     setTimeout(() => {
//         document.getElementById("uygulamadan-cikma-modeli-iptal-butonu").click();
//         history.pushState(null, document.title, location.href);
//     }, 2000);
// });


document.getElementById("checkboxFabrikaAyarlarinaDonmeOnayi").checked = false;
function fabrikaAyarlarinaGeriDon() {
    if (document.getElementById("checkboxFabrikaAyarlarinaDonmeOnayi").checked == false) {
        bildirimOlustur("İşlem Başarısız", "Fabrika ayarlarına dönme kutucuğunu onaylamadınız.", 5000);
        return;
    }
    localStorage.clear();
    window.location.reload();
}

function sesAyarlariniDegistir() {
    if (document.getElementById("checkboxTiklamaSesi").checked === true) {
        localStorage.setItem("tiklamaSesi", 1);
    } else {
        localStorage.setItem("tiklamaSesi", 0);
    }
}

if (localStorage.getItem("tiklamaSesi") == 1) {
    document.getElementById("checkboxTiklamaSesi").checked = true;
} else {
    document.getElementById("checkboxTiklamaSesi").checked = false;
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

function zikirSifirlamaModeliniAyarla() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    document.getElementById("sifirlanacak-zikrin-cekilme-sayisi").innerText = parseInt(veritabani[id - 1]["cekilenZikirSayisi"]);
    document.getElementById("sifiranacak-zikrin-adi").innerText = veritabani[id - 1]["turkce"] + ' ( ' + veritabani[id - 1]["arapca"] + ' )';
}
function zikriTamamlamaModeliniAyarla() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    document.getElementById("tamamlanacak-zikrin-cekilme-sayisi").innerText = parseInt(veritabani[id - 1]["cekilenZikirSayisi"]);
    document.getElementById("tamamlanacak-zikrin-adi").innerText = veritabani[id - 1]["turkce"] + ' ( ' + veritabani[id - 1]["arapca"] + ' )';

}
function bildirimOlustur(bildirimBasligi, bildirimGovdesi, gozukmeSuresi) {
    document.getElementById("bildirim-kutucugu").attributes["data-bs-delay"].nodeValue = gozukmeSuresi;
    document.getElementById("bildirim-basligi").innerText = bildirimBasligi;
    document.getElementById("bildirim-govdesi").innerText = bildirimGovdesi;
    const toastLiveExample = document.getElementById('bildirim-kutucugu')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}
function zikirAciklamaKutusunuAyarla() {
    if (document.getElementById("zikir-aciklama-kutusu-basligi").innerText == "Zikir Açıklamasını Gizle") {
        document.getElementById("zikir-aciklama-kutusu-basligi").innerText = "Zikir Açıklamasını Göstert";
    } else {
        document.getElementById("zikir-aciklama-kutusu-basligi").innerText = "Zikir Açıklamasını Gizle";
    }
}
function zikirAciklamaKutusunuOlustur(id) {
    document.getElementById("zikir-aciklama-kutusu-govdesi").innerText = veritabani[id - 1]["id"] + '. ' + veritabani[id - 1]["turkce"] + ' ( ' + veritabani[id - 1]["arapca"] + ' )' + '\n' + veritabani[id - 1]["aciklama"];
    document.getElementById("zikir-aciklama-kutusu-govdesi").innerHTML += '<br><button onclick="zikirBilgileriniKopyala(' + veritabani[id - 1]["id"] + ');" type="button" class="btn bg-success bg-opacity-25 mt-3 fs-4 ps-5 pe-5"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-back" viewBox="0 0 16 16"><path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/></svg> Kopyala</button>';
}
function zikirSec(id) {
    zikirAciklamaKutusunuOlustur(id);
    zikirVerileriTablosunuOlustur();
    if (veritabani[id - 1]["favori"] == true) {
        document.getElementById("kisayol-butonu-favorilerimi-guncelle").innerHTML = 'Favorilerimden Çıkar <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg>';
    } else {
        document.getElementById("kisayol-butonu-favorilerimi-guncelle").innerHTML = 'Favorilerime Ekle <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg>';
    }
}
function zikirSecmeKutusunuOlustur() {
    var id = 0;
    if (parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) != -1) {
        id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    }
    document.getElementById("zikir-secme-kutusu").innerHTML = "";
    for (var i = 0; i < 99; i++) {
        if (veritabani[i]["favori"] == true) {
            if (parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) != -1) {
                if (id == parseInt(veritabani[i]["id"])) {
                    document.getElementById("zikir-secme-kutusu").innerHTML += '<option selected value="' + veritabani[i]["id"] + '">' + veritabani[i]["id"] + '. ' + veritabani[i]["turkce"] + ' ( ' + veritabani[i]["arapca"] + ' ) { Favori }</option>';
                } else {
                    document.getElementById("zikir-secme-kutusu").innerHTML += '<option value="' + veritabani[i]["id"] + '">' + veritabani[i]["id"] + '. ' + veritabani[i]["turkce"] + ' ( ' + veritabani[i]["arapca"] + ' ) { Favori }</option>';
                }
            } else {
                document.getElementById("zikir-secme-kutusu").innerHTML += '<option value="' + veritabani[i]["id"] + '">' + veritabani[i]["id"] + '. ' + veritabani[i]["turkce"] + ' ( ' + veritabani[i]["arapca"] + ' ) { Favori }</option>';
            }
        } else {
            if (parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) != -1) {
                if (id == parseInt(veritabani[i]["id"])) {
                    document.getElementById("zikir-secme-kutusu").innerHTML += '<option selected value="' + veritabani[i]["id"] + '">' + veritabani[i]["id"] + '. ' + veritabani[i]["turkce"] + ' ( ' + veritabani[i]["arapca"] + ' )</option>';
                } else {
                    document.getElementById("zikir-secme-kutusu").innerHTML += '<option value="' + veritabani[i]["id"] + '">' + veritabani[i]["id"] + '. ' + veritabani[i]["turkce"] + ' ( ' + veritabani[i]["arapca"] + ' )</option>';
                }
            } else {
                document.getElementById("zikir-secme-kutusu").innerHTML += '<option value="' + veritabani[i]["id"] + '">' + veritabani[i]["id"] + '. ' + veritabani[i]["turkce"] + ' ( ' + veritabani[i]["arapca"] + ' )</option>';
            }
        }
    }
    zikirSec(document.getElementById("zikir-secme-kutusu").selectedIndex + 1);
}
zikirSecmeKutusunuOlustur();
function zikirBilgileriniKopyala(id) {
    var kopyalanacakVeri = "";
    kopyalanacakVeri += veritabani[id - 1]["turkce"] + ' ( ' + veritabani[id - 1]["arapca"] + ' )' + '\n' + veritabani[id - 1]["aciklama"] + "\nhttps://zikircek.com/";
    navigator.clipboard.writeText(kopyalanacakVeri);
    bildirimOlustur("Bilgilendirme", "Zikir açıklaması başarıyla kopyalandı.", 2000);
}
function anaTabloyuOlustur() {
    for (var i = 0; i < 99; i++) {
        var satir = "";
        satir += '<tr>';
        var sinif = "";
        if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
            if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['varsayilanZikirSayisiHedefi'])) {
                sinif = 'class="bg-success bg-opacity-25"';
            } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                sinif = 'class="bg-warning bg-opacity-25"';
            }
        } else {
            if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['zikirSayisiHedefi']) > 0) {
                sinif = 'class="bg-success bg-opacity-25"';
            } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                sinif = 'class="bg-warning bg-opacity-25"';
            }
        }
        satir += '<th ' + sinif + ' scope="row">' + veritabani[i]["id"] + '</th>';
        satir += '<td>' + veritabani[i]["turkce"] + '</td>';
        satir += '<td>' + veritabani[i]["arapca"] + '</td>';
        satir += '<td>' + veritabani[i]["aciklama"] + '</td>';
        satir += '<td>' + veritabani[i]["cekilenZikirSayisi"] + '</td>';
        if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
            satir += '<td>' + veritabani[i]["varsayilanZikirSayisiHedefi"] + '</td>';
        } else {
            satir += '<td>' + veritabani[i]["zikirSayisiHedefi"] + '</td>';
        }
        var tamamlanmaYuzdesi = "";
        if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
            tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['varsayilanZikirSayisiHedefi']);
        } else {
            tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['zikirSayisiHedefi']);
        }
        if (tamamlanmaYuzdesi > 100) {
            tamamlanmaYuzdesi = 100;
        }
        var cubukYuzdesi = tamamlanmaYuzdesi;
        if (cubukYuzdesi == 0) {
            cubukYuzdesi = 1;
        }
        satir += '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
        satir += '<td style="cursor: pointer;" onclick="sesCal(\'/esmaul-husna-okunuslari/' + veritabani[i]["id"] + '.m4a\')">Dinle</td>';
        if (veritabani[i]["favori"] == false) {
            satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
        } else {
            satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
        }
        satir += '</tr>';
        document.getElementById("ana-tablo-tbody").innerHTML += satir;
    }
}
anaTabloyuOlustur();
function zikirlerVeOkunuslariTablosunuOlustur() {
    document.getElementById("zikirler-ve-okunuslari-tablosu-tbody").innerHTML = "";
    for (var i = 0; i < 99; i++) {
        var satir = "";
        satir += '<tr>';
        var sinif = "";
        if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
            if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['varsayilanZikirSayisiHedefi'])) {
                sinif = 'class="bg-success bg-opacity-25"';
            } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                sinif = 'class="bg-warning bg-opacity-25"';
            }
        } else {
            if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['zikirSayisiHedefi']) > 0) {
                sinif = 'class="bg-success bg-opacity-25"';
            } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                sinif = 'class="bg-warning bg-opacity-25"';
            }
        }
        satir += '<th ' + sinif + ' scope="row">' + veritabani[i]["id"] + '</th>';
        satir += '<td>' + veritabani[i]["turkce"] + '</td>';
        satir += '<td>' + veritabani[i]["arapca"] + '</td>';
        satir += '<td style="cursor: pointer;" onclick="sesCal(\'/esmaul-husna-okunuslari/' + veritabani[i]["id"] + '.m4a\')">Dinle</td>';
        satir += '</tr>';
        document.getElementById("zikirler-ve-okunuslari-tablosu-tbody").innerHTML += satir;
    }
}
function cekilenZikirSayisinaGoreSirala(a, b) {
    if (a["cekilenZikirSayisi"] === b["cekilenZikirSayisi"]) {
        return 0;
    }
    else {
        return (a["cekilenZikirSayisi"] < b["cekilenZikirSayisi"]) ? -1 : 1;
    }
}
function enCokCektigimZikirlerTablosunuOlustur() {
    document.getElementById("en-cok-cektigim-zikirler-tablosu-tbody").innerHTML = '<tr><td colspan="9">Tablo yükleniyor...</td></tr>';
    setTimeout(() => {
        var siraliVeritabani = [];
        var satir = "";
        for (var i = 0; i < 99; i++) {
            siraliVeritabani.push({ "kategoriNo": veritabani[i]["kategoriNo"], "id": veritabani[i]["id"], "turkce": veritabani[i]["turkce"], "arapca": veritabani[i]["arapca"], "aciklama": veritabani[i]["aciklama"], "varsayilanZikirSayisiHedefi": veritabani[i]["varsayilanZikirSayisiHedefi"], "zikirSayisiHedefi": veritabani[i]["zikirSayisiHedefi"], "cekilenZikirSayisi": veritabani[i]["cekilenZikirSayisi"], "favori": veritabani[i]["favori"] });
        }
        siraliVeritabani = siraliVeritabani.sort(cekilenZikirSayisinaGoreSirala).reverse();
        console.log(siraliVeritabani);
        document.getElementById("en-cok-cektigim-zikirler-tablosu-tbody").innerHTML = "";
        for (var i = 0; i < 99; i++) {
            satir += '<tr>';
            var sinif = "";
            if (parseInt(siraliVeritabani[i]["zikirSayisiHedefi"]) == 0) {
                if (parseInt(siraliVeritabani[i]['cekilenZikirSayisi']) >= parseInt(siraliVeritabani[i]['varsayilanZikirSayisiHedefi'])) {
                    sinif = 'class="bg-success bg-opacity-25"';
                } else if (parseInt(siraliVeritabani[i]['cekilenZikirSayisi']) < parseInt(siraliVeritabani[i]['varsayilanZikirSayisiHedefi']) && parseInt(siraliVeritabani[i]['cekilenZikirSayisi']) > 0) {
                    sinif = 'class="bg-warning bg-opacity-25"';
                }
            } else {
                if (parseInt(siraliVeritabani[i]['cekilenZikirSayisi']) >= parseInt(siraliVeritabani[i]['zikirSayisiHedefi']) && parseInt(siraliVeritabani[i]['zikirSayisiHedefi']) > 0) {
                    sinif = 'class="bg-success bg-opacity-25"';
                } else if (parseInt(siraliVeritabani[i]['cekilenZikirSayisi']) < parseInt(siraliVeritabani[i]['zikirSayisiHedefi']) && parseInt(siraliVeritabani[i]['cekilenZikirSayisi']) > 0) {
                    sinif = 'class="bg-warning bg-opacity-25"';
                }
            }
            satir += '<th ' + sinif + ' scope="row">' + siraliVeritabani[i]["id"] + '</th>';
            satir += '<td>' + siraliVeritabani[i]["turkce"] + '</td>';
            satir += '<td>' + siraliVeritabani[i]["arapca"] + '</td>';
            satir += '<td>' + siraliVeritabani[i]["aciklama"] + '</td>';
            satir += '<td>' + siraliVeritabani[i]["cekilenZikirSayisi"] + '</td>';
            if (parseInt(siraliVeritabani[i]["zikirSayisiHedefi"]) == 0) {
                satir += '<td>' + siraliVeritabani[i]["varsayilanZikirSayisiHedefi"] + '</td>';
            } else {
                satir += '<td>' + siraliVeritabani[i]["zikirSayisiHedefi"] + '</td>';
            }
            var tamamlanmaYuzdesi = "";
            if (parseInt(siraliVeritabani[i]["zikirSayisiHedefi"]) == 0) {
                tamamlanmaYuzdesi = parseInt(siraliVeritabani[i]['cekilenZikirSayisi'] * 100 / siraliVeritabani[i]['varsayilanZikirSayisiHedefi']);
            } else {
                tamamlanmaYuzdesi = parseInt(siraliVeritabani[i]['cekilenZikirSayisi'] * 100 / siraliVeritabani[i]['zikirSayisiHedefi']);
            }
            if (tamamlanmaYuzdesi > 100) {
                tamamlanmaYuzdesi = 100;
            }
            var cubukYuzdesi = tamamlanmaYuzdesi;
            if (cubukYuzdesi == 0) {
                cubukYuzdesi = 1;
            }
            satir += '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
            satir += '<td style="cursor: pointer;" onclick="sesCal(\'/esmaul-husna-okunuslari/' + siraliVeritabani[i]["id"] + '.m4a\')">Dinle</td>';
            if (siraliVeritabani[i]["favori"] == false) {
                satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
            } else {
                satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
            }
            satir += '</tr>';
        }
        document.getElementById("en-cok-cektigim-zikirler-tablosu-tbody").innerHTML = satir;
    }, 100);
}

function modelZikirlerVeAciklamalariTablosunuOlustur() {
    document.getElementById("zikirler-ve-aciklamalari-tablosu-tbody").innerHTML = "";
    for (var i = 0; i < 99; i++) {
        var satir = "";
        satir += '<tr>';
        var sinif = "";
        if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
            if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['varsayilanZikirSayisiHedefi'])) {
                sinif = 'class="bg-success bg-opacity-25"';
            } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                sinif = 'class="bg-warning bg-opacity-25"';
            }
        } else {
            if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['zikirSayisiHedefi']) > 0) {
                sinif = 'class="bg-success bg-opacity-25"';
            } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                sinif = 'class="bg-warning bg-opacity-25"';
            }
        }
        satir += '<th ' + sinif + ' scope="row">' + veritabani[i]["id"] + '</th>';
        satir += '<td>' + veritabani[i]["turkce"] + '</td>';
        satir += '<td>' + veritabani[i]["arapca"] + '</td>';
        satir += '<td>' + veritabani[i]["aciklama"] + '</td>';
        satir += '</tr>';
        document.getElementById("zikirler-ve-aciklamalari-tablosu-tbody").innerHTML += satir;
    }
}
function tamamladigimZikirlerimTablosunuOlustur() {
    document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").innerHTML = '<tr><td colspan="9">Tablo yükleniyor...</td></tr>';
    setTimeout(() => {
        document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").innerHTML = "";
        var tamamlanmisZikirVarmi = false;
        var satir = "";
        for (var i = 0; i < 99; i++) {
            var mevcutZikirSayisiHedefi = 0;
            if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                mevcutZikirSayisiHedefi = veritabani[i]["varsayilanZikirSayisiHedefi"];
            } else {
                mevcutZikirSayisiHedefi = veritabani[i]["zikirSayisiHedefi"];
            }
            if (veritabani[i]['cekilenZikirSayisi'] >= mevcutZikirSayisiHedefi) {
                tamamlanmisZikirVarmi = true;
                satir += '<tr>';
                satir += '<th class="bg-success bg-opacity-25" scope="row">' + veritabani[i]["id"] + '</th>';
                satir += '<td>' + veritabani[i]["turkce"] + '</td>';
                satir += '<td>' + veritabani[i]["arapca"] + '</td>';
                satir += '<td>' + veritabani[i]["aciklama"] + '</td>';
                satir += '<td>' + veritabani[i]["cekilenZikirSayisi"] + '</td>';
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    satir += '<td>' + veritabani[i]["varsayilanZikirSayisiHedefi"] + '</td>';
                } else {
                    satir += '<td>' + veritabani[i]["zikirSayisiHedefi"] + '</td>';
                }
                var tamamlanmaYuzdesi = "";
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['varsayilanZikirSayisiHedefi']);
                } else {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['zikirSayisiHedefi']);
                }
                if (tamamlanmaYuzdesi > 100) {
                    tamamlanmaYuzdesi = 100;
                }
                var cubukYuzdesi = tamamlanmaYuzdesi;
                if (cubukYuzdesi == 0) {
                    cubukYuzdesi = 1;
                }
                satir += '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
                satir += '<td style="cursor: pointer;" onclick="sesCal(\'/esmaul-husna-okunuslari/' + veritabani[i]["id"] + '.m4a\')">Dinle</td>';
                if (veritabani[i]["favori"] == false) {
                    satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
                } else {
                    satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
                }
                satir += '</tr>';
            }
        }
        if (tamamlanmisZikirVarmi == false) {
            document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").innerHTML += '<td colspan="9">Henüz hiçbir zikiri tamamlamadınız.</td>';
        }
        document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").innerHTML += satir;
    }, 100);
}
function yarimKalanZikirlerimTablosunuOlustur() {
    document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").innerHTML = '<tr><td colspan="9">Tablo yükleniyor...</td></tr>';
    setTimeout(() => {
        document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").innerHTML = "";
        var tamamlanmisZikirVarmi = false;
        var satir = "";
        for (var i = 0; i < 99; i++) {
            var mevcutZikirSayisiHedefi = 0;
            if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                mevcutZikirSayisiHedefi = veritabani[i]["varsayilanZikirSayisiHedefi"];
            } else {
                mevcutZikirSayisiHedefi = veritabani[i]["zikirSayisiHedefi"];
            }
            if (veritabani[i]['cekilenZikirSayisi'] > 0 && veritabani[i]['cekilenZikirSayisi'] < mevcutZikirSayisiHedefi) {
                tamamlanmisZikirVarmi = true;
                satir += '<tr>';
                satir += '<th class="bg-warning bg-opacity-25" scope="row">' + veritabani[i]["id"] + '</th>';
                satir += '<td>' + veritabani[i]["turkce"] + '</td>';
                satir += '<td>' + veritabani[i]["arapca"] + '</td>';
                satir += '<td>' + veritabani[i]["aciklama"] + '</td>';
                satir += '<td>' + veritabani[i]["cekilenZikirSayisi"] + '</td>';
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    satir += '<td>' + veritabani[i]["varsayilanZikirSayisiHedefi"] + '</td>';
                } else {
                    satir += '<td>' + veritabani[i]["zikirSayisiHedefi"] + '</td>';
                }
                var tamamlanmaYuzdesi = "";
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['varsayilanZikirSayisiHedefi']);
                } else {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['zikirSayisiHedefi']);
                }
                if (tamamlanmaYuzdesi > 100) {
                    tamamlanmaYuzdesi = 100;
                }
                var cubukYuzdesi = tamamlanmaYuzdesi;
                if (cubukYuzdesi == 0) {
                    cubukYuzdesi = 1;
                }
                satir += '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
                satir += '<td style="cursor: pointer;" onclick="sesCal(\'/esmaul-husna-okunuslari/' + veritabani[i]["id"] + '.m4a\')">Dinle</td>';
                if (veritabani[i]["favori"] == false) {
                    satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
                } else {
                    satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
                }
                satir += '</tr>';
            }
        }
        if (tamamlanmisZikirVarmi == false) {
            document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").innerHTML += '<td colspan="9">Henüz hiçbir zikiri tamamlamadınız.</td>';
        }
        document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").innerHTML += satir;
    }, 100);
}
function sesCal(sesDosyasi) {
    var audio = new Audio(sesDosyasi);
    audio.play();
}
function zikirVerileriTablosunuOlustur() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    var satir = '<tr>';
    satir += '<th scope="col">Çekilen Zikir Sayısı</th>';
    satir += '<td>' + veritabani[id - 1]['cekilenZikirSayisi'] + '</td>';
    satir += '</tr>';
    satir += '<tr>';
    satir += '<th scope="col">Zikir Sayısı Hedefi</th>';
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) == 0) {
        satir += '<td>' + veritabani[id - 1]['varsayilanZikirSayisiHedefi'] + '</td>';
    } else {
        satir += '<td>' + veritabani[id - 1]['zikirSayisiHedefi'] + '</td>';
    }
    satir += '</tr>';
    satir += '<tr>';
    var tamamlanmaYuzdesi = "";
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) == 0) {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['varsayilanZikirSayisiHedefi']);
    } else {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['zikirSayisiHedefi']);
    }
    if (tamamlanmaYuzdesi > 100) {
        tamamlanmaYuzdesi = 100;
    }
    satir += '<td><span class="fw-bold">Tamamlanma Yüzdesi</span><div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + tamamlanmaYuzdesi + '%"></div></div></td>';
    satir += '<td>%' + tamamlanmaYuzdesi + '</td>';
    satir += '</tr>';
    document.getElementById("zikir-verileri-tablosu-tbody").innerHTML = satir;
}
zikirVerileriTablosunuOlustur();
function favoriZikirlerimTablosunuOlustur() {
    document.getElementById("favori-zikirlerim-tablosu-tbody").innerHTML = '<tr><td colspan="9">Tablo yükleniyor...</td></tr>';
    setTimeout(() => {
        var favoriZikirVarmi = false;
        document.getElementById("favori-zikirlerim-tablosu-tbody").innerHTML = "";
        var satir = "";
        for (var i = 0; i < 99; i++) {
            if (veritabani[i]["favori"] == true) {
                favoriZikirVarmi = true;
                satir += '<tr>';
                var sinif = "";
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['varsayilanZikirSayisiHedefi'])) {
                        sinif = 'class="bg-success bg-opacity-25"';
                    } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                        sinif = 'class="bg-warning bg-opacity-25"';
                    }
                } else {
                    if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['zikirSayisiHedefi']) > 0) {
                        sinif = 'class="bg-success bg-opacity-25"';
                    } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                        sinif = 'class="bg-warning bg-opacity-25"';
                    }
                }
                satir += '<th ' + sinif + ' scope="row">' + veritabani[i]["id"] + '</th>';
                satir += '<td>' + veritabani[i]["turkce"] + '</td>';
                satir += '<td>' + veritabani[i]["arapca"] + '</td>';
                satir += '<td>' + veritabani[i]["aciklama"] + '</td>';
                satir += '<td>' + veritabani[i]["cekilenZikirSayisi"] + '</td>';
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    satir += '<td>' + veritabani[i]["varsayilanZikirSayisiHedefi"] + '</td>';
                } else {
                    satir += '<td>' + veritabani[i]["zikirSayisiHedefi"] + '</td>';
                }
                var tamamlanmaYuzdesi = "";
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['varsayilanZikirSayisiHedefi']);
                } else {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['zikirSayisiHedefi']);
                }
                if (tamamlanmaYuzdesi > 100) {
                    tamamlanmaYuzdesi = 100;
                }
                var cubukYuzdesi = tamamlanmaYuzdesi;
                if (cubukYuzdesi == 0) {
                    cubukYuzdesi = 1;
                }
                satir += '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
                satir += '<td style="cursor: pointer;" onclick="sesCal(\'/esmaul-husna-okunuslari/' + veritabani[i]["id"] + '.m4a\')">Dinle</td>';
                satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
                satir += '</tr>';
            }
        }
        if (favoriZikirVarmi == false) {
            document.getElementById("favori-zikirlerim-tablosu-tbody").innerHTML += '<td colspan="9">Henüz favorilerinize hiçbir zikir eklemediniz.</td>';
        }
        document.getElementById("favori-zikirlerim-tablosu-tbody").innerHTML += satir;
    }, 100);
}
function favoriOlmayanZikirlerimTablosunuOlustur() {
    document.getElementById("favori-olmayan-zikirlerim-tablosu-tbody").innerHTML = '<tr><td colspan="9">Tablo yükleniyor...</td></tr>';
    setTimeout(() => {
        var favoriOlmayanZikirVarmi = false;
        document.getElementById("favori-olmayan-zikirlerim-tablosu-tbody").innerHTML = "";
        var satir = "";
        for (var i = 0; i < 99; i++) {
            if (veritabani[i]["favori"] == false) {
                favoriOlmayanZikirVarmi = true;
                satir += '<tr>';
                var sinif = "";
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['varsayilanZikirSayisiHedefi'])) {
                        sinif = 'class="bg-success bg-opacity-25"';
                    } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                        sinif = 'class="bg-warning bg-opacity-25"';
                    }
                } else {
                    if (parseInt(veritabani[i]['cekilenZikirSayisi']) >= parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['zikirSayisiHedefi']) > 0) {
                        sinif = 'class="bg-success bg-opacity-25"';
                    } else if (parseInt(veritabani[i]['cekilenZikirSayisi']) < parseInt(veritabani[i]['zikirSayisiHedefi']) && parseInt(veritabani[i]['cekilenZikirSayisi']) > 0) {
                        sinif = 'class="bg-warning bg-opacity-25"';
                    }
                }
                satir += '<th ' + sinif + ' scope="row">' + veritabani[i]["id"] + '</th>';
                satir += '<td>' + veritabani[i]["turkce"] + '</td>';
                satir += '<td>' + veritabani[i]["arapca"] + '</td>';
                satir += '<td>' + veritabani[i]["aciklama"] + '</td>';
                satir += '<td>' + veritabani[i]["cekilenZikirSayisi"] + '</td>';
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    satir += '<td>' + veritabani[i]["varsayilanZikirSayisiHedefi"] + '</td>';
                } else {
                    satir += '<td>' + veritabani[i]["zikirSayisiHedefi"] + '</td>';
                }
                var tamamlanmaYuzdesi = "";
                if (parseInt(veritabani[i]["zikirSayisiHedefi"]) == 0) {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['varsayilanZikirSayisiHedefi']);
                } else {
                    tamamlanmaYuzdesi = parseInt(veritabani[i]['cekilenZikirSayisi'] * 100 / veritabani[i]['zikirSayisiHedefi']);
                }
                if (tamamlanmaYuzdesi > 100) {
                    tamamlanmaYuzdesi = 100;
                }
                var cubukYuzdesi = tamamlanmaYuzdesi;
                if (cubukYuzdesi == 0) {
                    cubukYuzdesi = 1;
                }
                satir += '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
                satir += '<td style="cursor: pointer;" onclick="sesCal(\'/esmaul-husna-okunuslari/' + veritabani[i]["id"] + '.m4a\')">Dinle</td>';
                satir += '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + (i + 1) + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
                satir += '</tr>';
            }
        }
        if (favoriOlmayanZikirVarmi == false) {
            document.getElementById("favori-zikirlerim-tablosu-tbody").innerHTML += '<td colspan="9">Favori olmayan hiçbir zikriniz bulunmamaktadır.</td>';
        }
        document.getElementById("favori-olmayan-zikirlerim-tablosu-tbody").innerHTML += satir;
    }, 100);
}
function zikirSayisiniGuncelle(id) {
    document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[4].textContent = veritabani[id - 1]["cekilenZikirSayisi"];
    document.getElementById("zikir-verileri-tablosu-tbody").childNodes[0].childNodes[1].textContent = veritabani[id - 1]["cekilenZikirSayisi"];
    var tamamlanmaYuzdesi = "";
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) == 0) {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['varsayilanZikirSayisiHedefi']);
    } else {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['zikirSayisiHedefi']);
    }
    if (tamamlanmaYuzdesi > 100) {
        tamamlanmaYuzdesi = 100;
    }
    document.getElementById("zikir-verileri-tablosu-tbody").childNodes[2].childNodes[1].textContent = '%' + tamamlanmaYuzdesi;
    document.getElementById("zikir-verileri-tablosu-tbody").childNodes[2].childNodes[0].childNodes[1].childNodes[0].style = 'width:' + tamamlanmaYuzdesi + '%;'
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) == 0) {
        if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) >= parseInt(veritabani[id - 1]['varsayilanZikirSayisiHedefi'])) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-success bg-opacity-25";
        } else if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) < parseInt(veritabani[id - 1]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[id - 1]['cekilenZikirSayisi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-warning bg-opacity-25";
        } else {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "";
        }
    } else {
        if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) >= parseInt(veritabani[id - 1]['zikirSayisiHedefi']) && parseInt(veritabani[id - 1]['zikirSayisiHedefi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-success bg-opacity-25";
        } else if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) < parseInt(veritabani[id - 1]['zikirSayisiHedefi']) && parseInt(veritabani[id - 1]['cekilenZikirSayisi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-warning bg-opacity-25";
        } else {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "";
        }
    }
    var cubukYuzdesi = tamamlanmaYuzdesi;
    if (cubukYuzdesi == 0) {
        cubukYuzdesi = 1;
    }
    document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[6].innerHTML = '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
}
function zikirSayisiniArttir() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    if (localStorage.getItem("tiklamaSesi") == true) {
        sesCal("tiklama-sesi.mp3");
        if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) > 0) {
            if (parseInt(veritabani[id - 1]["cekilenZikirSayisi"]) + 1 == parseInt(veritabani[id - 1]["zikirSayisiHedefi"])) {
                sesCal("bitirme-muzigi.m4a");
            }
        } else {
            if (parseInt(veritabani[id - 1]["cekilenZikirSayisi"]) + 1 == parseInt(veritabani[id - 1]["varsayilanZikirSayisiHedefi"])) {
                sesCal("bitirme-muzigi.m4a");
            }
        }
    }
    if (parseInt(veritabani[id - 1]["cekilenZikirSayisi"]) < 100000000000) {
        veritabani[id - 1]["cekilenZikirSayisi"]++;
        localStorage.setItem("veritabani", JSON.stringify(veritabani));
        zikirSayisiniGuncelle(id);
    } else {
        bildirimOlustur("Bilgilendirme", "Maksimum zikir sayısına ulaştınız.", 3000);
    }
}
function zikirSayisiniAzalt() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    if (localStorage.getItem("tiklamaSesi") == true) {
        if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) > 0) {
            if (parseInt(veritabani[id - 1]["cekilenZikirSayisi"]) - 1 == parseInt(veritabani[id - 1]["zikirSayisiHedefi"])) {
                sesCal("bitirme-muzigi.m4a");
            }
        } else {
            if (parseInt(veritabani[id - 1]["cekilenZikirSayisi"]) - 1 == parseInt(veritabani[id - 1]["varsayilanZikirSayisiHedefi"])) {
                sesCal("bitirme-muzigi.m4a");
            }
        }
    }
    if (parseInt(veritabani[id - 1]["cekilenZikirSayisi"]) > 0) {
        veritabani[id - 1]["cekilenZikirSayisi"]--;
        localStorage.setItem("veritabani", JSON.stringify(veritabani));
        zikirSayisiniGuncelle(id);
    }
}
function zikirSayisiniSifirla() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    veritabani[id - 1]["cekilenZikirSayisi"] = 0;
    localStorage.setItem("veritabani", JSON.stringify(veritabani));
    zikirSayisiniGuncelle(id);
}
function zikriTamamla() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) > 0) {
        veritabani[id - 1]["cekilenZikirSayisi"] = parseInt(veritabani[id - 1]["zikirSayisiHedefi"]);
    } else {
        veritabani[id - 1]["cekilenZikirSayisi"] = parseInt(veritabani[id - 1]["varsayilanZikirSayisiHedefi"]);
    }
    localStorage.setItem("veritabani", JSON.stringify(veritabani));
    zikirSayisiniGuncelle(id);
}
function favorilerimiGuncelle(id) {
    if (id == undefined) {
        var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
        if (veritabani[id - 1]["favori"] == true) {
            veritabani[id - 1]["favori"] = false;
            document.getElementById("kisayol-butonu-favorilerimi-guncelle").innerHTML = 'Favorilerime Ekle <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg>';
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
        } else {
            veritabani[id - 1]["favori"] = true;
            document.getElementById("kisayol-butonu-favorilerimi-guncelle").innerHTML = 'Favorilerimden Çıkar <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg>';
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
        }
        localStorage.setItem("veritabani", JSON.stringify(veritabani));
        zikirSecmeKutusunuOlustur();
        return;
    }
    if (veritabani[id - 1]["favori"] == true) {
        veritabani[id - 1]["favori"] = false;
        document.getElementById("kisayol-butonu-favorilerimi-guncelle").innerHTML = 'Favorilerime Ekle <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg>';
        document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
        for (var i = 0; i < document.getElementById("favori-zikirlerim-tablosu-tbody").childNodes.length; i++) {
            if (document.getElementById("favori-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0] && document.getElementById("favori-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0].innerText == id) {
                document.getElementById("favori-zikirlerim-tablosu-tbody").childNodes[i].remove();
            }
        }
        for (var i = 0; i < document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes.length; i++) {
            if (document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0] && document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0].innerText == id) {
                document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes[i].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
            }
        }
        for (var i = 0; i < document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes.length; i++) {
            if (document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0] && document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0].innerText == id) {
                document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
            }
        }
        for (var i = 0; i < document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes.length; i++) {
            if (document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0] && document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0].innerText == id) {
                document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16"><path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/></svg></td>';
            }
        }
    } else {
        veritabani[id - 1]["favori"] = true;
        document.getElementById("kisayol-butonu-favorilerimi-guncelle").innerHTML = 'Favorilerimden Çıkar <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg>';
        document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
        for (var i = 0; i < document.getElementById("favori-olmayan-zikirlerim-tablosu-tbody").childNodes.length; i++) {
            if (document.getElementById("favori-olmayan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0] && document.getElementById("favori-olmayan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0].innerText == id) {
                document.getElementById("favori-olmayan-zikirlerim-tablosu-tbody").childNodes[i].remove();
            }
        }
        for (var i = 0; i < document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes.length; i++) {
            if (document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0] && document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0].innerText == id) {
                document.getElementById("tamamladigim-zikirlerim-tablosu-tbody").childNodes[i].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
            }
        }
        for (var i = 0; i < document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes.length; i++) {
            if (document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0] && document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[0].innerText == id) {
                document.getElementById("yarim-kalan-zikirlerim-tablosu-tbody").childNodes[i].childNodes[8].innerHTML = '<td style="cursor:pointer;" onclick="favorilerimiGuncelle(' + id + ')"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/></svg></td>';
            }
        }
    }
    localStorage.setItem("veritabani", JSON.stringify(veritabani));
    zikirSecmeKutusunuOlustur();
}
function hedefBelirlemeModeliniAyarla() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) > 0) {
        document.getElementById("zikir-sayisi-hedefi").value = parseInt(veritabani[id - 1]["zikirSayisiHedefi"]);
    } else {
        document.getElementById("zikir-sayisi-hedefi").value = parseInt(veritabani[id - 1]["varsayilanZikirSayisiHedefi"]);
    }
    document.getElementById("varsayilan-zikir-sayisi-hedefi").innerText = veritabani[id - 1]["varsayilanZikirSayisiHedefi"];
}
function zikirSayisiHedefiBelirle() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    var yeniZikirSayisiHedefi = document.getElementById("zikir-sayisi-hedefi").value;
    if (!/^[0-9]+$/.test(yeniZikirSayisiHedefi)) {
        bildirimOlustur("İşlem Geçersiz", "Zikir sayısı hedefinizi sayı olarak giriniz.", 5000);
        return;
    }
    if (yeniZikirSayisiHedefi < 0 || yeniZikirSayisiHedefi > 100000000000) {
        bildirimOlustur("İşlem Geçersiz", "Zikir sayısı hedefinizi en az 0, en fazla 100000000000 (yüz milyar) olabilir", 5000);
        return;
    }
    if (yeniZikirSayisiHedefi == 0) {
        veritabani[id - 1]["zikirSayisiHedefi"] = veritabani[id - 1]["varsayilanZikirSayisiHedefi"];
        localStorage.setItem("veritabani", JSON.stringify(veritabani));
        bildirimOlustur("İşlem Başarılı", "Zikir sayısı hedefinizi 0 olarak girdiğinizden dolayı zikir sayısı hedefiniz, varsayılan zikir sayısı hedefi olarak güncellenmiştir.\nVarsayılan zikir sayısı hedefi: " + veritabani[id - 1]["varsayilanZikirSayisiHedefi"], 5000);
    } else {
        veritabani[id - 1]["zikirSayisiHedefi"] = yeniZikirSayisiHedefi;
        localStorage.setItem("veritabani", JSON.stringify(veritabani));
        bildirimOlustur("İşlem Başarılı", "Zikir sayısı hedefiniz " + yeniZikirSayisiHedefi + " olacak şekilde güncellendi.", 5000);
    }
    zikirVerileriTablosunuOlustur();
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) == 0) {
        if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) >= parseInt(veritabani[id - 1]['varsayilanZikirSayisiHedefi'])) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-success bg-opacity-25";
        } else if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) < parseInt(veritabani[id - 1]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[id - 1]['cekilenZikirSayisi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-warning bg-opacity-25";
        } else {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "";
        }
    } else {
        if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) >= parseInt(veritabani[id - 1]['zikirSayisiHedefi']) && parseInt(veritabani[id - 1]['zikirSayisiHedefi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-success bg-opacity-25";
        } else if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) < parseInt(veritabani[id - 1]['zikirSayisiHedefi']) && parseInt(veritabani[id - 1]['cekilenZikirSayisi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-warning bg-opacity-25";
        } else {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "";
        }
    }
    var tamamlanmaYuzdesi = "";
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) == 0) {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['varsayilanZikirSayisiHedefi']);
    } else {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['zikirSayisiHedefi']);
    }
    if (tamamlanmaYuzdesi > 100) {
        tamamlanmaYuzdesi = 100;
    }
    var cubukYuzdesi = tamamlanmaYuzdesi;
    if (cubukYuzdesi == 0) {
        cubukYuzdesi = 1;
    }
    document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[6].innerHTML = '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
    document.getElementById("ana-tablo-tbody").childNodes[1].childNodes[5].innerText = yeniZikirSayisiHedefi;
}
function cekilenZikirSayisiniDegistirmeModeliniAyarla() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    document.getElementById("degistirilecek-zikrin-cekilme-sayisi").innerText = veritabani[id - 1]["cekilenZikirSayisi"];
    document.getElementById("degistirilecek-zikrin-adi").innerText = veritabani[id - 1]["turkce"] + ' ( ' + veritabani[id - 1]["arapca"] + ' )';
    document.getElementById("cekilen-zikir-sayisinin-yeni-degeri").value = "";
}
function cekilenZikirSayisiniDegistir() {
    var id = parseInt(document.getElementById("zikir-secme-kutusu").selectedIndex) + 1;
    var cekilenZikirSayisininYeniDegeri = document.getElementById("cekilen-zikir-sayisinin-yeni-degeri").value;
    if (!/^[0-9]+$/.test(cekilenZikirSayisininYeniDegeri)) {
        bildirimOlustur("İşlem Geçersiz", "Çekilen zikir sayısının yeni değerini sayı olarak giriniz.", 5000);
        return;
    }
    if (cekilenZikirSayisininYeniDegeri < 0 || cekilenZikirSayisininYeniDegeri > 100000000000) {
        bildirimOlustur("İşlem Geçersiz", "Çekilen zikir sayısının yeni değeri en az 0, en fazla 100000000000 (yüz milyar) olabilir", 5000);
        return;
    }
    cekilenZikirSayisininYeniDegeri = parseInt(cekilenZikirSayisininYeniDegeri);
    veritabani[id - 1]["cekilenZikirSayisi"] = cekilenZikirSayisininYeniDegeri;
    localStorage.setItem("veritabani", JSON.stringify(veritabani));
    bildirimOlustur("İşlem Başarılı", "Çekilen zikir sayısının yeni değeri " + cekilenZikirSayisininYeniDegeri + " olacak şekilde güncellendi.", 5000);
    zikirVerileriTablosunuOlustur();
    if (parseInt(veritabani[id - 1]["zikirSayisiHedefi"]) == 0) {
        if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) >= parseInt(veritabani[id - 1]['varsayilanZikirSayisiHedefi'])) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-success bg-opacity-25";
        } else if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) < parseInt(veritabani[id - 1]['varsayilanZikirSayisiHedefi']) && parseInt(veritabani[id - 1]['cekilenZikirSayisi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-warning bg-opacity-25";
        } else {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "";
        }
    } else {
        if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) >= parseInt(veritabani[id - 1]['zikirSayisiHedefi']) && parseInt(veritabani[id - 1]['zikirSayisiHedefi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-success bg-opacity-25";
        } else if (parseInt(veritabani[id - 1]['cekilenZikirSayisi']) < parseInt(veritabani[id - 1]['zikirSayisiHedefi']) && parseInt(veritabani[id - 1]['cekilenZikirSayisi']) > 0) {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "bg-warning bg-opacity-25";
        } else {
            document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[0].classList = "";
        }
    }
    var tamamlanmaYuzdesi = "";
    if (veritabani[id - 1]["zikirSayisiHedefi"] == 0) {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['varsayilanZikirSayisiHedefi']);
    } else {
        tamamlanmaYuzdesi = parseInt(veritabani[id - 1]['cekilenZikirSayisi'] * 100 / veritabani[id - 1]['zikirSayisiHedefi']);
    }
    if (tamamlanmaYuzdesi > 100) {
        tamamlanmaYuzdesi = 100;
    }
    var cubukYuzdesi = tamamlanmaYuzdesi;
    if (cubukYuzdesi == 0) {
        cubukYuzdesi = 1;
    }
    document.getElementById("ana-tablo-tbody").childNodes[id].childNodes[6].innerHTML = '<td>%' + tamamlanmaYuzdesi + '<div class="progress" style="height: 20px;"><div class="bg-success bg-opacity-75 progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ' + cubukYuzdesi + '%"></div></div>' + '</td>';
    document.getElementById("ana-tablo-tbody").childNodes[1].childNodes[4].innerText = cekilenZikirSayisininYeniDegeri;
}

if (localStorage.getItem("cerezBilgilendirmesiGosterilsinmi") == 1) {
    const toastLiveExample = document.getElementById('cerez-kullanimi-hakkinda-bilgilendirme-kutucugu')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}

function cerezBilgilendirmesiniKapat() {
    localStorage.setItem("cerezBilgilendirmesiGosterilsinmi", 0);
}

setTimeout(() => {
    modelZikirlerVeAciklamalariTablosunuOlustur();
    zikirlerVeOkunuslariTablosunuOlustur();
}, 1000);

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == XMLHttpRequest.DONE) {
//         var veritabani = JSON.parse(xhr.responseText);
//         yeniVeritabani = "[";
//         for (var i = 0; i < 99; i++) {
//             yeniVeritabani += "{";
//             yeniVeritabani += '"kategoriNo":' + veritabani[i]["kategoriNo"] + ',';
//             yeniVeritabani += '"id":' + veritabani[i]["id"] + ',';
//             yeniVeritabani += '"turkce":"' + veritabani[i]["turkce"] + '",';
//             yeniVeritabani += '"arapca":"' + veritabani[i]["arapca"] + '",';
//             yeniVeritabani += '"aciklama":"' + veritabani[i]["aciklama"] + '",';
//             yeniVeritabani += '"varsayilanZikirSayisiHedefi":' + veritabani[i]["cekilmesiGerekenZikirSayisi"] + ',';
//             yeniVeritabani += '"zikirSayisiHedefi":' + 0 + ',';
//             yeniVeritabani += '"cekilenZikirSayisi":' + 0 + ',';
//             yeniVeritabani += '"favori":' + false;
//             if (i + 1 == 99) {
//                 yeniVeritabani += "}";
//             } else {
//                 yeniVeritabani += "},";
//             }
//         }
//         yeniVeritabani += "]";
//         // console.log(yeniVeritabani)
//     }
// }
// xhr.open('GET', '/veritabani.json', true);
// xhr.send(null);
