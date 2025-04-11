public class SortArray {
    public static void main(String[] args) {
        int[] numArray = {5, 3, 8, 1, 2};
        sortArray(numArray);
        for (int i = 0; i < numArray.length; i++) {
            System.out.print(numArray[i] + " ");
        }
    }

    public static void sortArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
