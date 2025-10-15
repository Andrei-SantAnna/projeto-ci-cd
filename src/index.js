function soma(a, b) {
  // Console.log in production code - code smell
  console.log('Calculando soma...');
  return a + b;
}

function soma2(a, b) {
  return a + b;
}

// 🚨 Code Smell proposital para detecção pelo CodeQL:
function executarCodigoInseguro(input) {
  // Esta função usa 'eval()', considerada perigosa.
  return eval(input); // <- CodeQL vai alertar aqui
}

module.exports = { soma2, executarCodigoInseguro };

// Function with duplicated code
function subtracao(a, b) {
  console.log('Calculando subtracao...');
  return a - b;
}

// Function with too many parameters and complex logic - code smell
function calculoComplexo(x, y, z, w, v, u) {
  if (x > 0) {
    if (y > 0) {
      if (z > 0) {
        if (w > 0) {
          return x + y + z + w;
        }
      }
    }
  }
  return 0;
}

// Function with magic numbers - code smell
function calcularDesconto(valor) {
  if (valor > 100) {
    return valor * 0.15; // Magic number
  } else if (valor > 50) {
    return valor * 0.1; // Magic number
  }
  return valor * 0.05; // Magic number
}

// Empty catch block - bug risk
function funcaoComErro() {
  try {
    throw new Error('Erro proposital');
  } catch (e) {
    // Empty catch block - SonarQube will flag this
  }
}

// Commented out code - code smell
// function oldFunction() {
//   return "This should be removed";
// }

// Function with == instead of === - code smell
function comparacaoFraca(a, b) {
  if (a == b) {
    // Should use ===
    return true;
  }
  return false;
}

module.exports = soma;
