var request = new XMLHttpRequest();
request.onreadystatechange = function() {
   if (this.readyState === 4) {
        console.log(this.responseText);
        
        var data = JSON.parse(this.responseText);
        var doggosImage = document.getElementById("doggosIMG");
        doggosImage.src = data.message;

        

    }
}

var data1 = data1.message;
var sel = document.getElementById('select');
for (var key in data1) {
  if (data1.hasOwnProperty(key)) {
    var opt = document.createElement('option');
    opt.innerHTML = data1[key].pt;
    opt.value = data1[key].pt;
    sel.appendChild(opt);
  }
}

request.open("GET", "https://dog.ceo/api/breeds/image/random");
request.send();
