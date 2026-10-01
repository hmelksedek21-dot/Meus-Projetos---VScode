import streamlit as st
from openai import OpenAI

# Inteligência Artificial
modelo = OpenAI(api_key = "AQ.Ab8RN6JMD2W5Wnmfk4hvyiCZ3_LHEcUAgVCZza7et4xkgsRsCQ", 
                base_url = "https://generativelanguage.googleapis.com/v1beta/openai")

# titulo
st.write("# Chatbot de IA")
    
# chat do usuario
mensagem_usuario = st.chat_input("Escreva sua mensagem aqui")

# criar o historico de mensagens
if not "lista_mensagens" in st.session_state:
    st.session_state["lista_mensagens"] = []

# Historico de mensagens
for mensagem in st.session_state["lista_mensagens"]:
    quem_enviou = mensagem["role"]
    responda_IA = mensagem["content"]
    st.chat_message(quem_enviou).write(responda_IA)

# Exibir a mensagem na tela
if mensagem_usuario:
    # Usuario
    st.chat_message("user").write(mensagem_usuario)
    mensagem1 = {"role": "user", "content": mensagem_usuario}
    st.session_state["lista_mensagens"].append(mensagem1)

    # Assistente
    resposta_model = modelo.chat.completions.create(
        messages=st.session_state["lista_mensagens"],
        model="gemini-flash-lite-latest"
    )

    resposta_IA = resposta_model.choices[0].message.content

    st.chat_message("assistant").write(resposta_IA)
    mensagem2 = {"role": "assistant", "content": resposta_IA}
    st.session_state["lista_mensagens"].append(mensagem2)
