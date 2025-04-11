public class zSortyArray {
public static void main(String[] args) {
int[] numArray = {5, 3, 8, 1, 2};
sorty(numArray);
for(int i = 0; i <= numArray.length; i++) {
System.out.print(numArray[i] + " ");
}
}
public static void sorty(int[] arr) {
for(int i = 0; i < arr.length; i++) {
for(int j = 0; j < arr.length; j++) {
if(arr[i] < arr[j]) {
int temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}

}
}
