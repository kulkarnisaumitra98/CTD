#include<bits/stdc++.h>
using namespace std;
#define ios ios_base::sync_with_stdio(false);cin.tie(0);cout.tie(0);

int main(int argc, char const *argv[])
{
	ios;
	
	int t;
	cin>>t;
	
	while(t--)
	{

	    long long n,k,elapse;
	    cin>>n>>k>>elapse;

	    vector<long long>s;
	    long long max_size=0;

		int arr[n];
	
		for(int i=0;i<n;i++)
			cin>>arr[i];
		
	    for(int i=0;i<n;i++)
	    {
		  int time=arr[i];

		  s.push_back(time);

		  vector<long long>::iterator up = upper_bound(s.begin(),s.end(),time-elapse);
		  long long val=s.size()-(up - s.begin());

		  max_size = max(max_size, val);
	    }

	    cout<<ceil(double(max_size)/double(k))<<"\n";
    }

    return 0;
}
