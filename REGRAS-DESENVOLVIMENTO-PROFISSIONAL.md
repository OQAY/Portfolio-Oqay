# 📘 MANUAL DO DESENVOLVEDOR PROFISSIONAL
## Como Codar do Jeito Certo - Regras que TODO Dev DEVE Seguir

---

## 🎯 REGRA ZERO: MINDSET PROFISSIONAL

**VOCÊ É UM PROFISSIONAL, NÃO UM AMADOR**

Antes de escrever uma única linha de código, entenda:
- Seu código será lido 100x mais do que escrito
- Alguém vai dar manutenção (provavelmente você em 6 meses)
- Bugs em produção custam 100x mais que prevenir agora
- Código ruim = dívida técnica = trabalho dobrado depois

---

## 📋 AS 10 REGRAS SAGRADAS DO CÓDIGO

### REGRA 1: NUNCA COMECE CODANDO
```bash
# ERRADO - Junior faz isso:
> abre VSCode
> começa a escrever código

# CERTO - Profissional faz isso:
> entende o problema
> planeja a solução
> verifica se já existe algo pronto
> ENTÃO começa a codar
```

### REGRA 2: GIT É SEU SALVAVIDAS
```bash
# SEMPRE antes de começar:
git pull origin main
git checkout -b feature/nova-funcionalidade

# NUNCA faça isso:
git add .
git commit -m "mudanças"  # ❌ PÉSSIMO

# SEMPRE faça isso:
git add src/components/Header.tsx
git commit -m "feat: add responsive navigation menu"  # ✅ ESPECÍFICO
```

### REGRA 3: TESTE ANTES, DURANTE E DEPOIS
```javascript
// ❌ AMADOR - escreve tudo e testa no final
function calcularDesconto(preco, cupom) {
  return preco - cupom;
}

// ✅ PROFISSIONAL - escreve o teste primeiro
describe('calcularDesconto', () => {
  test('deve aplicar desconto corretamente', () => {
    expect(calcularDesconto(100, 10)).toBe(90);
  });
  
  test('deve tratar valores negativos', () => {
    expect(calcularDesconto(100, -10)).toBe(100);
  });
});

// DEPOIS escreve a função que passa nos testes
function calcularDesconto(preco, cupom) {
  if (cupom < 0) return preco;
  return preco - cupom;
}
```

### REGRA 4: NOMES QUE FAZEM SENTIDO
```javascript
// ❌ HORRÍVEL - ninguém entende
function calc(x, y, z) {
  return x * y - z;
}

// ✅ PROFISSIONAL - auto-explicativo
function calcularPrecoFinal(precoBase, quantidade, desconto) {
  return precoBase * quantidade - desconto;
}

// REGRA: Se precisa comentário para explicar o nome, o nome está ruim
```

### REGRA 5: ERROS SÃO SEUS AMIGOS
```javascript
// ❌ AMADOR - ignora erros
try {
  fazAlgumaCoisa();
} catch(e) {
  // ignora
}

// ✅ PROFISSIONAL - trata erros adequadamente
try {
  await salvarUsuario(dados);
} catch (error) {
  logger.error('Falha ao salvar usuário', { error, dados });
  
  if (error.code === 'DUPLICATE_EMAIL') {
    throw new ValidationError('Email já cadastrado');
  }
  
  throw new SystemError('Erro ao processar cadastro');
}
```

### REGRA 6: CONFIGURAÇÃO É SAGRADA
```javascript
// ❌ AMADOR - hardcode everywhere
const apiUrl = "https://api.producao.com/v1";
const timeout = 5000;

// ✅ PROFISSIONAL - tudo configurável
// config/index.js
export const config = {
  api: {
    url: process.env.API_URL || 'http://localhost:3000',
    timeout: parseInt(process.env.API_TIMEOUT) || 5000,
    retries: parseInt(process.env.API_RETRIES) || 3
  }
};

// .env.example (SEMPRE crie isso)
API_URL=http://localhost:3000
API_TIMEOUT=5000
API_RETRIES=3
```

### REGRA 7: PERFORMANCE IMPORTA
```javascript
// ❌ AMADOR - não pensa em performance
users.filter(u => u.active).map(u => u.name).forEach(name => {
  console.log(name);
});

// ✅ PROFISSIONAL - otimiza desde o início
// Usa uma única iteração
users.forEach(user => {
  if (user.active) {
    console.log(user.name);
  }
});

// Para operações pesadas
const processarEmLote = async (items, batchSize = 100) => {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map(processar));
  }
};
```

### REGRA 8: SEGURANÇA NÃO É OPCIONAL
```javascript
// ❌ AMADOR - SQL Injection waiting to happen
const query = `SELECT * FROM users WHERE email = '${email}'`;

// ✅ PROFISSIONAL - sempre usa prepared statements
const query = 'SELECT * FROM users WHERE email = ?';
db.query(query, [email]);

// NUNCA comite isso:
const API_KEY = "sk-1234567890abcdef";  // ❌

// SEMPRE use variáveis de ambiente:
const API_KEY = process.env.API_KEY;    // ✅
```

### REGRA 9: DOCUMENTAÇÃO É PARTE DO CÓDIGO
```javascript
/**
 * Calcula o score de risco do usuário baseado em múltiplos fatores
 * @param {Object} user - Dados do usuário
 * @param {number} user.creditScore - Score de crédito (300-850)
 * @param {number} user.monthlyIncome - Renda mensal em reais
 * @param {Array} user.previousLoans - Histórico de empréstimos
 * @returns {Object} { score: number, risk: 'low'|'medium'|'high' }
 * @throws {ValidationError} Se dados obrigatórios estiverem faltando
 */
function calculateRiskScore(user) {
  // Implementação aqui
}
```

### REGRA 10: AUTOMAÇÃO É OBRIGATÓRIA
```json
// package.json - MÍNIMO que todo projeto deve ter
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "jest",
    "lint": "eslint . --fix",
    "format": "prettier --write .",
    "pre-commit": "lint-staged",
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.{js,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "jest --bail --findRelatedTests"
    ]
  }
}
```

---

## 🔄 WORKFLOW COMPLETO - PASSO A PASSO

<function_calls>
<invoke name="TodoWrite">
<parameter name="todos">[{"content": "Criar prompt/guia de regras de codificação para aluno", "status": "completed", "activeForm": "Criando guia de regras de codificação"}, {"content": "Estruturar fluxo de trabalho passo a passo", "status": "in_progress", "activeForm": "Estruturando fluxo de trabalho"}, {"content": "Adicionar exemplos práticos de código", "status": "pending", "activeForm": "Adicionando exemplos práticos"}, {"content": "Criar checklist de verificação", "status": "pending", "activeForm": "Criando checklist de verificação"}][text](about:blank#blocked)[text](about:blank#blocked)