
// Adicionar um item na lista

const addItem = document.querySelector(".add-btn")

addItem.addEventListener("click", (e) => {
e.preventDefault()

console.log("Formulário enviado!")

})


// Remover um item da lista de compras

const removeItem = document.querySelectorAll("delete-btn")


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.preventDefault(); // Evita o comportamento padrão do botão, se necessário
        
        const item = e.target.closest("li"); // Encontra o elemento pai mais próximo (exemplo: um <li>)
        if (item) {
            item.remove(); // Remove o item da lista
            console.log("Item removido!");
        }
    }
});
