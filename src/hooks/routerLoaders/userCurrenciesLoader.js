import { getUserDataById } from "../usersDataAPI/apiHandlers";
import exchangeCurrApi from "../exchangeCurrencyAPI/exchangeCurrApi";

export async function getUserCurrenciesLoader({ params }) {
  try {
    const user = await getUserDataById(params.id);
    const userCurrency = user.userData.currency;
    const allCurrencies = ["USD", "EUR", "GBP", "CHF", "PLN"];
    const currenciesAvailableToExchange = allCurrencies.filter(
      (curr) => curr !== userCurrency
    );

    const exchangeRatePromises = currenciesAvailableToExchange.map(
      async (currency) => {
        try {
          const rate = await exchangeCurrApi(userCurrency, currency);
          return { rate, currency };
        } catch (err) {
          throw new Error("Failed currency exchange");
        }
      }
    );

    const currenciesRatesArray = await Promise.all(exchangeRatePromises);

    return { user, currenciesRatesArray };
  } catch {
    throw Error("Failed currency exchange");
  }
}
