const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth = 5;


function drawCircle(x, y, radius) {
    const r2 = '2.5' * radius;
    const r3 = '6.5' * radius;

    ctx.beginPath();
    ctx.strokeStyle = 'blue'; // цвет круга
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.stroke();//circle1

    ctx.beginPath();
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x, y + r2, '1.5' * radius, 0, 2 * Math.PI, false);
    ctx.stroke();//circle2

    ctx.beginPath();
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x, y + r3, '2.5' * radius, 0, 2 * Math.PI, false);
    ctx.stroke();//circle3


    ctx.beginPath();
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x - (radius / '2'), y - (radius / '2'), radius / '10', 0, 2 * Math.PI, false);
    ctx.strokeStyle = 'black';
    ctx.stroke();//eye right
    ctx.fill();

    ctx.beginPath();
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x + (radius / '2'), y - (radius / '2'), radius / '10', 0, 2 * Math.PI, false);
    ctx.stroke();//eye left
    ctx.fill();

    ctx.beginPath();
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x, y + (radius / '2'), radius / '4', 0, Math.PI, false);
    ctx.stroke(); //mouth

    ctx.beginPath();//nose
    ctx.strokeStyle = 'red';
    ctx.moveTo(x, y);
    ctx.lineTo(x + (radius / '2'), y);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x, y + r2, radius / '10', 0, 2 * Math.PI, false);
    ctx.stroke();//button1
    ctx.fill();

    ctx.beginPath();
    // eslint-disable-next-line no-magic-numbers
    ctx.arc(x, y + r3, radius / '10', 0, 2 * Math.PI, false);
    ctx.stroke();//button2
    ctx.fill();

    ctx.beginPath();//hend right
    ctx.moveTo(x - radius, y + r2);
    ctx.lineTo(x - r2, y + (r2 / '2'));
    ctx.stroke();

    ctx.beginPath(); //hend left
    ctx.moveTo(x + radius, y + r2);
    ctx.lineTo(x + r2, y + (r2 / '2'));
    ctx.stroke();



}
// eslint-disable-next-line no-magic-numbers
drawCircle(200, 110, 60);