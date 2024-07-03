
# Binary Search

Binary search is a search algorithm used to find the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty. The search interval is halved by comparing the target element with the middle value of the search space.

![[mid-in-binary-search-768.webp]]

### Code(c++)

```c++
#include <iostream>


int binarySearch(int arr[], int low, int high, int elementToFind){
    
    while(low <= high){
        int mid = low + (high - low) / 2;

        if(arr[mid] == elementToFind){
            return mid;
        }else if(arr[mid] > elementToFind){
            high = mid;
        }else{
            low = mid;
        }
    }  

    return -1;
}



int main(){
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    int result = binarySearch(arr, 0, 10, 1);

    (result == -1)
    ? std::cout << "Element not found" << std::endl
    : std::cout << "Element is found at index " << result << std::endl;

    return 0; 
}
```

### Time complexity

| Best Case | Worst Case   | Average Case |
| --------- | ------------ | ------------ |
| ==O(1)==  | ==O(log N)== | ==O(log N)== |

