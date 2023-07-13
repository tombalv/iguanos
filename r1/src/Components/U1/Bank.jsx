// Banką sudaro puslapis, kuriame yra:

// Sąskaitų sąrašas su Vardu, Pavarde, Sąskaitos suma, Mygtuku “ištrinti”,  laukeliu vertei įrašyti ir dviem mygtukais tam laukeliui: “pridėti lėšų” ir “nuskaičiuoti lėšas”;

// Naujos sąskaitos sukūrimas (įvedami duomenys: vardas ir pavardė.

// Paaiškinimai ir reikalavimai.

// Nauja sąskaita sukuriama su pradine 0 suma, o lėšos pridedamos/nuimamos sąraše įvedant sumą ir spaudžiant atitinkamą mygtuką.
// Sąskaitos, kurioje yra lėšų ištrinti neturi būti galima.
// Sąskaitoje likusi suma negali būti minusinė.
// Sąskaitas saraše rūšiuoti pagal savininko pavardę.
// Duomenų bazė - LocalStorage.

import React, { useReducer, useEffect } from "react";
import "./Bank.scss";
import { debounce } from "lodash";

const initialState = {
  accounts: JSON.parse(localStorage.getItem("accounts")) || [],
  firstName: "",
  lastName: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setFirstName":
      return { ...state, firstName: action.payload };
    case "setLastName":
      return { ...state, lastName: action.payload };
    case "addAccount":
      return {
        ...state,
        firstName: "",
        lastName: "",
        accounts: [
          ...state.accounts,
          {
            id: Date.now(),
            firstName: state.firstName,
            lastName: state.lastName,
            amount: 0,
          },
        ],
      };
    case "updateAccounts":
      return { ...state, accounts: action.payload };
    default:
      return state;
  }
};

const Bank = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { accounts, firstName, lastName } = state;

  useEffect(() => {
    const debouncedSave = debounce(
      () => localStorage.setItem("accounts", JSON.stringify(accounts)),
      1000
    );
    debouncedSave();
    return debouncedSave.cancel;
  }, [accounts]);

  const addAccount = () => {
    dispatch({ type: "addAccount" });
  };

  const deleteAccount = (id, amount) => {
    if (amount < 0) {
      alert("Sąskaitos negalima ištrinti, kol joje yra minusinė suma.");
    } else if (amount === 0) {
      const confirmDelete = window.confirm(
        "Ar tikrai norite ištrinti sąskaitą?"
      );
      if (confirmDelete) {
        const updatedAccounts = accounts.filter((account) => account.id !== id);
        dispatch({ type: "updateAccounts", payload: updatedAccounts });
      }
    } else {
      alert("Sąskaitos negalima ištrinti, kol joje yra lėšų.");
    }
  };

  const depositFunds = (id) => {
    const amount = parseFloat(prompt("Įveskite sumą, kurią norite pridėti:"));
    if (!isNaN(amount) && amount > 0) {
      const updatedAccounts = accounts.map((account) => {
        if (account.id === id) {
          return {
            ...account,
            amount: account.amount + amount,
          };
        }
        return account;
      });
      dispatch({ type: "updateAccounts", payload: updatedAccounts });
    }
  };

  const withdrawFunds = (id, currentAmount) => {
    const amount = parseFloat(
      prompt("Įveskite sumą, kurią norite nuskaičiuoti:")
    );
    if (!isNaN(amount) && amount > 0) {
      const updatedAmount = currentAmount - amount;
      const updatedAccounts = accounts.map((account) => {
        if (account.id === id) {
          return {
            ...account,
            amount: updatedAmount,
          };
        }
        return account;
      });
      dispatch({ type: "updateAccounts", payload: updatedAccounts });
    }
  };

  return (
    <div className="container">
      <h1>Sąskaitų sąrašas</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Vardas"
          value={firstName}
          onChange={(e) =>
            dispatch({ type: "setFirstName", payload: e.target.value })
          }
          className="inputField"
        />
        <input
          type="text"
          placeholder="Pavardė"
          value={lastName}
          onChange={(e) =>
            dispatch({ type: "setLastName", payload: e.target.value })
          }
          className="inputField"
        />
        <button onClick={addAccount} className="button">
          Sukurti sąskaitą
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Vardas</th>
            <th>Pavardė</th>
            <th className="sumColumn">Sąskaitos suma</th>
            <th className="actionsColumn">Veiksmai</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              <td>{account.amount}</td>
              <td>
                <button
                  onClick={() => depositFunds(account.id)}
                  className="button"
                >
                  Pridėti lėšų
                </button>
                <button
                  onClick={() => withdrawFunds(account.id, account.amount)}
                  className="button orange"
                >
                  Nuskaičiuoti lėšas
                </button>
                <button
                  onClick={() => deleteAccount(account.id, account.amount)}
                  className="button red"
                >
                  Ištrinti
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bank;
