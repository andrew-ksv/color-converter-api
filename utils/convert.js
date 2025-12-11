/**
 * Convert RGB to CMYK
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {{c: number, m: number, y: number, k: number}}
 */
function rgbToCmyk(r, g, b) {
    if (r === 0 && g === 0 && b === 0) {
        return { c: 0, m: 0, y: 0, k: 100 };
    }

    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);

    let minCMY = Math.min(c, m, y);
    c = ((c - minCMY) / (1 - minCMY)) * 100;
    m = ((m - minCMY) / (1 - minCMY)) * 100;
    y = ((y - minCMY) / (1 - minCMY)) * 100;
    let k = minCMY * 100;

    return { c: Math.round(c), m: Math.round(m), y: Math.round(y), k: Math.round(k) };
}

/**
 * Convert CMYK to RGB
 * @param {number} c - Cyan value (0-100)
 * @param {number} m - Magenta value (0-100)
 * @param {number} y - Yellow value (0-100)
 * @param {number} k - Black value (0-100)
 * @returns {{r: number, g: number, b: number}}
 */
function cmykToRgb(c, m, y, k) {
    let r = 255 * (1 - c / 100) * (1 - k / 100);
    let g = 255 * (1 - m / 100) * (1 - k / 100);
    let b = 255 * (1 - y / 100) * (1 - k / 100);

    return { r: Math.round(r), g: Math.round(g), b: Math.round(b) };
}

module.exports = { rgbToCmyk, cmykToRgb };