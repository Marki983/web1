const lista = document.getElementById ('frases');
const lista_respuestas = document.getElementById ('respuestas');


Sortable.create(lista, {
    group: {
        name: "lista-frases"
    },
    animation: 200,
    easing: "cubic-bezier(0.7, 0, 0.84, 0)"
});

Sortable.create(lista_respuestas, {
    group: {
        name: "lista-frases"
    },
    animation: 200,
    easing: "cubic-bezier(0.7, 0, 0.84, 0)",
    store:{
        set: function(sortable){
            const orden = sortable.toArray();
            console.log(orden);
        }
    },
});
