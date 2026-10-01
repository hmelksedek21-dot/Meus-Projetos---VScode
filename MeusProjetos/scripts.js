const listaPromocoes = [
      {
        id: 1,
        nome: "Clone de Hambúrguer Artesanal",
        desc: "Grátis um refrigerante de 1 litro",
        preco: 21.99,
        tag: "Imperdível"
      },
      {
        id: 2,
        nome: "Tri-Clone Opção (01)",
        desc: "Sem refrigerante",
        preco: 73.00,
        tag: "O Rei do Tri-Clone"
      },
      {
        id: 3,
        nome: "Tri-Clone Opção (02)",
        desc: "Acompanha refrigerante de 1 litro",
        preco: 75.00,
        tag: "O Rei do Tri-Clone"
      }
    ];

    const listaCombos = [
      {
        id: 401,
        nome: "TAMANHO FAMÍLIA",
        desc: "2 Hambúrgueres + 2 Cachorros-Quentes + Grátis 1 Refrigerante de 1L",
        preco: 29.99,
        tag: "Super Combo"
      }
    ];

    const listaPizzas = [
      {
        id: 101,
        nome: "Só a Massa",
        desc: "Massa tradicional assada",
        preco: 9.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 102,
        nome: "Calabresa",
        desc: "Massa tradicional, molho, mussarela e calabresa",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 103,
        nome: "Calabresa c/ Barbecue",
        desc: "Calabresa fatiada com molho barbecue especial",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 104,
        nome: "Calabresa c/ Cheddar",
        desc: "Calabresa fatiada coberta com cheddar",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 105,
        nome: "Calabresa c/ Catupiry",
        desc: "Calabresa fatiada com cobertura de catupiry",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 106,
        nome: "Presunto",
        desc: "Massa, molho, mussarela e presunto fatiado",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 107,
        nome: "3 Queijos",
        desc: "Mussarela, requeijão e queijo ralado especial",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 108,
        nome: "Calabresa c/ Presunto",
        desc: "Mistura clássica de calabresa e presunto",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 109,
        nome: "Calabresa c/ 3 Queijos",
        desc: "Calabresa acompanhada da nossa mistura de 3 queijos",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 110,
        nome: "Presunto c/ 3 Queijos",
        desc: "Presunto fatiado acompanhado de 3 queijos",
        preco: 25.00,
        cat: "tradicional",
        tag: "Tradicional"
      },
      {
        id: 201,
        nome: "Milho Prime",
        desc: "Milho selecionado com queijo especial",
        preco: 49.99,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 202,
        nome: "Milho com Bacon Prime",
        desc: "Milho selecionado e bacon crocante",
        preco: 54.99,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 203,
        nome: "Portuguesa Prime",
        desc: "Presunto, ovos, cebola, ervilha, azeitona e mussarela",
        preco: 35.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 204,
        nome: "Mussarela Prime",
        desc: "Camada generosa de mussarela especial e orégano",
        preco: 32.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 205,
        nome: "Calabresa Prime",
        desc: "Calabresa selecionada acebolada com queijo prime",
        preco: 40.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 206,
        nome: "Calabresa c/ Barbecue Prime",
        desc: "Calabresa prime com molho barbecue especial",
        preco: 40.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 207,
        nome: "Calabresa c/ Cheddar Original",
        desc: "Calabresa especial com creme cheddar original",
        preco: 42.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 208,
        nome: "Calabresa c/ Catupiry Original",
        desc: "Calabresa especial com Catupiry original",
        preco: 42.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 209,
        nome: "Frango Prime",
        desc: "Frango desfiado temperado com queijo prime",
        preco: 39.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 210,
        nome: "Frango c/ Catupiry Original",
        desc: "Frango desfiado com o verdadeiro Catupiry",
        preco: 42.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 211,
        nome: "Frango c/ Cream Cheese",
        desc: "Frango desfiado suculento com cream cheese",
        preco: 42.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 212,
        nome: "Frango c/ Cheddar Original",
        desc: "Frango desfiado com cheddar de alta qualidade",
        preco: 42.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 213,
        nome: "Lombo Cheese Prime",
        desc: "Lombo canadense fatiado com cream cheese",
        preco: 47.00,
        cat: "prime",
        tag: "Prime"
      },
      {
        id: 301,
        nome: "Borda Pãozinho de Calabresa c/ Queijo",
        desc: "Borda estilo pãozinho recheada com calabresa e queijo",
        preco: 18.00,
        cat: "borda",
        tag: "Borda Pãozinho"
      },
      {
        id: 302,
        nome: "Borda Pãozinho de Charque c/ Catupiry",
        desc: "Borda estilo pãozinho recheada com charque e catupiry",
        preco: 20.00,
        cat: "borda",
        tag: "Borda Pãozinho"
      },
      {
        id: 303,
        nome: "Borda Pãozinho de Frango c/ Catupiry",
        desc: "Borda estilo pãozinho recheada com frango e catupiry",
        preco: 18.00,
        cat: "borda",
        tag: "Borda Pãozinho"
      },
      {
        id: 304,
        nome: "Borda Pãozinho de Frango c/ Cheddar",
        desc: "Borda estilo pãozinho recheada com frango e cheddar",
        preco: 18.00,
        cat: "borda",
        tag: "Borda Pãozinho"
      },
      {
        id: 305,
        nome: "Borda Vulcão de Cheddar",
        desc: "Borda formato vulcão com piscina de cheddar",
        preco: 7.00,
        cat: "borda",
        tag: "Borda Vulcão"
      },
      {
        id: 306,
        nome: "Borda Vulcão de Catupiry",
        desc: "Borda formato vulcão com piscina de catupiry",
        preco: 7.00,
        cat: "borda",
        tag: "Borda Vulcão"
      },
      {
        id: 307,
        nome: "Borda de Chocolate Vulcão",
        desc: "Borda vulcão recheada com chocolate cremoso",
        preco: 25.00,
        cat: "borda",
        tag: "Borda Vulcão"
      },
      {
        id: 308,
        nome: "Borda Caracol de Cheddar",
        desc: "Borda em formato caracol recheada com cheddar",
        preco: 7.00,
        cat: "borda",
        tag: "Borda"
      },
      {
        id: 309,
        nome: "Borda Caracol de Catupiry",
        desc: "Borda em formato caracol recheada com catupiry",
        preco: 7.00,
        cat: "borda",
        tag: "Borda"
      },
      {
        id: 310,
        nome: "Borda de Chocolate Caracol",
        desc: "Borda caracol recheada com chocolate",
        preco: 15.00,
        cat: "borda",
        tag: "Borda"
      },
      {
        id: 311,
        nome: "Borda de Cheddar",
        desc: "Recheio de cheddar tradicional",
        preco: 5.00,
        cat: "borda",
        tag: "Borda"
      },
      {
        id: 312,
        nome: "Borda de Catupiry",
        desc: "Recheio de catupiry tradicional",
        preco: 5.00,
        cat: "borda",
        tag: "Borda"
      },
      {
        id: 313,
        nome: "Borda de Cream Cheese",
        desc: "Recheio generoso de cream cheese",
        preco: 15.00,
        cat: "borda",
        tag: "Borda"
      },
      {
        id: 314,
        nome: "Borda Mista",
        desc: "Mistura de sabores para a sua borda",
        preco: 8.00,
        cat: "borda",
        tag: "Borda"
      },
      {
        id: 315,
        nome: "Borda de Chocolate",
        desc: "Borda recheada com chocolate",
        preco: 13.00,
        cat: "borda",
        tag: "Borda"
      }
    ];

    const listaBebidas = [
      {
        id: 1,
        nome: "SUCO DA FRUTA DE 500ML",
        desc: "Suco natural de 500ml",
        preco: 8.99
      },
      {
        id: 2,
        nome: "Refri Indaia 200 ml",
        desc: "Refrigerante de 200ml",
        preco: 3.50
      },
      {
        id: 3,
        nome: "Água Mineral",
        desc: "Água mineral 500 ml",
        preco: 2.00
      },
      {
        id: 4,
        nome: "Água Mineral com Gás",
        desc: "Água mineral com gás 500 ml",
        preco: 4.00
      },
      {
        id: 5,
        nome: "Coca Cola de 1 Litro",
        desc: "Refrigerante de 1 litro",
        preco: 11.00
      },
      {
        id: 6,
        nome: "Coca Cola Zero de 1 Litro",
        desc: "Refrigerante de 1 litro",
        preco: 11.00
      },
      {
        id: 7,
        nome: "Antárctica de 1 Litro",
        desc: "Refrigerante de 1 litro",
        preco: 9.00
      },
      {
        id: 8,
        nome: "Pepsi de 1 Litro",
        desc: "Refrigerante de 1 litro",
        preco: 9.00
      },
      {
        id: 9,
        nome: "Refri Indaia de 1 Litro",
        desc: "Refrigerante de 1 litro",
        preco: 6.00
      },
      {
        id: 10,
        nome: "Coca-Cola de 2 Litros",
        desc: "Refrigerante de 2 litros",
        preco: 16.00
      },
      {
        id: 11,
        nome: "Coca Cola Zero de 2 Litros",
        desc: "Refrigerante de 2 litros",
        preco: 16.00
      },
      {
        id: 12,
        nome: "Sukita Laranja de 2 Litros",
        desc: "Refrigerante de 2 litros",
        preco: 10.00
      },
      {
        id: 13,
        nome: "Sukita Uva 2 Litros",
        desc: "Refrigerante de 2 litros",
        preco: 10.00
      },
      {
        id: 14,
        nome: "Refri Indaia de 2 Litros",
        desc: "Refrigerante de 2 litros",
        preco: 8.00
      },
      {
        id: 15,
        nome: "Refri Cola Indaia 2 Litros",
        desc: "Refrigerante de 2 litros",
        preco: 8.00
      }
    ];

    // ============ VARIÁVEIS GLOBAIS ============
    let carrinho = [];

    // ============ FUNÇÕES UTILITÁRIAS ============
    function formatarMoeda(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
    }

    function rolarParaCardapio() {
      const section = document.getElementById("cardapio-section");
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }

    // ============ RENDERIZAÇÃO DOS CARDS ============
    function atualizarConteudoCardapio(titulo, lista, tipoBadge) {
      const container = document.getElementById("items-container");
      const sectionTitle = document.getElementById("section-title");

      container.classList.add("fade-out");

      setTimeout(() => {
        sectionTitle.innerText = titulo;
        container.innerHTML = "";

        if (lista.length === 0) {
          container.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; color: #999;">Nenhum item disponível</p>';
          container.classList.remove("fade-out");
          return;
        }

        lista.forEach((item) => {
          const card = document.createElement("article");
          card.className = `item-card ${tipoBadge}-card`;
          card.setAttribute("role", "region");

          const itemJson = JSON.stringify(item).replace(/'/g, "&apos;");

          card.innerHTML = `
            ${item.tag ? `<div class="card-badge ${item.cat ? item.cat + "-badge" : ""}">${item.tag}</div>` : ""}
            <div class="item-info">
              <h3>${item.nome}</h3>
              <p>${item.desc}</p>
            </div>
            <div class="item-bottom">
              <span class="item-price" aria-label="Preço">${formatarMoeda(item.preco)}</span>
              <button class="btn-add" onclick='adicionarAoCarrinho(${itemJson}, "${titulo}")' aria-label="Adicionar ${item.nome} ao carrinho">
                + Adicionar
              </button>
            </div>
          `;
          container.appendChild(card);
        });

        container.classList.remove("fade-out");
      }, 200);
    }

    // ============ CARRINHO ============
    function adicionarAoCarrinho(item, categoria) {
      const itemExistente = carrinho.find((produto) => produto.id === item.id && produto.categoria === categoria);

      if (itemExistente) {
        itemExistente.quantidade += 1;
      } else {
        carrinho.push({ ...item, categoria, quantidade: 1 });
      }

      atualizarCarrinho();
      abrirCarrinho();
    }

    function atualizarCarrinho() {
      const container = document.getElementById("cart-items");
      const quantidadeTotal = carrinho.reduce((total, item) => total + item.quantidade, 0);
      const valorTotal = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);

      document.getElementById("cart-count").innerText = quantidadeTotal;
      document.getElementById("cart-total").innerText = formatarMoeda(valorTotal);

      if (carrinho.length === 0) {
        container.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
        return;
      }

      container.innerHTML = carrinho.map((item, indice) => `
        <div class="cart-item">
          <div class="cart-item-info">
            <strong>${item.nome}</strong>
            <span>${formatarMoeda(item.preco)} cada</span>
          </div>
          <div class="cart-item-actions">
            <button type="button" onclick="alterarItemCarrinho(${indice}, -1)" aria-label="Diminuir quantidade de ${item.nome}">−</button>
            <span>${item.quantidade}</span>
            <button type="button" onclick="alterarItemCarrinho(${indice}, 1)" aria-label="Aumentar quantidade de ${item.nome}">+</button>
            <button class="cart-remove" type="button" onclick="removerDoCarrinho(${indice})" aria-label="Remover ${item.nome}">✕</button>
          </div>
        </div>
      `).join("");
    }

    function alterarItemCarrinho(indice, delta) {
      carrinho[indice].quantidade += delta;
      if (carrinho[indice].quantidade <= 0) carrinho.splice(indice, 1);
      atualizarCarrinho();
    }

    function removerDoCarrinho(indice) {
      carrinho.splice(indice, 1);
      atualizarCarrinho();
    }

    function abrirCarrinho() {
      document.getElementById("cart-panel").classList.add("active");
      document.getElementById("cart-panel").setAttribute("aria-hidden", "false");
      document.getElementById("cart-toggle").setAttribute("aria-expanded", "true");
    }

    function fecharCarrinho() {
      document.getElementById("cart-panel").classList.remove("active");
      document.getElementById("cart-panel").setAttribute("aria-hidden", "true");
      document.getElementById("cart-toggle").setAttribute("aria-expanded", "false");
    }

    function alternarCarrinho() {
      document.getElementById("cart-panel").classList.contains("active") ? fecharCarrinho() : abrirCarrinho();
    }

    function enviarCarrinhoWhatsApp() {
      if (carrinho.length === 0) return;

      const itens = carrinho.map((item) =>
        `• ${item.quantidade}x ${item.nome} - ${formatarMoeda(item.preco * item.quantidade)}`
      ).join("\n");
      const valorTotal = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
      const texto = `Olá Ninito Pizza! 👋\n\nGostaria de fazer este pedido:\n\n${itens}\n\nTotal: ${formatarMoeda(valorTotal)}\n\nAguardo retorno!`;

      window.open(`https://wa.me/5581985696148?text=${encodeURIComponent(texto)}`, "_blank");
    }

    // ============ SELEÇÃO DE CATEGORIAS ============
    function selecionarCategoria(tipo, evt) {
      if (evt) evt.preventDefault();

      // Atualizar botões de categoria
      const btns = document.querySelectorAll(".cat-btn");
      btns.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      const btnAtivo = document.getElementById(`btn-${tipo}`);
      if (btnAtivo) {
        btnAtivo.classList.add("active");
        btnAtivo.setAttribute("aria-selected", "true");
      }

      // Atualizar links de navegação
      const navLinks = document.querySelectorAll(".nav-menu a");
      navLinks.forEach((link) => link.classList.remove("active"));

      const navAtivo = document.getElementById(`nav-${tipo}`);
      if (navAtivo) navAtivo.classList.add("active");

      const subBar = document.getElementById("subcategories-pizzas");

      // Alternar conteúdo
      if (tipo === "promocoes") {
        subBar.style.display = "none";
        atualizarConteudoCardapio(
          "🔥 PROMOÇÕES IMPERDÍVEIS",
          listaPromocoes,
          "promo"
        );
      } else if (tipo === "pizzas") {
        subBar.style.display = "flex";
        filtrarPizzas("todas", null);
      } else if (tipo === "combos") {
        subBar.style.display = "none";
        atualizarConteudoCardapio(
          "🍔 COMBOS ESPECIAIS",
          listaCombos,
          "combo"
        );
      } else if (tipo === "bebidas") {
        subBar.style.display = "none";
        atualizarConteudoCardapio(
          "🥤 CARTA DE BEBIDAS",
          listaBebidas,
          "drink"
        );
      }

      rolarParaCardapio();
    }

    // ============ FILTRO DE SUBCATEGORIAS DE PIZZAS ============
    function filtrarPizzas(subcat, evt) {
      if (evt) evt.preventDefault();

      const subBtns = document.querySelectorAll(".sub-btn");
      subBtns.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      if (evt && evt.target) {
        evt.target.classList.add("active");
        evt.target.setAttribute("aria-selected", "true");
      } else {
        subBtns[0].classList.add("active");
        subBtns[0].setAttribute("aria-selected", "true");
      }

      let itensExibidos = listaPizzas;
      if (subcat !== "todas") {
        itensExibidos = listaPizzas.filter((p) => p.cat === subcat);
      }

      atualizarConteudoCardapio(
        "🍕 PIZZAS E BORDAS RECHEADAS",
        itensExibidos,
        "pizza"
      );
    }

    function mudarAba(aba, evt) {
      selecionarCategoria(aba, evt);
    }

    // ============ INICIALIZAÇÃO ============
    document.addEventListener("DOMContentLoaded", () => {
      atualizarConteudoCardapio(
        "🔥 PROMOÇÕES IMPERDÍVEIS",
        listaPromocoes,
        "promo"
      );
      atualizarCarrinho();
    });