empty={}
empty["junaid"]="kpmm"
empty["jiffry"]="hassan"
print empty
print empty.keys()
print empty.values()

print empty.items()
for i in empty:
	print i,empty[i]
if empty.has_key("hi"):
	print"yes"
else:
	print"no"
del empty["junaid"]#to dlt a value totally
print empty
