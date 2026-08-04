export interface Account {
  id: string;
  name: string;
  number: string;
  balance: number;
}

export function buildCheckingAccounts(balance: number): Account[] {
  return [{ id: "checking-8909", name: "Checking", number: "8909", balance }];
}

export const SAVINGS_ACCOUNTS: Account[] = [];

export const LOAN_ACCOUNTS: Account[] = [];

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

export function buildCheckingActivity(balance: number): ActivityRow[] {
  return [
    { type: "balance", date: "Jul 3, 2026", balanceAfter: balance },
    { type: "transaction", date: "07/03/2026", description: "Incoming Wire Transfer - Funds Held", amount: balance },
  ];
}
