"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventas_controller_1 = require("../controllers/ventas.controller");
const router = (0, express_1.Router)();
router.post('/ventas', ventas_controller_1.insertSale);
exports.default = router;
//# sourceMappingURL=ventas.routes.js.map