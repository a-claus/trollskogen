import random

def rita():
	print(rutor[0], rutor[1], rutor[2])
	print(rutor[3], rutor[4], rutor[5])
	print(rutor[6], rutor[7], rutor[8])



rutor = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
rita()

fylldarutor = 0
while fylldarutor < 10:
	nuffra = input("skriv en ledig siffra mellan 0-8")
	rutor[int(nuffra)] = "X"
	fylldarutor = fylldarutor + 1

	rita()
	if fylldarutor == 10:
		break
	klar = "false"
	while klar == "false":
		datornsVal = random.randint(0, 8)
		if (rutor[datornsVal] == "X"):
			klar = "false"
			#datornsVal = datornsVal + 1
		elif (rutor[datornsVal] == "O"):
			klar = "false"
		else:
			rutor[datornsVal] = "O"
			klar = true
			fylldarutor = fylldarutor + 1
			rita()
			
	#datornsVal = datornsVal + 1

