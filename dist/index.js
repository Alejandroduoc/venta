"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ventas_routes_1 = __importDefault(require("./routes/ventas.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Use the ventas routes
app.use('/api', ventas_routes_1.default); // You can prefix your API routes, e.g., /api
// Basic route for the root
app.get('/', (req, res) => {
    res.send('Ventas API is running!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map