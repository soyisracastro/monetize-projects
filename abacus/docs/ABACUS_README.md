# 🧮 ABACUS - Asistente Fiscal Inteligente

**Versión:** 1.1 MVP — Pivot a contador como usuario primario
**Última actualización:** 15 de Marzo de 2026
**Autor:** Isca Castro (TodoConta / S&I Castro Consultores)
**Stack:** OpenClaw + Claude Sonnet 4.6 + WhatsApp Business

---

## 🎯 VISIÓN DEL PROYECTO

**Abacus es el copiloto del contador mexicano:**
- Responde consultas fiscales en segundos, citando el artículo exacto
- Entiende notas de voz — el contador habla, Abacus responde
- Disponible cuando el cliente pregunta a las 10pm y el deadline es mañana
- Evoluciona de asistente de consulta a agente fiscal con acceso al SAT

**Usuario primario:** Contador Público en ejercicio independiente (C.P./L.C.)

**Propuesta de valor única:**
> "Tu segundo cerebro fiscal. Siempre disponible, siempre actualizado."

El contador no necesita que Abacus lo reemplace — necesita que lo haga
ver más profesional, más rápido y más seguro ante su cliente.

---

## 📚 ÍNDICE DE DOCUMENTACIÓN

### 🚀 FASE 1: MVP (Mes 1-3) - **IMPLEMENTAR HOY**

**Setup y Lanzamiento:**
- [01_MVP_Setup_Guide.md](./01_MVP_Setup_Guide.md) - Guía paso a paso para lanzar hoy
- [02_MVP_Configuration.md](./02_MVP_Configuration.md) - Configuraciones técnicas de OpenClaw
- [03_MVP_Content.md](./03_MVP_Content.md) - Base de conocimiento fiscal inicial

**Operación:**
- [04_MVP_Testing.md](./04_MVP_Testing.md) - Plan de testing con beta users
- [05_MVP_Monitoring.md](./05_MVP_Monitoring.md) - Monitoreo y métricas clave

---

### 📈 FASE 2: CRECIMIENTO (Mes 4-6)

**Expansión de Features:**
- [06_Phase2_Gmail_Drive.md](./06_Phase2_Gmail_Drive.md) - Integración Gmail + Google Drive
- [07_Phase2_Advanced_Features.md](./07_Phase2_Advanced_Features.md) - Calculadoras, recordatorios, etc.
- [08_Phase2_Payment_System.md](./08_Phase2_Payment_System.md) - Sistema de pagos (SPEI → Stripe)

---

### 🌐 FASE 3: OMNIPRESENCIA (Mes 7-12)

**Agente Omnipresente:**
- [09_Phase3_Omnipresent_Architecture.md](./09_Phase3_Omnipresent_Architecture.md) - Arquitectura de contexto unificado
- [10_Phase3_Web_Widget.md](./10_Phase3_Web_Widget.md) - Widget para app.todoconta.com
- [11_Phase3_Event_System.md](./11_Phase3_Event_System.md) - Sistema de eventos en tiempo real
- [12_Phase3_Pairing_System.md](./12_Phase3_Pairing_System.md) - Vinculación WhatsApp ↔ Web

---

### 🔧 FASE 4: AGENTE AVANZADO (Año 2)

**Automatización Completa:**
- [13_Phase4_SAT_MCP_Server.md](./13_Phase4_SAT_MCP_Server.md) - Servidor MCP para acceso al SAT
- [14_Phase4_Facturacion_MCP.md](./14_Phase4_Facturacion_MCP.md) - Servidor MCP de facturación
- [15_Phase4_Full_Automation.md](./15_Phase4_Full_Automation.md) - Automatizaciones avanzadas

---

### 📊 NEGOCIO Y ESTRATEGIA

**Modelo de Negocio:**
- [16_Business_Model.md](./16_Business_Model.md) - Freemium, pricing, proyecciones
- [17_Marketing_Strategy.md](./17_Marketing_Strategy.md) - Go-to-market y adquisición
- [18_Objections_Handling.md](./18_Objections_Handling.md) - Manejo de objeciones de venta
- [19_Competitive_Analysis.md](./19_Competitive_Analysis.md) - Análisis competitivo

