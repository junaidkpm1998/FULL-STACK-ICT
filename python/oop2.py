class person:
    def __init__(self,name,age,cgpa):
    
        self.name=name
        self.age=age
        self.cgpa=cgpa
student=person("arjun",22,8.9)
print(student.name,student.cgpa,student.age)
name=input(input("eneter ur name"))
age=input("enter ur age")
cgpa=input("enter ur cgpa")
student1=person(name,age,cpa)
print(student1.name,student1.age,student1.cgpa)
