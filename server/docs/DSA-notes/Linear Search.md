# Linear Search

Linear Search Algorithm is defined as a sequential search algorithm that starts at one end and goes through each element of a array until the desired element is found, otherwise the search continues till the end of the data set.

![[Linear-Search-algorithm-banner-(1).webp]]

### Code(c++)

[Code Link]()

```c++
#include <iostream>

int main(){
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    int elementToFound = 10;
    int i;
    for(i = 0; i < 10; i ++){
        if(elementToFound == arr[i]){
            std::cout << "Element found at index " << i << std::endl;
            break;
        }
    }

    if(i == 10){
        std::cout << "Element no found" << std::endl;
    }   
}
```

### Time complexity

| Best Case | Wrost Case | Average Case |
| --------- | ---------- | ------------ |
| ==O(1)==  | ==O(N)==   | ==O(N)==     |

