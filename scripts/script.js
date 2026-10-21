document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    const campoData = document.getElementById('data');
    if (campoData) {
        const hoje = new Date().toISOString().split('T')[0];
        campoData.min = hoje;
    }

    const campoTelefone = document.getElementById('telefone');
    if (campoTelefone) {
        campoTelefone.addEventListener('input', (evento) => {
            let valor = evento.target.value.replace(/\D/g, '');

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            if (valor.length > 6) {
                valor = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
            } else if (valor.length > 2) {
                valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
            }

            evento.target.value = valor;
        });
    }

    const formReserva = document.getElementById('form-reserva');
    const modalFeedback = document.getElementById('modal-feedback');
    const btnFecharModal = document.getElementById('btn-fechar-modal');

    if (formReserva) {
        formReserva.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const sobrenome = document.getElementById('sobrenome').value.trim();
            const lugares = document.getElementById('lugares').value;
            const telefone = document.getElementById('telefone').value.trim();
            const email = document.getElementById('email').value.trim();
            const data = document.getElementById('data').value;
            const observacoes = document.getElementById('observacoes').value.trim();

            if (!nome || !sobrenome || !lugares || !telefone || !email || !data) {
                mostrarAlerta('Por favor, preencha todos os campos obrigatórios.', 'erro');
                return;
            }

            const nomeSeguro = sanitizarTexto(nome);
            const lugaresSeguros = sanitizarTexto(lugares);
            const dataFormatada = formatarDataBR(data);

            const mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
            if (mensagemConfirmacao) {
                mensagemConfirmacao.textContent =
                    `Obrigado, ${nomeSeguro}! Sua reserva para ${lugaresSeguros} pessoa(s) em ${dataFormatada} foi solicitada com sucesso. Entraremos em contato via WhatsApp/Telefone para confirmar os detalhes.`;
            }

            if (modalFeedback) {
                modalFeedback.classList.add('visivel');
            } else {
                alert(`Reserva solicitada com sucesso para ${nomeSeguro}!`);
            }

            formReserva.reset();
        });
    }

    if (btnFecharModal && modalFeedback) {
        btnFecharModal.addEventListener('click', () => {
            modalFeedback.classList.remove('visivel');
        });

        modalFeedback.addEventListener('click', (e) => {
            if (e.target === modalFeedback) {
                modalFeedback.classList.remove('visivel');
            }
        });
    }

    const btnMenuMobile = document.getElementById('btn-menu-mobile');
    const menuLinks = document.querySelector('.lista-navegacao');

    if (btnMenuMobile && menuLinks) {
        btnMenuMobile.addEventListener('click', () => {
            menuLinks.classList.toggle('aberto');
            const estaAberto = menuLinks.classList.contains('aberto');
            btnMenuMobile.setAttribute('aria-expanded', estaAberto);
        });

        const links = menuLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuLinks.classList.remove('aberto');
            });
        });
    }
});

function sanitizarTexto(texto) {
    if (typeof texto !== 'string') return '';
    return texto
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

function formatarDataBR(dataISO) {
    if (!dataISO) return '';
    const partes = dataISO.split('-');
    if (partes.length === 3) {
        return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }
    return dataISO;
}

function mostrarAlerta(mensagem) {
    alert(mensagem);
}
