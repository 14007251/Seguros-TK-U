<div style="text-align: center">
<h3>Stack Tecnológico</h3>
</div>

<p style="text-align: center">
<img src="https://img.shields.io/badge/Javascript-ECMAScript%206+-yellow?style=plastic" alt="">
<img src="https://img.shields.io/badge/html-v5-orange?style=plastic" alt="">
</p>

---

# Proyecto Cotizador Automático - Seguros TK-U

---

## 1. Análisis del Problema
La empresa TK-U en Jedha tiene un proceso de cotización manual lento (máximo 50 al día).
Este programa automatiza el cálculo para agilizar la atención al cliente y evitar pérdidas económicas.

**Casos Considerados para Recargos**
- Edad del Asegurado (10%, 20% o 30%).
- Edad del Conyuge (Si aplica, según el mismo rango que el asegurado).
- Cantidad de hijos (20% por cada uno sobre el precio base).

---

## 2. Algoritmo (Pasos del programa)

1. **Inicio**: Definición de constantes de precios y porcentajes.
2. **Entrada:** Solicitar nombre y edad del asegurado.
3. **Validación:** Ciclo `while` para asegurar que la edad sea un número y mayor a 18.
4. **Captura de datos adicionales:** Preguntar por estado civil y cantidad de hijos.
5. **Cálculos:** Aplicar recargo de edad del asegurado.
   * Aplicar recargo de cónyuge (si aplica).
   * Aplicar recargo de hijos (cantidad * 20% de base).
6. **Resultado:** Sumar recargos al precio base y mostrar el total mediante alertas.

---

## 3. Instrucciones de uso

Solo debe abrir el archivo HTML/JS en un navegador y completar los campos solicitados en las ventanas emergentes.