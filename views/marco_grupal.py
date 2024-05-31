import matplotlib.pyplot as plt
import numpy as np

# Definir los valores de r
r = np.linspace(0, 6, 100)

# Curvas IS y LM
IS = 2000 - 500 * r
LM = 500 + 20 * r

# Graficar las curvas
plt.figure(figsize=(10, 6))
plt.plot(r, IS, label='Curva IS', color='blue')
plt.plot(r, LM, label='Curva LM', color='red')
plt.xlabel('Tasa de interés (r)')
plt.ylabel('Renta (Y)')
plt.title('Modelo IS-LM')
plt.legend()
plt.grid(True)

# Marcar el punto de equilibrio
plt.scatter(2.88, 560, color='green', zorder=5)
plt.text(2.88, 560, 'Equilibrio (2.88, 560)', fontsize=12, verticalalignment='bottom')

plt.show()



