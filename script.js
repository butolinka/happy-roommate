const button=document.querySelector('.btn');
button.addEventListener('click', toCalculate);

function toCalculate(e){
    e.preventDefault();
    const rent=Number(document.querySelector('.rent').value);
    const electricity=Number(document.querySelector('.electricity').value);
    const internet=Number(document.querySelector('.internet').value);
    const people=Number(document.querySelector('.people').value);
    const filter=Number(document.querySelector('.filter').value);
    if(rent===" "|| electricity ===" " || internet ===" " || people ===" " || people < 1)
    Swal.fire({
        imageUrl: 'https://images.unsplash.com/photo-1509205477838-a534e43a849f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHNhZCUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        imageHeight: 250,
        title: 'Ooops...',
        text: 'You need to add an information',
        imageAlt: 'A tall image'
    })

    let rentPerPerson=rent/people;
    rentPerPerson=rentPerPerson.toFixed(2);
    
    let utilityPerPerson=(internet + electricity + filter)/people;
    utilityPerPerson=utilityPerPerson.toFixed(2);

    let totalPerPerson=(rent/people) + ((internet + electricity + filter)/people);
    totalPerPerson=totalPerPerson.toFixed(2);

    document.querySelector('.devidedRent').textContent=rentPerPerson
    document.querySelector('.devidedUtility').textContent=utilityPerPerson
    document.querySelector('.devidedTotal').textContent=totalPerPerson
}

const buttonFilter=document.querySelector('.filters');
buttonFilter.addEventListener('click', showOption);
function showOption(e){
    e.preventDefault();
    const filter=document.querySelector('.filter');
    filter.style.display='block';
}

buttonFilter.addEventListener('dblclick', hideFilter);
function hideFilter(e){
    e.preventDefault();
    const hiding=document.querySelector('.filter');
    hiding.style.display='none';
}