---

### 🛠️ TÉCNICO Y REFERENCIA

**Especificaciones:**
- [20_Technical_Stack.md](./20_Technical_Stack.md) - Stack tecnológico completo
- [21_Infrastructure.md](./21_Infrastructure.md) - Infraestructura y costos
- [22_Security_Privacy.md](./22_Security_Privacy.md) - Seguridad y privacidad
- [23_API_Reference.md](./23_API_Reference.md) - Referencia de APIs y MCPs

---

### 📖 CONTENIDO Y CONOCIMIENTO

**Base de Conocimiento Fiscal:**
- [24_Knowledge_Base_Structure.md](./24_Knowledge_Base_Structure.md) - Estructura de contenido
- [25_SOUL.md](./25_SOUL.md) - Personalidad y comportamiento de Abacus
- [26_Regimenes_Fiscales.md](./26_Regimenes_Fiscales.md) - Regímenes fiscales México 2026
- [27_Productos_TodoConta.md](./27_Productos_TodoConta.md) - Catálogo de productos

---

### 🎓 APRENDIZAJES Y MEJORES PRÁCTICAS

**Insights del Grupo OpenClaw:**
- [28_OpenClaw_Best_Practices.md](./28_OpenClaw_Best_Practices.md) - Mejores prácticas de la comunidad
- [29_Common_Pitfalls.md](./29_Common_Pitfalls.md) - Errores comunes y cómo evitarlos
- [30_Troubleshooting.md](./30_Troubleshooting.md) - Solución de problemas comunes

---

## 🗺️ ROADMAP EJECUTIVO

### **HOY (11 Marzo 2026) - Día 0**
```
☐ Contratar Hostinger VPS KVM 1
☐ Instalar OpenClaw manualmente
☐ Configurar Claude OAuth + ChatGPT OAuth
☐ Conectar WhatsApp Business
☐ Crear base de conocimiento mínima
☐ Testing con 3-5 beta users
```

### **Semana 1-4 (Mes 1)**
```
☐ Recopilar feedback de beta testing
☐ Optimizar respuestas fiscales
☐ Agregar 10+ temas a base de conocimiento
☐ Lanzamiento público limitado (50 usuarios)
☐ Implementar sistema de cuotas freemium
```

### **Mes 2-3**
```
☐ Adquirir 10-30 suscriptores Premium
☐ Implementar método de pago (SPEI manual)
☐ Expandir base de conocimiento a 30+ temas
☐ Optimizar conversiones gratuito → Premium
```

### **Mes 4-6 (Fase 2)**
```
☐ Gmail MCP (emails automáticos)
☐ Drive MCP (organización documentos)
☐ Calendar MCP (recordatorios)
☐ Stripe para pagos automáticos
☐ 30-50 suscriptores Premium
```

### **Mes 7-12 (Fase 3)**
```
☐ Widget web en app.todoconta.com
☐ Sistema de contexto compartido
☐ Pairing WhatsApp ↔ Web
☐ Observación inteligente de acciones
☐ 50-100 suscriptores Premium
```

### **Año 2 (Fase 4)**
```
☐ SAT MCP Server (descarga XMLs)
☐ Facturación MCP (timbrado automático)
☐ Agente omnipresente completo
☐ Automatizaciones avanzadas
☐ 100-300 suscriptores Premium
```

---

## 💰 PROYECCIONES FINANCIERAS

### Costos Mensuales (MVP)
```
Hostinger VPS KVM 1:        ~110 MXN ($6 USD)
Claude OAuth (Pro):      1,800 MXN ($100 USD)
ChatGPT Plus OAuth:        360 MXN ($20 USD)
Whisper API:                18 MXN ($1 USD)
WhatsApp Business:           0 MXN (gratis)
──────────────────────────────────────────
TOTAL:                  ~2,288 MXN ($127 USD/mes)
```

