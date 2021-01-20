function iniciaModal (modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e)=> {
        if (e.target.id == modalID || e.target.className == 'fechar')
        modal.classList.remove('mostrar')
    })
}

const btnparc = document.querySelector('#btnparc')
btnparc.addEventListener('click', ()=> iniciaModal('modal-parc')
);

const btnparc2 = document.querySelector('#btnparc2')
btnparc2.addEventListener('click', ()=> iniciaModal('modal-parc')
);