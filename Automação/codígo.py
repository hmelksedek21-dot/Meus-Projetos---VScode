import pyautogui
import time

# pyautogui.click() -> clica
# pyautogui.write() -> escrever um texto
# pyautogui.press() -> aperta uma tecla
# pyautogui.hotkey() -> aperta um atalho
# Configuração
pyautogui.PAUSE = 0.5
link = "https://dlp.hashtagtreinamentos.com/python/intensivao/login"

# Entrar no sistema
pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")
# Fazer o login
pyautogui.write(link)
pyautogui.press("enter")
# Pausa para o site carregar
time.sleep(3)

# Fazer o cadastro
pyautogui.click(x=742, y=333)
pyautogui.write("pythonimpressionador@gmail.com")
pyautogui.press("tab")
pyautogui.write("sua senha muito muito muito dificilima")
pyautogui.press("tab")
pyautogui.press("enter")
pyautogui.press("enter")
# Pausa para o site carregar
time.sleep(4)

# Exporta o arquivo CSV
# pip install pandas openpyxl
import pandas

tabela = pandas.read_csv("produtos.csv")

for linha in tabela.index:
    # Testar a primeira linha do arquivo CSV
    # Codígo do Produto
    pyautogui.click(x=773, y=216)
    codigo = str(tabela.loc[linha, "codigo"])
    pyautogui.write(codigo)
    pyautogui.press("tab")
    # Marca do Produto
    marca = str(tabela.loc[linha, "marca"])
    pyautogui.write(marca)
    pyautogui.press("tab")
    # Tipo do Produto
    tipo = str(tabela.loc[linha, "tipo"])
    pyautogui.write(tipo)
    pyautogui.press("tab")
    # Categoria do Produto
    categoria = str(tabela.loc[linha, "categoria"])
    pyautogui.write(categoria)
    pyautogui.press("tab")
    # Preço unitária do Produto
    preco = str(tabela.loc[linha, "preco_unitario"])
    pyautogui.write(preco)
    pyautogui.press("tab")
    # Custo do Produto
    custo = str(tabela.loc[linha, "custo"])
    pyautogui.write(custo)
    pyautogui.press("tab")
    # OBS
    obs = str(tabela.loc[linha, "obs"])
    if obs != "NaN":    
        pyautogui.write(obs)
    pyautogui.press("tab")

    pyautogui.press("enter")

    # Voltar no início
    pyautogui.scroll(5000)
