import { GoogleGenAI } from '@google/genai';

// Instanciar el cliente usando la llave de entorno
// Se usa process.env.GEMINI_API_KEY por defecto en el SDK
const ai = new GoogleGenAI({});

/**
 * Diccionario de System Instructions para cada acción soportada.
 */
const SYSTEM_PROMPTS = {
  formalize: `Eres un asistente corporativo experto en comunicación profesional. 
Tu objetivo es reescribir el texto proporcionado para que suene formal, educado y adecuado para el entorno empresarial.
Corrige cualquier error ortográfico o gramatical. 
Mantén el mensaje claro y directo, eliminando jergas o coloquialismos.
No agregues información inventada, solo transforma el tono.`,

  shorten: `Eres un editor experto en síntesis. 
Tu objetivo es resumir el texto proporcionado, manteniendo únicamente la información crítica y la intención original.
El resultado debe ser conciso, directo y fácil de leer rápidamente.
Corrige cualquier error gramatical en el proceso.`,

  changeTone: `Eres un experto en psicología de negocios y comunicación diplomática.
Tu objetivo es reescribir el texto proporcionado para suavizar su impacto, haciéndolo sonar amable, colaborativo y constructivo, sin perder la firmeza del mensaje original.
Es ideal para transformar quejas, urgencias o mensajes directos en correos diplomáticos.
Corrige la ortografía y gramática.`
};

/**
 * Genera la transformación de texto usando Gemini 3 Flash.
 * 
 * @param {string} text - El texto borrador original del usuario.
 * @param {string} action - La acción a realizar (formalize, shorten, changeTone).
 * @returns {Promise<string>} - El texto transformado.
 */
export const generateTransformation = async (text, action) => {
  if (!text || !action) {
    throw new Error('Faltan parámetros requeridos: text o action.');
  }

  const systemInstruction = SYSTEM_PROMPTS[action];
  
  if (!systemInstruction) {
    throw new Error(`Acción no soportada: ${action}`);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash',
      contents: text,
      config: {
        systemInstruction: systemInstruction,
        // Configuración de temperatura moderada para respuestas creativas pero formales
        temperature: 0.4, 
      }
    });

    return response.text;
  } catch (error) {
    console.error('[Gemini Service] Error al generar contenido:', error);
    throw new Error('No se pudo procesar el texto con la IA en este momento.');
  }
};
