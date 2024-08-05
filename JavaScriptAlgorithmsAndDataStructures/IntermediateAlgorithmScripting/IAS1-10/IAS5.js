function spinalCase(str) {
  // Reemplaza espacios y guiones bajos con guiones
  str = str.replace(/[_\s]+/g, '-');

  // Inserta guiones antes de cada mayúscula que sigue a una minúscula
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

  // Convierte la cadena a minúsculas
  return str.toLowerCase();
}

spinalCase('This Is Spinal Tap');
