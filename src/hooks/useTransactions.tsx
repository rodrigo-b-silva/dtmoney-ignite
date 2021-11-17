import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransationsProviderProps {
  children: ReactNode
}

interface TransactionContenxtData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransationsContext = createContext<TransactionContenxtData>(
  {} as TransactionContenxtData
);

export function TransationsProvider({ children }: TransationsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', transactionInput);
    const { transaction } = response.data;
    
    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return (
    <TransationsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransationsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransationsContext);
  return context;
}