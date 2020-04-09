function Calcular() {
    var hora = document.getElementById("hora")
    if (!hora.value) {
        alert(`Revise os dados e tente novamente`)
        hora.focus()
    } else {
        var res1 = document.getElementById("res1")
        var porcentagem = Number(document.getElementById("porcentagem").value)
        if (porcentagem < 0) {
            alert(`Porcentagem inválida`)
        } else {
            var f0 = hora.value.split(":")
            var por100 = Number(porcentagem) / 100
            var porcentagemtotal_em_minuto = ((Number(f0[0]) * 60) + Number(f0[1])) * por100
            mindaporcentagem = porcentagemtotal_em_minuto
            horadaporcentagem = 0

            while (mindaporcentagem >= 60) {
                mindaporcentagem -= 60
                horadaporcentagem += 1
            }
            horafinal = (Number(f0[0]) + horadaporcentagem)
            minutofinal = (Number(f0[1]) + mindaporcentagem)
            if (minutofinal > 60) {
                minutofinal -= 60
                horafinal += 1
            }
            var mindaporcentagem2 = parseInt(mindaporcentagem)
            var horadaporcentagem2 = parseInt(horadaporcentagem)
            var minutofinal2 = parseInt(minutofinal)
            var horafinal2 = parseInt(horafinal)
            if (Number(horadaporcentagem2) < 10) {
                horadaporcentagem2 = "0" + String(horadaporcentagem2)
            }
            if (Number(mindaporcentagem2) < 10) {
                mindaporcentagem2 = "0" + String(mindaporcentagem2)
            }
            if (Number(horafinal2) < 10) {
                horafinal2 = "0" + String(horafinal2)
            }
            if (Number(minutofinal2) < 10) {
                minutofinal2 = "0" + String(minutofinal2)
            }

            res1.innerHTML = (`<p><input type="button" value="Zerar" id="Zerar" onclick="Zerar()"></p>`)
            res1.innerHTML += (`${porcentagem}% de ${String(f0[0])}:${String(f0[1])} equivale a ${(horadaporcentagem2)}:${(mindaporcentagem2)}. <p><b>TOTAL ${(horafinal2)}:${(minutofinal2)}</b></p>`)
            //res1.innerHTML += (`<p><input type="button" value="Adicionar ${(horafinal2)}:${(minutofinal2)} ao meu banco de horas" id="Banco" onclick="Banco()"></p>`)

        }
    }
}


function Zerar() {
    var hora = document.getElementById("hora")
    var res1 = document.getElementById("res1")
    var porcentagem = Number(document.getElementById("porcentagem").value)
    hora.value = ""
    hora.focus()

}
