fileobj=open("login.txt","w")
fileobj.write("ictak\n")
fileobj.close()
fileobj=open("login.txt","a")
fileobj.write("1234")
username=raw_input("enetr user name")
password=raw_input("enter ur password")
fileobj=open("login.txt",'r')
uname=fileobj.readline()
passw=fileobj.readline()
print(username)
uname==uname.rstrip("\n")
if username==uname and password==passw:
    print("succesfull")
else:
    print("incorrect username or password")