let contador = 0;
let historico = [];
let limparHistoricoTimeout;

const taxasConversao = {
    USD: 5,
    EUR: 4
};

function converterMoeda(valorDot, moeda) {
    return valorDot * taxasConversao[moeda];
}

function iniciarTemporizadorLimpeza() {
    if (limparHistoricoTimeout) {
        clearTimeout(limparHistoricoTimeout);
    }
    limparHistoricoTimeout = setTimeout(() => {
        historico = [];
        document.getElementById('historico').innerHTML = '<p>Histórico limpo automaticamente após 1 minuto.</p>';
    }, 60000);
}

document.getElementById('calcular').addEventListener('click', function () {
    const valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
    const complexidade = document.getElementById('complexidade').value;
    const moedaConversao = document.getElementById('moeda').value;
    let precoGas;

    if (valorTransacao > 0) {
        contador++;
        switch (complexidade) {
            case 'baixa':
                precoGas = 0.01;
                break;
            case 'media':
                precoGas = 0.05;
                break;
            case 'alta':
                precoGas = 0.1;
                break;
        }

        const custoGas = valorTransacao * precoGas;
        const custoGasConvertido = converterMoeda(custoGas, moedaConversao);

        document.getElementById('resultado').innerHTML = `
            <p>Valor da Transação: ${valorTransacao} DOT</p>
            <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
            <p>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</p>
            <p>Custo Estimado do Gas em ${moedaConversao}: ${custoGasConvertido.toFixed(2)} ${moedaConversao}</p>
        `;

        historico.push({
            valorTransacao,
            complexidade,
            custoGas,
            moedaConversao,
            custoGasConvertido
        });

        let historicoHtml = '<ul>';
        historico.forEach((transacao, index) => {
            historicoHtml += `<li>Transação ${index + 1}: ${transacao.valorTransacao} DOT, Complexidade: ${transacao.complexidade}, Custo: ${transacao.custoGas.toFixed(2)} DOT (${transacao.custoGasConvertido.toFixed(2)} ${transacao.moedaConversao})</li>`;
        });
        historicoHtml += '</ul>';
        document.getElementById('historico').innerHTML = historicoHtml;

        document.getElementById('contador-transacoes').textContent = `Transações Simuladas: ${contador}`;

        iniciarTemporizadorLimpeza();
    } else {
        document.getElementById('resultado').innerHTML = '<p style="color:red;">ERRO! VALOR MENOR QUE ZERO.</p>';
    }
});
