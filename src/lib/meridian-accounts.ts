export interface Account {
  id: string;
  name: string;
  number: string;
  balance: number;
}

export const CHECKING_ACCOUNTS: Account[] = [
  { id: "checking-8909", name: "Checking", number: "8909", balance: 306.24 },
];

export const SAVINGS_ACCOUNTS: Account[] = [
  { id: "savings-3904", name: "Savings", number: "3904", balance: 1299.71 },
];

export const LOAN_ACCOUNTS: Account[] = [
  { id: "mortgage-2704", name: "Mortgage", number: "2704", balance: 190321.91 },
];

export const CASH_AND_SAVINGS_TOTAL = [...CHECKING_ACCOUNTS, ...SAVINGS_ACCOUNTS].reduce(
  (sum, account) => sum + account.balance,
  0,
);

export const CARDS_AND_LOANS_TOTAL = LOAN_ACCOUNTS.reduce((sum, account) => sum + account.balance, 0);

export const INVESTMENTS_TOTAL = 0;

export function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export interface ActivityRow {
  type: "balance" | "transaction";
  date: string;
  description?: string;
  amount?: number;
  balanceAfter?: number;
}

export const CHECKING_ACTIVITY: ActivityRow[] = [
  { type: "balance", date: "Mar 19, 2026", balanceAfter: 306.24 },
  { type: "transaction", date: "03/19/2026", description: "Alex Rivera PAYMENT ID MT central Zelle payment to", amount: -8.0 },
  { type: "balance", date: "Nov 30, 2025", balanceAfter: 314.24 },
  { type: "transaction", date: "11/30/2025", description: "Direct Deposit - Payroll", amount: 1250.0 },
  { type: "transaction", date: "11/28/2025", description: "Grocery Mart Purchase", amount: -64.32 },
];
