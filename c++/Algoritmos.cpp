#include <iostream>
using namespace std;

void print(int *array, int length){
	for(int i=0; i<length; i++)
		cout << array[i] << " ";
	cout << endl;
}

void print(int *array, int i, int f){
	for(;i<=f; i++)
		cout << array[i] << " ";
	cout << endl;
}

void swap(int *x, int *y){
	int a = *x;
	*x = *y;
	*y = a;
}

void insertionSort(int *array, int length){
	
	for(int i=0; i<length-1; i++){
		for(int j=i+1; j>0; j--){
			if(array[j] < array[j-1])
				swap(array+j, array+j-1);
		}
	}
	
}

void selectionSort(int *array, int length){
	
	int indexLower;
	for(int i=0; i<length; i++){
		indexLower = i;
		for(int j=i; j<length; j++){
			if(array[j] < array[indexLower]){
				indexLower = j;
			}
		}
		swap(array+i, array+indexLower);
	}
	
}

void intercala(int *array, int i, int q, int f){
	int n = f-i+1;
	int arr[n];
	for(int k=0; k<=q-i; k++){
		arr[k] = array[i+k];
	}
	for(int k=1; k<=f-q; k++){
		arr[n-k] = array[q+k];
	}
	
	int iArr = 0;
	int fArr = n-1;
	for(int k=i; k<=f; k++){
		 if(arr[iArr] <= arr[fArr]){
		 	array[k] = arr[iArr++];
		 }else{
		 	array[k] = arr[fArr--];
		 }
	}
}

void mergeSort(int *array, int indexInit, int indexFinal){
	if(indexInit >= indexFinal)
		return;
	
	int q = indexInit + (indexFinal-indexInit)/2;
	
	mergeSort(array, indexInit, q);
	mergeSort(array, q+1, indexFinal);
	intercala(array, indexInit, q, indexFinal);
}

int partition(int *array, int low, int high){
	int pivot = array[high];
	
	int i = low-1;
	
	for(int j=low; j<high; j++){
		if(array[j] <= pivot){
			swap(array + ++i, array+j);
		}
	}
	
	swap(array + ++i, array+high);
	return i;
}

void quickSort(int *array, int low, int high){
	
	if(high > low || low < 0){
		int p = partition(array, low, high);
		quickSort(array, low, p-1);
		quickSort(array, p+1, high);
	}
	
}



int main(){
	
	int n = 2;
	int array[] = {1, 3};
	print(array, n);
	quickSort(array, 0, n-1);
	print(array, n);
	
	return 0;
}







