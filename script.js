function toggleMode() {
    const html = document.documentElement //document é todo o documento. elementos neste documento(html)

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else{
    //     html.classList.add('light')
    // }

    // MODO SIMPLIFICADO
    html.classList.toggle('light')
    
    
    /* ENTENDENDO
    
A FUNÇÃO TOGGLE MODE FOI ADD AO ELEMENTO DE CLICK NO SWITCH DO HTML
O SWITCH É O BOTÃO CRIADO PARA ALTERNAR ENTRE DARK E LIGHT MODE
VARIÁVEL CONST HTML ESTÁ RECEBENDO DOCUMENT ELEMENT QUE É O DOCUMENTO HTML EM SI
A CONDICIONAL IF
SE NO HTML NA LISTA DE CLASSE CONTÉM LIGHT (CLASSE ATRIBUÍDA NO HTML)
ENTÃO LIGHT SERÁ REMOVIDO, TRAZENDO O DARK MODE, POIS A CLASSE DEIXARÁ DE EXISTIR
ELSE
SE NÃO EXISTIR, ADICIONE A CLASSE, TRAZENDO ASSIM O MODO LIGHT NOVAMENTE 

MODO SIMPLIFICADO
EM HTML. LISTA DE CLASSES. TOGGLE(ALTERNA) A CLASSE LIGHT, COLOCANDO-A E TIRANDO-A

*/

    // PEGAR A TAG IMAGE (img)
    const img = document.querySelector('#profile img')
    // SUBSTITUIR A IMAGEM
    if(html.classList.contains('light')) {
        // SE LIGHT MODE MANTÉM A IMAGEM
        img.setAttribute('src', '.assets/avatar-dark.png')
    } else {
        // SENÃO, SUBSTITUIR A IMAGEM
        img.setAttribute('src', '.assets/avatar-light.png')
    }

}


/* no documento. pesquisa pelo seletor (#profile img) que é o caminho html e css onde se encontra a imagem ´
SE CONTÉM LIGHT
EM IMG SETAR/MODIFICAR O ATRIBUTO SRC (SEARCH QUE É O CAMINHO DA FOTO)
*/