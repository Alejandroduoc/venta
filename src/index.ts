import express from 'express';
import ventasRoutes from './routes/ventas.routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set

// Middleware to parse JSON bodies
app.use(express.json());

// Use the ventas routes
app.use('/api', ventasRoutes); // You can prefix your API routes, e.g., /api

// Basic route for the root
app.get('/', (req, res) => {
  res.send('Ventas API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});