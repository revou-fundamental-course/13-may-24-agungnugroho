document.addEventListener('DOMContentLoaded', function() {
    // Hitung Luas Segitiga
    const luasForm = document.getElementById('luasForm');
    if (luasForm) {
        luasForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const alas = parseFloat(document.getElementById('alas').value);
            const tinggi = parseFloat(document.getElementById('tinggi').value);
            if (!isNaN(alas) && !isNaN(tinggi)) {
                const luas = 0.5 * alas * tinggi;
                const resultText = `L = 1/2 + a + t<br> L = 1/2 x ${alas} x ${tinggi}<br>L = ${luas}`;
                document.getElementById('luasResult').innerHTML = resultText;
            } else {
                document.getElementById('luasResult').textContent = 'Input tidak valid';
            }
        });

        document.getElementById('resetLuas').addEventListener('click', function() {
            luasForm.reset();
            document.getElementById('luasResult').textContent = '';
        });
    }


    // Hitung Keliling Segitiga
    const kelilingForm = document.getElementById('kelilingForm');
    if (kelilingForm) {
        kelilingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const sisi1 = parseFloat(document.getElementById('sisi1').value);
            const sisi2 = parseFloat(document.getElementById('sisi2').value);
            const sisi3 = parseFloat(document.getElementById('sisi3').value);
            if (!isNaN(sisi1) && !isNaN(sisi2) && !isNaN(sisi3)) {
                const keliling = sisi1 + sisi2 + sisi3;
                const resultText = `K = S1 + S2 + S3<br>K = ${sisi1} + ${sisi2} + ${sisi3}<br>K = ${keliling}`;
                document.getElementById('kelilingResult').innerHTML = resultText;
            } else {
                document.getElementById('kelilingResult').textContent = 'Input tidak valid';
            }
        });

        document.getElementById('resetKeliling').addEventListener('click', function() {
            kelilingForm.reset();
            document.getElementById('kelilingResult').textContent = '';
        });
    }
});
