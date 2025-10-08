# Projeto CI/CD

Projeto simples para demonstrar CI/CD com GitHub Actions e Jest.

## Estrutura do Projeto

```
projeto-ci-cd/
├── src/
│   └── index.js
├── tests/
│   └── index.test.js
├── package.json
└── .github/
    └── workflows/
        └── ci.yml
```

## Código

### src/index.js
```javascript
function soma(a, b) {
  return a + b;
}

module.exports = soma;
```

### tests/index.test.js
```javascript
const soma = require('../src/index');

test('soma dois números corretamente', () => {
  expect(soma(2, 3)).toBe(5);
});
```

## Como executar

```bash
# Instalar dependências
npm install

# Executar testes
npm test
```

## CI/CD

O projeto utiliza GitHub Actions para executar os testes automaticamente em cada push ou pull request para a branch main.
