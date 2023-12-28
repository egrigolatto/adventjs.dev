function findNaughtyStep(original, modified) {
    // Convierte las cadenas en arreglos para facilitar la comparación de cada paso
    const originalArray = original.split('');
    const modifiedArray = modified.split('');
  
    // Compara las longitudes de ambas secuencias
    if (originalArray.length === modifiedArray.length) {
      // Si las longitudes son iguales, compara cada paso para encontrar la diferencia
      for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] !== modifiedArray[i]) {
          // Devuelve el primer paso diferente encontrado
          return modifiedArray[i];
        }
      }
    } else if (originalArray.length < modifiedArray.length) {
      // Si la longitud de la secuencia modificada es mayor, encuentra el paso extra
      for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] !== modifiedArray[i]) {
          // Devuelve el primer paso diferente encontrado
          return modifiedArray[i];
        }
      }
      // Si no hay diferencia hasta el final de la secuencia original, devuelve el último paso de la secuencia modificada
      return modifiedArray[modifiedArray.length - 1];
    } else {
      // Si la longitud de la secuencia original es mayor, encuentra el paso eliminado
      for (let i = 0; i < modifiedArray.length; i++) {
        if (originalArray[i] !== modifiedArray[i]) {
          // Devuelve el primer paso diferente encontrado
          return originalArray[i];
        }
      }
      // Si no hay diferencia hasta el final de la secuencia modificada, devuelve el último paso de la secuencia original
      return originalArray[originalArray.length - 1];
    }
  
    // Si no se encuentra ninguna diferencia, devuelve una cadena vacía
    return '';
  }
  
  
  // Ejemplos de uso:
  const original1 = 'abcd';
  const modified1 = 'abcde';
  console.log(findNaughtyStep(original1, modified1)); // 'e'
  
  const original2 = 'stepfor';
  const modified2 = 'stepor';
  console.log(findNaughtyStep(original2, modified2)); // 'f'
  
  const original3 = 'abcde';
  const modified3 = 'abcde';
  console.log(findNaughtyStep(original3, modified3)); // ''
  