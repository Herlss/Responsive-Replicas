x = 1
y = 1
z = 0
for i in range(0,10):
    z = x + y
    print(z)
    y = x
    x = z
    # 0 1 1 2 3 5