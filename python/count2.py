a=raw_input("enter string").upper()
no_vowels =0
no_costants =0
no_question_mark=a.count("?")
no_words=a.count(" ")+1

for i in "AEIOU":
	no_vowels += a.count(i)
for i in "QWRTYPSDFGHJKLZXCVBNM":
	no_costants += a.count(i)
print no_vowels 
print no_costants 
print no_question_mark
print no_words
