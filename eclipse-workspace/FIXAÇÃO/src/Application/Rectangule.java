package Application;

public class Rectangule {
	public double Width;
	public double Height;
	
	public double area() {
		return Width*Height;
	}
	public double perimeter() {
		return (Width*2) + (Height*2);		
	}
	public double diagonal() {
		return Math.sqrt(Width*Width + Height*Height);
	}
}


