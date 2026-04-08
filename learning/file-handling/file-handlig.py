f = open("./hello.txt", "r")
print(f.read())

with open("hello.txt", "w") as f:
  f.write("Byee from ak")

with open("./hello.txt") as f: 
    print(f.read())
