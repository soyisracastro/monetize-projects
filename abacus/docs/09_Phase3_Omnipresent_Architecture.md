# 09 - PHASE 3: OMNIPRESENT ARCHITECTURE

**Versión:** 1.0  
**Implementación:** Mes 7-12  
**Prerrequisito:** MVP validado con 30+ suscriptores Premium

---

## 🎯 VISIÓN: ABACUS OMNIPRESENTE

**Objetivo:** Transformar Abacus de "chatbot en WhatsApp" a "asistente personal fiscal que te sigue por todos lados"

### Concepto Central

```
Usuario interactúa con Abacus en CUALQUIER canal:
- WhatsApp
- app.todoconta.com
- Email (futuro)
- API (futuro)

Abacus SIEMPRE tiene contexto completo:
- Última conversación (en cualquier canal)
- Tareas pendientes
- Documentos procesados
- Preferencias aprendidas
- Historial fiscal completo
```

---

## 🏗️ ARQUITECTURA DE ALTO NIVEL

```
┌─────────────────────────────────────────────────────────┐
│                  ABACUS CORE ENGINE                     │
│  (Cerebro Central - OpenClaw + Claude + PostgreSQL)     │
└────────────────┬────────────────────────────────────────┘
                 │
     ┌───────────┼───────────┐
     │           │           │
┌────▼────┐ ┌───▼────┐ ┌───▼─────┐
│WhatsApp │ │  Web   │ │ Future  │
│ Gateway │ │ Widget │ │Channels │
└────┬────┘ └───┬────┘ └───┬─────┘
     │          │          │
     │          │          │
┌────▼──────────▼──────────▼─────┐
│   SHARED CONTEXT DATABASE      │
│   - User Identity (UUID)       │
│   - Active Context             │
│   - Memory & History           │
│   - Preferences                │
└────────────────────────────────┘
```

---

## 🆔 SISTEMA DE IDENTIDAD UNIFICADA

### Estructura de Identidad

```javascript
{
  // ID único del usuario
  user_id: "usr_abc123def456",
  
  // Todas las formas de identificar al usuario
  identities: {
    whatsapp: "+5218341234567",
    web_session: "sess_xyz789abc",
    email: "isca@todoconta.com",
    api_key: "sk_live_abc123"
  },
  
  // Perfil unificado
  profile: {
    name: "Isca Castro",
    rfc: "CAUI850101XXX",
    regimen: "RESICO",
    subscription: "premium",
    created_at: "2026-03-11T18:00:00Z"
  },
  
  // Contexto EN ESTE MOMENTO
  active_context: {
    current_channel: "web",
    last_channel: "whatsapp",
    last_activity: "2026-03-11T10:30:00Z",
    
    // Estado actual
    state: {
      active_task: "facturacion",
      pending_confirmation: {
        type: "factura",
        data: {...},
        created_at: "2026-03-11T10:28:00Z"
      }
    }
  },
  
  // Memoria de largo plazo
  memory: {
    conversations_count: 247,
    documents_processed: 1834,
    last_calculation: {
      type: "isr_resico",
      result: 4500,
      timestamp: "2026-03-10T15:23:00Z"
    }
  }
}
```

### Flujo de Vinculación

```
[Primera vez - app.todoconta.com]

1. Usuario se registra:
   - Email: isca@todoconta.com
   - Sistema genera: user_id = usr_abc123

2. Modal de bienvenida:
   "¿Activar Abacus en WhatsApp?"
   
3. Se genera código de pairing:
   PAIR-ABCD-1234
   
4. Usuario envía código por WhatsApp
   
5. Sistema vincula:
   identities.whatsapp = "+5218341234567"
   
6. Ahora ambos canales comparten contexto
```

---

## 🔄 SINCRONIZACIÓN DE CONTEXTO EN TIEMPO REAL

### WebSocket Bidireccional

```javascript
// Cliente (app.todoconta.com)
const abacus = new AbacusClient({
  userId: "usr_abc123",
  wsUrl: "wss://abacus.todoconta.com/ws"
});

// Conectar
await abacus.connect();

// Enviar evento
abacus.trackEvent('calculation', {
  calculator: 'isr_resico',
  inputs: { ingresos: 500000 },
  result: { isr: 5000 }
});

// Recibir actualizaciones
abacus.on('context_update', (context) => {
  console.log('Contexto actualizado:', context);
});
```

