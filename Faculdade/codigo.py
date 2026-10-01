import pyautogui
import time

# Configuração

pyautogui.PAUSE = 0.5
link = "https://portal.unigrande.edu.br/"
senha = "UG26152200"

# Ação

pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")
pyautogui.write(link)
pyautogui.press("enter")

time.sleep(3)

pyautogui.click(x=566, y=552)
pyautogui.write(senha)
pyautogui.press("tab")
pyautogui.press("tab")
pyautogui.write(senha)
pyautogui.press("tab")
pyautogui.press("tab")
pyautogui.press("tab")
pyautogui.press("enter")
pyautogui.press("enter")

time.sleep(2)

