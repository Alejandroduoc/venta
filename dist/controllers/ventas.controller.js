"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSale = void 0;
const database_1 = require("../database");
const createSale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { codigo_producto, cantidad, precio_venta, fecha_venta } = req.body;
    if (!codigo_producto || !cantidad || !precio_venta || !fecha_venta) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    const newSale = {
        codigo_producto,
        cantidad,
        precio_venta,
        fecha_venta,
        fecha_actual: new Date(), // Assuming fecha_actual should be the current time
    };
    try {
        const [rows] = yield database_1.pool.query('INSERT INTO venta SET ?', [newSale]);
        res.status(201).json({ message: 'Sale created successfully', saleId: rows.insertId });
    }
    catch (error) {
        console.error('Error inserting sale:', error);
        res.status(500).json({ message: 'Error creating sale', error });
    }
});
exports.createSale = createSale;
//# sourceMappingURL=ventas.controller.js.map