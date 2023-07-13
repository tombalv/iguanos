// Banką sudaro puslapis, kuriame yra:

// Sąskaitų sąrašas su Vardu, Pavarde, Sąskaitos suma, Mygtuku “ištrinti”,  laukeliu vertei įrašyti ir dviem mygtukais tam laukeliui: “pridėti lėšų” ir “nuskaičiuoti lėšas”;

// Naujos sąskaitos sukūrimas (įvedami duomenys: vardas ir pavardė.

// Paaiškinimai ir reikalavimai.

// Nauja sąskaita sukuriama su pradine 0 suma, o lėšos pridedamos/nuimamos sąraše įvedant sumą ir spaudžiant atitinkamą mygtuką.
// Sąskaitos, kurioje yra lėšų ištrinti neturi būti galima.
// Sąskaitoje likusi suma negali būti minusinė.
// Sąskaitas saraše rūšiuoti pagal savininko pavardę.
// Duomenų bazė - LocalStorage.

import React, { useState, useEffect } from "react";
import "./Bank.scss";

const Bank = () => {
  const [accounts, setAccounts] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const storedAccounts = localStorage.getItem("accounts");
    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  const addAccount = () => {
    const newAccount = {
      id: Date.now(),
      firstName,
      lastName,
      amount: 0,
    };
    setAccounts([...accounts, newAccount]);
    setFirstName("");
    setLastName("");
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
        setAccounts(updatedAccounts);
      }
    } else {
      alert("Sąskaitos negalima ištrinti, kol joje yra lėšų.");
    }
  };

  const depositFunds = (id) => {
    const updatedAccounts = accounts.map((account) => {
      if (account.id === id) {
        const amount = parseFloat(
          prompt("Įveskite sumą, kurią norite pridėti:")
        );
        if (!isNaN(amount) && amount > 0) {
          return {
            ...account,
            amount: account.amount + amount,
          };
        }
      }
      return account;
    });
    setAccounts(updatedAccounts);
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
      setAccounts(updatedAccounts);
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
          onChange={(e) => setFirstName(e.target.value)}
          className="inputField"
        />
        <input
          type="text"
          placeholder="Pavardė"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
