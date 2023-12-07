function caythong(h) {
    const mau = ['#ff0000', '#ffcc00', '#0066cc'];
    let treeOutput = '';

    for (let i = 0; i < h; i++) {
        treeOutput += ' '.repeat(h - i);
        for (let j = 0; j < 2 * i + 1; j++) {
            if (Math.random() < 0.1) {
                const color = mau[Math.floor(Math.random() * mau.length)];
                treeOutput += `<span style="color:${color}">*</span>`;
            } else {
                treeOutput += '<span style="color:#00cc00">*</span>';
            }
        }
        treeOutput += '\n';
    }

    treeOutput += ' '.repeat(h - 1) + '***\n';
    treeOutput += ' '.repeat(h - 1) + '***\n';

    const color = mau[Math.floor(Math.random() * mau.length)];
    treeOutput += `<span style="color:${color}">${' '.repeat(8)}Merry Christmas!</span>\n`;
    treeOutput += `<span style="color:${color}">${' '.repeat(14)}2023\n</span>`;
    treeOutput += `<span style="color:${color}">${' '.repeat(6)}❤️ Hoàng Thị Thu ❤️</span>`;

    document.getElementById('christmasTree').innerHTML = treeOutput;
}

function animateTree() {
    setInterval(() => {
        caythong(15);
    }, 200);
}

animateTree();
