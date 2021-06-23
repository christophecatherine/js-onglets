(function() {
    /*
    LORSQUE l'on clique sur un onglet
        ON RETIRE la class active de l'onglet actif


        J'ajoute la class active sur le contenu correspondant 
    */

    var afficherOnglet = function(a, animations) {
        if (animations === undefined) {
            animations = true
        }

        var li = a.parentNode
        var div = thais.parentNode.parentNode.parentNode
        var activeTab = div.querySelector('.tab-content.active') // contenu actif
        var aAfficher = div.querySelector(a.getAttribute('href')) // contenu a afficher


        if (li.classList.contains('active')) {
            return false
        }

        // ON retire la class active sur le contenu actif
        div.querySelector('.tabs .active').classList.remove('active')

        // j'ajoute la class active à l'onglet actuel
        li.classList.add('active')

        // ON RETIRE la class active de l'onglet actif
        // div.querySelector('.tab-content.active').classList.remove('active')

        // J'ajoute la class active sur le contenu correspondant 
        // div.querySelector(a.getAttribute('href')).classList.add('active')

        if (animations) {
            activeTab.classList.add('fade')
            activeTab.classList.remove('in');
            var transitionend = function() {
                this.classList.remove('fade')
                aAfficher.classList.add('active')
                aAfficher.classList.add('fade')
                aAfficher.offsetWidth
                aAfficher.classList.add('in')
                activeTab.removeEvenlistener('transitionend', transitionend)
            }
            activeTab.addEventListener('transitionend', transitionend)
            activeTab.addEventListener('webkitTransitionend', transitionend)
        } else {
            aAfficher.classList.add('active')
            activeTab.classList.remove('active')
        }


        // On ajoute la class fade sur l'element actif
        // A la fin de l'animation
        //      On retire la class fade et active 
        //      On ajoute la class active et fade à l'element
        //      On ajoute la class in
    }

    var tabs = document.querySelectorAll('.tabs a')
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function(e) {
            afficherOnglet(this)
        })
    }

    /*
    JE RECUPERE le hash
    AJOUTER LA CLASS active sur le lien href="hash"
    AFFICHER / Masquer les contenus
    */


    var hashChange = function(e) {
        var hash = window.location.hash
        var a = document.querySelector('a[href="' + hash + '"]')
        if (a !== nul && !a.classList.contains('active')) {
            afficherOnglet(a, e !== undefined)
        }
    }
    window.addEventListener('hashchange', hashChange)
    hashChange()



})()