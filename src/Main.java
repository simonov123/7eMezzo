
import java.io.File;

import org.eclipse.swt.browser.Browser;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;
public class Main {

	public static void main(String[] args) {
		Display display=new Display();
		Shell shell=new Shell(display);
		  shell.setText("7 e mezzo!");
	        shell.setLayout(new FillLayout());
	        shell.setSize(800,600);
		Browser browser=new Browser(shell, 1);
		browser.setUrl("file:///" + new File("7mz.html").getAbsolutePath());
		shell.open();
		 while (!shell.isDisposed()) {
	            if (!display.readAndDispatch()) {
	                display.sleep();
	            }}
		
		// TODO Auto-generated method stub

	}

}
