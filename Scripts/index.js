import { dictionary } from "./dictionary.js";


document.getElementById('btnTranslate').addEventListener('click', function () {
    const word = document.getElementById('wordTranslate').value.trim(); // asegura que una palabra ingresada con espacios adicionales no cause errores.
    const translateType = document.querySelector('input[name="tipTranslate"]:checked')?.value;
  
    if (!word) {
      document.getElementById('result').textContent = 'Por favor ingrese una palabra.';
      return;
    }
  
    let result = 'Palabra no encontrada';
  
    if (translateType === 'i') {  // Inglés a Español
      result = translate(word, 'english', 'spanish');
    } else if (translateType === 'e') {  // Español a Inglés
      result = translate(word, 'spanish', 'english');
    }
  
    document.getElementById('result').textContent = result;
  });
  //word: La palabra que se desea traducir. from: El idioma de origen (por ejemplo, "english"). to: El idioma de destino (por ejemplo, "spanish").
  function translate(word, from, to) {
    let result = 'Palabra no encontrada';
    for (const category in dictionary.categories) { // recorre cada categoria
      for (const item of dictionary.categories[category]) { // Dentro de cada categoría, se recorren las palabras representadas por objetos (item).
        if (item[from].toLowerCase() === word.toLowerCase()) { // Se compara si la palabra en el idioma de origen (item[from]) coincide con la palabra que se busca (word), ignorando mayúsculas y minúsculas usando .toLowerCase().
          result = item[to]; //Si la palabra coincide, se asigna su traducción en el idioma de destino (item[to]) a la variable result.
          break;
        }
      }
      if (result !== 'Palabra no encontrada') break;
    }
    return result;
  }