```javascript
// Servidor (Abacus Core)
class ContextSyncServer {
  constructor() {
    this.connections = new Map(); // userId -> WebSocket
    this.contexts = new Map();    // userId -> context
  }
  
  handleEvent(userId, event) {
    // Actualizar contexto
    const context = this.contexts.get(userId) || {};
    
    switch(event.type) {
      case 'calculation':
        context.last_calculation = event.data;
        break;
        
      case 'xml_processing':
        context.last_xml_action = event.data;
        break;
        
      case 'navigation':
        context.current_page = event.data.page;
        break;
    }
    
    // Guardar en DB
    await db.updateContext(userId, context);
    
    // Notificar a otros canales
    this.broadcastToChannels(userId, {
      type: 'context_update',
      data: context
    });
    
    // Triggers proactivos
    this.checkProactiveTriggers(userId, event);
  }
  
  checkProactiveTriggers(userId, event) {
    // Ejemplo: ISR alto calculado
    if (event.type === 'calculation' &&
        event.data.calculator === 'isr_resico' &&
        event.data.result.isr > 10000) {
      
      this.sendToWhatsApp(userId,
        `💡 Noté que tu ISR calculado fue alto ($${event.data.result.isr}). ` +
        `¿Quieres que revise deducciones que puedas aprovechar?`
      );
    }
  }
}
```

---

## 📱 WIDGET WEB EN APP.TODOCONTA.COM

### Componente React Principal

```jsx
// AbacusWidget.jsx

import { useEffect, useState } from 'react';
import { AbacusClient } from '@todoconta/abacus-sdk';

export function AbacusWidget({ userId }) {
  const [abacus, setAbacus] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [context, setContext] = useState({});
  
  useEffect(() => {
    // Inicializar cliente
    const client = new AbacusClient({
      userId,
      apiUrl: process.env.NEXT_PUBLIC_ABACUS_API,
      wsUrl: process.env.NEXT_PUBLIC_ABACUS_WS
    });
    
    client.connect();
    
    // Suscribirse a actualizaciones
    client.on('message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });
    
    client.on('context_update', (ctx) => {
      setContext(ctx);
    });
    
    setAbacus(client);
    
    return () => client.disconnect();
  }, [userId]);
  
  return (
    <div className="abacus-widget">
      {/* Botón flotante */}
      <button 
        className="abacus-fab"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AbacusIcon />
        {context.pending_messages > 0 && (
          <span className="badge">{context.pending_messages}</span>
        )}
      </button>
      
      {/* Panel de chat */}
      {isOpen && (
        <div className="abacus-panel">
          <ChatHeader 
            status={abacus?.connected ? 'online' : 'offline'}
            context={context}
          />
          
          <MessageList messages={messages} />
          
          <ChatInput 
            onSend={(msg) => abacus.sendMessage(msg)}
          />
          
          <QuickActions 
            actions={getContextualActions(context)}
            onAction={(action) => abacus.executeAction(action)}
          />
        </div>
      )}
    </div>
  );
}
```

### Hook de Tracking

```jsx
// useAbacusTracking.js

import { useAbacusContext } from '@/contexts/AbacusContext';

export function useAbacusTracking() {
  const abacus = useAbacusContext();
  
  return {
    trackCalculation: (type, inputs, result) => {
      abacus.trackEvent('calculation', {
        calculator: type,
        inputs,
        result,
        timestamp: Date.now()
      });
    },
    
    trackXMLProcess: (action, files) => {
      abacus.trackEvent('xml_processing', {
        action,
        file_count: files.length,
        total_size: files.reduce((sum, f) => sum + f.size, 0)
      });
    },
    
    trackTaskCreated: (task) => {
      abacus.trackEvent('task_created', {
        task_id: task.id,
        task_type: task.type,
        due_date: task.due_date
      });
    },
    
    trackSATDownload: (params) => {
      abacus.trackEvent('sat_download', {
        date_range: params.dateRange,
        download_type: params.type
      });
    }
  };
}
```

### Integración en Calculadoras

```jsx
// CalculadoraISR.jsx

import { useAbacusTracking } from '@/hooks/useAbacusTracking';

function CalculadoraISR() {
  const { trackCalculation } = useAbacusTracking();
  const [ingresos, setIngresos] = useState(0);
  const [resultado, setResultado] = useState(null);
  
  const calcular = () => {
    const result = calcularISRRESICO(ingresos);
    setResultado(result);
    
    // Notificar a Abacus automáticamente
    trackCalculation('isr_resico', { ingresos }, result);
  };
  
  return (
    <div className="calculadora">
      <h2>Calculadora ISR RESICO</h2>
      
      {/* Tip contextual de Abacus */}
      <AbacusTip>
        💡 Si tus ingresos bimestrales son &lt; $583,333 MXN,
        aplica tasa del 1%
      </AbacusTip>
      
      <input
        type="number"
        value={ingresos}
        onChange={(e) => setIngresos(e.target.value)}
        placeholder="Ingresos bimestrales"
      />
      
      <button onClick={calcular}>Calcular</button>
      
      {resultado && (
        <div className="resultado">
          <p>ISR a pagar: ${resultado.isr.toLocaleString()}</p>
          <p>Tasa aplicada: {resultado.tasa}%</p>
          
          {/* Acción rápida */}
          <AbacusQuickAction
            icon="whatsapp"
            label="Enviar a mi WhatsApp"
            onClick={() => {
              abacus.sendToWhatsApp(
                `Recordatorio: ISR calculado = $${resultado.isr} MXN`
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
```

