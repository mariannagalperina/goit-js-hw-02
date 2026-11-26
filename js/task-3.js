function checkForSpam(message) {
  message = message.toLowerCase();
  if (message.includes("spam") || message.includes("sale")) {
    //"текст"в ковычках всегда!!.includes() проверяет одну искомую строку за раз
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// const — создаём переменную ( которой не будем присваивать другое значение )
// = — сохраняем в переменную результат.
// .toLowerCase() — приводим весь текст к нижнему регистру (делаем все буквы строчными)
// .includes() — ищем нужный текст
// || — объединяем две проверки через ИЛИ
// if (...) — проверяем условие
// return — возвращаем результат и завершаем функцию
// message	Параметр функции, содержащий текст

// кавычки нужны для строковых литералов, например "spam".
// А имена переменных и параметры, например message, пишутся без кавычек.