### Pricing
```
Prueba:        14 días gratis, acceso completo (sin tarjeta)
Profesional:   $199 MXN/mes - Ilimitado + voz + RFC + CFDI
Bundle:        $299 MXN/mes - Profesional + TodoConta ecosystem
Despacho:      $499 MXN/mes - Hasta 5 usuarios (Año 1 Q3+)
```

### Break-even
```
Mes 3: ~17 suscriptores Profesional
MRR Mes 12: ~$46,000 MXN
ROI Año 1: proyectado positivo desde Mes 3
```

---

## 🎯 MÉTRICAS DE ÉXITO

### KPIs MVP (Mes 1-3) — Contadores
```
☐ 10-20 contadores en prueba (14 días)
☐ >20% conversión prueba → Profesional
☐ 80%+ alcanzan "Momento Aha" antes del día 7
☐ 15-20 suscriptores Profesional al Mes 3
☐ NPS > 60 en cuentas pagadas
☐ Break-even alcanzado (Mes 3)
```

### KPIs Fase 2 (Mes 4-6)
```
☐ 50+ contadores Profesional
☐ MRR > $13,000 MXN
☐ Churn < 4% mensual
☐ 25%+ nuevos usuarios via referral
☐ Calculadoras RESICO/IMSS funcionando
```

### KPIs Fase 3 (Mes 7-12)
```
☐ 130+ suscriptores totales
☐ MRR > $46,000 MXN
☐ Tier Despacho lanzado (5+ despachos)
☐ Widget TodoConta activo
☐ LTV promedio > $2,400 MXN
```

---

## 🚨 ADVERTENCIAS CRÍTICAS

**Del Grupo OpenClaw (Aplicadas):**

1. ⚠️ **Gmail bloquea bots** - NO usar Gmail en MVP
2. 💸 **OAuth >> APIs** - Usar OAuth para chat, APIs solo para específicos
3. 🔐 **Pairing no es bug** - Desactivar en MVP (requirePairing: false)
4. 🎯 **RequireMention** - En grupos SÍ, en 1-a-1 NO
5. 🛡️ **Privacidad** - Cada conversación es silo aislado
6. ⚡ **Rate limits** - Configurar fallbacks siempre
7. 🏗️ **Hostinger > IONOS** - Precio transparente vs cargos ocultos
8. 📱 **Manual > Automático** - Instalar OpenClaw manualmente, no pre-configurado

---

## 🔗 RECURSOS EXTERNOS

### Plataformas
- **OpenClaw:** https://openclaw.com
- **Hostinger:** https://www.hostinger.com/mx/vps/docker/moltbot
- **Claude:** https://console.anthropic.com
- **ChatGPT:** https://platform.openai.com

### Comunidades
- **Grupo OpenClaw (WhatsApp):** [Link de invitación]
- **TodoConta:** https://todoconta.com
- **S&I Castro Consultores:** [Tu sitio]

### Documentación Técnica
- **OpenClaw Docs:** https://docs.openclaw.com
- **Anthropic API:** https://docs.anthropic.com
- **OpenAI API:** https://platform.openai.com/docs

---

## 📝 CHANGELOG

### v1.0 - MVP (11 Marzo 2026)
```
✅ Documentación completa del proyecto
✅ Setup guide para lanzamiento día 0
✅ Configuraciones técnicas definidas
✅ Base de conocimiento fiscal inicial
✅ Sistema freemium diseñado
✅ Roadmap de 4 fases completado
```

---

## 👤 CONTACTO

**Proyecto:** Abacus - Asistente Fiscal Inteligente  
**Owner:** Isca Castro  
**Email:** [tu_email]  
**WhatsApp:** [tu_número]  
**Web:** https://todoconta.com

---

## 📄 LICENCIA

Proyecto propietario de TodoConta / S&I Castro Consultores.  
Documentación privada - No distribuir sin autorización.

---

**¡Comencemos! 🚀**

Lee primero: [01_MVP_Setup_Guide.md](./01_MVP_Setup_Guide.md) para lanzar hoy.
