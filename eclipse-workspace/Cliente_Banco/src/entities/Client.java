package entities;

public class Client {
	
	
 	private int account;
 	private String holder;
 	private double balance;
 	
  	public Client(int account, String holder){
 		this.account = account;
 		this.holder = holder;
 	}
 	
 	public Client(int account, String holder, double downPay){
 		this.account = account;
 		this.holder = holder;
 		deposit(downPay);
  	}
 	
 	public int getAccount() {
		return account;
	}

	public String getHolder() {
		return holder;
	}

	public void setHolder(String holder) {
		this.holder = holder;
	}

	public double getBalance() {
		return balance;
	}


	public void deposit(double amount){
 		balance += amount;
 	}
 	
 	public void withdraw(double amount){
 		balance -= amount + 5.0;
 } 
	public String toString(){
		return "Account: "
				+ account
				 +", Holder: "
				 +holder
				 + ", Balance: $"
				 + String.format("%.2f",balance);
	}
}