---

## 🗄️ ESQUEMA DE BASE DE DATOS

### PostgreSQL Schema

```sql
-- Usuarios unificados
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Identidades vinculadas
CREATE TABLE user_identities (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  identity_type VARCHAR(50) NOT NULL,
  identity_value VARCHAR(255) NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  verified_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  
  UNIQUE(identity_type, identity_value)
);

CREATE INDEX idx_identities_user ON user_identities(user_id);
CREATE INDEX idx_identities_type_value ON user_identities(identity_type, identity_value);

-- Perfiles de usuario
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255),
  rfc VARCHAR(13),
  regimen VARCHAR(100),
  subscription VARCHAR(50) DEFAULT 'free',
  preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Contexto en tiempo real
CREATE TABLE user_contexts (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  current_channel VARCHAR(50),
  last_channel VARCHAR(50),
  last_activity TIMESTAMP DEFAULT NOW(),
  active_state JSONB DEFAULT '{}',
  pending_confirmation JSONB,
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_contexts_last_activity ON user_contexts(last_activity);

-- Eventos de usuario
CREATE TABLE user_events (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_type VARCHAR(100) NOT NULL,
  channel VARCHAR(50) NOT NULL,
  event_data JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_events_user ON user_events(user_id);
CREATE INDEX idx_events_type ON user_events(event_type);
CREATE INDEX idx_events_created ON user_events(created_at);

-- Memoria de largo plazo
CREATE TABLE user_memory (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  memory_type VARCHAR(50) NOT NULL,
  memory_key VARCHAR(255) NOT NULL,
  memory_value JSONB DEFAULT '{}',
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_memory_user ON user_memory(user_id);
CREATE INDEX idx_memory_key ON user_memory(memory_key);
CREATE INDEX idx_memory_expires ON user_memory(expires_at) WHERE expires_at IS NOT NULL;

-- Códigos de pairing
CREATE TABLE pairing_codes (
  code VARCHAR(20) PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  identity_type VARCHAR(50) NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_pairing_expires ON pairing_codes(expires_at);
```

---

## 🔄 FLUJOS DE CASOS DE USO

### Caso 1: WhatsApp → Web → WhatsApp

```
[10:00 AM - WhatsApp]
Usuario: "Calcula mi ISR de este bimestre"
Abacus: "¿Cuánto facturaste?"
Usuario: "Déjame revisar, te digo en un rato"

[Sistema registra: pending_confirmation = "isr_calculation"]

────────────────────────────────────────

[10:15 AM - app.todoconta.com]
Usuario abre calculadora ISR RESICO
Ingresa: $500,000 MXN

[Sistema detecta contexto pendiente]
[Actualiza: pending_confirmation = null]
[Registra: last_calculation = {...}]

────────────────────────────────────────

[10:16 AM - WhatsApp - Proactivo]
Abacus: "Vi que calculaste tu ISR en la app 🧮

Ingresos: $500,000 MXN
ISR a pagar: $5,000 MXN
Tasa: 1%

¿Quieres que te genere recordatorio para pagarlo?"

Usuario: "Sí, para el 15 de abril"

Abacus: "✅ Listo, te recordaré el 12 de abril"
```

### Caso 2: Web (XML) → WhatsApp (Proactivo)

```
[2:30 PM - app.todoconta.com]
Usuario sube 127 XMLs al procesador

[Sistema procesa y detecta:]
- 85 emitidos
- 42 recibidos
- Total ingresos: $234,567 MXN

[Trigger proactivo activado]

────────────────────────────────────────

[2:32 PM - WhatsApp]
Abacus: "📊 Procesé tus 127 XMLs de marzo

Ingresos: $234,567 MXN
Gastos deducibles: $89,234 MXN

Con RESICO pagarías:
ISR: $1,453 MXN
IVA: $23,333 MXN

¿Quieres que prepare tu prellenado?"
```

### Caso 3: Tarea abandonada

