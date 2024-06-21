let doubts = document.querySelectorAll('.faq')

doubts.forEach(function(faq) {
  faq.addEventListener('click', function() {
    faq.classList.toggle('active')
  })
})

//lendo a função acima: primeiro capturamos todas as classes 'faq' e armazenamos na varia´vel 'doubts'.
//Depois pegamos a variável e aplicamos o método 'forEach', que sgnifica 'pra cada um' . Então pra cada um dos elementos que capturamos, iremos executar uma função que irá receber um argumento 'faq'.
//Para cada 'faq' vamos adicionar o evento 'addEventListener', o qual será ativado através do 'click, que irá chamar uma outra função, que adicionará uma classe ao elemento armazenado na variável. Essa mudança de classe será feita através do método 'toggle' que é um 'liga e desliga'.
//Então, ao clicarmos irá adicionar a classe 'active' e, ao clicarmos novamente, removeremos esta classe. E assim acontecerá a cada clique.