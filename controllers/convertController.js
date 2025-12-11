const { rgbToCmyk, cmykToRgb } = require('../utils/convert');

exports.convertRgbToCmyk = (req, res) => {
    const { r, g, b } = req.body;

    if ([r, g, b].some(v => v == null || v < 0 || v > 255)) {
        return res.status(400).json({ message: 'Invalid RGB values. Must be 0-255' });
    }

    const cmyk = rgbToCmyk(r, g, b);
    res.json({ rgb: { r, g, b }, cmyk });
};

exports.convertCmykToRgb = (req, res) => {
    const { c, m, y, k } = req.body;

    if ([c, m, y, k].some(v => v == null || v < 0 || v > 100)) {
        return res.status(400).json({ message: 'Invalid CMYK values. Must be 0-100' });
    }

    const rgb = cmykToRgb(c, m, y, k);
    res.json({ cmyk: { c, m, y, k }, rgb });
};