```
[4:00 PM - app.todoconta.com]
Usuario empieza factura:
- RFC: PEJX850101XXX
- Concepto: Asesoría
- Monto: $5,000

[Recibe llamada, cierra laptop sin guardar]
[Sistema detecta: pending_confirmation hace 10 min]

────────────────────────────────────────

[4:10 PM - WhatsApp - Proactivo]
Abacus: "¿Sigues ahí? Dejaste una factura
pendiente para PEJX850101XXX por $5,000

¿Quieres continuarla?"

Usuario: "Sí, pero cambia a $8,000"

Abacus: "✅ Actualizado
Total: $9,280 (con IVA)
¿Confirmas para timbrar?"

[Completa tarea desde WhatsApp]
```

---

## 🛠️ STACK TECNOLÓGICO

### Backend

```javascript
// Nuevo servicio: abacus-context-server

Stack:
- Node.js 20+
- Express.js (REST API)
- ws (WebSocket server)
- PostgreSQL 16 (contexto + eventos)
- Redis (caché de sesiones)
- OpenClaw SDK (integración)

Estructura:
/abacus-context-server
  /src
    /api          # REST endpoints
    /ws           # WebSocket handlers
    /db           # PostgreSQL queries
    /services     # Lógica de negocio
    /triggers     # Triggers proactivos
  /config
  package.json
  Dockerfile
```

### Frontend SDK

```javascript
// @todoconta/abacus-sdk

import { AbacusClient } from '@todoconta/abacus-sdk';

const client = new AbacusClient({
  userId: 'usr_abc123',
  apiUrl: 'https://abacus.todoconta.com/api',
  wsUrl: 'wss://abacus.todoconta.com/ws',
  apiKey: 'optional_for_api_access'
});

await client.connect();
client.trackEvent('action', data);
client.on('context_update', callback);
```

---

## 🚀 ROADMAP DE IMPLEMENTACIÓN

### Semana 1-2: Infraestructura

```
☐ Setup PostgreSQL en VPS
☐ Crear tablas y esquemas
☐ Implementar servicio context-server básico
☐ WebSocket server funcional
☐ Testing local
```

### Semana 3-4: SDK Web

```
☐ Crear @todoconta/abacus-sdk
☐ Implementar tracking de eventos
☐ Componente AbacusWidget React
☐ Testing en app.todoconta.com staging
```

### Semana 5-6: Pairing System

```
☐ Generar códigos de pairing
☐ Flujo de vinculación WhatsApp ↔ Web
☐ Sincronización de identidades
☐ Testing end-to-end
```

### Semana 7-8: Triggers Proactivos

```
☐ Sistema de detección de patrones
☐ Triggers contextuales
☐ Notificaciones cross-channel
☐ Testing con usuarios beta
```

### Semana 9-10: Polish & Launch

```
☐ UI/UX refinamiento
☐ Performance optimization
☐ Documentación
☐ Lanzamiento a Premium users
```

---

## 💰 COSTOS ADICIONALES

### Infraestructura

```
PostgreSQL:
- Opción A: En mismo VPS (gratis, limitado)
- Opción B: Managed DB (DO/AWS ~$15-25/mes)

Redis:
- En mismo VPS (gratis)

Total adicional: $0-25 USD/mes
```

### Desarrollo

```
Opción A: Tú mismo
- Tiempo: 10 semanas @ 15 hrs/semana = 150 hrs
- Costo: Tu tiempo (¿$0?)

Opción B: Outsource
- Estimado: $5,000-8,000 USD
- Timeline: 8-10 semanas
```

---

## 🎯 MÉTRICAS DE ÉXITO

### Adopción

```
☐ 50%+ usuarios Premium usan widget web
☐ 30%+ conversaciones cruzan canales
☐ 20%+ acciones proactivas bien recibidas
```

### Engagement

```
☐ 2X mensajes por usuario vs WhatsApp solo
☐ 40%+ reducción en preguntas repetidas
☐ 4.5+ rating de experiencia omnipresente
```

### Negocio

```
☐ 15%+ aumento en retención Premium
☐ 25%+ aumento en upgrades (gratuito → Premium)
☐ NPS 50+ de usuarios omnipresentes
```

---

## 📚 PRÓXIMOS DOCUMENTOS

- [10_Phase3_Web_Widget.md](./10_Phase3_Web_Widget.md) - Detalles del widget
- [11_Phase3_Event_System.md](./11_Phase3_Event_System.md) - Sistema de eventos
- [12_Phase3_Pairing_System.md](./12_Phase3_Pairing_System.md) - Pairing detallado

---

**Implementar en:** Mes 7-12 (después de validar MVP)

**Prerrequisito:** 30+ suscriptores Premium generando ingresos constantes
