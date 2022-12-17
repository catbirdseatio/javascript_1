export const area = (r) => Math.PI * r ** 2;
export const circumference = (r) => 2 * Math.PI * r;
export const volume_cone = (r, h) => Math.PI * r ** 2 * (h / 3);

export default {
    area,
    circumference
}