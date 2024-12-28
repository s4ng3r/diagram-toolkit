// Función para convertir un valor hexadecimal a su valor RGB
function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

// Función para calcular la luminancia relativa de un color RGB
function luminance(r: number, g: number, b: number): number {
  const a = [r / 255, g / 255, b / 255].map((val) =>
      val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

// Función para calcular la relación de contraste entre dos colores
function getContrastRatio(hex1: string, hex2: string): number {
  const { r: r1, g: g1, b: b1 } = hexToRgb(hex1);
  const { r: r2, g: g2, b: b2 } = hexToRgb(hex2);

  const luminance1 = luminance(r1, g1, b1);
  const luminance2 = luminance(r2, g2, b2);

  // Calculamos el contraste
  const [light, dark] = luminance1 > luminance2 ? [luminance1, luminance2] : [luminance2, luminance1];
  const contrastRatio = (light + 0.05) / (dark + 0.05);
  
  return contrastRatio;
}

// Función para verificar el cumplimiento de las WCAG
function checkWCAG(hex1: string, hex2: string) {
  const contrastRatio = getContrastRatio(hex1, hex2);
  
  console.log(`El contraste entre ${hex1} y ${hex2} es: ${contrastRatio.toFixed(2)}`);

  // Nivel AA
  const aaNormal = 4.5;
  const aaLarge = 3.0;

  // Nivel AAA
  const aaaNormal = 7.0;
  const aaaLarge = 4.5;

  // Verificación para texto normal
  if (contrastRatio >= aaNormal) {
      console.log('Cumple con el nivel AA para texto normal.');
  } else {
      console.log('No cumple con el nivel AA para texto normal.');
  }

  // Verificación para texto grande
  if (contrastRatio >= aaLarge) {
      console.log('Cumple con el nivel AA para texto grande.');
  } else {
      console.log('No cumple con el nivel AA para texto grande.');
  }

  // Verificación para nivel AAA
  if (contrastRatio >= aaaNormal) {
      console.log('Cumple con el nivel AAA para texto normal.');
  } else {
      console.log('No cumple con el nivel AAA para texto normal.');
  }

  // Verificación para nivel AAA para texto grande
  if (contrastRatio >= aaaLarge) {
      console.log('Cumple con el nivel AAA para texto grande.');
  } else {
      console.log('No cumple con el nivel AAA para texto grande.');
  }
}

// Prueba con los valores hex proporcionados
checkWCAG('#6366f1', '#ffffff');
