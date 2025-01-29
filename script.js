const calculateBtn = document.getElementById('hitung');
const resultDiv = document.getElementById('result');


function hitungBMI() {
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value) / 100;

    const BMI = berat / (tinggi * tinggi);

    let message;

    if(BMI < 18.5){
        message = "Kekurangan berat badan :)";
    }   else if (BMI >= 18.5 && BMI < 25) {
        message = "Normal (ideal) :D";
    }   else if (BMI >= 25 && BMI < 30) {
        message = "Kelebihan berat badan :)"
    }   else if (BMI > 30) {
        message = "Obesitas :("
    }

    resultDiv.innerHTML = `BMI anda adalah ${BMI.toFixed(1)}, anda ${message}`;
}

calculateBtn.addEventListener('click', hitungBMI);