/*
Kontrola dosupnosti
Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

*/
const orderBtn = document.querySelector("#button-order");

orderBtn.addEventListener("click", () => {
  orderBtn.textContent = `Objednáno`;
});

/*
Zařiďte úpravou přímo v HTML souboru, aby při načtení stránky tlačítko obsahovalo zprávu Kontroluji dostupnost…

Přidejte do stránky zpoždění pomocí funkce setTimeout, která zařídí, že 8 vteřin po načtení stránky se zpráva na tlačítku změní na Objednat.
*/

setTimeout(() => {
  orderBtn.textContent = "Objednat";

  /*
Tlačítka mají speciální HTML atribut s názvem disabled. Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. Přidejte tento atribut do HTML kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné/neklikatelné. Až po uplynutí časovače jej zpřístupněte nastavením vlastnosti disabled v JavaScriptu na false.
 */
  orderBtn.disabled = false;
}, 8000);
