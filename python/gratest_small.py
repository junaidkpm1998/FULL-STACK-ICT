max=0

a=[25,78,90,100,1009]
for i in a:
	if i>max:
		max=i
		min=max		
print max
for i in a:
	if i<=min:
		min=i
print min
