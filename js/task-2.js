function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else {
    return message.slice(0, maxLength) + `...`;
  }
}
console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// length — узнаёт длину строки.
// slice() — извлекает часть строки.
// slice(0, maxLength) — берёт первые maxLength символов.
// slice() не изменяет исходную строку.

// 0 — начинаем с первого символа.
// maxLength — сколько символов берём с начала строки.

// message.length <= maxLength — проверяем, нужно ли обрезать строку.
// return message — возвращаем строку без изменений, если она достаточно короткая.
// message.slice(0, maxLength) — берём первые maxLength символов, включая пробелы.
// + "..." — добавляем три точки к обрезанной строке.
