// C program for generating a
// random number in a given range.
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include<bits/stdc++.h>
using namespace std;
// Generates and prints 'count' random
// numbers in range [lower, upper].
int printRandoms(int lower, int upper)
{
  int num = (rand() % (upper - lower + 1)) + lower;
  return num;
}

// Driver code
int main()
{

    // Use current time as
    // seed for random generator
    srand(time(0));

    int t=100;

    cout<<t<<"\n";

    while(t--)
    {
      int k=printRandoms(1, 100);
      int m=printRandoms(1, 100);
      cout<<k<<" "<<m<<"\n";

    }


    return 0;
}
