export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template() {
        return `
        <table class="table table-hover table-borderes">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th> 
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        `;
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
}
