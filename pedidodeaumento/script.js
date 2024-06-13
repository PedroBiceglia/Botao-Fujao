function fuja() {
        let bnao = document.getElementById('nao')

        let largjan = window.innerWidth;
        let altjan = window.innerHeight;

        let maxX = largjan - bnao.offsetWidth;
        let maxY = altjan - bnao.offsetHeight;

        let aleatorioX = Math.floor(Math.random() * maxX);
        let aleatorioY = Math.floor(Math.random() * maxY);

        bnao.style.left = aleatorioX + "px";
        bnao.style.top = aleatorioY + "px";
}