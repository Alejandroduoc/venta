"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ventas_controller_1 = require("../controllers/ventas.controller");
const router = (0, express_1.Router)();
<<<<<<< Updated upstream
<<<<<<< Updated upstream
router.post('/ventas', ventas_controller_1.insertSale);
=======
router.post('/ventas', ventas_controller_1.createSale);
// Ruta para mostrar un mensaje al acceder a /api/ventas
>>>>>>> Stashed changes
=======
router.post('/ventas', ventas_controller_1.createSale);
// Ruta para mostrar un mensaje al acceder a /api/ventas
>>>>>>> Stashed changes
exports.default = router;
//# sourceMappingURL=ventas.routes.js.map