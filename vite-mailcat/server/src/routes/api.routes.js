import express from 'express';
import { generateTransformation } from '../services/gemini.service.js';

const router = express.Router();

/**
 * POST /api/transform
 * Endpoint para transformar texto usando Gemini AI.
 * 
 * Body esperado:
 * {
 *   "text": "Texto borrador...",
 *   "action": "formalize" | "shorten" | "changeTone"
 * }
 */
router.post('/transform', async (req, res) => {
  const { text, action } = req.body;

  // Validación de entrada
  if (!text || typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ 
      success: false, 
      error: 'El campo "text" es requerido y no puede estar vacío.' 
    });
  }

  if (!action || typeof action !== 'string') {
    return res.status(400).json({ 
      success: false, 
      error: 'El campo "action" es requerido.' 
    });
  }

  try {
    // Invocar el servicio de IA
    const result = await generateTransformation(text, action);
    
    // Retornar la respuesta exitosa
    res.status(200).json({
      success: true,
      result: result
    });

  } catch (error) {
    console.error('[API Routes] Error en /transform:', error.message);
    
    // Distinguir entre errores de validación de acción y errores del servidor/IA
    if (error.message.includes('Acción no soportada')) {
      return res.status(400).json({ success: false, error: error.message });
    }

    res.status(500).json({ 
      success: false, 
      error: 'Error interno del servidor al procesar la solicitud con IA.' 
    });
  }
});

export default router;
