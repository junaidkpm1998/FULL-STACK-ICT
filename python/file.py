f=open('tst data','w')#f=open('tst data','a')
f.write("1,2,3")
f.close
f=open('tst data','r')
print(f.read())