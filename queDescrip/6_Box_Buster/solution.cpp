#include <bits/stdc++.h>
using namespace std;

const int Inf = 1000000000;
int T[1001][1001][11]; // Cache for the function t(i,j,l) below

// Returns the number of crackers required in the worst case, given an
// optimal strategy, for determining the maximum number of crackers that
// the mailboxes can withstand, if we know that this number is between
// i and j (inclusively), and we have l functional mailboxes.
int t(int i, int j, int l) {
  if (i==j) return 0; // We know the number!
  if (i>j) exit(1); // Error!
  if (l == 0) return Inf; // Impossible! Out of mailboxes!

  if (T[i][j][l] == -1) {
    int v = Inf;
    for (int n=i+1; n<=j; n++) // Test with n crackers?
      v = min(v, n+max(t(i,n-1,l-1), t(n,j,l)));
    T[i][j][l] = v;
  }

  return T[i][j][l];
}

int main() {
  memset(T, -1, sizeof(T)); // Fill cache with -1

  int nCases;
  cin >> nCases;

  for (int n=0; n<nCases; n++) {
    int k, m;
    cin >> k >> m;
    cout << t(0, m, k) << endl;
  }
}
