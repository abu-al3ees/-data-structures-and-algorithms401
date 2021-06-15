### code :
function QuickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index
    if(len > 1) {
      index = partition(arr, left, right)
      if(left < index - 1) {
        QuickSort(arr, left, index - 1)
      } 
      if(index < right) {
        QuickSort(arr, index, right)
      }
    }
    return arr
  }
  function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,                 
        j = right                 
  
    while(i <= j) {
      while(arr[i] < pivot) {
        i++
      }
      while(arr[j] > pivot) {
        j--
      }
      if(i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]] 
        i++
        j--
      }
    }
    return i
  }

----------------------
### algorithem:

 - Select an element of the array. This element is generally called the pivot. Most often this element is either the first or the last element in the array.
- Then, rearrange the elements of the array so that all the elements to the left of the pivot are smaller than the pivot and all the elements to the right are greater than the pivot. The step is called partitioning. If an element is equal to the pivot, it doesn't matter on which side it goes.
- Repeat this process individually for the left and right side of the pivot, until the array is sorted.

### trace

![trace](../asset/quickTrace.png)


--------------------

![white bored](../asset/quickSort.png)