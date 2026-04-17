const users = [
    {id: 1, name: 'Иванов'},
    {id: 2, name: 'Петров'},
    {id: 3, name: 'Сидоров'}];


function fillTable(data){
    const thead = document.getElementById('thead');
    const tr = document.createElement('tr');
    const headers = Object.keys(data[0])///берем ключи и индекс
    headers.forEach(header =>{
        const td = document.createElement('td')
        tr.appendChild(td)
        thead.appendChild(tr)
        td.textContent = header
    });
    thead.appendChild(tr);
}

fillTable(users)

