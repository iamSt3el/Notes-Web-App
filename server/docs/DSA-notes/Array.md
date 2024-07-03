
# What is an Array ?

- An Array is a collection of items of the same variable type that are stored at contiguous memory locations.
- Each item in a array is indexed starting with 0. 
- Each element in an array is accessed through its index.


![[Pasted image 20240612141238.png]]

## Need of Array Data Structures

Arrays are a fundamental data structures in computer science. They are used in wide variety of applications, including:
- Storing data for processing
- Implementing data structures such as stack and queues
- Representing data in tables and matrices
- Creating dynamic data structures such as linked lists and tress

## Types of arrays: 

**Static Array:** In this type of array, memory is allocated at compile time having a fixed size of it. We cannot alter or update the size of this array.

**Dynamic Array:** In this type of array, memory is allocated at run time but not having a fixed size.

![[Pasted image 20240612142026.png]]

## Key difference between Static and Dynamic Arrays:

| Static Array                                            | Dynamic Array                                                                           |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 1. The memory allocation occurs during compile time.    | 1. The memory allocation occurs during run time.                                        |
| 2. The array size is fixed and cannot be changed.       | 2. The array size is not fixed and can be changed.                                      |
| 3. The location is in Stack Memory Space.               | 3. The location is in Heap Memory Space.                                                |
| 4. The array elements are set to 0 or to empty strings. | 4. The array elements can be destroyed erase statement and the memory is then released. |
| 5. This array can be intialized but not erased,         | 5. This array cannot be read or written after destroying.                               |

## Static array implementation(c++)

[Code Link](https://github.com/iamSt3el/dsa_with_cpp/blob/main/array/basics_of_array/static_array.cpp)

```c++
#include <iostream>

int main(){
    int arr[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    for(int i = 0; i < 10; i++){
        std::cout << arr[i] << " ";
    }

    return 0;
}
```

## Dynamic array implementation(c++)

[Code Link](https://github.com/iamSt3el/dsa_with_cpp/blob/main/array/basics_of_array/dynamic_array.cpp)

```c++
#include <iostream>
#include <stdexcept>
class DynamicArr{
    private:
    int* arr;
    int capacity;
    int size;

    public:
    DynamicArr(){
        capacity = 1;
        size = 0;
        arr = new int[capacity];
    }

    ~DynamicArr(){
        delete[] arr;
    }

    void push_back(int value){
        if(size == capacity){
            capacity *= 2;

            int* newArr = new int[capacity];
            
            for(int i = 0; i < size; i++){
                newArr[i] = arr[i];
            }

            delete[] arr;
            arr = newArr;
        }

        arr[size++] = value;
    }

    int& operator[](int index){
        if(index < 0 || index >= size){
                throw std::out_of_range("Index out of range");
        }
        return arr[index];

    }

    int getSize() const{
        return size;
    }
};

int main(){

    DynamicArr arr;

    arr.push_back(1);
    arr.push_back(2);
    arr.push_back(3);
    arr.push_back(4);

    for(int i = 0; i < arr.getSize(); i++){
        std::cout << arr[i] << std::endl;
    }

    return 0;


}
```

## Complexity

| Actions   | Static Array | Dynamic Array |
| --------- | ------------ | ------------- |
| Access    | ==O(1)==     | ==O(1)==      |
| Search    | ==O(n)==     | ==O(n)==      |
| Insertion | ==N/A==      | ==O(n)==      |
| Appending | ==N/A==      | ==O(1)==      |
| Deletion  | ==N/A==      | ==O(n)==      |

# Array Related Algorithms

## Searching Algorithms

- #### [[Linear Search]]
- #### [[Binary Search]]

## Sorting Algorithms

- #### [[Bubble Sort]]
- #### [[Insertion Sort]]
- #### [[Merge Sort]]
- #### [[Quick Sort]]
- #### [[Selection Sort]]





 













