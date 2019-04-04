import pickle

n=int(input("enter the limit"))
f1=open('test.data','w')
for i in range(n):
    r=int(input("enter the content"))
    pickle.dump(r,f1)
f1.close()
f1=open('test.data','r')
for i in range(n):
    print(pickle.load())
