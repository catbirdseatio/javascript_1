const area = (r) => Math.PI * r ** 2;
const circumference = (r) => 2 * Math.PI * r;
const volume_cone = (r, h) => Math.PI * (r**2) * (h / 3);


module.exports = {
    area: area,
    circumference: circumference,
    volume_cone: volume_cone
}